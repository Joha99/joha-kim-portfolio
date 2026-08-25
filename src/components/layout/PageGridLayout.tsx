import type { ReactNode } from "react";
import styled from "styled-components";

interface PageGridLayoutProps {
  children: ReactNode;
}

const Grid = styled.div(() => ({
  backgroundColor: "#FFF8F0",
  columnGap: "1.5rem",
  display: "grid",
  gridTemplateColumns:
    "1fr repeat(12, minmax(0, calc((1000px - 11 * 1.5rem) / 12))) 1fr",
}));

export const PageGridSection = styled.section(({ theme }) => ({
  display: "grid",
  gridColumn: "1 / -1",
  gridTemplateColumns: "subgrid",
  paddingBlock: theme.spacing["64"],
}));

export function PageGridLayout({ children }: PageGridLayoutProps) {
  return <Grid>{children}</Grid>;
}
