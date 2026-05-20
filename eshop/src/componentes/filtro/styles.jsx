import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #d4d4d4;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 60px;
`;

export const Botao = styled.button`
  font-size: 0.7em;
  border-radius: 10px;
  background-color: ${({ isClick }) => (isClick ? "#198754" : "#6c757d")};
  padding: 10px 20px;
  color: white;
  font-weight: 400;
  height: 100%;
  width: auto;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const DivBotao = styled.div`
  display: flex;
  gap: 10px;
`;
