import type { ReactNode } from "react";
import styled from "styled-components";

interface PageGridLayoutProps {
  children: ReactNode;
}

const Grid = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  columnGap: "1.5rem",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 1.5rem",
}));

export const PageGridSection = styled.section(() => ({
  display: "grid",
  gridTemplateColumns: "subgrid",
  gridColumn: "1 / -1",
}));

export function PageGridLayout({ children }: PageGridLayoutProps) {
  return <Grid>{children}</Grid>;
}
