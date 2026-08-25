import styled from "styled-components";

interface SectionHeaderProps {
  children: React.ReactNode;
}

const Heading = styled.h2(({ theme }) => ({
  fontFamily: theme.fonts.display,
  color: theme.colors.font.inverse,
  fontSize: theme.fontSizes["5xl"],
  fontWeight: theme.fontWeights.semibold,
  marginBottom: theme.spacing["40"],
}));

export function SectionHeader({ children }: SectionHeaderProps) {
  return <Heading>{children}</Heading>;
}
