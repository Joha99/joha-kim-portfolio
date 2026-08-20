import type { ReactNode } from "react";
import styled from "styled-components";

interface PageGridLayoutProps {
  children: ReactNode;
}

const Grid = styled.div(() => ({
  display: "grid",
  gridTemplateColumns:
    "1fr repeat(12, minmax(0, calc((1200px - 11 * 1.5rem) / 12))) 1fr",
  columnGap: "1.5rem",
}));

export const PageGridSection = styled.section(() => ({
  display: "grid",
  gridTemplateColumns: "subgrid",
  gridColumn: "1 / -1",
}));

export function PageGridLayout({ children }: PageGridLayoutProps) {
  return <Grid>{children}</Grid>;
}
