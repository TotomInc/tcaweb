/* eslint-disable react-refresh/only-export-components */
import { twMerge } from "tailwind-merge";

import { Badge } from "@/components/ui/Badge";

function Root({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={twMerge(
        "relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-10 sm:gap-12 sm:py-12",
        className,
      )}
    >
      {children}
    </section>
  );
}

function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={twMerge("mx-auto max-w-7xl px-6", className)}>{children}</div>;
}

function Heading({
  label,
  description,
  badge,
  labelClassName,
  descriptionClassName,
  badgeClassName,
}: {
  label: string;
  description: string;
  badge: string;
  labelClassName?: string;
  descriptionClassName?: string;
  badgeClassName?: string;
}) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center">
      <Badge className={badgeClassName}>{badge}</Badge>

      <h2
        data-content={label}
        className={twMerge(
          "font-heading mb-2.5 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 bg-clip-text text-center text-2xl font-semibold tracking-tight text-balance text-transparent sm:text-3xl",
          labelClassName,
        )}
      >
        {label}
      </h2>

      <p
        className={twMerge(
          "text-secondary text-center text-base/relaxed text-balance",
          descriptionClassName,
        )}
      >
        {description}
      </p>
    </div>
  );
}

export const Section = {
  Root,
  Container,
  Heading,
};
