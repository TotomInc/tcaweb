import { ArrowRightIcon, EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export function ContactCta({ className, ...props }: Props) {
  return (
    <Link
      {...props}
      href="/contact"
      className={twMerge(
        "group text-primary font-heading relative flex items-center gap-2.5 rounded-full border border-blue-700 bg-white px-7 py-3 text-base font-semibold tracking-tight shadow-md inset-shadow-sm inset-shadow-blue-800/60 focus:ring-2 focus:ring-blue-600/75 focus:outline-none",
        className,
      )}
    >
      Un projet ?{" "}
      <div aria-hidden className="relative size-5">
        <ArrowRightIcon className="absolute size-5 duration-150 ease-out group-hover:translate-x-1 group-hover:opacity-0" />
        <EnvelopeOpenIcon className="absolute size-5 -translate-x-1 opacity-0 duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-150" />
      </div>
    </Link>
  );
}
