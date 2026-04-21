import missionScene from "@/assets/mission-scene.jpg";

export function BrandStory() {
  return (
    <section id="story" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] tracking-[0.3em] text-primary-glow">
              02 · MISSION BRIEFING
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
              A village
              <br />
              <span className="text-gradient">in the stars.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              Not from Silicon Valley. From the rice field. VIBOXS operates a basecamp where rural
              wisdom meets AI-grade precision — a cinematic universe led by{" "}
              <span className="text-foreground/90">Commander Dede</span> and his seven Rangers,
              executing missions for brands ready to conquer the world.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { k: "7×", v: "Lower cost" },
                { k: "3×", v: "Faster delivery" },
                { k: "21×", v: "Total value" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-2xl p-4">
                  <div className="font-display text-3xl font-semibold text-gradient">{s.k}</div>
                  <div className="mt-1 text-[11px] tracking-[0.2em] font-mono uppercase text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-6 bg-[var(--gradient-aurora)] opacity-25 blur-3xl rounded-[3rem]" />
            <div className="relative glass-strong overflow-hidden rounded-[2rem] glow-ring">
              <img
                src={missionScene}
                alt="Commander overlooking the village from a futuristic basecamp under a purple galaxy"
                width={1600}
                height={1024}
                loading="lazy"
                className="w-full h-[28rem] sm:h-[34rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 glass rounded-2xl p-5">
                <div className="font-mono text-[10px] tracking-[0.3em] text-primary-glow">
                  MANIFESTO · TRANSMISSION 001
                </div>
                <p className="mt-2 font-display text-lg sm:text-xl font-medium leading-snug text-foreground">
                  “Behind every unicorn startup, there is a village in space quietly running the
                  controls.”
                </p>
                <div className="mt-3 text-xs text-muted-foreground">
                  — Commander Dede, Founder · Basecamp Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
