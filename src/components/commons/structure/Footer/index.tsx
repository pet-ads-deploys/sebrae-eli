import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.DividerLine />
      <S.ContentWrapper>
        <S.Content>
          <S.CopyrightText>
            ELI · Ecossistema Local de Inovação de São Carlos, SP
          </S.CopyrightText>
        </S.Content>
      </S.ContentWrapper>
    </S.FooterContainer>
  );
}