import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Mail, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const socials = [
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.instagram.com/", label: "Instagram", Icon: Instagram },
  { href: "https://www.facebook.com/", label: "Facebook", Icon: Facebook },
  { href: "https://www.youtube.com/", label: "YouTube", Icon: Youtube },
];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="inline-block">
            <img
              src={logoAsset.url}
              alt="Thermotech GROUPE"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 hover:text-primary hover:border-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {t("nav.products")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary">{t("products.thermal.title")}</Link></li>
            <li><Link to="/products" className="hover:text-primary">{t("products.thermostat.title")}</Link></li>
            <li><Link to="/products" className="hover:text-primary">{t("products.panels.title")}</Link></li>
            <li><Link to="/products" className="hover:text-primary">{t("products.complex.title")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {t("nav.about")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">{t("nav.about")}</Link></li>
            <li><Link to="/industries" className="hover:text-primary">{t("nav.industries")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {t("nav.contact")}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-primary shrink-0" /> {t("contact.addr")}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-primary shrink-0" /> <a href="mailto:info@thermotech.cz" className="hover:text-primary">info@thermotech.cz</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Thermotech GROUPE s.r.o. {t("footer.rights")}</span>
          <span>Made in Czech Republic</span>
        </div>
      </div>
    </footer>
  );
}
