import {
  AddBotao,
  AddCar,
  AddTexto,
  ContainerDesc,
  ContainerProd,
  Img,
  Preco,
  ProdCard,
  ProdNome,
} from "./styles";

export default function NomeProduto({ produto, handleCarrinho }) {
  return (
    <ProdCard>
      <Img src={produto.image} alt="produto" />
      <ContainerDesc>
        <ContainerProd>
          <ProdNome>{produto.title}</ProdNome>
          <Preco>R${produto.price}</Preco>
        </ContainerProd>
      </ContainerDesc>
      <AddCar onClick={() => handleCarrinho(produto)}>
        <AddTexto>Adicionar ao carrinho</AddTexto>
        <AddBotao>+</AddBotao>
      </AddCar>
    </ProdCard>
  );
}
