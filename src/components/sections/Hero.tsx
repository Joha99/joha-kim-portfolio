import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(({ theme }) => ({
  height: "calc(100vh - (2 * 8px))",
  padding: theme.spacing["12"],
}));

const Content = styled.div(() => ({
  display: "grid",
  gridColumn: "2 / -2",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  height: "100%",
}));

const Title = styled.h3(({ theme }) => ({
  alignSelf: "start",
  color: theme.colors.font.muted,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
}));

const Location = styled.h3(({ theme }) => ({
  alignItems: "end",
  alignSelf: "start",
  color: theme.colors.font.muted,
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "4 / 5",
  gridRow: "1 / 2",
  textAlign: "right",
}));

const Name = styled.h1(({ theme }) => ({
  fontFamily: theme.fonts.mono,
  fontSize: "150px",
  gridColumn: "1 / -1",
  gridRow: "2 / 4",
  placeSelf: "center",
}));

const HeroText = styled.h2(({ theme }) => ({
  alignSelf: "end",
  color: theme.colors.font.muted,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes["3xl"],
  fontWeight: theme.fontWeights.hero,
  gridColumn: "1 / 4",
  gridRow: "4 / 5",
}));

export function Hero() {
  return (
    <Section>
      <Content>
        <Title>
          <span>ARTIST &</span>
          <br />
          <span>ENGINEER</span>
        </Title>
        <Location>
          <span>WASHINGTON, DC</span>
          <span>USA</span>
        </Location>
        <Name>joha kim</Name>
        <HeroText>
          <span>Crafting and engineering</span>
          <br />
          <span>pixel-perfect UI and delightful interactions</span>
          <br />
          <span>with a touch of whimsy.</span>
        </HeroText>
      </Content>
    </Section>
  );
}
