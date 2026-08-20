import styled from "styled-components";

const StyledFooter = styled.div(() => ({
  backgroundColor: "gray",
  height: "500px",
}));

export function Footer() {
  return <StyledFooter>Footer section</StyledFooter>;
}
