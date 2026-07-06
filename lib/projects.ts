export type Project = {
  slug: string;
  name: string;
  domain: string;
  category: string;
  description: string;
  stack: string[];
  stats: { label: string; value: string }[];
  image: string;
  url?: string;
  live: boolean;
};

export const projects: Project[] = [
  {
    slug: "investtime",
    name: "investtime",
    domain: "investtime.com.tr",
    category: "Yatırım platformu",
    description:
      "Arsa ve tarım arazisi yatırım platformu. Gelişmiş arama, filtreleme ve kurumsal üyelik sistemi içeriyor.",
    stack: ["Django", "Bootstrap", "PostgreSQL", "AWS Lightsail"],
    stats: [
      { label: "İlan", value: "4.000+" },
      { label: "Müşteri", value: "3.000+" },
    ],
    image: "/projects/investtime.webp",
    url: "https://investtime.com.tr",
    live: true,
  },
  {
    slug: "investtime-crm",
    name: "investtime CRM",
    domain: "Kurumsal panel",
    category: "Satış yönetim sistemi",
    description:
      "Satış personeli, emlakçı ve yöneticilerin rol bazlı giriş yaptığı kurumsal panel. Santral API entegrasyonu ile çağrı yönetimi, müşteri takibi, prim raporlama ve satış istatistikleri.",
    stack: ["Django REST Framework", "PostgreSQL", "Verimor API"],
    stats: [
      { label: "Modül", value: "6+" },
      { label: "Rol", value: "Çoklu" },
    ],
    image: "/projects/crm.svg",
    live: true,
  },
  {
    slug: "housetime",
    name: "housetime",
    domain: "housetime.com.tr",
    category: "Yapı satış platformu",
    description:
      "Ev, villa ve apart satış platformu. Ürün konfigürasyon sayfaları ve müşteri inşaat süreç takip paneli içeriyor.",
    stack: ["Django REST Framework", "React", "PostgreSQL"],
    stats: [
      { label: "Konfig.", value: "Çoklu" },
      { label: "Panel", value: "Canlı takip" },
    ],
    image: "/projects/housetime.webp",
    url: "https://housetime.com.tr",
    live: true,
  },
  {
    slug: "tuana-torun",
    name: "Tuana Torun",
    domain: "Moda e-ticaret",
    category: "Kişiye özel üretim",
    description:
      "Kişiye özel ölçü ile üretim yapan moda e-ticaret platformu. Ödeme entegrasyonu ve sipariş yönetimi ile geliştiriliyor.",
    stack: ["Django 5.2", "Next.js 15", "Docker"],
    stats: [{ label: "Durum", value: "Geliştirmede" }],
    image: "/projects/tuana.svg",
    live: false,
  },
];
