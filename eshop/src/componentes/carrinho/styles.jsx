import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  border-radius: 14px;
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  width: 500px;
  height: 500px;
  z-index: 1000;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CarrinhoCima = styled.div`
  padding-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: black;
  padding: 0px 30px;
`;

export const ContainerPreco = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Preco = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 30px;
`;

export const Texto = styled.div`
  color: black;
`;

export const Botao = styled.button`
  width: 90%;
  background-color: #1f1f1f;
  font-size: 1.4em;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const BotaoVar = styled(Botao)`
  width: 10%;
  background-color: #1f1f1f;
  font-size: 1.4em;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const ContainerProd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 10px;
`;

export const ContainerItem = styled.div`
  display: flex;
  width: 100%;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
