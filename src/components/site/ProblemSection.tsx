import {
  ShieldAlert,
  Inbox,
  Clock,
  Repeat,
  LayoutDashboard,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const problems: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldAlert,
    title: "Website belum membangun trust",
    body: "Bisnis terlihat menarik di sosial media, tetapi saat calon client mencari informasi lebih serius, website belum cukup meyakinkan.",
  },
  {
    icon: Inbox,
    title: "Leads masih tercecer",
    body: "Prospek masuk dari banyak jalur, tetapi follow-up masih manual, lambat, dan sulit dipantau.",
  },
  {
    icon: Clock,
    title: "Launch terasa terburu-buru",
    body: "Founder ingin cepat tampil, tetapi tetap butuh hasil yang rapi, bukan website asal jadi.",
  },
  {
    icon: Repeat,
    title: "Workflow masih repetitif",
    body: "Tim mengulang pekerjaan yang sama setiap hari: input data, balas inquiry, follow-up, kirim notifikasi, dan update status.",
  },
  {
    icon: LayoutDashboard,
    title: "Tidak ada dashboard",
    body: "Owner sulit melihat gambaran besar: lead, project, payment, status, dan performa operasional.",
  },
  {
    icon: AlertTriangle,
    title: "Vendor sebelumnya tidak memberi rasa aman",
    body: "Scope tidak jelas, revisi liar, timeline kabur, dan proses tidak terasa profesional.",
  },
];

export function ProblemSection() {
  return (
    <section className="cinematic-section relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="01 · FOUNDER PAIN RADAR"
              title={
                <>
                  Banyak bisnis punya ide bagus, tapi{" "}
                  <span className="text-gradient">sistem digitalnya belum siap.</span>
                </>
              }
              subtitle="Masalahnya sering bukan hanya desain. Momentum hilang ketika website, workflow, dan sistem internal belum mendukung pertumbuhan."
            />
            <div className="relative mt-10 hidden aspect-square max-w-md overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,oklch(1_0_0/0.06),transparent_64%)] lg:block">
              <div className="absolute inset-8 rounded-full border border-primary/15" />
              <div className="absolute inset-20 rounded-full border border-primary/20" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
              <div className="absolute inset-0 radar-sweep opacity-70" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full glass-strong grid place-items-center font-mono text-[10px] tracking-[0.24em] text-primary-glow text-center">PAIN<br />RADAR</div>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.title}
                  className="group hover-spotlight relative glass rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 transition group-hover:shadow-[var(--shadow-glow-sm)]">
                      <Icon className="h-5 w-5 text-primary-glow" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2 group-hover:line-clamp-none">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
