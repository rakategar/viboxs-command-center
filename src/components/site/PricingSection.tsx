import { ArrowUpRight, Info } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { whatsappLink } from "@/lib/contact";
import { useStaggerReveal } from "@/hooks/useReveal";

const plans = [
  {
    name: "VIBOXS Core Website",
    price: "Start from Rp 4.900.000",
    forWho:
      "Website premium entry-level untuk bisnis yang ingin tampil lebih serius.",
    includes: [
      "Premium website structure",
      "Up to agreed page scope",
      "Visual direction",
      "Contact / WhatsApp integration",
      "Basic SEO setup",
      "Managed launch",
      "Structured review",
    ],
    cta: "Konsultasi Core Website",
    msg: "Halo Commander, saya tertarik konsultasi VIBOXS Core Website (start Rp 4.9jt).",
    highlight: false,
  },
  {
    name: "VIBOXS Growth Website",
    price: "Start from Rp 7.500.000",
    forWho:
      "Startup, founder, personal brand premium, dan bisnis growing.",
    includes: [
      "Deeper user journey",
      "Stronger messaging",
      "Premium UI sections",
      "Conversion-focused structure",
      "Portfolio / proof section",
      "Growth-ready structure",
    ],
    cta: "Konsultasi Growth Website",
    msg: "Halo Commander, saya tertarik konsultasi VIBOXS Growth Website (start Rp 7.5jt).",
    highlight: true,
  },
  {
    name: "Automation Basic",
    price: "Start from Rp 3.500.000",
    forWho:
      "Workflow otomatis sederhana untuk mengurangi pekerjaan manual.",
    includes: [
      "Simple workflow automation",
      "Form / data routing",
      "Notification flow",
      "Basic monitoring",
      "Workflow documentation",
    ],
    cta: "Konsultasi Automation",
    msg: "Halo Commander, saya tertarik konsultasi Automation Basic (start Rp 3.5jt).",
    highlight: false,
  },
  {
    name: "Automation Growth",
    price: "Start from Rp 6.500.000",
    forWho: "Workflow multi-step dengan kebutuhan lebih serius.",
    includes: [
      "Multi-step automation",
      "Lead handling flow",
      "Database connection",
      "Dashboard-ready structure",
      "Testing and refinement",
    ],
    cta: "Konsultasi Automation Growth",
    msg: "Halo Commander, saya tertarik konsultasi Automation Growth (start Rp 6.5jt).",
    highlight: false,
  },
  {
    name: "AI / Dashboard / Custom System",
    price: "Start from Rp 10.000.000",
    forWho:
      "Custom dashboard, AI workflow, internal system, atau kebutuhan digital yang lebih kompleks.",
    includes: [
      "Custom requirement mapping",
      "System architecture",
      "Dashboard / internal tools",
      "AI layer if needed",
      "Integration planning",
      "Custom quotation",
    ],
    cta: "Konsultasi Custom System",
    msg: "Halo Commander, saya tertarik konsultasi AI / Dashboard / Custom System.",
    highlight: false,
  },
];

export function PricingSection() {
  const grid1Ref = useStaggerReveal<HTMLDivElement>();
  const grid2Ref = useStaggerReveal<HTMLDivElement>();

  const renderCard = (p: (typeof plans)[number]) => (
    <article
      key={p.name}
      className={`group relative rounded-3xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] ${
        p.highlight
          ? "glass-strong ring-1 ring-primary/40 shadow-[var(--shadow-glow-sm)]"
          : "glass hover:bg-white/[0.05]"
      }`}
    >
      {p.highlight && (
        <div className="absolute -top-3 left-7 rounded-full bg-[var(--gradient-aurora)] px-3 py-1 text-[10px] font-mono tracking-[0.25em] text-primary-foreground">
          RECOMMENDED
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-foreground">
        {p.name}
      </h3>
      <div className="mt-3 font-display text-2xl font-bold text-gradient">
        {p.price}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {p.forWho}
      </p>
      <ul className="mt-5 grid gap-1.5 text-sm text-foreground/85 flex-1">
        {p.includes.slice(0, 4).map((inc) => (
          <li key={inc} className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-glow" />
            {inc}
          </li>
        ))}
      </ul>
      <details className="mt-3 text-xs text-muted-foreground">
        <summary className="cursor-pointer font-mono tracking-[0.18em] text-primary-glow/90">FULL SCOPE</summary>
        <div className="mt-2 flex flex-wrap gap-2">
          {p.includes.slice(4).map((inc) => (
            <span key={inc} className="rounded-full bg-white/[0.04] px-2.5 py-1">{inc}</span>
          ))}
        </div>
      </details>
      <a
        href={whatsappLink(p.msg)}
        target="_blank"
        rel="noreferrer"
        className={`mt-6 inline-flex items-center justify-between gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all active:scale-[0.97] ${
          p.highlight
            ? "bg-foreground text-background hover:scale-[1.02]"
            : "border border-white/15 text-foreground hover:bg-white/5"
        }`}
      >
        {p.cta}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </article>
  );

  return (
    <section id="pricing" className="cinematic-section relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="05 · PRICING"
          title={
            <>
              Transparent starting price,{" "}
              <span className="text-gradient">flexible by complexity.</span>
            </>
          }
          subtitle="Kami menampilkan harga awal agar Anda punya gambaran. Final scope tetap disesuaikan dengan kebutuhan, fitur, timeline, integrasi, dan tingkat kompleksitas project."
        />

        <div className="mt-14 space-y-5">
          <div ref={grid1Ref} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 stagger-reveal">
            {plans.slice(0, 3).map(renderCard)}
          </div>
          <div ref={grid2Ref} className="grid gap-5 md:grid-cols-2 lg:mx-auto lg:max-w-[66%] stagger-reveal">
            {plans.slice(3).map(renderCard)}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="glass-strong rounded-3xl p-6 sm:p-7">
            <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">PROJECT COMPLEXITY METER</div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="beam-scan h-full w-[78%] rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-glow),var(--violet))] shadow-[var(--shadow-glow-sm)]" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Pages", "Design depth", "Features", "Integrations", "Automation", "AI layer", "Dashboard", "Timeline", "Support"
              ].map((factor) => (
                <span key={factor} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-foreground/80">
                  {factor}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-5 sm:p-6 flex items-start gap-4">
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
              <Info className="h-4 w-4 text-primary-glow" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Harga dapat berubah mengikuti jumlah halaman, fitur, integrasi,
              kebutuhan konten, timeline, kompleksitas sistem, dan level support.
              Setelah konsultasi awal, VIBOXS akan membantu merekomendasikan scope
              paling masuk akal agar project tetap efektif dan tidak membengkak.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
