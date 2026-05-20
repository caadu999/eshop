import { useState } from "react";
import { Botao, Container, DivBotao } from "./styles";

export default function Filtro() {
  const [ativo, setAtivo] = useState(null);

  return (
    <Container>
      <DivBotao>
        <Botao
          isClick={ativo === "categoria"}
          onClick={() => setAtivo(ativo === "categoria" ? null : "categoria")}
        >
          Categoria
        </Botao>
        <Botao isClick={ativo === "cor"} onClick={() => setAtivo(ativo === "cor" ? null : "cor")}>
          Cor
        </Botao>
        <Botao isClick={ativo === "tamanho"} onClick={() => setAtivo(ativo === "tamanho" ? null : "tamanho")}>
          Tamanho
        </Botao>
      </DivBotao>
      <Botao>Resetar filtros</Botao>
    </Container>
  );
}
