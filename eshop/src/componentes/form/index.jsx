import { useState } from "react";
import { Botao, Container, FormContainer, Input, Label } from "./styles";

export default function Form({ setProdutos }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !price.trim() || !desc.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoItem = {
      id: Date.now(),
      title: name,
      price: Number(price),
      description: desc,
    };

    setProdutos((atual) => [...atual, novoItem]);

    setPrice("");
    setName("");
    setDesc("");
  }

  return (
    <Container>
      <FormContainer>
        <Label htmlFor="name">Nome:</Label>
        <Input
          required
          placeholder="Nome:"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="price">Preço:</Label>
        <Input
          type="number"
          name="price"
          id="price"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Label htmlFor="desc">Descrição</Label>
        <Input
          type="text"
          name="desc"
          id="desc"
          placeholder="Descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Botao onClick={handleSubmit} type="submit">
          Adicionar
        </Botao>
      </FormContainer>
    </Container>
  );
}
