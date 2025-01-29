import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAlbumService } from "../../shared/api/service/album/albumService";
import { S } from "./CreateAlbum.styles";

const mockUserId = 1;

function CreateAlbum() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");

    const mutation = useMutation({
        mutationFn: () => createAlbumService({ userId: mockUserId, title }),
        onSuccess: () => {
            alert("Album created successfully!");
            navigate(`/users/${mockUserId}/albums`);
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate();
    };

    return (
        <S.FormContainer>
            <h2>Create New Album</h2>
            <S.StyledForm onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder="Album Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <S.SubmitButton type="submit">Create Album</S.SubmitButton>
            </S.StyledForm>
        </S.FormContainer>
    );
}

export default CreateAlbum;