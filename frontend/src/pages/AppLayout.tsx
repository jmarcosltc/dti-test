import { Route, Routes } from "react-router-dom";
import Header from "../shared/components/Header/Header";
import Navbar from "../shared/components/Navbar/Navbar";
import Albums from "./Album/Album";
import AlbumPhotos from "./Album/AlbumPhotos";
import CreateAlbum from "./Album/CreateAlbum";
import UpdateAlbum from "./Album/UpdateAlbum";
import { S } from "./AppLayout.styles";
import AddPhoto from "./Photo/AddPhoto";
import UpdatePhoto from "./Photo/UpdatePhoto";
import Users from "./User/Users";

function AppLayout() {
    return (
        <S.LayoutContainer>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/users/:id/albums" element={<Albums />} />
                <Route path="/user/:userId/albums/:id/photos" element={<AlbumPhotos />} />
                <Route path="/albums/:id/update" element={<UpdateAlbum />} />
                <Route path="/albums/create" element={<CreateAlbum />} />
                <Route path="/photos/upload/:id" element={<AddPhoto />} />
                <Route path="/photos/:id/update" element={<UpdatePhoto />} />
            </Routes>
        </S.LayoutContainer>
    );
}

export default AppLayout;