import type { ReactNode } from "react";
import styled from "styled-components";

interface PageGridLayoutProps {
  children: ReactNode;
}

const Grid = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background.warm,
  columnGap: "1.5rem",
  display: "grid",
  gridTemplateColumns:
    "1fr repeat(12, minmax(0, calc((1200px - 11 * 1.5rem) / 12))) 1fr",
}));

export const PageGridSection = styled.section(({ theme }) => ({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
  minHeight: "100vh",
  paddingBlock: theme.spacing["80"],
  scrollSnapAlign: "center",
  scrollSnapStop: "always",
}));

export const SectionContent = styled.div(() => ({
  gridColumn: "2 / -2",
}));

export function PageGridLayout({ children }: PageGridLayoutProps) {
  return <Grid>{children}</Grid>;
}
