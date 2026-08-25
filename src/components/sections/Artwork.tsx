import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(() => ({}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function Artwork() {
  return (
    <Section id="artwork">
      <Content>
        <h2>Craft & Motion</h2>
      </Content>
    </Section>
  );
}
