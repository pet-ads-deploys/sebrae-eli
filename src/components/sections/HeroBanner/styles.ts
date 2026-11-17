import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 768px) {
    height: 650px;
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

export const ScrollDownButton = styled.button`
  position: absolute;
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  width: 140px;
  height: 44px;
  border-radius: 999px;
  border: none;
  background-color: #36c66c;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  box-shadow: 0 4px 14px rgba(54, 198, 108, 0.35);
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #2eb861;
    transform: translate(-50%, 2px);
  }

  &:active {
    transform: translate(-50%, 4px);
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: #ffffff;
    stroke-width: 2.5;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;