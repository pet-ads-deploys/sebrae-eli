import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 18px;
  margin-bottom: 16px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
  letter-spacing: -0.01em;
`;

export const Role = styled.span`
  font-size: 0.785rem;
  color: #64748b;
  line-height: 1.3;
`;

export const Bio = styled.p`
  font-size: 0.84rem;
  color: #475569;
  line-height: 1.55;
  margin: 0 0 16px 0;
  flex: 1;
  min-height: 0; /* Essencial para o scroll funcionar dentro do flex container */
  overflow-y: auto;
  padding-right: 6px; /* Evita que o texto encoste na barra de rolagem */

  /* Estilização sutil da barra de rolagem (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbd5e1;
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1f5f9;
  padding-top: 14px;
`;

export const Organization = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #334155;
  position: relative;
  display: inline-block;
  padding-bottom: 3px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #00f090;
    border-radius: 2px;
  }
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

`;

export const SocialActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;