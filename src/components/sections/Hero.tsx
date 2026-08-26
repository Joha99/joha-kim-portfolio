import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(({ theme }) => ({
  height: "calc(100vh - (2 * 8px))",
  padding: theme.spacing["20"],
}));

const Content = styled.div(() => ({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  height: "100%",
}));

const Title = styled.h3(({ theme }) => ({
  alignSelf: "start",
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
  color: theme.colors.accent.volt,
}));

const Location = styled.h3(({ theme }) => ({
  alignItems: "end",
  alignSelf: "start",
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "4 / 5",
  gridRow: "1 / 2",
  textAlign: "right",
  color: theme.colors.accent.volt,
}));

const HeroText = styled.h2(({ theme }) => ({
  alignSelf: "end",
  fontFamily: theme.fonts.sans,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.semibold,
  textTransform: "uppercase",
  gridColumn: "1 / 2",
  gridRow: "3 / 5",
  textAlign: "left",
  color: theme.colors.accent.volt,
}));

const Name = styled.h1(({ theme }) => ({
  alignSelf: "end",
  color: theme.colors.font.secondary,
  fontFamily: theme.fonts.display,
  fontSize: "150px",
  gridColumn: "2 / 5",
  gridRow: "3 / 5",
  lineHeight: 1,
  textAlign: "right",
}));

export function Hero() {
  return (
    <Section>
      <Content>
        <Title>ARTIST & ENGINEER</Title>
        <Location>WASHINGTON, DC</Location>
        <HeroText>
          <span>Crafting and engineering</span>
          <br />
          <span>pixel-perfect UI and delightful interactions</span>
        </HeroText>
        <Name>JOHA KIM</Name>
      </Content>
    </Section>
  );
}
