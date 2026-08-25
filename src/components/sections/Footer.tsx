import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const StyledFooter = styled(PageGridSection)(({ theme }) => ({
  backgroundColor: theme.colors.background.night,
  color: theme.colors.font.inverse,
}));

const Content = styled.div(() => ({
  display: "grid",
  gridColumn: "2 / -2",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "1fr auto",
  height: "500px",
}));

const CTA = styled.h2(({ theme }) => ({
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
}));

const ListItem = styled.li(() => ({
  textAlign: "right",
}));

const TechStack = styled.p(({ theme }) => ({
  color: theme.colors.font.muted,
  gridColumn: "1 / 5",
  justifySelf: "center",
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
              LinkedIn
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/joha-kim"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </ListItem>
        </List>
        <TechStack>Built with React + TypeScript + Styled Components</TechStack>
      </Content>
    </StyledFooter>
  );
}
