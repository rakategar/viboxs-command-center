import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    img: showcase1,
    category: "Ranger Nexus",
    title: "Stellar Analytics OS",
    summary: "A predictive intelligence dashboard for an Indonesian fintech scale-up.",
    metric: "+312% engagement",
  },
  {
    img: showcase2,
    category: "Ranger Forge",
    title: "Lumen Commerce Hub",
    summary: "A cinematic e-commerce experience built for a luxury wellness brand.",
    metric: "4.1× conversion",
  },
  {
    img: showcase3,
    category: "Ranger Flux",
    title: "Atlas Automation Grid",
    summary: "End-to-end AI workflow automating sales, support, and fulfillment.",
    metric: "−240 hrs / month",
  },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
              05 · LAUNCH DOSSIERS
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              Missions
              <br />
              <span className="text-gradient">already in orbit.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            View full archive
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative glass-strong overflow-hidden rounded-3xl glow-ring transition-all duration-500 hover:-translate-y-1 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute left-5 top-5 glass rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.25em] text-primary-glow">
                  {p.category}
                </div>
                <div className="absolute right-5 top-5 glass rounded-full px-3 py-1 text-[11px] font-medium">
                  {p.metric}
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    DOSSIER · {String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="text-xs font-medium text-foreground/80 group-hover:text-primary-glow transition">
                    Open file →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
