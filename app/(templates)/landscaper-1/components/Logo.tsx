import Image from "next/image";

export function Logo() {
  return (
    <Image
      priority
      src="/_static/landscaper-1/images/garland-logo.png"
      alt="Logo Paysagiste"
      width={114}
      height={32}
    />
  );
}
