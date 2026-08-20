import styled from "styled-components";

const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

export function Hero() {
  return <Section>Hero section</Section>;
}
