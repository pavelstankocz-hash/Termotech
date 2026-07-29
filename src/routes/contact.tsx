import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Mail, MapPin, Building2, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thermotech GROUPE" },
      { name: "description", content: "Get in touch with Thermotech GROUPE s.r.o. — Varšavská 715, 120 00 Prague, Czech Republic. info@thermotech.cz" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-page py-16 md:py-24">
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">{t("contact.title")}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              <Building2 size={22} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company</div>
              <div className="mt-1 font-semibold">{t("contact.company")}</div>
              <div className="mt-1 text-sm text-muted-foreground">IČO: {t("contact.ico")} · DIČ: {t("contact.dic")}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("contact.addrLabel")}</div>
              <div className="mt-1 font-semibold">{t("contact.addr")}</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t("contact.factoryLabel")}</div>
              <div className="mt-1 font-semibold">{t("contact.factoryAddr")}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</div>
              <a href={`tel:${t("contact.phone").replace(/\s/g, "")}`} className="mt-1 block font-semibold hover:text-primary">
                {t("contact.phone")}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0">
              <Mail size={22} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">E-mail</div>
              <a href={`mailto:${t("contact.mail")}`} className="mt-1 block font-semibold hover:text-primary">
                {t("contact.mail")}
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl border border-border bg-card p-8 space-y-5"
        >
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("contact.name")}
            </label>
            <input
              required
              type="text"
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("contact.email")}
            </label>
            <input
              required
              type="email"
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("contact.type")}
            </label>
            <select
              required
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            >
              <option value="">{t("contact.type")}</option>
              <option value="sales">{t("contact.type.sales")}</option>
              <option value="support">{t("contact.type.support")}</option>
              <option value="partner">{t("contact.type.partner")}</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("contact.message")}
            </label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {sent ? "✓" : t("contact.send")}
          </button>
        </form>
      </section>

      <section className="container-page pb-20">
        <h2 className="text-2xl font-bold mb-6">{t("contact.mapTitle")}</h2>
        <div className="rounded-xl border border-border overflow-hidden bg-card aspect-[16/9] md:aspect-[21/9]">
          <iframe
            title="Thermotech GROUPE Prague"
            src="https://maps.google.com/maps?q=Varšavská+715,+120+00+Praha,+Czechia&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
