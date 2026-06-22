import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "mx-auto mb-3 block w-fit rounded-lg border border-blue-200 bg-blue-100 px-3 py-1.5 text-center font-heading text-sm leading-tight font-semibold tracking-tight uppercase",
        className,
      )}
    >
      <span className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
        {children}
      </span>
    </div>
  );
}
