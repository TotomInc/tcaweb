import { ContactUs } from "@/components/sections/ContactUs";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { How } from "@/components/sections/How";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TCA Web",
    description: "Agence web spécialisée dans la création de sites pour PME",
    url: "https://tcaweb.fr",
    telephone: "+33642871966",
    openingHours: "Mo-Fr 09:00-18:00",
    logo: "https://tcaweb.fr/_static/images/logo-blue.png",
  };

  return (
    <main className="bg-gray-100">
      <script
        // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <Hero />
      <Expertise />
      <How />
      <Portfolio />
      <WhyUs />
      <ContactUs />
    </main>
  );
}
