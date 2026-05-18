import "./estilos/App.css";

import Header from "./componentes/header/logo";
import { useEffect, useState } from "react";
import Produto from "./componentes/produto/Produto";
import Carrinho from "./componentes/carrinho/Carrinho";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleCarrinho(produto) {
    setCarrinho((cur) => [...cur, produto]);
    console.log(carrinho);

    setIsOpen(true);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  const total = carrinho.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const totalFormatado = total.toFixed(2);

  return (
    <>
      <div className="pagina">
        <Header handleOpen={handleOpen} />
        <div className="container">
          <Produto produtos={produtos} handleCarrinho={handleCarrinho} />
        </div>
        {isOpen && (
          <Carrinho
            handleOpen={handleOpen}
            carrinho={carrinho}
            total={total}
            totalFormatado={totalFormatado}
          />
        )}
      </div>
    </>
  );
}

export default App;
