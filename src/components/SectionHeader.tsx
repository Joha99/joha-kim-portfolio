import styled from "styled-components";

interface SectionHeaderProps {
  children: React.ReactNode;
}

const Heading = styled.h2(({ theme }) => ({
  color: theme.colors.font.inverse,
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes["5xl"],
  fontWeight: theme.fontWeights.bold,
}));

export function SectionHeader({ children }: SectionHeaderProps) {
  return <Heading>{children}</Heading>;
}
