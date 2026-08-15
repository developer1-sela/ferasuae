import type { SVGProps } from "react";

/** Diagonal arrow, used inside CTAs. Flips in RTL via the rtl: variant on the wrapper. */
export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 8L12 15L19 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 6H21M3 12H21M3 18H21"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Camera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 8.5C4 7.67 4.67 7 5.5 7H8L9.2 5.2C9.4 4.9 9.73 4.71 10.09 4.71H13.91C14.27 4.71 14.6 4.9 14.8 5.2L16 7H18.5C19.33 7 20 7.67 20 8.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V8.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="13" r="3.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Play(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 8.5L15.5 12L10 15.5V8.5Z" fill="currentColor" />
    </svg>
  );
}

export function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" />
    </svg>
  );
}

export function WhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20 12a8 8 0 1 1-3.6-6.67M20 12a8 8 0 0 1-11.4 7.24L4 20l0.87-4.24A8 8 0 0 1 20 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.6c.15-.5.65-1.35 1.3-1.1.4.15.85 1.05 1.05 1.5.15.35.05.6-.15.85-.45.55-.5.6-.2 1.1.5.85 1.4 1.65 2.3 2.05.4.2.6.15.9-.2.35-.4.6-.9 1.1-.7.45.15 1.3.65 1.4 1.05.1.4-.05.85-.35 1.15-.5.5-1.2.75-1.9.6-1.55-.35-3.6-1.85-4.6-3.4-.5-.75-.95-1.7-.85-2.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 3V6.5M16 3V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Filter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6H20M7 12H17M10.5 18H13.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12.5L9.5 17L19 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
