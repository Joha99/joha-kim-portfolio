import styled from "styled-components";

import {
  PageGridSection,
  SectionContent,
} from "@/components/layout/PageGridLayout";

interface Project {
  description: string;
  image?: string;
  images?: string[];
  reversed?: boolean;
  title: string;
}

const Section = styled(PageGridSection)(({ theme }) => ({
  paddingTop: theme.spacing["80"],
}));

const Content = styled(SectionContent)(({ theme }) => ({
  columnGap: theme.spacing["48"],
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  paddingBlock: theme.spacing["64"],
}));

const Title = styled.h2<{ $reversed?: boolean }>(({ theme, $reversed }) => ({
  alignSelf: "start",
  color: theme.colors.accent.volt,
  fontFamily: theme.fonts.hero,
  fontSize: theme.fontSizes["7xl"],
  fontWeight: theme.fontWeights.medium,
  lineHeight: 0.95,
  position: "relative",
  textAlign: $reversed ? "left" : "right",
  textTransform: "uppercase",
  whiteSpace: "pre-line",
}));

const Arrow = styled.img<{ $reversed?: boolean }>(({ $reversed }) => ({
  height: "300px",
  left: $reversed ? undefined : "55%",
  mixBlendMode: "screen",
  pointerEvents: "none",
  position: "absolute",
  right: $reversed ? "55%" : undefined,
  top: "110%",
  transform: $reversed ? "scaleX(-1)" : undefined,
  width: "300px",
}));

const Description = styled.p<{ $reversed?: boolean }>(
  ({ theme, $reversed }) => ({
    color: theme.colors.font.inverseMuted,
    fontFamily: theme.fonts.mono,
    fontSize: theme.fontSizes.lg,
    fontWeight: theme.fontWeights.semibold,
    lineHeight: 1.6,
    maxWidth: "500px",
    textAlign: $reversed ? "right" : undefined,
    textTransform: "uppercase",
  })
);

const ContentColumn = styled.div<{ $alignEnd?: boolean }>(
  ({ theme, $alignEnd }) => ({
    alignItems: $alignEnd ? "flex-end" : undefined,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing["24"],
  })
);

const ProjectImage = styled.img(({ theme }) => ({
  borderRadius: theme.radii.sm,
  display: "block",
  maxHeight: "550px",
  maxWidth: "70%",
  objectFit: "cover",
}));

const ImageStack = styled.div(({ theme }) => ({
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: theme.radii.sm,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing["16"],
  maxHeight: "550px",
  maxWidth: "70%",
  overflow: "hidden",
  padding: theme.spacing["32"],
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
    reversed: true,
    description:
      "Led the Single Report Viewer frontend redesign, shipped in a single sprint. Built custom SVG loading skeletons and created a shared reporting library adopted across the org.",
  },
];

export function Projects() {
  return (
    <>
      <Section id="projects">
        {projects.map((project) => {
          const titleBlock = (
            <Title $reversed={project.reversed}>
              {project.title}
              <Arrow
                src="/images/projects-arrow.png"
                alt=""
                $reversed={project.reversed}
              />
            </Title>
          );

          const contentBlock = (
            <ContentColumn $alignEnd={project.reversed}>
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
              <Description $reversed={project.reversed}>
                {project.description}
              </Description>
            </ContentColumn>
          );

          return (
            <Content key={project.title}>
              {project.reversed ? (
                <>
                  {contentBlock}
                  {titleBlock}
                </>
              ) : (
                <>
                  {titleBlock}
                  {contentBlock}
                </>
              )}
            </Content>
          );
        })}
      </Section>
    </>
  );
}
