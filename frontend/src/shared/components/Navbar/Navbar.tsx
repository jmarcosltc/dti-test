import { Link } from "react-router-dom";
import { S } from "./Navbar.styles";

function Navbar() {
  return (
    <S.Nav>
      <Link to="/" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
        HOME
      </Link>
      <Link to="/create" style={{ marginRight: "15px", color: "white", textDecoration: "none" }}>
        CREATE ALBUM
      </Link>
    </S.Nav>
  );
}

export default Navbar;
