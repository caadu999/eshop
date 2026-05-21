import { ContainerItem, ItemInfo } from "./styles";

export default function Carrinhoitem({ prodCar }) {
  return (
    <ContainerItem>
      <ItemInfo>
        <h2>{prodCar.title}</h2>
        <p>R${prodCar.price}</p>
      </ItemInfo>
    </ContainerItem>
  );
}
