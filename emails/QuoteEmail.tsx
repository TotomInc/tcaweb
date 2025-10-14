import { Button, Container, Head, Html, Preview, Section, Text } from "@react-email/components";

import type { QuoteCalculationResult } from "@/lib/quote-pricing";
import { formatEuro } from "@/lib/quote-pricing";
import type { QuoteInput } from "@/lib/schemas";

interface Props {
  contact: QuoteInput["contact"];
  priceOption: QuoteInput["priceOption"];
  pricing: QuoteCalculationResult;
}

export default function QuoteEmail({ contact, priceOption, pricing }: Props) {
  return (
    <Html lang="fr">
      <Head />

      <Preview>Découvrez le devis de votre projet web, adapté à vos besoins</Preview>

      <Container
        style={{
          padding: "12px",
          color: "#111827",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 14,
          lineHeight: "22px",
          borderRadius: 8,
        }}
      >
        <Section>
          <Text style={{ fontSize: 16, margin: 0, marginBottom: 12 }}>
            Bonjour {contact.firstName},
          </Text>
          <Text style={{ margin: 0, marginBottom: 8 }}>Merci pour votre demande de devis.</Text>
          <Text style={{ margin: 0, marginBottom: 8 }}>
            Voici le récapitulatif de vos besoins avec une estimation tarifaire :
          </Text>
          <Section
            style={{
              marginTop: 12,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: 12,
              backgroundColor: "#f9fafb",
            }}
          >
            <Text style={{ margin: 0, fontWeight: 700, marginBottom: 8 }}>Détails</Text>
            {pricing.items.map((item) => (
              <Section key={item.label} style={{ margin: 0, padding: 0 }}>
                <Text style={{ margin: 0 }}>
                  {item.label} {item.amount === 0 ? `· inclus` : null} : {formatEuro(item.amount)}
                </Text>
              </Section>
            ))}

            <Section style={{ marginTop: 8, borderTop: "1px solid #e5e7eb", paddingTop: 8 }}>
              <Text style={{ margin: 0 }}>Total : {formatEuro(pricing.totals.total)}</Text>
            </Section>
            <Text style={{ margin: 0, marginTop: 8, color: "#6b7280" }}>Prix TTC</Text>
          </Section>

          <Section style={{ marginTop: 12 }}>
            {priceOption === "rent" ? (
              <Text style={{ margin: 0 }}>
                Offre location à partir de {formatEuro(pricing.totals.total)}/mois (hébergement &
                maintenance inclus)
              </Text>
            ) : (
              <Text style={{ margin: 0 }}>
                Offre achat à partir de {formatEuro(pricing.totals.total)} (hébergement &
                maintenance offerts pendant 1 an)
              </Text>
            )}
          </Section>

          <Section style={{ marginTop: 12 }}>
            <Text style={{ margin: 0 }}>
              Pour passer à l’étape suivante, vous pouvez réserver un court appel (téléphonique ou
              visio) afin de discuter ensemble de votre projet.
            </Text>

            <Button
              href="https://cal.com/tcaweb/rdv-decouverte"
              style={{
                backgroundColor: "#2563eb",
                marginTop: 12,
                display: "inline-block",
                borderRadius: 6,
                padding: "8px 16px",
                color: "#ffffff",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Réserver un appel de 15 min
            </Button>
          </Section>
          <Section style={{ marginTop: 24 }}>
            <Text style={{ margin: 0 }}>À très vite,</Text>
            <Text style={{ margin: 0 }}>Thomas de TCA Web</Text>
          </Section>
        </Section>
      </Container>
    </Html>
  );
}
