import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumByIdService, updateAlbumService } from "../../shared/api/service/album/albumService";
import { S } from "./UpdateAlbum.styles";

function UpdateAlbum() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: album } = useQuery({
        queryKey: ["album", id],
        queryFn: () => getAlbumByIdService(id as string),
        enabled: !!id,
    });

    const [title, setTitle] = useState(album?.title || "");

    const mutation = useMutation({
        mutationFn: updateAlbumService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["albums"] });
            alert("Album updated successfully!");
            navigate("/users/1/albums");
        },
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        mutation.mutate({ albumId: id as string, title });
    };

    return (
        <S.FormContainer>
            <h2>Update Album</h2>
            <S.StyledForm onSubmit={handleSubmit}>
                <S.Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <S.SubmitButton type="submit">Update</S.SubmitButton>
            </S.StyledForm>
        </S.FormContainer>
    );
}

export default UpdateAlbum;