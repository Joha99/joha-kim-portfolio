import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(() => ({}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

const ProjectCard = styled.div(() => ({}));

const ImageSlot = styled.div(() => ({
  background: "#f0f0f0",
  height: "400px",
}));

export function Projects() {
  return (
    <Section id="projects">
      <Content>
        <h2>Projects</h2>

        <ProjectCard>
          <h3>HubSpot Design Systems</h3>
          <ImageSlot>Screenshot slot</ImageSlot>
          <ul>
            <li>
              Owned Trellis, the design system powering HubSpot's enterprise
              products
            </li>
            <li>
              Architected compound component patterns with StyleX and BaseUI,
              adopted as the org-wide standard
            </li>
            <li>Built the typography system with full WCAG 2.1 AA compliance</li>
            <li>Led large-scale migration off legacy components</li>
            <li>Modernized the pictogram library with an automated SVG pipeline</li>
          </ul>
        </ProjectCard>

        <ProjectCard>
          <h3>HubSpot Reporting</h3>
          <ImageSlot>Screenshot slot</ImageSlot>
          <ul>
            <li>Led the Single Report Viewer frontend redesign, shipped in a single sprint</li>
            <li>Built custom SVG loading skeletons</li>
            <li>Created a shared reporting library adopted across the org</li>
          </ul>
        </ProjectCard>
      </Content>
    </Section>
  );
}
