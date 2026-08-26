import styled from "styled-components";

interface SectionHeaderProps {
  children: React.ReactNode;
}

const Heading = styled.h2(({ theme }) => ({
  color: theme.colors.font.inverse,
  fontFamily: theme.fonts.display,
  fontWeight: theme.fontWeights.bold,
  height: "4rem",
  marginBottom: theme.spacing["40"],
}));

export function SectionHeader({ children }: SectionHeaderProps) {
  return <Heading>{children}</Heading>;
}
