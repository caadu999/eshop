export default function Carrinhoitem({ prodCar }) {
  return (
    <div className="carrinho__item">
      <img className="item__img" src={prodCar.image} alt="" />
      <div className="item__info">
        <h2>{prodCar.title}</h2>
        <p>{prodCar.price}</p>
      </div>
    </div>
  );
}
