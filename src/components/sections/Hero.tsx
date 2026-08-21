import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const Section = styled(PageGridSection)(() => ({
  backgroundColor: "white",
  height: "calc(100vh - 4rem)",
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
  fontSize: theme.fontSizes["xl"],
  fontWeight: "normal",
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
}));

const Location = styled.h3(({ theme }) => ({
  alignSelf: "start",
  fontSize: theme.fontSizes["xl"],
  fontWeight: "normal",
  gridColumn: "4 / 5",
  gridRow: "1 / 2",
  textAlign: "right",
}));

const Name = styled.h1(({ theme }) => ({
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes["6xl"],
  gridColumn: "1 / -1",
  gridRow: "2 / 4",
  placeSelf: "center",
  transform: "translateY(-4rem)",
}));

const HeroText = styled.h2(({ theme }) => ({
  alignSelf: "start",
  fontSize: theme.fontSizes["3xl"],
  fontWeight: "normal",
  gridColumn: "1 / 3",
  gridRow: "4 / 5",
  textTransform: "uppercase",
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
        <Location>WASHINGTON, D.C.</Location>
        <Name>JOHA KIM</Name>
        <HeroText>
          Pixel-perfect UI, delightful interactions, and a touch of whimsy.
        </HeroText>
      </Content>
    </Section>
  );
}
