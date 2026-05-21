import {
  AddBotao,
  AddCar,
  AddTexto,
  ContainerDesc,
  ContainerProd,
  Preco,
  ProdCard,
  ProdNome,
} from "./styles";

export default function NomeProduto({ produto, handleCarrinho, isAdd }) {
  return (
    <ProdCard>
      <ContainerDesc>
        <ContainerProd>
          <ProdNome>{produto.title}</ProdNome>
          <Preco>R${produto.price}</Preco>
        </ContainerProd>
      </ContainerDesc>
      <AddCar onClick={() => handleCarrinho(produto)} $adicionado={isAdd.includes(produto.id)}>
        <AddTexto>
          {isAdd.includes(produto.id) ? "Adicionado" : "Adicionar ao carrinho"}
        </AddTexto>
        <AddBotao>+</AddBotao>
      </AddCar>
    </ProdCard>
  );
}
