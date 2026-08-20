import styled from "styled-components";

const Section = styled.section(() => ({
  display: "flex",
  height: "100vh",
  width: "100vw",
  backgroundColor: "gray",
  alignItems: "center",
  justifyContent: "center",
}));

export function Hero() {
  return <Section>Hero section</Section>;
}
