import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updatePhotoService } from "../../shared/api/service/photo/photoService";
import { S } from "./UpdatePhoto.styles";

const mockUserId = 1;

function UpdatePhoto() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const { id } = useParams<{ id: string }>();
  const { albumId } = useParams<{ albumId: string }>();

  const mutation = useMutation({
    mutationFn: () => {
      if (!id) {
        throw new Error("Photo ID is undefined");
      }
      return updatePhotoService({
        photoId: parseInt(id),
        updatedData: { title, albumId: albumId ? parseInt(albumId) : undefined },
      });
    },
    onSuccess: () => {
      alert("Photo updated successfully!");
      navigate(`/users/${mockUserId}/albums`);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <S.FormContainer>
      <h2>Update Photo</h2>
      <S.StyledForm onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Photo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <S.SubmitButton type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Uploading..." : "Upload Photo"}
        </S.SubmitButton>
      </S.StyledForm>
    </S.FormContainer>
  );
}

export default UpdatePhoto;
