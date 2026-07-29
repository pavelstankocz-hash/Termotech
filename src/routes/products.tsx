import { createFileRoute } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import thermalImg from "@/assets/prod-thermal.jpg";
import thermostatImg from "@/assets/prod-thermostat.jpg";
import panelImg from "@/assets/prod-panel.jpg";
import roomImg from "@/assets/prod-room.jpg";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Thermotech GROUPE" },
      { name: "description", content: "Thermal protection, REGO adjustable thermostats, wire harness assembly and complex room control solutions." },
    ],
  }),
  component: ProductsPage,
});

type SubProduct = {
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
};

type Product = {
  img: string;
  title: string;
  desc: string;
  features: string[];
  subs: SubProduct[];
};

const L = (en: string, cs: string, de: string, es: string, it: string): Record<Lang, string> =>
  ({ en, cs, de, es, it });

const items: Product[] = [
  {
    img: thermalImg,
    title: "products.thermal.title",
    desc: "products.thermal.desc",
    features: ["Thermal fuses & cut-offs", "Bimetal protectors", "Current protection", "Motor & transformer applications"],
    subs: [
      {
        name: L("Thermal fuses", "Tepelné pojistky", "Thermosicherungen", "Fusibles térmicos", "Fusibili termici"),
        desc: L(
          "Single-use protection that permanently interrupts the circuit when a critical temperature is reached — ideal for motors, transformers and heating appliances.",
          "Jednorázová ochrana, která trvale přeruší obvod při dosažení kritické teploty — ideální pro motory, transformátory a topné spotřebiče.",
          "Einweg-Schutz, der den Stromkreis bei Erreichen einer kritischen Temperatur dauerhaft unterbricht — ideal für Motoren, Transformatoren und Heizgeräte.",
          "Protección de un solo uso que interrumpe permanentemente el circuito al alcanzar una temperatura crítica — ideal para motores, transformadores y aparatos de calefacción.",
          "Protezione monouso che interrompe permanentemente il circuito al raggiungimento di una temperatura critica — ideale per motori, trasformatori ed elettrodomestici di riscaldamento."
        ),
      },
      {
        name: L("Bimetal thermostats", "Bimetalové termostaty", "Bimetall-Thermostate", "Termostatos bimetálicos", "Termostati bimetallici"),
        desc: L(
          "Automatic reset protectors based on a bimetal strip — reliable overheat cut-off with self-reset after cooling.",
          "Automaticky obnovitelné ochrany založené na bimetalovém pásku — spolehlivé odpojení při přehřátí s návratem po vychladnutí.",
          "Automatisch rückstellende Schutzelemente auf Basis eines Bimetallstreifens — zuverlässige Überhitzungsabschaltung mit Selbstrückstellung nach Abkühlung.",
          "Protectores de rearme automático basados en una lámina bimetálica — corte fiable por sobrecalentamiento con reinicio automático tras el enfriamiento.",
          "Protezioni a ripristino automatico basate su lamina bimetallica — interruzione affidabile in caso di surriscaldamento con ripristino dopo il raffreddamento."
        ),
      },
      {
        name: L("Temperature sensors (PTC / NTC / PT100 / PT1000)", "Teplotní senzory (PTC / NTC / PT100 / PT1000)", "Temperatursensoren (PTC / NTC / PT100 / PT1000)", "Sensores de temperatura (PTC / NTC / PT100 / PT1000)", "Sensori di temperatura (PTC / NTC / PT100 / PT1000)"),
        desc: L(
          "Precise resistive sensors for continuous temperature monitoring — PTC and NTC thermistors together with platinum PT100 and PT1000 elements for industrial-grade accuracy in motors, batteries, HVAC and appliances.",
          "Přesné odporové senzory pro kontinuální měření teploty — PTC a NTC termistory společně s platinovými čidly PT100 a PT1000 pro průmyslovou přesnost v motorech, bateriích, HVAC a spotřebičích.",
          "Präzise resistive Sensoren zur kontinuierlichen Temperaturüberwachung — PTC- und NTC-Thermistoren zusammen mit Platin-Elementen PT100 und PT1000 für industrielle Genauigkeit in Motoren, Batterien, HVAC und Geräten.",
          "Sensores resistivos precisos para la monitorización continua de temperatura — termistores PTC y NTC junto con elementos de platino PT100 y PT1000 para una precisión de grado industrial en motores, baterías, HVAC y electrodomésticos.",
          "Sensori resistivi di precisione per il monitoraggio continuo della temperatura — termistori PTC e NTC insieme agli elementi al platino PT100 e PT1000 per una precisione di livello industriale in motori, batterie, HVAC ed elettrodomestici."
        ),
      },
      {
        name: L("Current protectors", "Proudové ochrany", "Stromschutzschalter", "Protectores de corriente", "Protezioni di corrente"),
        desc: L(
          "Combined thermal and current-sensitive protectors preventing damage from overload and short circuits.",
          "Kombinované tepelné a proudové ochrany zabraňující poškození při přetížení a zkratech.",
          "Kombinierte thermische und stromempfindliche Schutzschalter, die Schäden durch Überlast und Kurzschluss verhindern.",
          "Protectores combinados térmicos y sensibles a la corriente que evitan daños por sobrecarga y cortocircuito.",
          "Protezioni combinate termiche e sensibili alla corrente che prevengono danni da sovraccarico e cortocircuito."
        ),
      },
    ],
  },
  {
    img: thermostatImg,
    title: "products.thermostat.title",
    desc: "products.thermostat.desc",
    features: ["Adjustable thermostats", "Capillary thermostats", "Rod thermostats", "REGO brand since 1972", "Custom OEM solutions"],
    subs: [
      {
        name: L("Adjustable thermostats", "Nastavitelné termostaty", "Einstellbare Thermostate", "Termostatos ajustables", "Termostati regolabili"),
        desc: L(
          "The core REGO family — mechanical adjustable thermostats with a rotary knob for setting the switching temperature in heating, appliances and industrial equipment.",
          "Základní řada REGO — mechanické nastavitelné termostaty s otočným ovladačem pro nastavení spínací teploty v topení, spotřebičích a průmyslových zařízeních.",
          "Die Kern-REGO-Familie — mechanische einstellbare Thermostate mit Drehknopf zur Einstellung der Schalttemperatur in Heizung, Geräten und Industrieanlagen.",
          "La familia principal REGO — termostatos ajustables mecánicos con mando giratorio para ajustar la temperatura de conmutación en calefacción, electrodomésticos y equipos industriales.",
          "La famiglia principale REGO — termostati regolabili meccanici con manopola rotante per impostare la temperatura di commutazione in riscaldamento, elettrodomestici e apparecchiature industriali."
        ),
      },
      {
        name: L("Capillary thermostats", "Kapilárové termostaty", "Kapillarthermostate", "Termostatos capilares", "Termostati capillari"),
        desc: L(
          "Adjustable thermostats with capillary sensor for remote temperature sensing in boilers, ovens and industrial equipment.",
          "Nastavitelné termostaty s kapilárním čidlem pro dálkové snímání teploty v kotlích, troubách a průmyslových zařízeních.",
          "Einstellbare Thermostate mit Kapillarfühler zur Fernmessung der Temperatur in Kesseln, Öfen und Industrieanlagen.",
          "Termostatos ajustables con sensor capilar para la detección remota de temperatura en calderas, hornos y equipos industriales.",
          "Termostati regolabili con sonda capillare per la rilevazione remota della temperatura in caldaie, forni e apparecchiature industriali."
        ),
      },
      {
        name: L("Rod thermostats", "Tyčové termostaty", "Stabthermostate", "Termostatos de varilla", "Termostati a bulbo rigido"),
        desc: L(
          "Direct-immersion rod thermostats for water heaters, storage tanks and heating elements — robust and easy to install.",
          "Tyčové termostaty pro přímou instalaci do bojlerů, zásobníků a topných těles — robustní a snadná montáž.",
          "Direkteintauch-Stabthermostate für Warmwasserbereiter, Speicher und Heizelemente — robust und einfach zu installieren.",
          "Termostatos de varilla de inmersión directa para calentadores de agua, depósitos y elementos calefactores — robustos y de fácil instalación.",
          "Termostati a bulbo rigido a immersione diretta per scaldacqua, serbatoi ed elementi riscaldanti — robusti e di facile installazione."
        ),
      },
      {
        name: L("REGO series", "Řada REGO", "REGO-Serie", "Serie REGO", "Serie REGO"),
        desc: L(
          "The world-known REGO family — over 50 years of Czech manufacturing tradition and proven reliability.",
          "Světově známá řada REGO — více než 50 let české výrobní tradice a prověřené spolehlivosti.",
          "Die weltweit bekannte REGO-Familie — über 50 Jahre tschechische Fertigungstradition und bewährte Zuverlässigkeit.",
          "La familia REGO reconocida mundialmente — más de 50 años de tradición de fabricación checa y fiabilidad probada.",
          "La famiglia REGO conosciuta in tutto il mondo — oltre 50 anni di tradizione manifatturiera ceca e affidabilità comprovata."
        ),
      },
      {
        name: L("Custom OEM solutions", "Zakázková OEM řešení", "Kundenspezifische OEM-Lösungen", "Soluciones OEM personalizadas", "Soluzioni OEM personalizzate"),
        desc: L(
          "Tailor-made thermostats designed to your specification — housing, knob, temperature range and electrical parameters.",
          "Termostaty vyrobené na míru dle vaší specifikace — pouzdro, ovladač, teplotní rozsah i elektrické parametry.",
          "Maßgeschneiderte Thermostate nach Ihrer Spezifikation — Gehäuse, Bedienknopf, Temperaturbereich und elektrische Parameter.",
          "Termostatos hechos a medida según su especificación — carcasa, mando, rango de temperatura y parámetros eléctricos.",
          "Termostati su misura secondo le vostre specifiche — custodia, manopola, intervallo di temperatura e parametri elettrici."
        ),
      },
    ],
  },
  {
    img: panelImg,
    title: "products.panels.title",
    desc: "products.panels.desc",
    features: ["Custom cable harnesses", "Precision crimped terminals", "Braided sleeving & connectors", "100% electrical testing"],
    subs: [
      {
        name: L("Custom cable harnesses", "Zakázkové kabelové svazky", "Kundenspezifische Kabelbäume", "Mazos de cables personalizados", "Cablaggi personalizzati"),
        desc: L(
          "Complete wire harness assemblies built to your drawing — from single wires to multi-branch harnesses for demanding applications.",
          "Kompletní kabelové svazky vyrobené dle vaší dokumentace — od jednoduchých vodičů po vícevětvové svazky pro náročné aplikace.",
          "Komplette Kabelbaum-Baugruppen nach Ihrer Zeichnung — von Einzeladern bis zu mehrzweigigen Kabelbäumen für anspruchsvolle Anwendungen.",
          "Conjuntos completos de mazos de cables fabricados según su plano — desde cables sencillos hasta mazos multirramificados para aplicaciones exigentes.",
          "Cablaggi completi realizzati secondo il vostro disegno — dai singoli fili ai cablaggi multi-ramo per applicazioni esigenti."
        ),
      },
      {
        name: L("Precision crimped terminals", "Precizně lisované koncovky", "Präzise gecrimpte Kontakte", "Terminales crimpados de precisión", "Terminali crimpati di precisione"),
        desc: L(
          "Calibrated crimping with force monitoring — ring, fork, blade and push-in terminals for automotive-grade contacts.",
          "Kalibrované lisování s monitoringem síly — očkové, vidlicové, nožové a push-in koncovky v automotive kvalitě.",
          "Kalibriertes Crimpen mit Kraftüberwachung — Ring-, Gabel-, Flach- und Push-in-Kontakte in Automotive-Qualität.",
          "Crimpado calibrado con monitorización de fuerza — terminales de anillo, horquilla, pala y push-in de calidad automotriz.",
          "Crimpatura calibrata con monitoraggio della forza — terminali ad anello, a forcella, a lama e push-in di qualità automotive."
        ),
      },
      {
        name: L("Braided sleeving & connectors", "Opletené bužírky a konektory", "Geflechtschläuche & Steckverbinder", "Fundas trenzadas y conectores", "Guaine intrecciate e connettori"),
        desc: L(
          "Protective sleeving, heat-shrink tubing and industry-standard connector housings for mechanical and thermal protection.",
          "Ochranné bužírky, smršťovací trubice a standardní konektorové skříně pro mechanickou a tepelnou ochranu.",
          "Schutzschläuche, Schrumpfschläuche und industrieübliche Steckergehäuse für mechanischen und thermischen Schutz.",
          "Fundas protectoras, tubos termorretráctiles y carcasas de conector estándar para protección mecánica y térmica.",
          "Guaine protettive, tubi termorestringenti e alloggiamenti connettori standard per protezione meccanica e termica."
        ),
      },
      {
        name: L("100% electrical testing", "100% elektrická kontrola", "100 % elektrische Prüfung", "Prueba eléctrica 100%", "Test elettrico al 100%"),
        desc: L(
          "Every harness passes continuity, hi-pot and pin-out verification with full traceability of components and batch.",
          "Každý svazek prochází zkouškou vodivosti, izolace a kontrolou zapojení s plnou sledovatelností komponent a dávky.",
          "Jeder Kabelbaum durchläuft Durchgangs-, Hochspannungs- und Pin-Out-Prüfung mit vollständiger Rückverfolgbarkeit von Komponenten und Charge.",
          "Cada mazo pasa verificación de continuidad, alta tensión y de conexionado con trazabilidad completa de componentes y lote.",
          "Ogni cablaggio supera i test di continuità, alta tensione e verifica del pin-out con piena tracciabilità di componenti e lotto."
        ),
      },
    ],
  },
  {
    img: roomImg,
    title: "products.complex.title",
    desc: "products.complex.desc",
    features: ["Room thermostats", "Dimmers & timers", "White appliance controls", "Complete assemblies", "Machine parts & components", "Mechanical parts & other assemblies"],
    subs: [
      {
        name: L("Room thermostats", "Pokojové termostaty", "Raumthermostate", "Termostatos de ambiente", "Termostati d'ambiente"),
        desc: L(
          "Modern room thermostats for heating control — analog and electronic versions with intuitive operation.",
          "Moderní pokojové termostaty pro řízení topení — analogové i elektronické verze s intuitivním ovládáním.",
          "Moderne Raumthermostate zur Heizungssteuerung — analoge und elektronische Versionen mit intuitiver Bedienung.",
          "Termostatos de ambiente modernos para el control de la calefacción — versiones analógicas y electrónicas con manejo intuitivo.",
          "Termostati d'ambiente moderni per il controllo del riscaldamento — versioni analogiche ed elettroniche con uso intuitivo."
        ),
      },
      {
        name: L("Dimmers & timers", "Stmívače a časovače", "Dimmer & Zeitschalter", "Reguladores y temporizadores", "Dimmer e temporizzatori"),
        desc: L(
          "Rotary and electronic dimmers, mechanical and digital timers for lighting, heating and appliance control.",
          "Otočné a elektronické stmívače, mechanické i digitální časovače pro osvětlení, topení a spotřebiče.",
          "Dreh- und elektronische Dimmer, mechanische und digitale Zeitschalter für Beleuchtung, Heizung und Geräte.",
          "Reguladores rotativos y electrónicos, temporizadores mecánicos y digitales para iluminación, calefacción y electrodomésticos.",
          "Dimmer rotativi ed elettronici, temporizzatori meccanici e digitali per illuminazione, riscaldamento ed elettrodomestici."
        ),
      },
      {
        name: L("White appliance controls", "Ovládání pro bílou techniku", "Bedienungen für Weiße Ware", "Controles para línea blanca", "Controlli per elettrodomestici bianchi"),
        desc: L(
          "Complete control assemblies for washing machines, dishwashers, ovens and coffee makers — from knob to wiring.",
          "Kompletní ovládací sestavy pro pračky, myčky, trouby a kávovary — od ovladače až po zapojení.",
          "Komplette Bedienungsbaugruppen für Waschmaschinen, Geschirrspüler, Öfen und Kaffeemaschinen — vom Bedienknopf bis zur Verdrahtung.",
          "Conjuntos de control completos para lavadoras, lavavajillas, hornos y cafeteras — desde el mando hasta el cableado.",
          "Assiemi di controllo completi per lavatrici, lavastoviglie, forni e macchine da caffè — dalla manopola al cablaggio."
        ),
      },
      {
        name: L("Machine parts & components", "Strojní díly a komponenty", "Maschinenteile & Komponenten", "Piezas y componentes de máquina", "Parti macchina e componenti"),
        desc: L(
          "Precision-machined parts and sub-components for industrial machinery — turned, milled and formed to specification.",
          "Přesné strojní díly a subkomponenty pro průmyslová zařízení — soustružené, frézované a tvářené dle specifikace.",
          "Präzisionsgefertigte Teile und Baugruppen für Industriemaschinen — gedreht, gefräst und geformt nach Spezifikation.",
          "Piezas mecanizadas de precisión y subcomponentes para maquinaria industrial — torneadas, fresadas y conformadas según especificación.",
          "Parti lavorate di precisione e sottocomponenti per macchinari industriali — tornite, fresate e formate su specifica."
        ),
      },
      {
        name: L("Mechanical parts & other assemblies", "Mechanické díly a další montáže", "Mechanische Teile & weitere Baugruppen", "Piezas mecánicas y otros montajes", "Parti meccaniche e altri assemblaggi"),
        desc: L(
          "Custom mechanical assemblies combining metal, plastic and electrical parts into ready-to-install modules.",
          "Zakázkové mechanické montáže kombinující kovové, plastové a elektrické díly do modulů připravených k instalaci.",
          "Kundenspezifische mechanische Baugruppen, die Metall-, Kunststoff- und Elektrikteile zu einbaufertigen Modulen kombinieren.",
          "Montajes mecánicos personalizados que combinan piezas metálicas, plásticas y eléctricas en módulos listos para instalar.",
          "Assemblaggi meccanici personalizzati che combinano parti metalliche, plastiche ed elettriche in moduli pronti all'installazione."
        ),
      },
    ],
  },
];

