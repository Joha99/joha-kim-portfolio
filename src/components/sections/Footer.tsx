import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const StyledFooter = styled(PageGridSection).attrs({ as: "footer" })(() => ({
  backgroundColor: "white",
  height: "500px",
}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function Footer() {
  return (
    <StyledFooter>
      <Content>Footer section</Content>
    </StyledFooter>
  );
}
