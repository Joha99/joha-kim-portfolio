import styled from "styled-components";

import { PageGridSection, SectionContent } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const Row = styled.div(({ theme }) => ({
  alignItems: "center",
  borderBottom: `1px solid ${theme.colors.border.default}`,
  display: "flex",
  justifyContent: "space-between",
  padding: `${theme.spacing["24"]} 0`,
}));

const Category = styled.h3(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.semibold,
}));

const Tags = styled.span(({ theme }) => ({
  color: theme.colors.font.muted,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.medium,
  textTransform: "uppercase",
}));

const skills = [
  {
    category: "Languages",
    tags: ["React", "TypeScript", "JavaScript", "HTML"],
  },
  {
    category: "Styling",
    tags: ["Styled Components", "StyleX", "Tailwind", "Sass", "CSS Modules"],
  },
  {
    category: "Design systems",
    tags: ["Design Tokens", "Component APIs", "Accessibility", "SVG", "Figma"],
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

export function Skills() {
  return (
    <PageGridSection id="skills">
      <SectionContent>
        <SectionHeader>Skills</SectionHeader>
        {skills.map((skill) => (
          <Row key={skill.category}>
            <Category>{skill.category}</Category>
            <Tags>{skill.tags.join(" · ")}</Tags>
          </Row>
        ))}
      </SectionContent>
    </PageGridSection>
  );
}
