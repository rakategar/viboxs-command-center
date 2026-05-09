import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { whatsappLink } from "@/lib/contact";
import { useStaggerReveal } from "@/hooks/useReveal";

const services = [
  {
    name: "VIBOXS Core Website",
    forWho:
      "Bisnis yang butuh website premium entry-level dengan proses lebih rapi dan visual lebih serius.",
    includes: [
      "Premium website structure",
      "Clear page flow",
      "Brand-oriented visual direction",
      "Basic SEO structure",
      "WhatsApp / contact integration",
      "Managed service default",
      "Structured review",
      "Launch support",
    ],
    cta: "Discuss Core Website",
    msg: "Halo Commander, saya tertarik membahas VIBOXS Core Website.",
  },
  {
    name: "VIBOXS Growth Website",
    forWho:
      "Startup, founder, personal brand premium, atau bisnis growing yang membutuhkan website lebih strategis.",
    includes: [
      "Deeper website structure",
      "Stronger messaging flow",
      "Premium UI direction",
      "Conversion-oriented sections",
      "Portfolio / case study support",
      "Launch-ready presentation",
      "Room for system expansion",
    ],
    cta: "Discuss Growth Website",
    msg: "Halo Commander, saya tertarik membahas VIBOXS Growth Website.",
  },
  {
    name: "Automation & AI Workflow",
    forWho:
      "Bisnis yang mulai kewalahan dengan pekerjaan manual dan ingin membuat workflow lebih efisien.",
    includes: [
      "Lead handling automation",
      "Form to database",
      "Follow-up workflow",
      "Notification system",
      "AI-assisted response flow",
      "Operations automation",
    ],
    cta: "Discuss Automation",
    msg: "Halo Commander, saya tertarik membahas Automation & AI Workflow.",
  },
  {
    name: "Dashboard & Custom System",
    forWho:
      "Bisnis yang butuh sistem internal, monitoring, dashboard, atau digital command center.",
    includes: [
      "Management dashboard",
      "Project tracker",
      "Lead tracker",
      "Payment tracker",
      "Internal operating system",
      "AI / automation layer",
      "Custom quotation",
    ],
    cta: "Discuss Custom System",
    msg: "Halo Commander, saya tertarik membahas Dashboard & Custom System.",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const listRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section id="services" className="cinematic-section relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="04 · MISSION OPTIONS"
          title={
            <>
              Choose the mission that{" "}
              <span className="text-gradient">fits your business stage.</span>
            </>
          }
          subtitle="Mulai dari premium website sampai AI automation dan custom dashboard. VIBOXS membantu memilih scope yang paling efektif, bukan yang paling ribet."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
          <div ref={listRef} className="space-y-3 stagger-reveal">
            {services.map((s, i) => (
              <button
                type="button"
                key={s.name}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`group w-full rounded-2xl p-5 text-left transition-all duration-300 active:scale-[0.99] ${
                  active === i ? "glass-strong ring-1 ring-primary/35" : "glass hover:bg-white/[0.05]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">
                      M-{String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                      {s.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-45 group-hover:text-primary-glow" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {s.forWho}
                </p>
              </button>
            ))}
          </div>

          <article className="relative overflow-hidden rounded-3xl glass-strong p-7 glow-ring">
            <div className="absolute inset-0 grid-cosmos opacity-30" />
            <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            {/* key triggers re-mount → replays panel-swap on selection change */}
            <div key={active} className="relative z-10 panel-swap">
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">SERVICE COMMAND CONSOLE</div>
              <h3 className="mt-4 font-display text-3xl font-semibold text-foreground">{selected.name}</h3>
              <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">{selected.forWho}</p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {selected.includes.map((inc) => (
                  <span key={inc} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-foreground/85">
                    {inc}
                  </span>
                ))}
              </div>
              <a
                href={whatsappLink(selected.msg)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:scale-[1.02] hover:shadow-[var(--shadow-glow-sm)] active:scale-[0.98] transition-all"
              >
                {selected.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
