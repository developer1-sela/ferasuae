import type { Metadata } from "next";
import { ShopHeroBand } from "@/components/shop/shop-hero-band";
import { ShopCatalog } from "@/components/shop/shop-catalog";

export const metadata: Metadata = {
  title: "Shop — GRAV FIGHT",
  description:
    "Rashguards, gloves, shorts, apparel, and training equipment — fight-tested gear from GRAV FIGHT, UAE.",
};

export default function ShopPage() {
  return (
    <>
      <ShopHeroBand />
      <ShopCatalog />
    </>
  );
}
