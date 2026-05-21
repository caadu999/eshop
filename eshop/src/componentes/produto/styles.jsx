import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  padding: 10px;
  height: 250px;
  object-fit: contain;
  transition: transform 0.4s ease;
`;

export const ProdNome = styled.h2`
  color: rgb(37, 37, 37);
  font-size: 1.4em;
  text-align: left;
  margin-bottom: 10px;
`;

export const ProdCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 14px;
  padding: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover ${Img} {
    transform: scale(1.04);
  }

  &:hover ${ProdNome} {
    text-decoration: underline;
  }
`;

export const ContainerDesc = styled.div`
  padding: 8px;
  display: flex;
  align-items: top;
  justify-content: space-between;
`;

export const ContainerProd = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Preco = styled.h3`
  font-size: 1.2em;
  color: rgb(58, 58, 58);
`;

export const AddCar = styled.button`
  border-top: solid 1px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 0.9em;
  transition: background-color 0.4s ease;
  background-color: ${({ $adicionado }) =>
    $adicionado ? "#198754" : "#6c757d"};

  &:hover {

    cursor: pointer;
  }
`;

export const AddBotao = styled.span`
  color: white;
  font-size: 2em;
`;

export const AddTexto = styled.p`
  color: white;
  font-size: 1em;
`;
