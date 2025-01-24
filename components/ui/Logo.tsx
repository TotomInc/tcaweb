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
      width={780}
      height={192}
      quality={90}
      className={twMerge(className, "h-8 w-auto object-contain")}
      src={variant === "white" ? "/_static/images/logo-white.png" : "/_static/images/logo-blue.png"}
    />
  );
}
