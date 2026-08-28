import styled from "styled-components";

import {
  PageGridSection,
  SectionContent,
} from "@/components/layout/PageGridLayout";

interface Project {
  description: string;
  image?: string;
  images?: string[];
  title: string;
}

const Section = styled(PageGridSection)(({ theme }) => ({
  paddingTop: theme.spacing["80"],
  position: "relative",
}));

const Content = styled(SectionContent)(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "start",
}));

const Title = styled.h2(({ theme }) => ({
  color: theme.colors.accent.volt,
  fontFamily: theme.fonts.hero,
  fontSize: theme.fontSizes["8xl"],
  fontWeight: theme.fontWeights.medium,
  lineHeight: 0.95,
  textTransform: "uppercase",
  whiteSpace: "pre-line",
}));

const Description = styled.p(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.semibold,
  lineHeight: 1.6,
  maxWidth: "500px",
  textTransform: "uppercase",
}));

const TextColumn = styled.div(({ theme }) => ({
  alignItems: "start",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing["20"],
  gridColumn: "1 / 2",
}));

const ImageWrapper = styled.div(() => ({
  bottom: "100px",
  position: "absolute",
  right: "120px",
}));

const ProjectImage = styled.img(({ theme }) => ({
  borderRadius: theme.radii.sm,
  display: "block",
  maxHeight: "750px",
  objectFit: "cover",
  transform: "rotate(5deg)",
  width: "750px",
}));

const ImageStack = styled.div(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: theme.radii.sm,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing["16"],
  maxHeight: "800px",
  overflow: "hidden",
  padding: theme.spacing["32"],
  transform: "rotate(5deg)",
  width: "900px",
}));

const StackImage = styled.img(() => ({
  display: "block",
  maxWidth: "100%",
}));

const projects: Project[] = [
  {
    title: "Design\nSystems",
    images: [
      "/images/project-ds-5.png",
      "/images/project-ds-6.png",
      "/images/project-ds-1.png",
      "/images/project-ds-2.png",
      "/images/project-ds-4.png",
      "/images/project-ds-7.png",
      "/images/project-ds-3.png",
    ],
    description:
      "Owned Trellis, the design system powering HubSpot's enterprise products. Architected compound component patterns with StyleX and BaseUI, built the typography system with WCAG 2.1 AA compliance, and led large-scale migration off legacy components.",
  },
  {
    title: "Dashboards\n& Reporting",
    image: "/images/project-reporting.png",
    description:
      "Led the Single Report Viewer frontend redesign, shipped in a single sprint. Built custom SVG loading skeletons and created a shared reporting library adopted across the org.",
  },
];

export function Projects() {
  return (
    <>
      {projects.map((project) => (
        <Section key={project.title} id="projects">
          <Content>
            <TextColumn>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
            </TextColumn>

            <ImageWrapper>
              {project.images ? (
                <ImageStack>
                  {project.images.map((src) => (
                    <StackImage key={src} src={src} alt={project.title} />
                  ))}
                </ImageStack>
              ) : (
                project.image && (
                  <ProjectImage src={project.image} alt={project.title} />
                )
              )}
            </ImageWrapper>
          </Content>
        </Section>
      ))}
    </>
  );
}
