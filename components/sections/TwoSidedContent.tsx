import Image from "next/image";

interface ContainerProps {
  children: React.ReactNode;
  title: string;
  image: {
    src: string;
    alt: string;
    quality: number;
  };
}

export function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-blue-800">{children}</h3>;
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-balance text-gray-800 lg:text-lg">{children}</p>;
}

export function Container({ children, title, image }: ContainerProps) {
  return (
    <section className="relative mx-auto mb-24 w-full max-w-7xl px-8">
      <h2 className="mx-auto max-w-3xl text-balance text-center text-2xl font-bold text-gray-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="relative min-h-[500px] w-full sm:min-h-[unset]">
          <Image
            fill
            src={image.src}
            alt={image.alt}
            quality={image.quality}
            sizes="(max-width: 1023px) 75vw, 50vw"
            className="rounded-xl object-cover shadow-sm"
          />
        </div>

        <div className="flex flex-col space-y-4">{children}</div>
      </div>
    </section>
  );
}
