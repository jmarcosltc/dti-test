import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const S = {
    AddPhotoContainer: styled.div`
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;

        h1 {
            font-size: 24px;
            color: white;
            text-align: center;
        }
    `,

    PhotoList: styled.ul`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 20px;
        padding: 0;
        list-style: none;
    `,

    PhotoItem: styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    `,

    PhotoImage: styled.img`
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
        background-color: #ccc; /* Placeholder color */
    `,

    PhotoTitle: styled.p`
        margin-top: 8px;
        font-size: 14px;
        color: white;
        font-weight: bold;
        text-align: center;
    `,

    AddPhotoButton: styled(Link)`
        padding: 6px 12px;
        background-color: #17a2b8;
        color: white;
        border-radius: 5px;
        text-decoration: none;
        font-size: 12px;
        width: 100%;
        margin-top: 8px;
        text-align: center;

        &:hover {
            background-color: #138496;
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
};