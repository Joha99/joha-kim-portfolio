import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(() => ({
  backgroundColor: "white",
  minHeight: "1000px",
}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function Body() {
  return (
    <Section>
      <Content>Body section</Content>
    </Section>
  );
}
