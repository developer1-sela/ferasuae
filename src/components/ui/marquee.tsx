type Tone = "red" | "violet";

const dotTone: Record<Tone, string> = {
  red: "text-red-core",
  violet: "text-violet-bright",
};

export function Marquee({
  items,
  tone = "red",
  speed = "normal",
}: {
  items: string[];
  tone?: Tone;
  speed?: "normal" | "slow";
}) {
  const track = [...items, ...items];

  return (
    <div dir="ltr" className="relative flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-10 pr-10 ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {track.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-10">
            <span className="text-display-sm whitespace-nowrap font-display uppercase text-white/90">
              {item}
            </span>
            <span className={`text-2xl ${dotTone[tone]}`}>✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
