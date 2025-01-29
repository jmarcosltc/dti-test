import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { uploadPhotoService } from "../../shared/api/service/photo/photoService";
import { S } from "./AddPhoto.styles";

function AddPhoto() {
    const { id } = useParams<{ id: string }>();

    const [albumId] = useState(id);

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const mutation = useMutation<void, Error, FormData>({
        mutationFn: uploadPhotoService,
        onSuccess: () => {
            alert("Photo uploaded successfully!");
            navigate("/");
        },
        onError: (error) => {
            console.error(error);
            alert("Error uploading photo. Please try again.");
        },
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!file || !title || !albumId) {
            alert("Please fill all fields and select a file.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("albumId", albumId);
        formData.append("image", file);

        mutation.mutate(formData);
    };

    return (
        <S.FormContainer>
            <h2>Upload a Photo</h2>
            <S.StyledForm onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder="Photo Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <S.Input type="file" accept="image/*" onChange={handleFileChange} />
                {preview && <S.ImagePreview src={preview} alt="Preview" />}
                <S.SubmitButton type="submit" disabled={mutation.isPending}>
                    {mutation.isPending ? "Uploading..." : "Upload Photo"}
                </S.SubmitButton>
            </S.StyledForm>
        </S.FormContainer>
    );
}

export default AddPhoto;