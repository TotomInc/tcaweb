import QuoteEmail from "@/emails/QuoteEmail";
import { calculateQuote } from "@/lib/quote-pricing";
import type { QuoteInput } from "@/lib/schemas";

const sampleInput: QuoteInput = {
  websiteType: "vitrine",
  pages: "4",
  features: ["portfolio", "faq", "contact"],
  payments: undefined,
  delivery: undefined,
  priceOption: "buy",
  contact: {
    firstName: "Jean",
    lastName: "Dupont",
    companyName: "Exemple SARL",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
  },
};

const pricing = calculateQuote(sampleInput);

export default function QuoteEmailPreview() {
  return (
    <QuoteEmail
      contact={sampleInput.contact}
      priceOption={sampleInput.priceOption}
      pricing={pricing}
    />
  );
}
