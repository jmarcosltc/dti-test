import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const S = {
    AlbumList: styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px;
    padding: 0;
    list-style: none;
`,

    AlbumItem: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`,
    AlbumSquare: styled.div`
    width: 100px;
    height: 100px;
    background-color: #007bff;
    color: white;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    text-transform: uppercase;
`,
    AlbumTitle: styled(Link)`
    margin-top: 8px;
    font-size: 14px;
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`,

ActionButtons: styled.div`
        display: flex;
        gap: 10px;
        margin-top: 8px;
    `,

    UpdateButton: styled(Link)`
        padding: 6px 12px;
        background-color: #28a745;
        color: white;
        border-radius: 5px;
        text-decoration: none;
        font-size: 12px;

        &:hover {
            background-color: #218838;
        }
    `,

    DeleteButton: styled.button`
        padding: 6px 12px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 12px;

        &:hover {
            background-color: #c82333;
        }
    `,

    TitleContainer: styled.div`
        display: flex;
        justify-content: center;
        padding: 20px;

        h1 {
            font-size: 24px;
            color: white;
            text-align: center;
        }
    `,
};