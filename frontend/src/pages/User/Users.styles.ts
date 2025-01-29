import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const S = {
  UserList: styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    padding: 20px;
  `,

  UserItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f9f9f9;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 200px;
    text-align: center;
  `,

  UserSquare: styled.div`
    width: 60px;
    height: 60px;
    background: #007bff;
    color: white;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-weight: bold;
  `,

  UserName: styled(Link)`
    margin-top: 12px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `,

  UserEmail: styled.p`
    font-size: 14px;
    color: #666;
    margin-top: 4px;
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
