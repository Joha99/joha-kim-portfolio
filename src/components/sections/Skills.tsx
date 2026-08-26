import styled, { css, keyframes } from "styled-components";

import {
  PageGridSection,
  SectionContent,
} from "@/components/layout/PageGridLayout";

const skills = [
  {
    category: "Languages",
    tags: ["React", "TypeScript", "JavaScript", "HTML"],
  },
  {
    category: "Styling",
    tags: ["Styled Components", "StyleX", "Tailwind", "Sass", "CSS"],
  },
  {
    category: "Design systems",
    tags: ["Design Tokens", "UI Components", "Accessibility", "SVG", "Figma"],
  },
  {
    category: "State management",
    tags: ["Zustand", "Redux"],
  },
  {
    category: "Animation",
    tags: ["Framer Motion", "CSS Animations"],
  },
  {
    category: "Tools",
    tags: ["Vite", "Vercel", "Storybook", "Git", "Claude Code", "Cursor"],
  },
];

const Section = styled(PageGridSection)(() => ({
  alignContent: "stretch",
  paddingInline: 0,
}));

const Content = styled(SectionContent)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Row = styled.div(({ theme }) => ({
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.border.subtle}`,
  display: "flex",
  flex: 1,
  overflow: "hidden",
  "&:first-of-type": {
    borderTop: `1px solid ${theme.colors.border.subtle}`,
  },
}));

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.33%);
  }
`;

const MarqueeTrack = styled.div<{ $duration: number }>(({ $duration }) => [
  css`
    animation: ${marquee} ${$duration}s linear infinite;
  `,
  {
    display: "flex",
    whiteSpace: "nowrap",
  },
]);

const Tags = styled.span(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes["7xl"],
  fontWeight: theme.fontWeights.normal,
  textTransform: "uppercase",
}));

export function Skills() {
  return (
    <Section id="skills">
      <Content>
        {skills.map((skill) => {
          const text = " " + skill.tags.join(" · ") + " · ";
          const duration = text.length * 0.4;

          return (
            <Row key={skill.category}>
              <MarqueeTrack $duration={duration}>
                <Tags>{text}</Tags>
                <Tags>{text}</Tags>
                <Tags>{text}</Tags>
              </MarqueeTrack>
            </Row>
          );
        })}
      </Content>
    </Section>
  );
}
