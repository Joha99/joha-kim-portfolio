import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const StyledHeader = styled(PageGridSection).attrs({ as: "header" })(
  ({ theme }) => ({
    alignItems: "center",
    display: "flex",
    fontWeight: theme.fontWeights.medium,
    height: "4rem",
    justifyContent: "center",
    left: 0,
    minHeight: "auto",
    paddingBlock: 0,
    position: "fixed",
    right: 0,
    scrollSnapAlign: "none",
    top: theme.spacing["8"],
    zIndex: 100,
  }),
);

const Nav = styled.nav(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.colors.accent.cobalt,
  borderRadius: theme.radii.sm,
  color: theme.colors.font.inverse,
  display: "flex",
  fontWeight: theme.fontWeights.bold,
  gridColumn: "2 / -2",
  justifyContent: "space-between",
  padding: theme.spacing["12"],
}));

const Links = styled.ul(({ theme }) => ({
  display: "flex",
  gap: theme.spacing["24"],
  listStyle: "none",
}));

const Link = styled.a(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  fontSize: theme.fontSizes.xs,
  gap: theme.spacing["2"],
}));

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ARTWORK", href: "#artwork" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Links>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <li>{link.label}</li>
              <ArrowTopRightIcon />
            </Link>
          ))}
        </Links>
      </Nav>
    </StyledHeader>
  );
}
