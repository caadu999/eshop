import CardProduto from "./CardProduto";

export default function Produto({ produtos, handleCarrinho, carregando, isAdd}) {
  return (
    <>
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        produtos.map((produto) => (
          <CardProduto
            produto={produto}
            key={produto.id}
            handleCarrinho={handleCarrinho}
            isAdd={isAdd}
          />
        ))
      )}
    </>
  );
}
