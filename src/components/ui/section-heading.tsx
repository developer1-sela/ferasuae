import type { ReactNode } from "react";
import { Reveal } from "./reveal";

const accentDot: Record<string, string> = {
  red: "bg-red-core",
  violet: "bg-violet-bright",
  white: "bg-white",
};

export function SectionHeading({
  eyebrow,
  title,
  accent = "white",
  align = "start",
  className = "",
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: "red" | "violet" | "white";
  align?: "start" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start"
      } ${className}`}
    >
      <Reveal>
        <span className="text-eyebrow inline-flex items-center gap-2.5 text-white-mute">
          <span className={`h-1.5 w-1.5 rounded-full ${accentDot[accent]}`} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="text-display-lg whitespace-pre-line text-white">
          {title}
        </h2>
      </Reveal>
      {children && <Reveal delay={140}>{children}</Reveal>}
    </div>
  );
}
