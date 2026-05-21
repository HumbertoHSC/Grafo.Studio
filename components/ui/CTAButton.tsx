"use client";

import Link from "next/link";
import { clsx } from "clsx";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-[#ff4e00] text-white hover:bg-[#e04500] shadow-lg hover:shadow-[#ff4e00]/30",
    outline:
      "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
  };

  const props = {
    className: clsx(base, variants[variant], className),
    ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
