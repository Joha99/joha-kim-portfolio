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
  borderRadius: theme.radii["2xl"],
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
          I care about component architecture just as much as visual polish, and
          I believe the best interfaces come from sweating the details down to
          the pixel. My process is driven by experimentation: start with a
          concept, build the framework, and iterate until every interaction
          feels intentional.
        </Bio>
      </Content>
    </PageGridSection>
  );
}
