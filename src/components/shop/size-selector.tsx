"use client";

export function SizeSelector({
  sizes,
  selected,
  onSelect,
  label,
}: {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {label && <span className="text-eyebrow text-white-mute">{label}</span>}
      <div dir="ltr" className="flex flex-wrap gap-2">
        {sizes.map((size) => {
          const active = size === selected;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelect(size)}
              aria-pressed={active}
              className={`min-w-12 rounded-sm border px-4 py-2.5 text-sm transition-colors duration-200 ${
                active
                  ? "border-red-core bg-red-core text-white"
                  : "border-white/25 text-white-dim hover:border-white/50 hover:text-white"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
