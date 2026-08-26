import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing["20"],
}));

const Top = styled.div(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  display: "flex",
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / -1",
  justifyContent: "space-between",
}));

const Title = styled.h3(() => ({
  display: "flex",
  flexDirection: "column",
}));

const Location = styled.h3(() => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "right",
}));

const HeroText = styled.h2(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes["3xl"],
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / -1",
  marginBottom: theme.spacing["20"],
  marginTop: "auto",
  textTransform: "uppercase",
}));

const NameWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.accent.volt,
  borderRadius: theme.radii.sm,
}));

const NameSvg = styled.svg(() => ({
  display: "block",
  width: "100%",
}));

const NameText = styled.text(({ theme }) => ({
  fill: theme.colors.font.primary,
  fontFamily: theme.fonts.hero,
  fontWeight: theme.fontWeights.normal,
}));

export function Hero() {
  const textRef = useRef<SVGTextElement>(null);
  const [viewBox, setViewBox] = useState("0 0 1000 100");

  useEffect(() => {
    const measure = () => {
      if (!textRef.current) return;
      const bbox = textRef.current.getBBox();
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      ctx.font = `400 100px 'Bevan', serif`;
      const metrics = ctx.measureText("JOHA KIM");
      const pad = 2;
      const y = -metrics.actualBoundingBoxAscent - pad;
      const h =
        metrics.actualBoundingBoxAscent +
        metrics.actualBoundingBoxDescent +
        pad * 2;
      const padLeft = 3;
      setViewBox(`${bbox.x - padLeft} ${y} ${bbox.width + padLeft} ${h}`);
    };

    document.fonts.ready.then(measure);
  }, []);

  return (
    <Section>
      <Top>
        <Title>
          <span>SOFTWARE ENGINEER</span>
          <span>ARTIST</span>
        </Title>
        <Location>
          <span>SEOUL, KOREA</span>
          <span>WASHINGTON DC, USA</span>
        </Location>
      </Top>
      <HeroText>
        Crafting and engineering
        <br />
        pixel-perfect UI and delightful interactions
      </HeroText>
      <NameWrapper>
        <NameSvg viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
          <NameText ref={textRef} x="0" fontSize="100">
            JOHA KIM
          </NameText>
        </NameSvg>
      </NameWrapper>
    </Section>
  );
}
