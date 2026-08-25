import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const Section = styled(PageGridSection)(() => ({}));

const Content = styled.div(() => ({
  gridColumn: "2 / -2",
}));

const CardGrid = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme.spacing["24"],
  gridTemplateColumns: "repeat(2, 1fr)",
  marginTop: theme.spacing["40"],
}));

const Card = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background.primary,
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  padding: theme.spacing["24"],
}));

const ImageSlot = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background.sand,
  borderRadius: "12px",
  height: "240px",
  marginBottom: theme.spacing["24"],
}));

const CardTitle = styled.h3(({ theme }) => ({
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  marginBottom: theme.spacing["12"],
}));

const CardDescription = styled.p(({ theme }) => ({
  color: theme.colors.font.secondary,
  flex: 1,
  fontSize: theme.fontSizes.sm,
  lineHeight: 1.6,
  marginBottom: theme.spacing["24"],
}));

const CardLink = styled.span(({ theme }) => ({
  alignItems: "center",
  color: theme.colors.font.primary,
  display: "inline-flex",
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.medium,
  gap: theme.spacing["4"],
}));

const projects = [
  {
    title: "HubSpot Design Systems",
    description:
      "Owned Trellis, the design system powering HubSpot's enterprise products. Architected compound component patterns with StyleX and BaseUI, built the typography system with WCAG 2.1 AA compliance, and led large-scale migration off legacy components.",
  },
  {
    title: "HubSpot Reporting",
    description:
      "Led the Single Report Viewer frontend redesign, shipped in a single sprint. Built custom SVG loading skeletons and created a shared reporting library adopted across the org.",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <Content>
        <SectionHeader>Featured Projects</SectionHeader>
        <CardGrid>
          {projects.map((project) => (
            <Card key={project.title}>
              <ImageSlot />
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardLink>
                View project <ArrowTopRightIcon />
              </CardLink>
            </Card>
          ))}
        </CardGrid>
      </Content>
    </Section>
  );
}
