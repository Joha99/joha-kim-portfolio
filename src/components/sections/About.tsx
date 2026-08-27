import styled from "styled-components";

import {
  PageGridSection,
  SectionContent,
} from "@/components/layout/PageGridLayout";

const Content = styled(SectionContent)(({ theme }) => ({
  alignContent: "center",
  columnGap: theme.spacing["24"],
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  height: "100%",
}));

const Intro = styled.h3(({ theme }) => ({
  alignItems: "end",
  alignSelf: "start",
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes["4xl"],
  fontWeight: theme.fontWeights.bold,
  gap: theme.spacing["8"],
  textTransform: "uppercase",

  "& > span": {
    backgroundColor: theme.colors.accent.ember,
    color: theme.colors.font.inverse,
    lineHeight: 1,
  },
}));

const PhotoWrapper = styled.div(({ theme }) => ({
  alignSelf: "center",
  borderRadius: theme.radii["lg"],
  overflow: "hidden",
}));

const Photo = styled.img(() => ({
  display: "block",
  height: "100%",
  objectFit: "cover",
  width: "100%",
}));

const Bio = styled.p(({ theme }) => ({
  alignSelf: "end",
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes.xl,
  fontWeight: theme.fontWeights.medium,
  width: "80%",
}));

export function About() {
  return (
    <PageGridSection id="about">
      <Content>
        <Intro>
          <span>Engineer</span>
          <span>at the intersection of</span>
          <span>design and code</span>
        </Intro>
        <PhotoWrapper>
          <Photo src="/images/profile-photo.jpg" alt="Joha Kim" />
        </PhotoWrapper>
        <Bio>
          I'm Joha, a software engineer from Seoul based in DC. I studied
          computer science at Georgia Tech and spent four years at HubSpot
          owning Trellis, the design system behind their enterprise products. I
          obsess over component architecture and visual craft equally, and I
          believe the best interfaces come from sweating every detail down to
          the pixel.
        </Bio>
      </Content>
    </PageGridSection>
  );
}
