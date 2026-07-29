import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Cpu, Flame, Gauge, Shield, Zap, Wind, Car, HeartPulse } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Thermotech GROUPE" },
      { name: "description", content: "Thermal protection and control solutions across appliances, motors, power, heating, HVAC, transformers, automotive and medical equipment." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { t } = useI18n();
  const items = [
    { key: "ind.appliances", icon: Cpu },
    { key: "ind.motors", icon: Gauge, desc: ["ind.motors.p1", "ind.motors.p2", "ind.motors.p3"] },
    { key: "ind.power", icon: Zap },
    { key: "ind.heating", icon: Flame },
    { key: "ind.hvac", icon: Wind },
    { key: "ind.transformer", icon: Shield },
    { key: "ind.automotive", icon: Car },
    { key: "ind.medical", icon: HeartPulse },
  ];

  return (
    <>
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-page py-16 md:py-24">
          <span className="eyebrow">Applications</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">{t("industries.title")}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("industries.subtitle")}</p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, icon: Icon, desc }) => (
            <div
              key={key}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 hover:border-primary hover:-translate-y-1 transition-all"
            >
              <Icon className="text-primary" size={32} />
              <h3 className="mt-6 text-lg font-semibold">{t(key)}</h3>
              <div className="mt-3 h-0.5 w-8 bg-primary" />
              {desc && desc.map((dk) => (
                <p key={dk} className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(dk)}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
