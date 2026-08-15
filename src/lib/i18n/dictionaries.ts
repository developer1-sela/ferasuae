export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export const dictionaries = {
  en: {
    meta: {
      title: "GRAV FIGHT — Combat Sportswear & Academy, UAE",
      description:
        "GRAV FIGHT is a UAE combat sports brand — fight-tested gear and a coaching academy built by people who train, not marketing teams.",
    },
    nav: {
      shop: "Shop",
      academy: "Academy",
      about: "About",
      dashboard: "My Account",
      cta: "Book a session",
      langSwitch: "العربية",
    },
    hero: {
      eyebrow: "UAE · Est. 2019",
      titleLine1: "GEAR THAT",
      titleLine2: "SHOWS UP",
      subhead:
        "Rashguards, gloves, and fight wear stress-tested on our own mats before they ever hit a rack. Built for the roll, not the runway.",
      cta: "Shop the drop",
      scroll: "Scroll",
    },
    marquee: {
      items: [
        "TRAIN. FIGHT. REPEAT.",
        "NO SHORTCUTS",
        "BUILT IN THE UAE",
        "GEAR THAT EARNS ITS SCARS",
      ],
    },
    academyGateway: {
      eyebrow: "The other side of the house",
      title: "ENTER THE\nACADEMY",
      copy: "Boxing, MMA, and Muay Thai — coached by people who still compete. A different floor, same standards, zero shortcuts.",
      cta: "Enter the Academy",
      spec: "Coach mid-drill on the mat, violet gel light",
    },
    stats: {
      eyebrow: "By the numbers",
      items: [
        { value: "2,400+", label: "Fighters trained" },
        { value: "6", label: "Years on the mat" },
        { value: "38", label: "Weekly class sessions" },
        { value: "12", label: "Coaches on the floor" },
      ],
    },
    story: {
      eyebrow: "The house",
      title: "Built by fighters,\nnot a marketing deck",
      quote: "“We didn't start GRAV FIGHT to sell hoodies. We started it because the gear we wanted didn't exist, and the coaching we needed wasn't structured enough.”",
      attribution: "— Coach Firas, Founder",
      copy: "GRAV FIGHT began on a single mat in Dubai with a coach, a heavy bag, and a stubborn belief that training gear should be designed by people who actually get hit. Six years later it's a full academy floor and a catalog worn by fighters across the Emirates — same standards, same refusal to cut corners.",
      cta: "Read our story",
    },
    shopTeaser: {
      eyebrow: "Fresh on the rack",
      title: "Latest drop",
      cta: "View all gear",
      products: [
        { name: "Ghost Rashguard", price: "AED 249", tag: "New" },
        { name: "Striker Gloves 14oz", price: "AED 389", tag: "Best seller" },
        { name: "Core Fight Shorts", price: "AED 219", tag: "New" },
        { name: "Grav Hoodie — Ink", price: "AED 329", tag: "Restocked" },
      ],
    },
    shopPage: {
      hero: {
        eyebrow: "The full rack",
        title: "Shop",
        subhead:
          "Rashguards, gloves, shorts, apparel, and the equipment that backs them up — everything stress-tested before it hits a shelf.",
        countSuffix: "pieces in the current rack",
      },
      filters: {
        categoryLabel: "Category",
        sizeLabel: "Size",
        priceLabel: "Price",
        sortLabel: "Sort",
        allCategories: "All",
        categories: {
          rashguards: "Rashguards",
          gloves: "Gloves & wraps",
          shorts: "Shorts",
          apparel: "Apparel",
          equipment: "Equipment",
        },
        priceBuckets: {
          all: "All prices",
          under150: "Under AED 150",
          "150to300": "AED 150–300",
          over300: "Over AED 300",
        },
        sortOptions: {
          newest: "Newest",
          priceLowHigh: "Price: Low to High",
          priceHighLow: "Price: High to Low",
        },
        clear: "Clear filters",
        resultsEmpty: "Nothing matches that combination. Try clearing a filter.",
      },
      pdp: {
        sizeLabel: "Size",
        whatsappCta: "Enquire via WhatsApp",
        whatsappMessage:
          "Hi GRAV FIGHT, I'd like to enquire about the {product} ({size}).",
        logistics: "Ships across the UAE · Exchanges within 14 days",
        notFoundTitle: "This one's not on the rack",
        notFoundCopy:
          "The product you're looking for doesn't exist or has been moved. Head back to the shop.",
        backToShop: "Back to the shop",
        related: {
          eyebrow: "Keep going",
          title: "You might also want",
        },
      },
    },
    academyTeaser: {
      eyebrow: "This week on the floor",
      title: "Find your program",
      cta: "View all programs",
      programs: [
        {
          name: "Boxing Fundamentals",
          level: "Beginner",
          copy: "Footwork, guard, and the four punches that matter — built from zero.",
        },
        {
          name: "MMA Performance",
          level: "Intermediate",
          copy: "Striking meets grappling under live-round pressure testing.",
        },
        {
          name: "Muay Thai Conditioning",
          level: "All levels",
          copy: "Clinch work, elbows, and the conditioning that survives round three.",
        },
      ],
    },
    instagram: {
      eyebrow: "Follow along",
      title: "@gravfight",
      cta: "Follow on Instagram",
    },
    ctaBanner: {
      title: "Your first session\nis on us",
      copy: "Walk in, meet the coaches, feel the floor. No pressure, no contract — just one honest session.",
      cta: "Claim your session",
    },
    footer: {
      tagline: "Combat sportswear & coaching academy, built in the UAE.",
      shopCol: "Shop",
      shopLinks: ["New arrivals", "Gloves & wraps", "Apparel", "Sale"],
      academyCol: "Academy",
      academyLinks: ["Boxing", "MMA", "Muay Thai", "Book a session"],
      studioCol: "The house",
      studioLinks: ["Our story", "Coaches", "Locations", "Careers"],
      newsletterTitle: "Get the drop first",
      newsletterCopy: "New gear, new programs, zero spam.",
      newsletterCta: "Subscribe",
      newsletterPlaceholder: "Your email",
      rights: "All rights reserved.",
      placeholderNote: "Placeholder copy — pending Firas approval.",
    },
    productTags: {
      new: "New",
      bestSeller: "Best seller",
      restocked: "Restocked",
    },
  },
  ar: {
    meta: {
      title: "غراف فايت — ملابس قتالية وأكاديمية تدريب، الإمارات",
      description:
        "غراف فايت علامة إماراتية للرياضات القتالية — معدات مُختبرة في القتال وأكاديمية تدريب أسسها مقاتلون، لا فريق تسويق.",
    },
    nav: {
      shop: "المتجر",
      academy: "الأكاديمية",
      about: "من نحن",
      dashboard: "حسابي",
      cta: "احجز حصة",
      langSwitch: "English",
    },
    hero: {
      eyebrow: "الإمارات · تأسست 2019",
      titleLine1: "معدات",
      titleLine2: "تثبت نفسها",
      subhead:
        "قمصان راشغارد وقفازات وملابس قتال اختُبرت على حلبتنا قبل أن تصل للرفوف. صُنعت للتمرين، لا للعرض.",
      cta: "تسوّق أحدث الإصدارات",
      scroll: "مرّر للأسفل",
    },
    marquee: {
      items: [
        "تدرّب. قاتل. كرّر.",
        "بلا اختصارات",
        "صُنع في الإمارات",
        "معدات تستحق ندوبها",
      ],
    },
    academyGateway: {
      eyebrow: "الجانب الآخر من البيت",
      title: "ادخل\nالأكاديمية",
      copy: "ملاكمة وMMA ومواي تاي، بإشراف مدربين ما زالوا يتنافسون. أرضية مختلفة، نفس المعايير، بلا اختصارات.",
      cta: "ادخل الأكاديمية",
      spec: "Coach mid-drill on the mat, violet gel light",
    },
    stats: {
      eyebrow: "بالأرقام",
      items: [
        { value: "٢٬٤٠٠+", label: "مقاتل تدرّب معنا" },
        { value: "٦", label: "سنوات على الحلبة" },
        { value: "٣٨", label: "حصة أسبوعياً" },
        { value: "١٢", label: "مدرب على الأرض" },
      ],
    },
    story: {
      eyebrow: "البيت",
      title: "أسسه مقاتلون،\nلا فريق تسويق",
      quote: "«لم نبدأ غراف فايت لبيع الهوديز. بدأناها لأن المعدات التي أردناها لم تكن موجودة، والتدريب الذي احتجناه لم يكن منظّماً بما يكفي.»",
      attribution: "— المدرب فراس، المؤسس",
      copy: "بدأت غراف فايت على حلبة واحدة في دبي، بمدرب وكيس ملاكمة وإيمان راسخ بأن معدات التدريب يجب أن يصممها من يتلقّى الضربات فعلاً. بعد ست سنوات، أصبحت أكاديمية كاملة وكتالوجاً يرتديه مقاتلون في أنحاء الإمارات — نفس المعايير، ونفس الرفض للاختصارات.",
      cta: "اقرأ قصتنا",
    },
    shopTeaser: {
      eyebrow: "وصل حديثاً",
      title: "أحدث الإصدارات",
      cta: "عرض كل المعدات",
      products: [
        { name: "راشغارد غوست", price: "٢٤٩ درهم", tag: "جديد" },
        { name: "قفازات سترايكر ١٤ أونصة", price: "٣٨٩ درهم", tag: "الأكثر مبيعاً" },
        { name: "شورت القتال الأساسي", price: "٢١٩ درهم", tag: "جديد" },
        { name: "هودي غراف — أسود", price: "٣٢٩ درهم", tag: "توفر من جديد" },
      ],
    },
    shopPage: {
      hero: {
        eyebrow: "الرف الكامل",
        title: "المتجر",
        subhead:
          "راشغارد وقفازات وشورتات وملابس، ومعدات التدريب التي تدعمها — كل قطعة مُختبرة قبل أن تصل للرف.",
        countSuffix: "قطعة على الرف حالياً",
      },
      filters: {
        categoryLabel: "الفئة",
        sizeLabel: "المقاس",
        priceLabel: "السعر",
        sortLabel: "الترتيب",
        allCategories: "الكل",
        categories: {
          rashguards: "راشغارد",
          gloves: "قفازات ولفافات",
          shorts: "شورتات",
          apparel: "ملابس",
          equipment: "معدات",
        },
        priceBuckets: {
          all: "كل الأسعار",
          under150: "أقل من ١٥٠ درهم",
          "150to300": "١٥٠–٣٠٠ درهم",
          over300: "أكثر من ٣٠٠ درهم",
        },
        sortOptions: {
          newest: "الأحدث",
          priceLowHigh: "السعر: من الأقل للأعلى",
          priceHighLow: "السعر: من الأعلى للأقل",
        },
        clear: "مسح الفلاتر",
        resultsEmpty: "لا يوجد ما يطابق هذا المزيج. جرّب إزالة أحد الفلاتر.",
      },
      pdp: {
        sizeLabel: "المقاس",
        whatsappCta: "استفسر عبر واتساب",
        whatsappMessage: "مرحباً غراف فايت، أرغب بالاستفسار عن {product} ({size}).",
        logistics: "شحن لكل الإمارات · استبدال خلال ١٤ يوم",
        notFoundTitle: "هذه القطعة غير موجودة على الرف",
        notFoundCopy: "المنتج الذي تبحث عنه غير موجود أو تم نقله. ارجع إلى المتجر.",
        backToShop: "العودة إلى المتجر",
        related: {
          eyebrow: "تابع التصفح",
          title: "قد يعجبك أيضاً",
        },
      },
    },
    academyTeaser: {
      eyebrow: "هذا الأسبوع على الحلبة",
      title: "اختر برنامجك",
      cta: "عرض كل البرامج",
      programs: [
        {
          name: "أساسيات الملاكمة",
          level: "مبتدئ",
          copy: "خطوات القدم، الحراسة، واللكمات الأربع الأساسية — من الصفر.",
        },
        {
          name: "أداء MMA",
          level: "متوسط",
          copy: "اللكم يلتقي بالمصارعة تحت اختبار ضغط الجولات الحية.",
        },
        {
          name: "لياقة مواي تاي",
          level: "كل المستويات",
          copy: "عمل الاشتباك، الكوع، واللياقة التي تصمد حتى الجولة الثالثة.",
        },
      ],
    },
    instagram: {
      eyebrow: "تابعنا",
      title: "gravfight@",
      cta: "تابع على إنستغرام",
    },
    ctaBanner: {
      title: "أول حصة تدريبية\nعلى حسابنا",
      copy: "تعال، تعرّف على المدربين، جرّب الأجواء. بلا ضغط، بلا التزام — حصة واحدة صادقة.",
      cta: "احجز حصتك",
    },
    footer: {
      tagline: "ملابس قتالية وأكاديمية تدريب، صُنعت في الإمارات.",
      shopCol: "المتجر",
      shopLinks: ["وصل حديثاً", "قفازات ولفافات", "ملابس", "تخفيضات"],
      academyCol: "الأكاديمية",
      academyLinks: ["ملاكمة", "MMA", "مواي تاي", "احجز حصة"],
      studioCol: "البيت",
      studioLinks: ["قصتنا", "المدربون", "الفروع", "وظائف"],
      newsletterTitle: "كن أول من يعرف",
      newsletterCopy: "معدات جديدة، برامج جديدة، بلا إزعاج.",
      newsletterCta: "اشترك",
      newsletterPlaceholder: "بريدك الإلكتروني",
      rights: "جميع الحقوق محفوظة.",
      placeholderNote: "نص مبدئي — بانتظار موافقة فراس.",
    },
    productTags: {
      new: "جديد",
      bestSeller: "الأكثر مبيعاً",
      restocked: "توفر من جديد",
    },
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
  ? Widen<U>[]
  : T extends object
  ? { -readonly [K in keyof T]: Widen<T[K]> }
  : T;

export type Dictionary = Widen<typeof dictionaries.en>;
