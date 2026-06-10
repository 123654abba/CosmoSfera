import { Binoculars, Orbit, Telescope } from "lucide-astro";

export const sections = [
  {
    id: "astronomy",
    title: "Астрономия",
    short: "Наблюдаемая Вселенная",
    description:
      "Звезды, созвездия, галактики, телескопы и способы читать небо через наблюдения.",
    href: "/sections/astronomy/",
    image: "images/cosmic-cliffs.png",
    imageAlt:
      "Область звездообразования NGC 3324 в туманности Киля, снятая телескопом James Webb",
    accent: "#f6b35f",
    icon: Telescope,
    topics: ["звезды", "галактики", "телескопы", "наблюдения"]
  },
  {
    id: "astrophysics",
    title: "Астрофизика",
    short: "Физика космических процессов",
    description:
      "Гравитация, излучение, черные дыры, нейтронные звезды, темная материя и космология.",
    href: "/sections/astrophysics/",
    image: "images/black-hole-v404.jpeg",
    imageAlt:
      "Кольца рентгеновского излучения вокруг черной дыры V404 Cygni",
    accent: "#70d6ff",
    icon: Orbit,
    topics: ["гравитация", "спектры", "черные дыры", "космология"]
  },
  {
    id: "planetology",
    title: "Планетология",
    short: "Миры, поверхности и атмосферы",
    description:
      "Планеты, спутники, экзопланеты, малые тела и условия, при которых миры становятся обитаемыми.",
    href: "/sections/planetology/",
    image: "images/mars-jezero.jpg",
    imageAlt:
      "Панорама кратера Езеро, снятая марсоходом Perseverance на Марсе",
    accent: "#d99a6c",
    icon: Binoculars,
    topics: ["Марс", "экзопланеты", "спутники", "атмосферы"]
  }
] as const;

export type SectionId = (typeof sections)[number]["id"];

export function getSection(sectionId: string) {
  return sections.find((section) => section.id === sectionId);
}
