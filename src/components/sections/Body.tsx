import styled from "styled-components";

const Section = styled.div(() => ({
  backgroundColor: "pink",
  blockSize: "1000px",
}));

export function Body() {
  return <Section>Body section</Section>;
}
