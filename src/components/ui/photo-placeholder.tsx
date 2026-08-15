import Image from "next/image";
import { Camera, Play } from "./icons";

type Tone = "red" | "violet" | "mono";

const toneStyles: Record<Tone, { wash: string; ring: string; chip: string }> = {
  red: {
    wash:
      "from-red-deep/60 via-ink/70 to-ink bg-[radial-gradient(circle_at_30%_20%,var(--gf-red-core)_0%,transparent_55%)]",
    ring: "ring-red-core/30",
    chip: "border-red-core/50 text-red-bright",
  },
  violet: {
    wash:
      "from-violet-deep/60 via-ink/70 to-ink bg-[radial-gradient(circle_at_70%_25%,var(--gf-violet-core)_0%,transparent_55%)]",
    ring: "ring-violet-core/30",
    chip: "border-violet-core/50 text-violet-bright",
  },
  mono: {
    wash:
      "from-black-soft via-ink/80 to-ink bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08)_0%,transparent_55%)]",
    ring: "ring-white/10",
    chip: "border-white/25 text-white-dim",
  },
};

const toneOverlay: Record<Tone, string> = {
  red: "from-red-deep/35 via-transparent to-ink/45",
  violet: "from-violet-deep/35 via-transparent to-ink/45",
  mono: "from-black/25 via-transparent to-ink/45",
};

/**
 * A photo slot that either shows a real image (`src`) — sourced stock
 * standing in for Firas's own photography — or, when no `src` is given
 * yet, a composed placeholder: gradient wash + grain + a corner "spec"
 * chip describing exactly what shot needs to go there. Never a bare grey
 * box either way.
 */
export function PhotoPlaceholder({
  tone = "mono",
  spec,
  index,
  className = "",
  video = false,
  cropMarks = true,
  src,
  sizes = "100vw",
}: {
  tone?: Tone;
  spec: string;
  index?: string;
  className?: string;
  video?: boolean;
  cropMarks?: boolean;
  src?: string;
  sizes?: string;
}) {
  const styles = toneStyles[tone];

  if (src) {
    return (
      <div className={`group relative overflow-hidden bg-black-soft grain-overlay ${className}`}>
        <Image
          src={src}
          alt={spec}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${toneOverlay[tone]}`} />

        {video && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink/50 text-white ring-1 ring-white/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <Play className="h-6 w-6" />
            </div>
          </div>
        )}

        {cropMarks && (
          <>
            <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-white/25" />
            <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-white/25" />
            <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/25" />
            <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/25" />
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden bg-gradient-to-br ${styles.wash} grain-overlay ${className}`}
    >
      {/* diagonal texture lines */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* center mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ring-1 ${styles.ring} text-white-mute/60 transition-transform duration-500 group-hover:scale-110`}
        >
          {video ? (
            <Play className="h-6 w-6" />
          ) : (
            <Camera className="h-5 w-5" />
          )}
        </div>
      </div>

      {cropMarks && (
        <>
          <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-white/20" />
          <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-white/20" />
          <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-white/20" />
          <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-white/20" />
        </>
      )}

      <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
        <span
          dir="ltr"
          className={`inline-flex max-w-[85%] items-center gap-1.5 rounded-sm border bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm ${styles.chip}`}
        >
          {index && <span className="opacity-70">{index}</span>}
          <span className="truncate opacity-90">{spec}</span>
        </span>
      </div>
    </div>
  );
}
