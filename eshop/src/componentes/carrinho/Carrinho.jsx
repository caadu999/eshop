import Carrinhoitem from "./Carrinhoitem";
import {
  Botao,
  BotaoVar,
  CarrinhoCima,
  Container,
  ContainerPreco,
  ContainerProd,
  Preco,
  Texto,
} from "./styles";

export default function Carrinho({ handleOpen, carrinho, totalFormatado }) {
  return (
    <Container>
      <CarrinhoCima>
        <BotaoVar onClick={handleOpen}>
          X
        </BotaoVar>
      </CarrinhoCima>
      <ContainerProd>
        {carrinho.map((prodCar, i) => (
          <Carrinhoitem key={i} prodCar={prodCar} />
        ))}
      </ContainerProd>
      <ContainerPreco>
        <Preco>
          <Texto>TOTAL:</Texto>
          <Texto>R${totalFormatado}</Texto>
        </Preco>
        <Botao>Continuar</Botao>
      </ContainerPreco>
    </Container>
  );
}
