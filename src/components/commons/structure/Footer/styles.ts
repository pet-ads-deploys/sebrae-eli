import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin-top: auto;
  background-color: #ffffff;
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e2e8f0;
`;

export const Content = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 24px 20px 32px 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 28px 24px 36px 24px;
  }
`;

export const CopyrightText = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  color: #64748b;
  letter-spacing: 0.01em;
  text-align: left;
`;