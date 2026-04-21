import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Play, Sparkles } from "lucide-react";
import heroAstronaut from "@/assets/hero-astronaut.png";

const WHATSAPP_URL =
  "https://wa.me/6282164097066?text=Halo%20Commander%2C%20saya%20ingin%20briefing%20mission%20VIBOXS.";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scroll, setScroll] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setScroll(Math.max(0, -rect.top));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPointer({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  const onPointerLeave = () => setPointer({ x: 0, y: 0 });

  // Parallax (subtle, controlled)
  const bgShift = scroll * 0.18;
  const starsShift = scroll * 0.3;
  const headlineShift = scroll * 0.18;
  const astronautShift = scroll * -0.08;
  const cardsShift = scroll * 0.12;

  // Pointer parallax for astronaut (small, polished)
  const astroX = pointer.x * 14;
  const astroY = pointer.y * 14;

  return (
    <section
      ref={sectionRef}
      id="top"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* Background nebula */}
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{ transform: `translate3d(0, ${bgShift}px, 0)`, willChange: "transform" }}
      >
        <div className="absolute left-1/2 top-[-15%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_295/0.45),transparent_60%)] blur-3xl" />
        <div className="absolute -left-40 top-[40%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.22_270/0.35),transparent_65%)] blur-3xl" />
        <div className="absolute -right-32 top-[15%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.66_0.22_295/0.35),transparent_65%)] blur-3xl" />
      </div>

      {/* Drifting stars */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-50"
        style={{ transform: `translate3d(0, ${-starsShift}px, 0)`, willChange: "transform" }}
      >
        <div className="absolute inset-0 stars" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6">
        {/* eyebrow */}
        <div className="flex">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-muted-foreground animate-fade-up">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            VIBOXS UNIVERSE® · MISSION CONTROL ONLINE
          </div>
        </div>

        {/* HERO STAGE — astronaut centered, two stacked headlines wrap around it */}
        <div className="relative mt-8 sm:mt-10">
          {/* Astronaut layer — fixed, contained size, behind text */}
          <div
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
            style={{
              transform: `translate3d(calc(-50% + ${astroX}px), calc(-50% + ${astronautShift + astroY}px), 0)`,
              transition: "transform 240ms cubic-bezier(0.16,1,0.3,1)",
              willChange: "transform",
            }}
          >
            {/* Soft halo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[32rem] sm:h-[40rem] sm:w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.6_0.25_295/0.55),transparent_60%)] blur-3xl animate-pulse-glow" />
            <img
              src={heroAstronaut}
              alt="VIBOXS Commander astronaut in cosmic purple armor"
              width={900}
              height={900}
              className="relative block w-[260px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain animate-float-slow drop-shadow-[0_30px_60px_oklch(0.45_0.25_295/0.5)]"
            />
          </div>

          {/* Headline — two stacked lines, second offset right (like reference) */}
          <div
            className="relative z-20"
            style={{
              transform: `translate3d(0, ${-headlineShift}px, 0)`,
              willChange: "transform",
            }}
          >
            <h1
              className="font-display font-semibold tracking-[-0.04em] leading-[0.88] text-foreground"
              style={{ fontSize: "clamp(2.6rem, 10vw, 9.5rem)" }}
            >
              <span
                className="block animate-fade-up"
                style={{ animationDelay: "60ms" }}
              >
                Your Startup idea
              </span>
              <span
                className="block animate-fade-up text-gradient md:pl-[14%] lg:pl-[18%]"
                style={{
                  animationDelay: "180ms",
                  textShadow: "0 0 80px oklch(0.66 0.22 295 / 0.4)",
                }}
              >
                starts with VIBOXS
              </span>
              <span
                className="block animate-fade-up text-foreground/30 md:pl-[28%] lg:pl-[36%]"
                style={{
                  animationDelay: "300ms",
                  WebkitTextStroke: "1px oklch(1 0 0 / 0.22)",
                  color: "transparent",
                }}
              >
                Today.
              </span>
            </h1>
          </div>

          {/* Spacer — give astronaut + text composition room */}
          <div className="h-[clamp(120px,18vw,260px)]" />

          {/* Numbered list (right side of stage) */}
          <ul className="absolute right-0 top-1/2 z-30 hidden md:flex -translate-y-1/2 flex-col gap-3">
            {["01", "02", "03"].map((n, i) => (
              <li
                key={n}
                className={`font-mono text-[11px] tracking-[0.25em] ${
                  i === 0 ? "text-primary-glow" : "text-muted-foreground/50"
                }`}
              >
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* MID ROW — primary CTA + checks (like reference's BOOK NOW + checks) */}
        <div
          className="relative z-30 mt-4 sm:mt-6 grid items-center gap-6 md:grid-cols-12"
          style={{
            transform: `translate3d(0, ${-cardsShift}px, 0)`,
            willChange: "transform",
          }}
        >
          <div className="md:col-span-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-between gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-glow)]"
            >
              <span className="inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Launch a Mission
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          <div className="md:col-span-7 flex flex-col gap-2.5 text-sm">
            {[
              "Mission plan dalam 24 jam.",
              "Direct line ke Commander Dede.",
              "7× lebih murah, 3× lebih cepat.",
            ].map((t, i) => (
              <div
                key={t}
                className="flex items-center gap-3 animate-fade-up"
                style={{ animationDelay: `${280 + i * 80}ms` }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary-glow ring-1 ring-primary/40">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-foreground/90">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW — three info cards like the reference */}
        <div
          className="relative z-30 mt-10 grid gap-5 md:grid-cols-12"
          style={{
            transform: `translate3d(0, ${-cardsShift * 0.6}px, 0)`,
            willChange: "transform",
          }}
        >
          {/* Card 1: Pitch + secondary CTA */}
          <div className="md:col-span-4 glass rounded-2xl p-5 flex flex-col justify-between">
            <p className="text-sm leading-relaxed text-foreground/85">
              Bawa startup-mu ke level interstellar — strategi, build, dan launch
              dijalankan oleh tujuh elite Rangers dari satu command center.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] font-mono tracking-[0.2em] text-foreground hover:bg-white/5 transition"
            >
              EXPLORE NOW
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Card 2: Manifesto paragraph */}
          <div className="md:col-span-4 glass rounded-2xl p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="text-foreground">
                NASA-grade execution, village-grade pricing.
              </span>{" "}
              Mission dirancang untuk founder yang ingin meluncurkan ide besar
              tanpa friksi — eksekusi premium, harga warung, hasil orbit.
            </p>
          </div>

          {/* Card 3: A journey into VIBOXS */}
          <div className="md:col-span-4">
            <a
              href="#story"
              className="group relative block glass-strong rounded-2xl p-4 overflow-hidden hover:bg-white/5 transition h-full"
            >
              <div className="flex items-start gap-3">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[var(--gradient-aurora)]">
                  <div className="absolute inset-0 stars opacity-60" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary-foreground fill-current" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base font-semibold text-foreground">
                    A journey into VIBOXS
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                    Masuki cinematic universe brand pertama Indonesia yang
                    dijalankan oleh Rangers AI elite — lihat eksekusi mission dari
                    basecamp interstellar.
                  </p>
                </div>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* trust ticker */}
        <p className="mt-10 font-mono text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground/60">
          150+ MISSIONS DEPLOYED · 98% COMMANDER SATISFACTION · 24/7 BASECAMP · EST. 2024
        </p>
      </div>
    </section>
  );
}
