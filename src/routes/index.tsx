import { createFileRoute } from "@tanstack/react-router";
import { CosmicBackground } from "@/components/site/CosmicBackground";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { BrandStory } from "@/components/site/BrandStory";
import { Rangers } from "@/components/site/Rangers";
import { MissionFlow } from "@/components/site/MissionFlow";
import { Showcase } from "@/components/site/Showcase";
import { SocialProof } from "@/components/site/SocialProof";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VIBOXS — The First Interstellar Village Agency" },
      {
        name: "description",
        content:
          "VIBOXS is a cinematic AI creative agency where seven elite Rangers execute premium missions for ambitious brands. NASA-grade solutions at village prices.",
      },
      { property: "og:title", content: "VIBOXS — The First Interstellar Village Agency" },
      {
        property: "og:description",
        content:
          "Recruit a Ranger. Launch a mission. A futuristic AI creative command center for ambitious brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <CosmicBackground />
      <Navbar />
      <Hero />
      <BrandStory />
      <Rangers />
      <MissionFlow />
      <Showcase />
      <SocialProof />
      <CTA />
      <Footer />
    </main>
  );
}
