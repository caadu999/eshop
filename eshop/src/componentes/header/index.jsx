import Logo from "../../assets/imagens/VLogo.png";
import Filtro from "../filtro/filtro.jsx"
import {
  Botao,
  BotaoVar,
  Container,
  DivBotoes,
  DivImg,
  H2,
  HeaderDiv,
  P,
} from "./styles";

export default function Header({ handleOpen }) {
  return (
    <>
      <HeaderDiv>
        <DivImg className="logo__img" src={Logo} alt=""></DivImg>
        <DivBotoes>
          <Botao onClick={handleOpen}>Carrinho</Botao>
          <BotaoVar>Contato</BotaoVar>
        </DivBotoes>
      </HeaderDiv>
      <Container>
        <P>Veja nossas principais ofertas</P>
        <H2>CATÁLOGO.</H2>
      </Container>
      <Filtro></Filtro>
    </>
  );
}
