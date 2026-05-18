import Carrinhoitem from "./Carrinhoitem";

export default function Carrinho({ handleOpen, carrinho, totalFormatado }) {
  return (
    <div className="carrinho">
      <div className="carrinho__top">
        <h3>CARRINHO</h3>
        <button onClick={handleOpen} className="fechar">
          X
        </button>
      </div>
      <div className="carrinho__prod">
        {carrinho.map((prodCar, i) => (
          <Carrinhoitem key={i} prodCar={prodCar} />
        ))}
      </div>
      <div className="carrinho__total">
        <div className="carrinho__preco">
          <p>TOTAL:</p>
          <p>R${totalFormatado}</p>
        </div>
        <button className="carrinho__button">continuar</button>
      </div>
    </div>
  );
}
