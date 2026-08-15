import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { FeaturedDrop } from "@/components/home/featured-drop";
import { StatsStrip } from "@/components/home/stats-strip";
import { BrandStory } from "@/components/home/brand-story";
import { AcademyGateway } from "@/components/home/academy-gateway";
import { AcademyTeaser } from "@/components/home/academy-teaser";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { CtaBanner } from "@/components/home/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedDrop />
      <StatsStrip />
      <BrandStory />
      <AcademyGateway />
      <AcademyTeaser />
      <InstagramFeed />
      <CtaBanner />
    </>
  );
}
