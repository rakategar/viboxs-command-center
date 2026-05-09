import { UserCheck, Workflow, Sparkles, Layers, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useStaggerReveal, useReveal } from "@/hooks/useReveal";

const blocks: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: UserCheck,
    title: "Handled Directly by Commander Dede",
    body: "Setiap project dimulai dari pemahaman kebutuhan bisnis. Commander Dede membantu membaca arah project, bukan hanya meneruskan brief mentah ke tim.",
  },
  {
    icon: Workflow,
    title: "Structured Mission Process",
    body: "Scope, timeline, revisi, dan handover dibuat lebih jelas agar client merasa aman dari awal sampai launch.",
  },
  {
    icon: Sparkles,
    title: "Premium Visual Direction",
    body: "Website tidak hanya dibuat rapi, tetapi diarahkan agar terasa lebih meyakinkan, brand-oriented, dan layak dipresentasikan ke market.",
  },
  {
    icon: Layers,
    title: "Ready for Automation & AI Expansion",
    body: "Project bisa dimulai dari website, lalu berkembang ke automation, dashboard, AI integration, atau internal system ketika bisnis membutuhkan.",
  },
  {
    icon: ShieldCheck,
    title: "Built with Serious Execution Standard",
    body: "Kami menjaga project agar tidak berjalan liar. Setiap keputusan desain, fitur, dan struktur diarahkan pada kebutuhan bisnis yang jelas.",
  },
];

export function WhyViboxsSection() {
  const grid1Ref = useStaggerReveal<HTMLDivElement>();
  const grid2Ref = useStaggerReveal<HTMLDivElement>();
  const quoteRef = useReveal<HTMLElement>();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="03 · WHY VIBOXS"
          title={
            <>
              Why founders choose VIBOXS{" "}
              <span className="text-gradient">before they launch.</span>
            </>
          }
          subtitle="Karena project digital yang serius butuh lebih dari sekadar desain bagus. Ia butuh arah, proses, scope, dan partner yang bisa menjaga momentum."
        />

        <div className="mt-14 space-y-5">
          <div ref={grid1Ref} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 stagger-reveal">
            {blocks.slice(0, 3).map((b) => {
              const Icon = b.icon;
              return (
                <article
                  key={b.title}
                  className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                    <Icon className="h-5 w-5 text-primary-glow" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </article>
              );
            })}
          </div>
          <div ref={grid2Ref} className="grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-[66%] stagger-reveal">
            {blocks.slice(3).map((b) => {
              const Icon = b.icon;
              return (
                <article
                  key={b.title}
                  className="glass rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                    <Icon className="h-5 w-5 text-primary-glow" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <blockquote ref={quoteRef} className="mx-auto mt-14 max-w-3xl glass-strong rounded-3xl p-8 sm:p-10 text-center reveal">
          <p className="font-display text-xl sm:text-2xl leading-relaxed text-foreground/95">
            "Kami tidak melihat website sebagai file yang selesai lalu
            ditinggal. Kami melihatnya sebagai{" "}
            <span className="text-gradient">fondasi digital</span> yang bisa
            tumbuh bersama bisnis Anda."
          </p>
          <div className="mt-5 font-mono text-[11px] tracking-[0.3em] text-primary-glow">
            COMMANDER DEDE · VIBOXS BASECAMP
          </div>
        </blockquote>
      </div>
    </section>
  );
}
