import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const CampoPesquisa = styled.input`
  padding: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
`;

export const BotaoPesquisa = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;