import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu — Rosso Ristorante",
  description:
    "Explore our seasonal Italian menu — Antipasti, Primi, Secondi, and Dolci — crafted by Chef Marco Ferretti with the finest Italian ingredients.",
};

const menuData = [
  {
    category: "Antipasti",
    subtitle: "To Begin",
    items: [
      {
        name: "Burrata e Prosciutto",
        description:
          "Fresh burrata, 24-month San Daniele prosciutto, wild arugula, aged balsamic",
        price: "€18",
      },
      {
        name: "Carpaccio di Tonno",
        description:
          "Thinly sliced yellowfin tuna, capers, citrus vinaigrette, Sicilian extra-virgin olive oil",
        price: "€22",
      },
      {
        name: "Tartare di Manzo",
        description:
          "Hand-cut beef tenderloin, black truffle shavings, quail egg, toasted sourdough",
        price: "€26",
      },
      {
        name: "Polpo alla Griglia",
        description:
          "Grilled Galician octopus, 'nduja butter, preserved lemon, smoked paprika oil",
        price: "€24",
      },
    ],
  },
  {
    category: "Primi",
    subtitle: "First Course",
    items: [
      {
        name: "Tagliolini al Tartufo",
        description:
          "Fresh egg tagliolini, black truffle fonduta, 24-month Parmigiano-Reggiano",
        price: "€38",
      },
      {
        name: "Risotto ai Funghi Porcini",
        description:
          "Carnaroli risotto, wild porcini, aged Pecorino Romano, white truffle oil",
        price: "€34",
      },
      {
        name: "Pappardelle al Ragù d'Agnello",
        description:
          "Hand-made pappardelle, slow-braised lamb shoulder, rosemary, Montepulciano d'Abruzzo",
        price: "€28",
      },
      {
        name: "Gnocchi di Ricotta",
        description:
          "House-made ricotta gnocchi, brown butter, sage, toasted hazelnuts, lemon zest",
        price: "€26",
      },
    ],
  },
  {
    category: "Secondi",
    subtitle: "Main Course",
    items: [
      {
        name: "Branzino al Forno",
        description:
          "Whole-baked Mediterranean sea bass, caramelised fennel, Taggiasca olives, cherry tomato",
        price: "€42",
      },
      {
        name: "Costolette d'Agnello",
        description:
          "Rack of Sardinian lamb, pistachio crust, minted pea purée, red wine jus",
        price: "€48",
      },
      {
        name: "Filetto di Manzo",
        description:
          "200g Fassona beef tenderloin, roasted bone marrow, black garlic, Barolo reduction",
        price: "€58",
      },
      {
        name: "Piccione Arrosto",
        description:
          "Roasted Lombardy squab, Puy lentils, foie gras butter, black cherry compote",
        price: "€52",
      },
    ],
  },
  {
    category: "Dolci",
    subtitle: "Desserts",
    items: [
      {
        name: "Tiramisù Classico",
        description:
          "Our signature tiramisù, Mascarpone di bufala, single-origin Arabica espresso, Savoiardi",
        price: "€14",
      },
      {
        name: "Panna Cotta al Caramello",
        description:
          "Vanilla panna cotta, salted caramel, hazelnut praline, Maldon sea salt",
        price: "€12",
      },
      {
        name: "Tortino al Cioccolato",
        description:
          "Warm Valrhona dark chocolate fondant, hazelnut gelato, cocoa tuile",
        price: "€16",
      },
      {
        name: "Selezione di Formaggi",
        description:
          "A curated board of Italian artisan cheeses, wildflower honey, fig mostarda, house crackers",
        price: "€18",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8a8278] hover:text-[#c8a96e] text-xs font-medium tracking-[0.2em] uppercase font-sans transition-colors duration-200 mb-12"
          id="menu-back-link"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#c8a96e] text-xs font-medium tracking-[0.35em] uppercase font-sans">
            Cucina
          </span>
          <div className="gold-divider" />
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#f5f0e8] mt-2 mb-4">
            Our Menu
          </h1>
          <p className="font-sans text-[#b8b0a0] text-sm max-w-md mx-auto leading-relaxed">
            Seasonal, ingredient-driven Italian cuisine. Menu changes monthly.
            Please inform us of any dietary requirements.
          </p>

          {/* PDF Download */}
          <a
            href="/rosso-menu.pdf"
            download
            id="menu-pdf-download"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 border border-[#c8a96e] text-[#c8a96e] text-xs font-medium tracking-[0.2em] uppercase font-sans hover:bg-[#c8a96e] hover:text-[#0d0d0d] transition-all duration-300"
            aria-label="Download menu as PDF"
          >
            <Download size={14} />
            Download Menu PDF
          </a>
        </div>

        {/* Menu Sections */}
        <div className="space-y-20">
          {menuData.map((section) => (
            <section key={section.category} aria-labelledby={`menu-${section.category.toLowerCase()}`}>
              {/* Category Header */}
              <div className="mb-10 text-center">
                <span className="text-[10px] font-medium tracking-[0.35em] uppercase text-[#8a8278] font-sans">
                  {section.subtitle}
                </span>
                <h2
                  id={`menu-${section.category.toLowerCase()}`}
                  className="font-display text-3xl sm:text-4xl font-bold text-[#c8a96e] mt-1"
                >
                  {section.category}
                </h2>
                <div className="gold-divider mt-3" />
              </div>

              {/* Items */}
              <ul className="space-y-8" role="list">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="group border-b border-[#1a1a1a] pb-8 last:border-0"
                  >
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-xl font-semibold text-[#f5f0e8] group-hover:text-[#c8a96e] transition-colors duration-200 flex-shrink-0">
                        {item.name}
                      </h3>
                      <div className="dot-leader" aria-hidden="true" />
                      <span className="font-display text-xl font-semibold text-[#c8a96e] flex-shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="font-sans text-[#8a8278] text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-10 border-t border-[#1a1a1a] text-center">
          <p className="font-sans text-[#4a4a4a] text-xs leading-relaxed max-w-md mx-auto">
            All prices include VAT. A discretionary service charge of 12.5% will be added to your bill.
            We can accommodate most dietary requirements with advance notice.
          </p>
          <a
            href="/#reservations"
            id="menu-page-reserve-cta"
            className="inline-block mt-8 px-10 py-3.5 bg-[#c8a96e] text-[#0d0d0d] text-xs font-semibold tracking-[0.25em] uppercase font-sans hover:bg-[#dfc090] transition-colors duration-300"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </div>
  );
}
