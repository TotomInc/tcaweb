import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image
        src="/_static/images/logo.svg"
        alt="LeLaboWeb"
        width={32}
        height={32}
      />

      <span className="ml-1.5 bg-gradient-to-br from-blue-900 to-blue-500 bg-clip-text font-heading text-2xl font-bold text-transparent">
        LLW
      </span>

      <span className="sr-only">LeLaboWeb, agence de développement web</span>
    </>
  );
}
