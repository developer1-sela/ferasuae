import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

type Variant = "red" | "violet" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  red: "bg-red-core text-white hover:bg-red-bright border border-red-core hover:border-red-bright",
  violet:
    "bg-violet-core text-white hover:bg-violet-bright border border-violet-core hover:border-violet-bright",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white hover:text-ink",
  ghost:
    "bg-transparent text-white border border-transparent hover:border-white/20 px-0",
};

export function ButtonLink({
  href,
  children,
  variant = "red",
  size = "md",
  className = "",
  icon = true,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  external?: boolean;
}) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-sm"
      : size === "sm"
      ? "px-4 py-2.5 text-xs"
      : "px-6 py-3.5 text-xs";

  const base = `group/btn inline-flex items-center justify-center gap-2.5 font-display uppercase tracking-[0.08em] transition-all duration-300 ${sizeClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 rtl:rotate-90 rtl:group-hover/btn:-translate-x-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {content}
    </Link>
  );
}
