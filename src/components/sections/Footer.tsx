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
  height: "600px",
}));

const CTA = styled.h2(({ theme }) => ({
  fontFamily: theme.fonts.display,
  fontSize: "120px",
  fontWeight: theme.fontWeights.semibold,
  gridColumn: "1 / 3",
  lineHeight: 1,
}));

const List = styled.ul(({ theme }) => ({
  alignSelf: "center",
  display: "flex",
  gap: theme.spacing["8"],
  gridColumn: "3 / -1",
  justifyContent: "space-between",
  listStyleType: "none",
}));

const ListItem = styled.li(({ theme }) => ({
  alignItems: "start",
  display: "flex",
  flexDirection: "column",
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.base,
  textAlign: "right",
  textTransform: "lowercase",
}));

const Category = styled.h3(({ theme }) => ({
  backgroundColor: theme.colors.accent.cobalt,
  borderRadius: theme.radii.sm,
  color: theme.colors.font.inverse,
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes.xl,
  marginBottom: theme.spacing["12"],
  paddingInline: theme.spacing["8"],
}));

export function Footer() {
  return (
    <StyledFooter id="contact">
      <Content>
        <CTA>Let's build something together.</CTA>
        <List>
          <ListItem>
            <Category>Contact</Category>
            <p>+1 571 279 4318</p>
            <a href="mailto:johakim9936@gmail.com">johakim9936@gmail.com</a>
          </ListItem>

          <ListItem>
            <Category>Social</Category>
            <a
              href="https://linkedin.com/in/joha-kim"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <a
              href="https://github.com/joha-kim"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </ListItem>

          <ListItem>
            <Category>Tech stack</Category>
            <p>React</p>
            <p>Styled components</p>
            <p>Vite</p>
            <p>Vercel</p>
          </ListItem>
        </List>
      </Content>
    </StyledFooter>
  );
}
