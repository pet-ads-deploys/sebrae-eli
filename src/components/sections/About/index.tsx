import * as S from "./styles";

export default function About() {
  return (
    <S.Container id="about">
      <S.ContentWrapper>
        <S.Title>O que é o ELI?</S.Title>
        <S.Description>
          O Ecossistema Local de Inovação (ELI) é uma iniciativa promovida pelo Sebrae
          para mapear, articular e fortalecer os atores de empreendedorismo e tecnologia
          da região, facilitando pontes entre empresas, academia, poder público e agentes
          de inovação.
        </S.Description>
      </S.ContentWrapper>

      <S.DividerGreen />
    </S.Container>
  );
}