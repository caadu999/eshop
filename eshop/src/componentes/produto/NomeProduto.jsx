export default function NomeProduto({ produto, handleCarrinho }) {
  return (
    <div className="catalogo">
      <img className="catalogo__img" src={produto.image} alt="" />
      <div className="catalogo__desc">
        <div className="produto__info">
          <h2 className="produto__nomee">{produto.title}</h2>
          <h3>R${produto.price}</h3>
        </div>
        <button
          className="catalogo__button"
          onClick={() => handleCarrinho(produto)}
        >
          +
        </button>
      </div>
    </div>
  );
}
