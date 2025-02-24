import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { How } from "@/components/sections/How";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Expertise />
      <How />
      <Portfolio />
      <WhyUs />
    </main>
  );
}
