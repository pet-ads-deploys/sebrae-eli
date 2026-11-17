import * as S from "./styles";
import SaoCarlosLogo from "../../../assets/images/saoCarlos.png";

export default function HeroBanner() {

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 350 : 75;
      const targetPosition =
        aboutSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

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
      <S.ScrollDownButton
        type="button"
        onClick={handleScrollDown}
        aria-label="Rolar para a seção O que é o ELI"
      >
        <svg viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </S.ScrollDownButton>
    </S.Container>
  );
}