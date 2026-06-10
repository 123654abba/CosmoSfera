export const objects = [
  {
    name: "NGC 3324",
    category: "star-forming-region",
    summary:
      "Область звездообразования в туманности Киля, где излучение молодых массивных звезд формирует газовые стены и полости.",
    keyFacts: ["созвездие Киля", "инфракрасные наблюдения JWST", "активное звездообразование"],
    relatedArticles: ["cosmic-cliffs"]
  },
  {
    name: "V404 Cygni",
    category: "black-hole",
    summary:
      "Рентгеновская двойная система с черной дырой, где вспышки позволяют изучать пыль и аккрецию.",
    keyFacts: ["около 7800 световых лет", "рентгеновская двойная", "наблюдения Chandra и Swift"],
    relatedArticles: ["black-holes"]
  },
  {
    name: "Jezero",
    category: "planetary-crater",
    summary:
      "Марсианский кратер, где Perseverance исследует древние осадочные породы и следы водной истории.",
    keyFacts: ["Марс", "дельтовые отложения", "марсоход Perseverance"],
    relatedArticles: ["planetary-surfaces"]
  },
  {
    name: "Солнце",
    category: "star",
    summary:
      "Ближайшая звезда и главный источник энергии Солнечной системы; ее активность связывает астрономию с космической погодой.",
    keyFacts: ["плазма", "магнитные поля", "солнечный ветер"],
    relatedArticles: ["telescopes-and-light"]
  },
  {
    name: "Млечный Путь",
    category: "galaxy",
    summary:
      "Галактика, внутри которой находится Солнечная система; ее структура помогает понимать масштаб звездных дисков и темной материи.",
    keyFacts: ["спиральная галактика", "галактический диск", "темная материя"],
    relatedArticles: ["galaxies-and-scale", "dark-matter"]
  },
  {
    name: "Европа",
    category: "icy-moon",
    summary:
      "Ледяной спутник Юпитера с вероятным подповерхностным океаном, один из ключевых миров планетологии.",
    keyFacts: ["Юпитер", "ледяная кора", "океан под поверхностью"],
    relatedArticles: ["icy-moons"]
  },
  {
    name: "TRAPPIST-1",
    category: "exoplanet-system",
    summary:
      "Система компактных каменистых экзопланет у холодной звезды, полезная для изучения атмосфер и обитаемости.",
    keyFacts: ["семь планет", "транзиты", "красный карлик"],
    relatedArticles: ["exoplanets"]
  },
  {
    name: "Крабовидная туманность",
    category: "supernova-remnant",
    summary:
      "Остаток сверхновой с пульсаром в центре, показывающий связь взрывов звезд, релятивистских частиц и излучения.",
    keyFacts: ["пульсар", "остаток сверхновой", "рентгеновское излучение"],
    relatedArticles: ["spectra", "black-holes"]
  }
] as const;
