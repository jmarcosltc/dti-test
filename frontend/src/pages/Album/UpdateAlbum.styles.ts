import styled from "@emotion/styled";

export const S = {
  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `,

  StyledForm: styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
  `,

  Input: styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  `,

  SubmitButton: styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `,
};
