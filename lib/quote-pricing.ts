import type { QuoteInput } from "./schemas";

export type CurrencyCode = "EUR";

export interface QuoteBreakdownItem {
  label: string;
  amount: number;
}

export interface QuoteCalculationResult {
  currency: CurrencyCode;
  totals: {
    base: number;
    pages: number;
    features: number;
    total: number;
  };
  items: QuoteBreakdownItem[];
}

const BASE_PRICE: Record<QuoteInput["websiteType"], number> = {
  vitrine: 750,
  ecommerce: 2000,
};

const PAGES_PRICE: Record<QuoteInput["pages"], number> = {
  "1": 0,
  "4": 250,
  "7": 500,
};

const FEATURE_PRICE: Record<QuoteInput["features"][number], number> = {
  contact: 0,
  gmb: 0,
  maps: 0,
  portfolio: 150,
  blog: 500,
  faq: 150,
  testimonials: 150,
};

export function calculateQuote(input: QuoteInput): QuoteCalculationResult {
  const base = BASE_PRICE[input.websiteType];
  const pages = PAGES_PRICE[input.pages];

  const features = (input.features || []).reduce((sum, feature) => {
    const price = FEATURE_PRICE[feature] ?? 0;
    return sum + price;
  }, 0);

  const items: QuoteBreakdownItem[] = [
    { label: input.websiteType === "ecommerce" ? "Base e-commerce" : "Base vitrine", amount: base },
    { label: `${input.pages} page(s)`, amount: pages },
    ...input.features.map((f) => ({ label: `Option: ${f}`, amount: FEATURE_PRICE[f] ?? 0 })),
  ];

  const total = base + pages + features;

  return {
    currency: "EUR",
    totals: { base, pages, features, total },
    items,
  };
}

export function formatEuro(amount: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(amount);
}
