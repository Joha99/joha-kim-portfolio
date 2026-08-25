import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const Section = styled(PageGridSection)(() => ({}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

const ProjectCard = styled.div(() => ({}));

const ProjectList = styled.ul(() => ({
  listStyle: "none",
}));

const ImageSlot = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background.sand,
  height: "400px",
}));

export function Projects() {
  return (
    <Section id="projects">
      <Content>
        <SectionHeader>Featured Projects</SectionHeader>

        <ProjectCard>
          <h3>HubSpot Design Systems</h3>
          <ImageSlot>Screenshot slot</ImageSlot>
          <ProjectList>
            <li>
              Owned Trellis, the design system powering HubSpot's enterprise
              products
            </li>
            <li>
              Architected compound component patterns with StyleX and BaseUI,
              adopted as the org-wide standard
            </li>
            <li>
              Built the typography system with full WCAG 2.1 AA compliance
            </li>
            <li>Led large-scale migration off legacy components</li>
            <li>
              Modernized the pictogram library with an automated SVG pipeline
            </li>
          </ProjectList>
        </ProjectCard>

        <ProjectCard>
          <h3>HubSpot Reporting</h3>
          <ImageSlot>Screenshot slot</ImageSlot>
          <ProjectList>
            <li>
              Led the Single Report Viewer frontend redesign, shipped in a
              single sprint
            </li>
            <li>Built custom SVG loading skeletons</li>
            <li>Created a shared reporting library adopted across the org</li>
          </ProjectList>
        </ProjectCard>
      </Content>
    </Section>
  );
}
