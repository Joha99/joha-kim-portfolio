import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(() => ({}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function About() {
  return (
    <Section id="about">
      <Content>
        <h2>About</h2>
        <p>
          Design engineer bridging design and code. I focus on component
          architecture and visual polish — building systems that scale and
          interfaces that feel right down to the pixel.
        </p>
        <p>
          Georgia Tech CS graduate. 4+ years at HubSpot owning enterprise design
          systems. I speak English, Korean, Japanese, and Spanish.
        </p>
      </Content>
    </Section>
  );
}
