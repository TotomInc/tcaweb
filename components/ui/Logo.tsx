import Image from "next/image";
import { twMerge } from "tailwind-merge";

export interface LogoProps {
  variant: "white" | "blue";
  className?: string;
}

export function Logo({ variant, className }: LogoProps) {
  return (
    <Image
      alt="TCA Web"
      className={twMerge(className, "h-6 w-auto object-contain lg:h-8")}
      height={192}
      quality={90}
      src={variant === "white" ? "/_static/images/logo-white.png" : "/_static/images/logo-blue.png"}
      width={780}
    />
  );
}
