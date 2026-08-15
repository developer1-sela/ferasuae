/**
 * Temporary stock photography (Unsplash, free license, no attribution
 * required) standing in for Firas's real product/gym photography. Every
 * spot listed here is meant to be swapped for the real shot described in
 * the matching PhotoPlaceholder `spec` prop — nothing here is final.
 *
 * Picked and visually checked (not just link-tested) for two things:
 * enough tonal range to survive our dark overlay treatment, and a focal
 * subject that survives an aggressive object-cover crop at the size it's
 * actually used at.
 */
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;
}

export const stockImages = {
  heroShop: unsplash("1495555687398-3f50d6e79e1e"), // real fight — punch connecting, red gloves/headgear, crowd behind ropes
  gatewayAcademy: unsplash("1517438322307-e67111335449"), // coach + fighter, pad work
  gymInterior: unsplash("1716307035615-1c6465a32ef2"), // heavy bag row, boxing club interior
  productRashguard: unsplash("1780476870853-59dbb8765869"), // kicker in ring, action
  productGloves: unsplash("1601039834205-4e3f1e932f5a"), // boxing gloves, black & white
  productShorts: unsplash("1602827113876-839bcf3ccb3a"), // grapplers on mats, black shorts
  productHoodie: unsplash("1528515038361-c1c059a6eff2"), // man in black hoodie, portrait
  teaserBoxing: unsplash("1770734265410-0c686b750f0f"), // hands wrapped in red tape
  teaserMma: unsplash("1565888270083-cb8cbb350d66"), // fighter in ring corner, moody
  teaserMuayThai: unsplash("1525680996651-0222228be6f0"), // muay thai kick, action
  igPadSession: unsplash("1770734265410-0c686b750f0f", 800),
  igNewDrop: unsplash("1528515038361-c1c059a6eff2", 800),
  igSparringClip: unsplash("1525680996651-0222228be6f0", 800),
  igGymCandid: unsplash("1716307035615-1c6465a32ef2", 800),
  igGearDetail: unsplash("1711825051967-f8ba8c0845e7", 800), // gloves + pads flat lay, orange
  igCoachSpotlight: unsplash("1517438322307-e67111335449", 800),

  // Shop catalog — added for the 16-product mock catalog (2026-08-15)
  sparringGlovesDramatic: unsplash("1622599518895-be813cc42628"), // red/blue dual-tone lit gloves portrait
  hoodieMoodyFigure: unsplash("1759586004778-8f01fd29f1ed"), // hooded figure, dark, riverside, moody
} as const;
