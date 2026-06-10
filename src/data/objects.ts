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
  }
] as const;
