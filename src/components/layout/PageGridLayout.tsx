import type { ReactNode } from "react";
import styled from "styled-components";

interface PageGridLayoutProps {
  children: ReactNode;
}

const Grid = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background.night,
  columnGap: "1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
}));

export const PageGridSection = styled.section(({ theme }) => ({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
  minHeight: "100vh",
  padding: theme.spacing["40"],
  scrollSnapAlign: "center",
  scrollSnapStop: "always",
}));

export const SectionContent = styled.div(() => ({
  gridColumn: "1 / -1",
}));

export function PageGridLayout({ children }: PageGridLayoutProps) {
  return <Grid>{children}</Grid>;
}
