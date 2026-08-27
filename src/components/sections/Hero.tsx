import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing["20"],
  position: "relative",
}));

const BackgroundImage = styled.img(() => ({
  height: "100%",
  inset: 0,
  mixBlendMode: "screen",
  objectFit: "cover",
  opacity: 0.5,
  pointerEvents: "none",
  position: "absolute",
  width: "100%",
  zIndex: 0,
}));

const Top = styled.div(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  display: "flex",
  fontFamily: theme.fonts.pixel,
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / -1",
  justifyContent: "space-between",
  position: "relative",
  zIndex: 1,
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
  fontFamily: theme.fonts.pixel,
  fontSize: theme.fontSizes["4xl"],
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / -1",
  marginBottom: theme.spacing["20"],
  marginTop: "auto",
  position: "relative",
  textTransform: "uppercase",
  zIndex: 1,
}));

const NameWrapper = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.accent.volt,
  borderRadius: theme.radii.sm,
  position: "relative",
  zIndex: 1,
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
      <BackgroundImage src="/images/hero-background.png" alt="" />
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
        Crafting & engineering
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
