import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const Section = styled(PageGridSection)(() => ({}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function Artwork() {
  return (
    <Section id="artwork">
      <Content>
        <SectionHeader>Craft & Motion</SectionHeader>
      </Content>
    </Section>
  );
}
