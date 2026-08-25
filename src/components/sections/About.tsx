import styled from "styled-components";

import { PageGridSection, SectionContent } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const Content = styled(SectionContent)(() => ({
  alignContent: "center",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
}));

const Introduction = styled.p(({ theme }) => ({
  fontSize: theme.fontSizes["2xl"],
  gridColumn: "3 / 5",
}));

export function About() {
  return (
    <PageGridSection id="about">
      <Content>
        <SectionHeader>About</SectionHeader>
        <Introduction>
          I'm a design engineer who lives at the intersection of design and
          code. I studied computer science at Georgia Tech and have spent the
          last four years at HubSpot building and owning enterprise design
          systems. I care about component architecture just as much as visual
          polish, and I believe the best interfaces come from sweating the
          details down to the pixel.
        </Introduction>
      </Content>
    </PageGridSection>
  );
}
