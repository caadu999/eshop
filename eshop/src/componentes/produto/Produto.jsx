import NomeProduto from "./NomeProduto";

export default function Produto({ produtos, handleCarrinho }) {
  return (
    <>
      {produtos.map((produto) => (
        <NomeProduto
          produto={produto}
          key={produto.id}
          handleCarrinho={handleCarrinho}
        />
      ))}
    </>
  );
}
