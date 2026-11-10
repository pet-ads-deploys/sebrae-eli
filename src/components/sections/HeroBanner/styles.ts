import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 700px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
  color: #ffffff;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  span {
    display: block;
  }
`;