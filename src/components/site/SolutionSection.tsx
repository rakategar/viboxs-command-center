import { useState } from "react";
import { Globe, Cpu, LayoutDashboard, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const solutions: {
  icon: LucideIcon;
  title: string;
  description: string;
  uses: string[];
}[] = [
  {
    icon: Globe,
    title: "Premium Website",
    description:
      "Website yang dirancang untuk membuat bisnis terlihat lebih kredibel, menjelaskan value dengan jelas, dan mengarahkan visitor menuju tindakan yang tepat.",
    uses: ["Company profile", "Landing page", "Startup launch page", "Brand website", "Service website"],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description:
      "Otomatisasi proses manual seperti lead response, form handling, follow-up, notifikasi, data entry, dan workflow internal agar bisnis bergerak lebih efisien.",
    uses: ["Auto response", "Lead routing", "Form to database", "WhatsApp / email workflow", "Task notification"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Internal System",
    description:
      "Sistem visual untuk memantau data penting seperti leads, project, payment, status operasional, dan aktivitas tim dalam satu command center.",
    uses: ["Project dashboard", "Client dashboard", "Management dashboard", "Internal tracker", "Operating system"],
  },
  {
    icon: Rocket,
    title: "Growth-Ready Foundation",
    description:
      "Struktur digital yang tidak hanya terlihat bagus saat launch, tetapi juga bisa dikembangkan ke automation, AI, dashboard, dan sistem yang lebih kompleks.",
    uses: ["Startup validation", "Growth support", "System expansion", "Process optimization"],
  },
];

export function SolutionSection() {
  const [active, setActive] = useState(0);
  const ActiveIcon = solutions[active].icon;

  return (
    <section className="relative pb-24 pt-6 sm:pb-32 sm:pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="02 · WHAT VIBOXS BUILDS"
          title={
            <>
              VIBOXS builds the digital foundation behind{" "}
              <span className="text-gradient">serious businesses.</span>
            </>
          }
          subtitle="Kami tidak hanya membuat tampilan. Kami membantu menyusun struktur digital yang lebih siap dipakai, dipercaya, dan dikembangkan."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="grid gap-3">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                type="button"
                key={s.title}
                onClick={() => setActive(i)}
                className={`group relative rounded-2xl p-5 text-left transition-all duration-500 hover:-translate-y-0.5 ${active === i ? "glass-strong ring-1 ring-primary/35" : "glass hover:bg-white/[0.05]"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/30">
                    <Icon className="h-5 w-5 text-primary-glow" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {s.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
          </div>

          <article className="relative min-h-[420px] overflow-hidden rounded-3xl glass-strong p-7 glow-ring">
            <div className="absolute inset-0 grid-cosmos opacity-35" />
            <div className="absolute right-[-12%] top-[-20%] h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-aurora)] shadow-[var(--shadow-glow-sm)]">
                  <ActiveIcon className="h-7 w-7 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-foreground">
                  {solutions[active].title}
                </h3>
                <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {solutions[active].description}
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-background/30 p-5">
                <div className="mb-4 font-mono text-[10px] tracking-[0.3em] text-primary-glow">MISSION STACK</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {solutions[active].uses.map((u) => (
                    <span key={u} className="rounded-full bg-white/[0.05] px-3 py-2 text-[11px] font-mono tracking-wider text-foreground/80">
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
