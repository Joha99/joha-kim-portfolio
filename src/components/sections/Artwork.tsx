import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { PageGridSection, SectionContent } from "@/components/layout/PageGridLayout";
import { SectionHeader } from "@/components/SectionHeader";

const TrackWrapper = styled.div(() => ({
  gridColumn: "1 / -1",
  overflow: "hidden",
  perspective: "1200px",
}));

const Track = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing["24"],
  overflowX: "auto",
  padding: `${theme.spacing["48"]} ${theme.spacing["64"]}`,
  scrollSnapType: "x mandatory",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const Card = styled.div<{ $opacity: number; $rotateY: number; $scale: number }>(
  ({ theme, $opacity, $rotateY, $scale }) => ({
    backgroundColor: theme.colors.background.primary,
    borderRadius: theme.radii.lg,
    flex: "0 0 280px",
    height: "360px",
    opacity: $opacity,
    scrollSnapAlign: "center",
    transform: `perspective(1200px) rotateY(${$rotateY}deg) scale(${$scale})`,
    transition: "transform 0.3s ease, opacity 0.3s ease",
  }),
);

const artworks = [
  { id: 1, label: "Artwork 1" },
  { id: 2, label: "Artwork 2" },
  { id: 3, label: "Artwork 3" },
  { id: 4, label: "Artwork 4" },
  { id: 5, label: "Artwork 5" },
  { id: 6, label: "Artwork 6" },
  { id: 7, label: "Artwork 7" },
];

function getCardTransform(
  cardEl: HTMLElement,
  trackEl: HTMLElement,
): { opacity: number; rotateY: number; scale: number } {
  const trackRect = trackEl.getBoundingClientRect();
  const cardRect = cardEl.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;
  const cardCenter = cardRect.left + cardRect.width / 2;
  const offset = cardCenter - trackCenter;
  const maxOffset = trackRect.width / 2;
  const normalized = Math.max(-1, Math.min(1, offset / maxOffset));

  return {
    opacity: 1 - Math.abs(normalized) * 0.4,
    rotateY: normalized * -50,
    scale: 1 - Math.abs(normalized) * 0.1,
  };
}

export function Artwork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transforms, setTransforms] = useState(
    artworks.map(() => ({ opacity: 1, rotateY: 0, scale: 1 })),
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const next = cardRefs.current.map((card) => {
        if (!card || !track) return { opacity: 1, rotateY: 0, scale: 1 };
        return getCardTransform(card, track);
      });
      setTransforms(next);
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <PageGridSection id="artwork">
      <SectionContent>
        <SectionHeader>Craft & Motion</SectionHeader>
      </SectionContent>
      <TrackWrapper>
        <Track ref={trackRef}>
          {artworks.map((item, i) => (
            <Card
              key={item.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              $opacity={transforms[i].opacity}
              $rotateY={transforms[i].rotateY}
              $scale={transforms[i].scale}
            >
              {item.label}
            </Card>
          ))}
        </Track>
      </TrackWrapper>
    </PageGridSection>
  );
}
