import { useEffect, useRef, useState } from "react";
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
  backgroundColor: theme.colors.background.night,
  borderBottom: `1px solid ${theme.colors.border.subtle}`,
  flex: 1,
  overflow: "hidden",
  "&:first-of-type": {
    borderTop: `1px solid ${theme.colors.border.subtle}`,
  },
}));

const MarqueeTrack = styled.div<{ $offset: number; $duration: number }>(
  ({ $offset, $duration }) => [
    $offset > 0 &&
      css`
        animation: ${keyframes`
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-${$offset}px, 0, 0); }
        `} ${$duration}s linear infinite;
      `,
    {
      display: "flex",
      height: "100%",
      willChange: "transform",
    },
  ],
);

const MarqueeSvg = styled.svg(() => ({
  display: "block",
  flexShrink: 0,
  height: "100%",
  width: "auto",
}));

const SvgText = styled.text(({ theme }) => ({
  fill: theme.colors.font.inverseMuted,
  fontFamily: theme.fonts.pixel,
  fontWeight: theme.fontWeights.normal,
}));

function SkillRow({ text, duration }: { text: string; duration: number }) {
  const textRef = useRef<SVGTextElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [viewBox, setViewBox] = useState<string | null>(null);
  const [copyWidth, setCopyWidth] = useState(0);

  const displayText = text.toUpperCase();

  useEffect(() => {
    const measure = () => {
      if (!textRef.current) return;
      const bbox = textRef.current.getBBox();
      const pad = 4;
      setViewBox(
        `${bbox.x - pad} ${bbox.y - pad} ${bbox.width + pad * 2} ${bbox.height + pad * 2}`,
      );
    };
    document.fonts.ready.then(measure);
  }, [displayText]);

  useEffect(() => {
    if (!viewBox || !rowRef.current) return;
    const svg = rowRef.current.querySelector("svg");
    if (svg) {
      setCopyWidth(svg.getBoundingClientRect().width);
    }
  }, [viewBox]);

  return (
    <Row ref={rowRef}>
      <MarqueeTrack $offset={copyWidth} $duration={duration}>
        {[0, 1, 2].map((i) => (
          <MarqueeSvg
            key={i}
            viewBox={viewBox ?? "0 0 1000 100"}
            preserveAspectRatio="xMinYMid meet"
          >
            <SvgText
              ref={i === 0 ? textRef : undefined}
              x="0"
              dominantBaseline="hanging"
              fontSize="100"
            >
              {displayText}
            </SvgText>
          </MarqueeSvg>
        ))}
      </MarqueeTrack>
    </Row>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <Content>
        {skills.map((skill) => {
          const text = " " + skill.tags.join(" · ") + " · ";
          const duration = text.length * 0.6;
          return (
            <SkillRow key={skill.category} text={text} duration={duration} />
          );
        })}
      </Content>
    </Section>
  );
}
