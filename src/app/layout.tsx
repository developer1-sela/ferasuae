import type { Metadata } from "next";
import { archivoBlack, inter, cairo } from "@/lib/fonts";
import { LocaleProvider } from "@/lib/i18n/locale-context";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRAV FIGHT — Combat Sportswear & Academy, UAE",
  description:
    "GRAV FIGHT is a UAE combat sports brand — fight-tested gear and a coaching academy built by people who train, not marketing teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivoBlack.variable} ${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink text-white">
        <LocaleProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
