import { ArrowTopRightIcon, SunIcon } from "@radix-ui/react-icons";
import { Toggle } from "radix-ui";
import styled from "styled-components";

import { PageGridSection } from "@/components/layout/PageGridLayout";

const StyledHeader = styled(PageGridSection).attrs({ as: "header" })(() => ({
  backgroundColor: "white",
  height: "4rem",
}));

const Nav = styled.nav(() => ({
  alignItems: "center",
  display: "flex",
  gridColumn: "2 / -2",
  justifyContent: "space-between",
}));

const Links = styled.ul(({ theme }) => ({
  display: "flex",
  gap: theme.spacing[12],
  listStyle: "none",
}));

const Link = styled.a(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  fontSize: theme.fontSizes["xs"],
  gap: theme.spacing["2"],
}));

const ThemeToggleButton = styled(Toggle.Root)(() => ({
  backgroundColor: "transparent",
  border: "none",
  height: "30px",
  width: "30px",
}));

const navLinks = [
  { label: "ABOUT", href: "#about" },
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
        <ThemeToggleButton aria-label="Theme" className="theme-toggle">
          <SunIcon />
        </ThemeToggleButton>
      </Nav>
    </StyledHeader>
  );
}
