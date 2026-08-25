import styled from "styled-components";

import {
  PageGridSection,
  SectionContent,
} from "@/components/layout/PageGridLayout";

const StyledFooter = styled(PageGridSection)(({ theme }) => ({
  backgroundColor: theme.colors.accent.volt,
  color: theme.colors.font.primary,
  minHeight: "auto",
}));

const Content = styled(SectionContent)(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "1fr auto",
  height: "500px",
}));

const CTA = styled.h2(({ theme }) => ({
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes["6xl"],
  fontWeight: theme.fontWeights.normal,
  gridColumn: "1 / 4",
  lineHeight: 1,
}));

const List = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
  gap: theme.spacing["8"],
  gridColumn: "4 / 5",
  listStyleType: "none",
  textTransform: "lowercase",
}));

const ListItem = styled.li(() => ({
  textAlign: "right",
}));

const Address = styled(ListItem)(({ theme }) => ({
  fontWeight: theme.fontWeights.semibold,
}));

const TechStack = styled.p(({ theme }) => ({
  color: theme.colors.font.secondary,
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
  gridColumn: "1 / 5",
  justifySelf: "end",
}));

export function Footer() {
  return (
    <StyledFooter id="contact">
      <Content>
        <CTA>Let's build something together.</CTA>
        <List>
          <Address>
            <p>3 Tingey Sq SE</p>
            <p>Washington DC 20003</p>
          </Address>
          <ListItem>
            <p>+1 571 279 4318</p>
          </ListItem>
          <ListItem>
            <a href="mailto:johakim9936@gmail.com">johakim9936@gmail.com</a>
          </ListItem>
          <ListItem>
            <a
              href="https://linkedin.com/in/joha-kim"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/joha-kim"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </ListItem>
        </List>
        <TechStack>Built with React + TypeScript + Styled Components</TechStack>
      </Content>
    </StyledFooter>
  );
}
