import type { Locale } from "./i18n/dictionaries";
import { stockImages } from "./stock-images";

export type ProductCategory =
  | "rashguards"
  | "gloves"
  | "shorts"
  | "apparel"
  | "equipment";

export type ProductTag = "new" | "bestSeller" | "restocked";
export type PriceBucket = "all" | "under150" | "150to300" | "over300";

export type ProductImage = {
  spec: string;
  src: string;
  tone: "red" | "mono";
};

export type Product = {
  slug: string;
  category: ProductCategory;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  priceAed: number;
  tag?: ProductTag;
  sizes: string[];
  images: ProductImage[]; // [0] is the grid thumbnail
};

/**
 * Mock catalog — 16 products across 5 categories, standing in for Firas's
 * real inventory. Sizing scales are deliberately category-specific (S–XL
 * for clothing, oz for gloves, One Size / meterage for equipment) so the
 * size filter is a real working control, not a decorative one.
 *
 * Each product carries 2 gallery images rather than the 3–4 a live catalog
 * would have — honest for mock data given how few genuinely distinct,
 * on-brand stock photos exist for niche gear (jump ropes, mouthguards,
 * gear bags). Several images are reused across products, matching the
 * precedent already set on Home (e.g. igPadSession/teaserBoxing share a
 * source photo at different widths) — the `spec` caption on each slot
 * still describes the real shot Firas needs to supply, regardless of
 * which stand-in photo currently fills it.
 */
