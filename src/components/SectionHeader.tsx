import styled from "styled-components";

interface SectionHeaderProps {
  children: React.ReactNode;
}

const Heading = styled.h2(({ theme }) => ({
  fontFamily: theme.fonts.display,
  color: theme.colors.font.inverse,
  fontSize: theme.fontSizes["6xl"],
  fontWeight: theme.fontWeights.semibold,
  // textTransform: "uppercase",
}));

export function SectionHeader({ children }: SectionHeaderProps) {
  return <Heading>{children}</Heading>;
}
