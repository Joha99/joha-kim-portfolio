import styled from "styled-components";

interface SectionHeaderProps {
  children: React.ReactNode;
}

const Heading = styled.h2(({ theme }) => ({
  fontSize: theme.fontSizes["5xl"],
  fontWeight: theme.fontWeights.bold,
  textTransform: "uppercase",
}));

export function SectionHeader({ children }: SectionHeaderProps) {
  return <Heading>{children}</Heading>;
}
