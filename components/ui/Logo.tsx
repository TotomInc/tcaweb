import Image from "next/image";
import cx from "classnames";

export type LogoProps = {
  textColorVariant: "white" | "blue-gradient";
};

export function Logo({ textColorVariant }: LogoProps) {
  return (
    <>
      <Image
        src="/_static/images/logo.svg"
        alt="LeLaboWeb"
        width={32}
        height={32}
      />

      <span
        className={cx("ml-1.5 font-heading text-2xl font-bold", {
          "bg-gradient-to-br from-blue-900 to-blue-500 bg-clip-text text-transparent":
            textColorVariant === "blue-gradient",
          "text-white": textColorVariant === "white",
        })}
      >
        LLW
      </span>

      <span className="sr-only">LeLaboWeb, agence de développement web</span>
    </>
  );
}
