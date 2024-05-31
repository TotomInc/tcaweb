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
      width={130}
      height={32}
      quality={75}
      className={twMerge(className)}
      src={
        variant === "blue"
          ? "/_static/images/logo-blue.png"
          : "/_static/images/logo.png"
      }
    />
  );
}
