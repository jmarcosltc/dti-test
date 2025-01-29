import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteAlbumService, getAlbumsService } from "../../shared/api/service/album/albumService";
import { Album } from "../../shared/api/types/Album";
import { S } from "./Album.styles";

const loggedInUserId = 1;

function Albums() {
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const {
    data: albums,
    error,
    isLoading,
  } = useQuery<Album[]>({
    queryKey: ["albums", id],
    queryFn: () => getAlbumsService(id as string),
    enabled: !!id,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteAlbumService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["albums", id] });
    },
    onError: () => {
      alert("Error deleting album. Please try again.");
    },
  });

  const handleDelete = (albumId: number) => {
    if (window.confirm("Are you sure you want to delete this album?")) {
      deleteMutation.mutate(albumId);
    }
  };

  if (isLoading) return <p>Loading albums...</p>;

  if (error) return <p>Error fetching albums.</p>;

  return (
    <div>
      <S.TitleContainer>
        <h1>Albums</h1>
      </S.TitleContainer>
      <S.AlbumList>
        {albums?.map((album) => (
          <S.AlbumItem key={`album-${album.id}`}>
            <S.AlbumSquare>{album.title.charAt(0)}</S.AlbumSquare>
            <S.AlbumTitle to={`/user/${id}/albums/${album.id}/photos`}>{album.title}</S.AlbumTitle>

            {album.userId === loggedInUserId && (
              <S.ActionButtons>
                <S.UpdateButton to={`/albums/${album.id}/update`}>Update</S.UpdateButton>
                <S.DeleteButton onClick={() => album.id !== undefined && handleDelete(album.id)}>
                  Delete
                </S.DeleteButton>
              </S.ActionButtons>
            )}
          </S.AlbumItem>
        ))}
      </S.AlbumList>
    </div>
  );
}

export default Albums;
