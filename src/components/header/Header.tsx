import styled from "styled-components";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64rem;
  height: 4rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Logo = styled.a`
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Links = styled.ul`
  display: flex;
  gap: 0.25rem;
  list-style: none;
`;

const Link = styled.a`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

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
