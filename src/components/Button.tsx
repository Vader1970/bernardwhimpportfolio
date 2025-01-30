import React from "react";
import clsx from "clsx"; // Utility to manage class names conditionally

// Define button styles
export type ButtonVariant = "outline" | "filled" | "dark";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode; // Optional icon (e.g., an SVG component)
  fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "outline",
  size = "md",
  icon,
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded-[5px] px-6 py-2 font-medium transition-colors duration-300 flex items-center justify-center gap-2",
        {
          // Button Variants
          "border border-white bg-transparent text-white hover:bg-white hover:text-[#2B3043]":
            variant === "outline",
          "bg-white text-[#2B3043] border border-white hover:bg-transparent hover:text-white":
            variant === "filled",
          "bg-[#40485b] text-white hover:bg-white hover:text-[#40485b]":
            variant === "dark",

          // Button Sizes
          "text-sm px-4 py-2": size === "sm",
          "text-base px-6 py-3": size === "md",
          "text-lg px-8 py-4": size === "lg",

          // Full Width Option
          "w-full": fullWidth,
        },
        className
      )}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}{" "}
      {/* Show icon if exists */}
      {title}
    </button>
  );
};