function ProductsPage() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="bg-secondary/40 border-b border-border">
        <div className="container-page py-16 md:py-24">
          <span className="eyebrow">Catalogue</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-3xl">{t("products.title")}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t("products.subtitle")}</p>
        </div>
      </section>

      <section className="container-page py-20 space-y-24">
        {items.map((p, i) => {
          const isOpen = open === i;
          return (
            <article key={p.title} className="space-y-8">
              <div
                className={`grid gap-12 lg:grid-cols-2 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <div className="overflow-hidden rounded-xl border border-border bg-card">
                    <img
                      src={p.img}
                      alt={t(p.title)}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div>
                  <span className="eyebrow">0{i + 1}</span>
                  <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t(p.title)}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{t(p.desc)}</p>
                  <ul className="mt-6 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                  >
                    {isOpen
                      ? { en: "Hide product cards", cs: "Skrýt karty produktů", de: "Produktkarten ausblenden", es: "Ocultar tarjetas", it: "Nascondi schede" }[lang]
                      : { en: "View product cards", cs: "Zobrazit karty produktů", de: "Produktkarten anzeigen", es: "Ver tarjetas de producto", it: "Mostra schede prodotto" }[lang]}
                    <ChevronDown
                      size={16}
                      className={cn("transition-transform", isOpen && "rotate-180")}
                    />
                  </button>
                </div>
              </div>

              <div
                className={cn(
                  "grid transition-all duration-500 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4">
                    {p.subs.map((s) => (
                      <div
                        key={s.name.en}
                        className="group relative rounded-xl border border-border bg-card p-5 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition"
                      >
                        <div className="absolute left-0 top-5 h-8 w-1 rounded-r bg-primary" />
                        <h3 className="text-lg font-semibold pl-3">{s.name[lang]}</h3>
                        <p className="mt-2 pl-3 text-sm text-muted-foreground leading-relaxed">
                          {s.desc[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
