/* eslint-disable react/no-array-index-key */
import styles from "./Spinner.module.css";

import { twMerge } from "tailwind-merge";

export interface SpinnerProps {
  className?: string;
  spinnerColor?: string;
}

export function Spinner({ className, spinnerColor = "#fff" }: SpinnerProps) {
  return (
    <div
      style={{ "--spinner-color": spinnerColor } as React.CSSProperties}
      className={twMerge(styles["sk-fading-circle"], "size-[30px]", className)}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className={twMerge(styles[`sk-circle${index + 1}`], styles["sk-circle"])}
        />
      ))}
    </div>
  );
}
