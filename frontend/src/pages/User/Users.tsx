import { useQuery } from "@tanstack/react-query";
import { getUsersService } from "../../shared/api/service/user/userService";
import { User } from "../../shared/api/types/User";
import { S } from "./Users.styles";

function Users() {
    const { data: users, error, isLoading } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: getUsersService,
    });

    if (isLoading) return <p>Loading users...</p>;

    if (error) return <p>Error fetching users.</p>;

    return (
        <div>
            <S.TitleContainer>
                <h1>User Albums</h1>
            </S.TitleContainer>
            <S.UserList>
                {users?.map((user) => (
                    <S.UserItem key={`user-${user.id}`}>
                        <S.UserSquare>{user.name.charAt(0)}</S.UserSquare>
                        <S.UserName to={`/users/${user.id}/albums`}>{user.name}</S.UserName>
                        <S.UserEmail>{user.email}</S.UserEmail>
                    </S.UserItem>
                ))}
            </S.UserList>
        </div>
    );
}

export default Users;