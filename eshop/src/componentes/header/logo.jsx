import "./logo.css";
import Zara from "../../assets/imagens/Zara.svg";

export default function Header({handleOpen}) {
  return (
    <div className="header">
    <p>menu</p>
    <img className="logo__img" src={Zara} alt="" />
    <div>
      <button className="header__button" onClick={handleOpen}>carrinho</button>
    </div>
    </div>
   
  );
}