export const products: Product[] = [
  // ---- Rashguards ----
  {
    slug: "ghost-rashguard",
    category: "rashguards",
    name: { en: "Ghost Rashguard", ar: "راشغارد غوست" },
    description: {
      en: "A minimal, second-skin rashguard built for no-gi and grappling — four-way stretch, flatlock seams that won't chafe through a long roll, and a chest mark that's earned, not printed for show.",
      ar: "راشغارد بسيط وملاصق للجسم مصمم للمصارعة بدون كيمونو — قماش مطاطي رباعي الاتجاه وخياطة مسطحة لا تسبب احتكاكاً في الجولات الطويلة.",
    },
    priceAed: 249,
    tag: "new",
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Rashguard, front, studio", src: stockImages.productRashguard, tone: "mono" },
      { spec: "Rashguard, detail on fabric texture", src: stockImages.teaserBoxing, tone: "mono" },
    ],
  },
  {
    slug: "ghost-rashguard-long-sleeve",
    category: "rashguards",
    name: { en: "Ghost Rashguard — Long Sleeve", ar: "راشغارد غوست — كم طويل" },
    description: {
      en: "Same second-skin fit as the original, full sleeve coverage for mat burn and cold-morning sessions. Built to move under a gi, not fight it.",
      ar: "نفس القصة الملاصقة للراشغارد الأصلي، مع تغطية كاملة للأكمام لحماية من احتكاك الحصيرة وجلسات الصباح الباردة.",
    },
    priceAed: 269,
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Long-sleeve rashguard, front, studio", src: stockImages.productRashguard, tone: "mono" },
      { spec: "Rashguard, on the mat, training context", src: stockImages.gymInterior, tone: "mono" },
    ],
  },
  {
    slug: "grav-rashguard-violet",
    category: "rashguards",
    name: { en: "Grav Rashguard — Violet", ar: "راشغارد غراف — بنفسجي" },
    description: {
      en: "The Academy colorway. Same fight-tested construction, a violet chest panel that nods to the coaching floor without shouting about it.",
      ar: "نسخة الأكاديمية. نفس التصنيع المُختبر في القتال، بلوحة صدر بنفسجية تشير إلى أرضية التدريب دون مبالغة.",
    },
    priceAed: 259,
    tag: "restocked",
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Rashguard, violet panel detail, studio", src: stockImages.teaserMuayThai, tone: "mono" },
      { spec: "Rashguard, worn in live training", src: stockImages.igSparringClip, tone: "mono" },
    ],
  },

  // ---- Shorts ----
  {
    slug: "core-fight-shorts",
    category: "shorts",
    name: { en: "Core Fight Shorts", ar: "شورت القتال الأساسي" },
    description: {
      en: "High slits, a locked-in waistband, and a cut that survives a leg kick without riding up. No Velcro rattle, no wasted fabric.",
      ar: "فتحات جانبية عالية، حزام خصر ثابت، وقصة تتحمل ضربات الساق دون أن ترتفع. بلا ضوضاء فيلكرو وبلا قماش زائد.",
    },
    priceAed: 219,
    tag: "new",
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Fight shorts, front, studio", src: stockImages.productShorts, tone: "mono" },
      { spec: "Fight shorts, in motion, high kick", src: stockImages.teaserMma, tone: "mono" },
    ],
  },
  {
    slug: "grapple-shorts-ink",
    category: "shorts",
    name: { en: "Grapple Shorts — Ink", ar: "شورت المصارعة — أسود" },
    description: {
      en: "Shorter cut, four-way stretch panels at the hip for full guard mobility. Built for the mat, not the cage.",
      ar: "قصة أقصر، مع لوحات مطاطية رباعية الاتجاه عند الورك لحرية حركة كاملة في الحراسة. صُنع للحصيرة لا للحلبة.",
    },
    priceAed: 239,
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Grapple shorts, front, studio", src: stockImages.productShorts, tone: "mono" },
      { spec: "Grapple shorts, grappling context", src: stockImages.gymInterior, tone: "mono" },
    ],
  },

  // ---- Apparel ----
  {
    slug: "grav-hoodie-ink",
    category: "apparel",
    name: { en: "Grav Hoodie — Ink", ar: "هودي غراف — أسود" },
    description: {
      en: "Heavyweight fleece, kangaroo pocket, a chest mark instead of a billboard. Built for the walk from the car park to the mats, not the runway.",
      ar: "قماش فليس ثقيل، جيب أمامي، وعلامة صغيرة على الصدر بدل الشعارات الكبيرة. صُنع للطريق من السيارة إلى الحصيرة، لا للعرض.",
    },
    priceAed: 329,
    tag: "restocked",
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Hoodie, flat lay, ink colorway", src: stockImages.productHoodie, tone: "mono" },
      { spec: "Hoodie, worn, gym exterior", src: stockImages.igNewDrop, tone: "mono" },
    ],
  },
  {
    slug: "grav-hoodie-ash",
    category: "apparel",
    name: { en: "Grav Hoodie — Ash", ar: "هودي غراف — رمادي" },
    description: {
      en: "Same heavyweight build as Ink, in a washed-out ash that hides chalk dust better than it should.",
      ar: "نفس التصنيع الثقيل لنسخة الأسود، بلون رمادي فاتح يخفي غبار الطباشير أفضل مما يجب.",
    },
    priceAed: 329,
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Hoodie, ash colorway, worn, moody", src: stockImages.hoodieMoodyFigure, tone: "mono" },
      { spec: "Hoodie, flat lay, ash colorway", src: stockImages.productHoodie, tone: "mono" },
    ],
  },
  {
    slug: "core-tee-red",
    category: "apparel",
    name: { en: "Core Tee — Red", ar: "تيشيرت أساسي — أحمر" },
    description: {
      en: "Heavyweight cotton, boxy cut, the one shirt in the rotation that survives a wash cycle after every session.",
      ar: "قطن ثقيل، قصة مربعة، القميص الوحيد في الخزانة الذي يصمد بعد كل جولة غسيل.",
    },
    priceAed: 149,
    tag: "new",
    sizes: ["S", "M", "L", "XL"],
    images: [
      { spec: "Core tee, red colorway, flat lay", src: stockImages.igGearDetail, tone: "red" },
      { spec: "Core tee, worn, gym context", src: stockImages.teaserBoxing, tone: "mono" },
    ],
  },

  // ---- Gloves ----
  {
    slug: "striker-gloves-14oz",
    category: "gloves",
    name: { en: "Striker Gloves 14oz", ar: "قفازات سترايكر ١٤ أونصة" },
    description: {
      en: "Layered foam padding, a wide wrist strap that actually locks, and a curve built for pad work as much as sparring.",
      ar: "حشوة إسفنجية متعددة الطبقات، حزام معصم عريض يثبت فعلياً، وانحناء مصمم لعمل الوسائد كما للاشتباك.",
    },
    priceAed: 389,
    tag: "bestSeller",
    sizes: ["10oz", "12oz", "14oz", "16oz"],
    images: [
      { spec: "Boxing gloves, product hero", src: stockImages.productGloves, tone: "mono" },
      { spec: "Gloves, detail on wrist strap", src: stockImages.igGearDetail, tone: "mono" },
    ],
  },
  {
    slug: "striker-gloves-10oz",
    category: "gloves",
    name: { en: "Striker Gloves 10oz", ar: "قفازات سترايكر ١٠ أونصات" },
    description: {
      en: "Same build as the 14oz, lighter for speed work and competition-weight sparring rounds.",
      ar: "نفس تصنيع نسخة الـ١٤ أونصة، أخف وزناً لتمارين السرعة وجولات الاشتباك بوزن المنافسات.",
    },
    priceAed: 349,
    sizes: ["8oz", "10oz", "12oz"],
    images: [
      { spec: "Gloves, dramatic dual-tone light", src: stockImages.sparringGlovesDramatic, tone: "mono" },
      { spec: "Boxing gloves, product hero", src: stockImages.productGloves, tone: "mono" },
    ],
  },
  {
    slug: "grav-sparring-gloves",
    category: "gloves",
    name: { en: "Grav Sparring Gloves", ar: "قفازات غراف للاشتباك" },
    description: {
      en: "Extra padding across the knuckle line, built specifically for full-contact sparring rounds — not your competition pair.",
      ar: "حشوة إضافية عبر خط المفاصل، مصممة خصيصاً لجولات الاشتباك الكامل — ليست قفازك للمنافسات.",
    },
    priceAed: 359,
    sizes: ["14oz", "16oz", "18oz"],
    images: [
      { spec: "Sparring gloves, dramatic dual-tone light", src: stockImages.sparringGlovesDramatic, tone: "mono" },
      { spec: "Gloves + pads, flat lay", src: stockImages.igGearDetail, tone: "mono" },
    ],
  },

  // ---- Equipment ----
  {
    slug: "grav-hand-wraps",
    category: "equipment",
    name: { en: "Grav Hand Wraps", ar: "لفافات اليد من غراف" },
    description: {
      en: "Mexican-style stretch wraps, a thumb loop that stays put, and a hook-and-loop closure that survives a full camp of daily wrapping.",
      ar: "لفافات مطاطية بالطراز المكسيكي، حلقة إبهام ثابتة، وإغلاق فيلكرو يصمد طوال معسكر تدريب كامل.",
    },
    priceAed: 89,
    sizes: ["4m", "5m"],
    images: [
      { spec: "Hand wraps, red, in-hand", src: stockImages.teaserBoxing, tone: "red" },
      { spec: "Hand wraps, detail, wrist wrap", src: stockImages.igPadSession, tone: "mono" },
    ],
  },
  {
    slug: "focus-mitts-pair",
    category: "equipment",
    name: { en: "Focus Mitts — Pair", ar: "وسائد التركيز — زوج" },
    description: {
      en: "Curved catching surface, shock-absorbing foam, built to take a coach's full session of pad rounds without breaking down.",
      ar: "سطح استقبال منحني، إسفنج ماص للصدمات، مصمم لتحمل جلسة تدريب كاملة من جولات الوسائد دون أن يتلف.",
    },
    priceAed: 219,
    sizes: ["One Size"],
    images: [
      { spec: "Coach mid pad-work, catching a strike", src: stockImages.gatewayAcademy, tone: "mono" },
      { spec: "Focus mitts, coach spotlight, close crop", src: stockImages.igCoachSpotlight, tone: "mono" },
    ],
  },
  {
    slug: "jump-rope-pro",
    category: "equipment",
    name: { en: "Jump Rope — Pro", ar: "حبل القفز — احترافي" },
    description: {
      en: "Ball-bearing handles, a cable that won't kink mid-round, adjustable for anyone from a beginner's class to a fight-week cut.",
      ar: "مقابض بكرات محورية، سلك لا يتشابك في منتصف الجولة، قابل للتعديل من صف المبتدئين إلى أسبوع خفض الوزن قبل القتال.",
    },
    priceAed: 79,
    sizes: ["One Size"],
    images: [
      { spec: "Jump rope, gear flat lay", src: stockImages.igGearDetail, tone: "mono" },
      { spec: "Jump rope, gym floor, conditioning context", src: stockImages.gymInterior, tone: "mono" },
    ],
  },
  {
    slug: "grav-gear-bag",
    category: "equipment",
    name: { en: "Grav Gear Bag", ar: "حقيبة معدات غراف" },
    description: {
      en: "A ventilated shoe pocket, a wrap compartment that keeps wet gear away from dry, and a strap that survives being dragged across a gym floor.",
      ar: "جيب أحذية مهوّى، حجرة للفافات تفصل المعدات المبللة عن الجافة، وحزام يتحمل السحب على أرضية الصالة.",
    },
    priceAed: 249,
    sizes: ["One Size"],
    images: [
      { spec: "Gear bag, on gym bench, natural light", src: stockImages.gymInterior, tone: "mono" },
      { spec: "Gear bag, packed detail", src: stockImages.igGymCandid, tone: "mono" },
    ],
  },
  {
    slug: "mouthguard-vented",
    category: "equipment",
    name: { en: "Mouthguard — Vented", ar: "واقي الفم — مهوّى" },
    description: {
      en: "Boil-and-bite fit, a vented channel so you can actually breathe between rounds, comes with its own vented case.",
      ar: "يُشكّل بالغلي والعض، بقناة تهوية تتيح التنفس فعلياً بين الجولات، ويأتي مع علبة تهوية خاصة به.",
    },
    priceAed: 59,
    sizes: ["One Size", "Youth"],
    images: [
      { spec: "Fighter, ring corner, moody close crop", src: stockImages.teaserMma, tone: "mono" },
      { spec: "Fighter, live round, intensity", src: stockImages.igSparringClip, tone: "mono" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  const sameCategory = products.filter(
    (p) => p.slug !== product.slug && p.category === product.category
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);

  const rest = products.filter(
    (p) => p.slug !== product.slug && p.category !== product.category
  );
  return [...sameCategory, ...rest].slice(0, count);
}

export function priceBucketOf(priceAed: number): Exclude<PriceBucket, "all"> {
  if (priceAed < 150) return "under150";
  if (priceAed <= 300) return "150to300";
  return "over300";
}

const arabicIndicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

function toArabicIndicDigits(value: number): string {
  return String(value).replace((/\d/g), (digit) => arabicIndicDigits[Number(digit)]);
}

export function formatPrice(priceAed: number, locale: Locale): string {
  return locale === "ar"
    ? `${toArabicIndicDigits(priceAed)} درهم`
    : `AED ${priceAed}`;
}
