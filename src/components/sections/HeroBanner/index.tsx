import * as S from "./styles";
import SaoCarlosLogo from "../../../assets/images/saoCarlos.png";

export default function HeroBanner() {
  return (
    <S.Container id="hero">
      <S.BackgroundImage
        src={SaoCarlosLogo}
        alt="Fachada histórica de São Carlos"
      />
      <S.Content>
        <S.Title>
          <span>Informações</span>
          <span>para</span>
          <span>conectar</span>
        </S.Title>
      </S.Content>
    </S.Container>
  );
}