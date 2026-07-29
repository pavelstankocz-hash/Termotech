import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero.jpg";
import factoryImg from "@/assets/factory.jpg";
import thermalImg from "@/assets/prod-thermal.jpg";
import thermostatImg from "@/assets/prod-thermostat.jpg";
import panelImg from "@/assets/prod-panel.jpg";
import roomImg from "@/assets/prod-room.jpg";
import { ArrowRight, Shield, Gauge, Flame, Cpu, Headphones, Package, Globe, Award, X } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);

  const industries = [
    { key: "ind.appliances", icon: Cpu, desc: "ind.appliances.d" },
    { key: "ind.motors", icon: Gauge, desc: ["ind.motors.p1", "ind.motors.p2", "ind.motors.p3"] },
    { key: "ind.power", icon: Shield, desc: "ind.power.d" },
    { key: "ind.heating", icon: Flame, desc: "ind.heating.d" },
    { key: "ind.hvac", icon: Cpu, desc: "ind.hvac.d" },
    { key: "ind.transformer", icon: Shield, desc: "ind.transformer.d" },
    { key: "ind.automotive", icon: Gauge, desc: "ind.automotive.d" },
    { key: "ind.medical", icon: Shield, desc: "ind.medical.d" },
  ];

  const products = [
    { img: thermalImg, title: "products.thermal.title", desc: "products.thermal.desc" },
    { img: thermostatImg, title: "products.thermostat.title", desc: "products.thermostat.desc" },
    { img: panelImg, title: "products.panels.title", desc: "products.panels.desc" },
    { img: roomImg, title: "products.complex.title", desc: "products.complex.desc" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="container-page relative py-28 md:py-40">
          <span className="eyebrow text-primary">{t("hero.tag")}</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-3xl leading-[1.05]">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">{t("hero.subtitle")}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {t("hero.cta")} <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="container-page py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">01 — Industries</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">{t("industries.title")}</h2>
          <p className="mt-4 text-muted-foreground">{t("industries.subtitle")}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ key, icon: Icon, desc }, i) => {
            const isActive = active === i;
            return (
              <div
                key={key}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => setActive(isActive ? null : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(isActive ? null : i);
                  }
                }}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon className="text-primary relative z-10" size={28} />
                <h3 className="mt-4 text-base font-semibold relative z-10">{t(key)}</h3>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
                <div
                  className={cn(
                    "absolute inset-0 z-20 flex flex-col justify-center p-6 bg-primary text-primary-foreground transition-all duration-300",
                    isActive
                      ? "translate-y-0 opacity-100 pointer-events-auto"
                      : "translate-y-full opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="text-base font-semibold">{t(key)}</h4>
                    <X size={18} className="shrink-0 opacity-80" />
                  </div>
                  {Array.isArray(desc) ? (
                    desc.map((dk) => (
                      <p key={dk} className="mt-2 text-sm leading-relaxed opacity-90">
                        {t(dk)}
                      </p>
                    ))
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed opacity-90">{t(desc)}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-secondary/40 py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">02 — Products</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">{t("products.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("products.subtitle")}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-xl bg-card border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={t(p.title)}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold">{t(p.title)}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(p.desc)}</p>
                  <Link
                    to="/products"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    {t("products.learn")} <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section className="container-page py-24 grid gap-16 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={factoryImg}
            alt="Factory"
            loading="lazy"
            width={1600}
            height={900}
            className="rounded-xl aspect-[4/3] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl hidden sm:block">
            <div className="text-4xl font-bold leading-none">1972</div>
            <div className="mt-1 text-xs font-medium tracking-widest uppercase opacity-90">Since</div>
          </div>
        </div>
        <div>
          <span className="eyebrow">03 — About</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">{t("about.title")}</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.p1")}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {["about.stat1", "about.stat2", "about.stat3", "about.stat4"].map((k) => (
              <div key={k} className="border-l-2 border-primary pl-4 py-1">
                <div className="text-sm font-semibold">{t(k)}</div>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            {t("hero.cta2")} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-neutral-950 text-white py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow text-primary">04 — Why us</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">{t("why.title")}</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Headphones, t: "why.support", d: "why.support.d" },
              { icon: Package, t: "why.complex", d: "why.complex.d" },
              { icon: Globe, t: "why.global", d: "why.global.d" },
              { icon: Award, t: "why.quality", d: "why.quality.d" },
            ].map(({ icon: Icon, t: tk, d }) => (
              <div key={tk}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{t(tk)}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{t(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
