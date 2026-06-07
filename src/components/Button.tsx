"use client";

import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "emergency";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "bg-midnight text-alabaster hover:bg-midnight/90 shadow-lg shadow-midnight/10 hover:shadow-xl hover:shadow-midnight/20",
  outline:
    "border-2 border-midnight/20 text-midnight hover:border-gold hover:text-gold hover:bg-gold/5",
  ghost: "text-midnight/70 hover:text-gold hover:bg-gold/5",
  emergency:
    "bg-emergency text-white hover:bg-emergency-dark shadow-lg shadow-emergency/20 hover:shadow-xl hover:shadow-emergency/30",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
