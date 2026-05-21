import "./App.css";

import Header from "./componentes/header/index";
import { useEffect, useState } from "react";
import Produto from "./componentes/produto/Produto";
import Carrinho from "./componentes/carrinho/Carrinho";
import Form from "./componentes/form";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [carrinho, setCarrinho] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [isAdd, setIsAdd] = useState([]);

  //lista de peodutos
  const ProdutosLista = [
    {
      id: 1,
      title: "Camiseta Básica",
      price: 49.9,
      description: "Camiseta de algodão confortável",
    },
    {
      id: 2,
      title: "Calça Jeans",
      price: 129.9,
      description: "Calça slim fit azul",
    },
    {
      id: 3,
      title: "Tênis Branco",
      price: 199.9,
      description: "Tênis casual leve",
    },
  ];

  // States para o form

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleCarrinho(produto) {
    setCarrinho((cur) => [...cur, produto]);
    setIsAdd((prev) => [...prev, produto.id]);

    setIsOpen(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setProdutos(ProdutosLista);
      setCarregando(false);
    }, 3000);
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
          <Form produtos={produtos} setProdutos={setProdutos} />
          <Produto
            produtos={produtos}
            handleCarrinho={handleCarrinho}
            carregando={carregando}
            isAdd={isAdd}
          />
        </div>
        {isOpen && (
          <>
            <Carrinho
              handleOpen={handleOpen}
              carrinho={carrinho}
              total={total}
              totalFormatado={totalFormatado}
            />
          </>
        )}
      </div>
    </>
  );
}

export default App;
