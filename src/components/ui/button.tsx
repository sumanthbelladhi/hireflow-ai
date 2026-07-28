import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-2xl
        px-5 py-3 sm:px-6
        text-sm
        font-semibold
        transition-all
        duration-300
        cursor-pointer
        `,
        variant === "primary" &&
          `
          bg-indigo-600
          text-white
          hover:bg-indigo-500
          hover:scale-[1.02]
          shadow-lg
          shadow-indigo-500/20
          `,
        variant === "secondary" &&
          `
          border
          border-slate-700
          bg-slate-900/70
          text-slate-200
          hover:bg-slate-800
          `,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;