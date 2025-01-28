import { NextIcon } from "@/components/ui/icons/NextIcon";
import { PrismaIcon } from "@/components/ui/icons/PrismaIcon";
import { ReactIcon } from "@/components/ui/icons/ReactIcon";
import { TailwindIcon } from "@/components/ui/icons/TailwindIcon";
import { TypescriptIcon } from "@/components/ui/icons/TypescriptIcon";
import { VercelIcon } from "@/components/ui/icons/VercelIcon";
import { OrbitingCircles } from "@/components/ui/OrbitingCircles";

export function Item2() {
  return (
    <div className="relative mx-auto h-[164px] w-full max-w-sm gap-2 overflow-hidden rounded-t-xl border border-b-0 border-gray-200 bg-gray-100">
      <div className="absolute inset-0 bottom-[-50%] flex flex-col items-center justify-center">
        <OrbitingCircles iconSize={24} radius={56} duration={8}>
          <NextIcon />
          <TailwindIcon />
          <VercelIcon />
        </OrbitingCircles>

        <OrbitingCircles reverse iconSize={32} radius={106} duration={10}>
          <PrismaIcon />
          <ReactIcon />
          <TypescriptIcon />
        </OrbitingCircles>
      </div>
    </div>
  );
}
