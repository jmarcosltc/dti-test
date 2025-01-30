import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deletePhotoService, getPhotosService } from "../../shared/api/service/photo/photoService";
import { Photo } from "../../shared/api/types/Photo";
import { S } from "./AlbumPhotos.styles";

const FALLBACK_IMAGE = "https://fakeimg.pl/600x400";

const loggedInUserId = "1";

function AlbumPhotos() {
  const { id } = useParams<{ id: string }>();
  const { userId } = useParams<{ userId: string }>();
  const queryClient = useQueryClient();

  const {
    data: photos,
    error,
    isLoading,
  } = useQuery<Photo[]>({
    queryKey: ["photos", id],
    queryFn: () => getPhotosService(id as string),
    enabled: !!id,
  });

  const deleteMutation = useMutation({
    mutationFn: deletePhotoService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["photos", id] });
    },
    onError: () => {
      alert("Error deleting album. Please try again.");
    },
  });

  const handleDelete = (photoId: number) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      deleteMutation.mutate(photoId);
    }
  };

  if (isLoading) return <p>Loading albums photos...</p>;

  if (error) return <p>Error fetching album phots.</p>;

  return (
    <div>
      <S.AddPhotoContainer>
        <h1>Album Photos</h1>
        {userId === loggedInUserId && (
          <S.AddPhotoButton to={`/photos/upload/${id}`}>ADD PHOTO</S.AddPhotoButton>
        )}
      </S.AddPhotoContainer>
      <S.PhotoList>
        {photos?.map((photo) => (
          <S.PhotoItem key={`photo-${photo.id}`}>
            <S.PhotoImage
              src={photo.url || FALLBACK_IMAGE}
              alt={photo.title}
              onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
            />
            <S.PhotoTitle>{photo.title}</S.PhotoTitle>

            {userId === loggedInUserId && (
              <S.ActionButtons>
                <S.UpdateButton to={`/albums/${id}/photos/${photo.id}/update`}>
                  Update
                </S.UpdateButton>
                <S.DeleteButton onClick={() => photo.id !== undefined && handleDelete(photo.id)}>
                  Delete
                </S.DeleteButton>
              </S.ActionButtons>
            )}
          </S.PhotoItem>
        ))}
      </S.PhotoList>
    </div>
  );
}

export default AlbumPhotos;
