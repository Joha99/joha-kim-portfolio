import styled from "styled-components";

const StyledHeader = styled.header(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
}));

const Nav = styled.nav(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "64rem",
  height: "4rem",
  margin: "0 auto",
  padding: "0 1.5rem",
}));

const Logo = styled.a(() => ({
  fontSize: "1.125rem",
  fontWeight: 600,
  letterSpacing: "-0.02em",
}));

const Links = styled.ul(() => ({
  display: "flex",
  gap: "0.25rem",
  listStyle: "none",
}));

const Link = styled.a(({ theme }) => ({
  padding: "0.5rem 0.75rem",
  fontSize: "0.875rem",
  borderRadius: "0.375rem",
  transition: "background 0.15s",
  "&:hover": {
    background: theme.colors.surface,
  },
}));

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">Joha Kim</Logo>
        <Links>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </Links>
      </Nav>
    </StyledHeader>
  );
}
