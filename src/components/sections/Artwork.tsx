import styled from "styled-components";

import {
  PageGridSection,
  SectionContent,
} from "@/components/layout/PageGridLayout";

const artworks = [
  {
    id: 1,
    title: "Portrait Study I",
    src: "/images/artwork/digital-art-1.png",
    height: "550px",
    tags: ["Procreate", "Digital", "Portrait"],
  },
  {
    id: 2,
    title: "Portrait Study II",
    src: "/images/artwork/digital-art-2.png",
    height: "500px",
    tags: ["Procreate", "Digital", "Portrait"],
  },
  {
    id: 3,
    title: "Portrait Study III",
    src: "/images/artwork/digital-art-3.png",
    height: "600px",
    tags: ["Procreate", "Digital", "Portrait"],
  },
  {
    id: 4,
    title: "Portrait Study IV",
    src: "/images/artwork/digital-art-4.png",
    height: "520px",
    tags: ["Procreate", "Digital", "Portrait"],
  },
  {
    id: 5,
    title: "Portrait Study V",
    src: "/images/artwork/digital-art-5.png",
    height: "500px",
    tags: ["Procreate", "Digital", "Portrait"],
  },
  {
    id: 6,
    title: "Mountain Lake",
    src: "/images/artwork/painting-1.png",
    height: "630px",
    rotate: "2deg",
    tags: ["Oil", "Landscape"],
  },
  {
    id: 7,
    title: "Viking Ship",
    src: "/images/artwork/painting-2.png",
    height: "650px",
    tags: ["Oil", "Seascape"],
  },
  {
    id: 8,
    title: "The Couple",
    src: "/images/artwork/painting-3.jpg",
    height: "650px",
    tags: ["Oil", "Figurative"],
  },
];

const Section = styled(PageGridSection)(() => ({
  minHeight: "auto",
  scrollSnapAlign: "start",
}));

const Header = styled.h2(({ theme }) => ({
  color: theme.colors.font.inverse,
  fontFamily: theme.fonts.display,
  fontSize: theme.fontSizes["5xl"],
  fontWeight: theme.fontWeights.bold,
  marginBottom: theme.spacing["40"],
}));

const MasonryGrid = styled.div(({ theme }) => ({
  columnCount: 3,
  columnGap: theme.spacing["24"],
}));

const Card = styled.div(() => ({
  breakInside: "avoid",
}));

const ImageWrapper = styled.div<{ $height: string }>(({ theme, $height }) => ({
  borderRadius: theme.radii.sm,
  height: $height,
  overflow: "hidden",
}));

const CardImage = styled.img<{ $rotate?: string }>(({ $rotate }) => ({
  display: "block",
  filter: "contrast(1.1)",
  height: "100%",
  objectFit: "cover",
  transform: $rotate ? `rotate(${$rotate}) scale(1.08)` : undefined,
  width: "100%",
}));

const CardBody = styled.div(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  paddingBlock: theme.spacing["12"],
}));

const CardTitle = styled.h3(({ theme }) => ({
  fontSize: theme.fontSizes.lg,
  fontWeight: theme.fontWeights.bold,
  textTransform: "uppercase",
}));

const Tags = styled.div(({ theme }) => ({
  color: theme.colors.font.inverseMuted,
  display: "flex",
  flexWrap: "wrap",
  fontFamily: theme.fonts.mono,
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.bold,
  textTransform: "lowercase",
}));

export function Artwork() {
  return (
    <Section id="artwork">
      <SectionContent>
        <Header>Craft & Motion</Header>
        <MasonryGrid>
          {artworks.map((item) => (
            <Card key={item.id}>
              <ImageWrapper $height={item.height}>
                <CardImage
                  src={item.src}
                  alt={item.title}
                  $rotate={item.rotate}
                />
              </ImageWrapper>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <Tags>{item.tags.join(" | ")}</Tags>
              </CardBody>
            </Card>
          ))}
        </MasonryGrid>
      </SectionContent>
    </Section>
  );
}
