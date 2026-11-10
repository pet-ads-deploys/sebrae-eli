import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 64px 20px 56px 20px;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 80px 24px 64px 24px;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-size: 1.85rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 24px 0;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const Description = styled.p`
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.7;
  color: #334155;
  margin: 0 auto;
  max-width: 740px;

  @media (min-width: 768px) {
    font-size: 1.0625rem;
  }
`;

export const DividerGreen = styled.div`
  width: 100%;
  height: 4px;
  background-color: #00f090;
`;