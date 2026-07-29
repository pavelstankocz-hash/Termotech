import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thermotech GROUPE" },
      { name: "description", content: "History of Thermotech GROUPE — continuing the REGO brand of adjustable thermostats made in Police nad Metují since 1972." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const timeline = [
    { year: "1972", body: t("about.p1") },
    { year: "2002 — 2005", body: t("about.p2") },
    { year: "2016", body: t("about.p3") },
    { year: "2018", body: t("about.p4") },
    { year: "2026", body: t("about.p5") },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-neutral-950 text-white border-b border-border">
        <img
          src={factoryImg}
          alt=""
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-950/60" />
        <div className="container-page relative py-24 md:py-32">
          <span className="eyebrow text-primary">Our story</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">{t("about.title")}</h1>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-14">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-14 md:pl-20">
                <div className="absolute left-0 top-1 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs md:text-sm">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>
                <div className="text-primary font-semibold text-sm tracking-widest uppercase">{item.year}</div>
                <p className="mt-3 text-lg leading-relaxed text-foreground/85">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 border-t border-border">
        <div className="container-page">
          <span className="eyebrow">Values</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold max-w-3xl">{t("why.title")}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { t: "why.quality", d: "why.quality.d" },
              { t: "why.complex", d: "why.complex.d" },
              { t: "why.support", d: "why.support.d" },
              { t: "why.global", d: "why.global.d" },
            ].map(({ t: tk, d }) => (
              <div key={tk} className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold">{t(tk)}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
