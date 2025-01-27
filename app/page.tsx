import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Expertise />
    </main>
  );
}
