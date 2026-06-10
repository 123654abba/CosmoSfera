import { Binoculars, Orbit, Telescope } from "lucide-astro";

export const sections = [
  {
    id: "astronomy",
    title: "Астрономия",
    short: "Наблюдаемая Вселенная",
    description:
      "Звезды, созвездия, галактики, телескопы и способы читать небо через наблюдения.",
    href: "/sections/astronomy/",
    image:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/science/2022/07/STScI-01GA6KKWG229B16K4Q38CH3BXS.png?crop=faces%2Cfocalpoint&fit=clip&h=8441&w=14575",
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
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/v404cyg_lg.jpeg?w=1041",
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
    image:
      "https://www.nasa.gov/wp-content/uploads/2024/10/1-pia26378-main-sol1282p-zcam09340-09341-z63-r0e.jpg?w=2048",
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
