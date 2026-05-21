import styled from "styled-components";

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
`;

export const Botao = styled.button`
  background-color: #1f1f1f;
  color: white;
  height: 42px;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 400;
  font-size: 0.8em;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #383838;
  }
`;

export const BotaoVar = styled(Botao)`
  border: solid 1px #1f1f1f;
  color: #1f1f1f;
  background-color: #e9e9e9;
  &:hover {
    color: white;
  }
`;

export const DivImg = styled.img`
  width: 60px;
  height: auto;
`;

export const DivBotoes = styled.div`
  display: flex;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: 5.4em;
  color: #1f1f1f;
  margin-bottom: 20px;
`;

export const P = styled.p`
  font-size: 0.8em;
  color: #1f1f1f;
  margin-bottom: 14px;
`;
