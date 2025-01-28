import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { How } from "@/components/sections/How";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Expertise />
      <How />
    </main>
  );
}
