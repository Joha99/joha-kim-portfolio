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
  fontSize: theme.fontSizes["8xl"],
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / 4",
  lineHeight: 1,
}));

const List = styled.ul(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.base,
  gap: theme.spacing["8"],
  gridColumn: "4 / 5",
  listStyleType: "none",
  textTransform: "lowercase",
}));

const ListItem = styled.li(() => ({
  textAlign: "right",
}));

export function Footer() {
  return (
    <StyledFooter id="contact">
      <Content>
        <CTA>Let's build something together.</CTA>
        <List>
          <ListItem>
            <p>3 Tingey Sq SE</p>
            <p>Washington DC 20003</p>
          </ListItem>
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
      </Content>
    </StyledFooter>
  );
}
