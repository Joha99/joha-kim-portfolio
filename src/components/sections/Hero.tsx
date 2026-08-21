import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(() => ({
  backgroundColor: "white",
  height: "calc(100vh - 4rem)",
}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function Hero() {
  return (
    <Section>
      <Content>Hero section</Content>
    </Section>
  );
}
