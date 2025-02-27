import type { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label htmlFor={props.id} className={twMerge("text-sm font-medium text-gray-700", className)}>
      {children}
    </label>
  );
}
