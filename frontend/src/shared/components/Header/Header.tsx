import { Link } from "react-router-dom";
import { S } from "./Header.styles";

function Header() {

    const mockUser = {
        id: 1
    };

    return (
        <S.Header>
            <h1>Test</h1>
            <Link to={`/users/${mockUser.id}/albums`}>
                <h2>Me</h2>
            </Link>
        </S.Header>
    );
}

export default Header;