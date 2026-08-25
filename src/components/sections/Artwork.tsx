import styled from "styled-components";

import { PageGridSection, SectionContent } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const MasonryGrid = styled.div(({ theme }) => ({
  columnCount: 2,
  columnGap: theme.spacing["24"],
  marginTop: theme.spacing["40"],
}));

const Card = styled.div(({ theme }) => ({
  breakInside: "avoid",
  marginBottom: theme.spacing["24"],
}));

const ImageSlot = styled.div<{ $height: string }>(({ theme, $height }) => ({
  backgroundColor: theme.colors.border.subtle,
  borderRadius: theme.radii.xl,
  height: $height,
}));

const CardTitle = styled.h3(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.semibold,
  marginTop: theme.spacing["12"],
}));

const Tags = styled.div(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  display: "flex",
  flexWrap: "wrap",
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.xs,
  gap: theme.spacing["8"],
  marginTop: theme.spacing["8"],
}));

const Tag = styled.span(({ theme }) => ({
  backgroundColor: theme.colors.border.inverse,
  borderRadius: theme.radii.full,
  padding: `${theme.spacing["4"]} ${theme.spacing["12"]}`,
}));

const artworks = [
  { id: 1, title: "Artwork 1", height: "320px", tags: ["Illustration", "Digital"] },
  { id: 2, title: "Artwork 2", height: "420px", tags: ["3D", "Motion"] },
  { id: 3, title: "Artwork 3", height: "280px", tags: ["Typography", "Print"] },
  { id: 4, title: "Artwork 4", height: "380px", tags: ["Illustration", "Branding"] },
  { id: 5, title: "Artwork 5", height: "300px", tags: ["Digital", "UI"] },
  { id: 6, title: "Artwork 6", height: "450px", tags: ["3D", "Rendering"] },
];

export function Artwork() {
  return (
    <PageGridSection id="artwork" style={{ minHeight: "auto", scrollSnapAlign: "start" }}>
      <SectionContent>
        <SectionHeader>Craft & Motion</SectionHeader>
        <MasonryGrid>
          {artworks.map((item) => (
            <Card key={item.id}>
              <ImageSlot $height={item.height} />
              <CardTitle>{item.title}</CardTitle>
              <Tags>
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </Card>
          ))}
        </MasonryGrid>
      </SectionContent>
    </PageGridSection>
  );
}
