export const englishSections = {
  planetology: {
    title: "Habitable worlds",
    short: "Planets, oceans, and life conditions",
    description:
      "Exoplanets, Mars, icy moons, atmospheres, and planetary geology as physical environments where water, energy, and chemistry can be tested.",
    href: "/en/sections/planetology/",
    topics: ["exoplanets", "icy oceans", "Mars", "life conditions"],
    fieldGuide: {
      signal:
        "Water traces, surface forms, minerals, atmospheres, ice, orbits, and signs of material exchange between surface and interior.",
      methods: ["surface imaging", "mineral spectra", "space missions", "comparative planetology"],
      questions: [
        "Where could water remain stable for long enough?",
        "Which energy sources are available to the world?",
        "Is there exchange between atmosphere, surface, and interior?"
      ],
      practice: [
        "read terrain as a record of events",
        "connect missions to habitability questions",
        "compare planets, moons, and exoplanets"
      ]
    }
  },
  astrophysics: {
    title: "Methods and models",
    short: "How data becomes a careful conclusion",
    description:
      "Spectra, transits, gravity, radiation, and models that turn faint signals into estimates of composition, mass, atmosphere, and uncertainty.",
    href: "/en/sections/astrophysics/",
    topics: ["spectra", "transits", "models", "limits"],
    fieldGuide: {
      signal:
        "Spectra, light curves, radial velocities, gravitational effects, and repeated signals that can be checked in data.",
      methods: ["spectroscopy", "photometry", "physical models", "statistical tests"],
      questions: [
        "Which signal was actually measured, and which part is interpretation?",
        "Which world properties can be inferred from starlight?",
        "Where does a model explain data, and where does uncertainty remain?"
      ],
      practice: [
        "separate observation from explanation",
        "read spectral lines",
        "check a conclusion with independent methods"
      ]
    }
  },
  astronomy: {
    title: "Cosmic environment",
    short: "Stars, scale, and radiation",
    description:
      "Stars, nebulae, galaxies, distance, and telescopes as the context in which potentially habitable worlds form and are observed.",
    href: "/en/sections/astronomy/",
    topics: ["stars", "radiation", "scale", "telescopes"],
    fieldGuide: {
      signal:
        "Luminosity, color, age, stellar activity, distance, and the larger environment around a planetary system.",
      methods: ["observations", "photometry", "catalogs", "sky maps"],
      questions: [
        "How does a star shape planetary climate and atmosphere?",
        "What can color, brightness, and spectrum reveal?",
        "How does an image connect to a physical process?"
      ],
      practice: [
        "read scientific image captions",
        "compare wavelength ranges",
        "keep scale and distance in view"
      ]
    }
  }
} as const;

export const englishArticleCopy = {
  "biosignatures": {
    title: "Biosignatures: why one gas does not prove life",
    description:
      "How spectroscopy searches for possible signs of life in atmospheres, and why oxygen, methane, or water require careful testing.",
    tags: ["biosignatures", "spectroscopy", "atmospheres", "exoplanets"],
    relatedTopics: ["spectroscopy", "atmosphere", "false positives"],
    overview:
      "A biosignature is useful only when the observed signal is tied to a physical model and tested against non-biological explanations.",
    takeaways: [
      "A single molecule is not enough to claim life.",
      "Atmospheric context matters: pressure, temperature, stellar radiation, and chemistry change the interpretation.",
      "Independent observations are needed before a signal becomes persuasive."
    ],
    signal: "persistent atmospheric imbalance or a molecule measured in a planetary spectrum",
    data: "transmission or emission spectra, stellar activity checks, and repeated observations",
    limitation: "false positives can come from photochemistry, geology, instrument noise, or incomplete models",
    heroAlt: "Transmission spectra of the exoplanet WASP-39 b measured by Webb instruments"
  },
  "black-holes": {
    title: "Black holes: not emptiness, but a gravity laboratory",
    description:
      "What accretion disks, X-ray flares, and the motion of nearby stars reveal about black holes.",
    tags: ["black holes", "gravity", "accretion", "X-rays"],
    relatedTopics: ["accretion disk", "event horizon", "X-ray binaries"],
    overview:
      "Black holes are studied through the matter and light around them: disks, jets, flares, and orbital motion.",
    takeaways: [
      "A black hole itself is not imaged like an ordinary object.",
      "Hot accretion disks and X-ray flares provide measurable signals.",
      "Gravity near compact objects tests models under extreme conditions."
    ],
    signal: "X-ray variability, heated gas, and orbital motion in a compact system",
    data: "multi-wavelength observations from space telescopes and timing measurements",
    limitation: "the signal often comes from surrounding matter, not directly from the horizon",
    heroAlt: "X-ray rings around V404 Cygni produced by a black hole outburst and dust scattering"
  },
  "cosmic-cliffs": {
    title: "Cosmic Cliffs: how stars are born",
    description:
      "A reading of NGC 3324 in the Carina Nebula: why gas walls look like a landscape and what Webb observes there.",
    tags: ["stars", "nebulae", "JWST", "observations"],
    relatedTopics: ["star formation", "infrared astronomy", "Carina Nebula"],
    overview:
      "The image is not just scenery: radiation from young massive stars sculpts gas and dust while new stars form inside dense regions.",
    takeaways: [
      "Infrared light reveals structures hidden by dust.",
      "Massive stars reshape their birth clouds.",
      "Nebulae connect beautiful images to measurable physical processes."
    ],
    signal: "infrared emission from dust, gas, and young stellar objects",
    data: "Webb imaging across infrared wavelengths",
    limitation: "a single image needs physical interpretation and wavelength context",
    heroAlt: "Webb image of the Cosmic Cliffs in NGC 3324, a star-forming region in the Carina Nebula"
  },
  "dark-matter": {
    title: "Dark matter: the invisible framework of galaxies",
    description:
      "Why astronomers infer unseen mass in galaxies and clusters, and which observations support the idea.",
    tags: ["dark matter", "galaxies", "gravity", "cosmology"],
    relatedTopics: ["gravitational lensing", "rotation curves", "cosmology"],
    overview:
      "Dark matter is inferred from gravity: galaxies and clusters behave as if more mass is present than visible matter can provide.",
    takeaways: [
      "The evidence is gravitational, not visual.",
      "Rotation curves and lensing point to unseen mass.",
      "The nature of dark matter remains an open question."
    ],
    signal: "galaxy rotation, gravitational lensing, and large-scale structure",
    data: "surveys, cluster observations, and models of cosmic structure",
    limitation: "the gravitational effect is strong, but the particle or physical nature is unknown",
    heroAlt: "Map-like astronomical view used to study dark matter through gravity and galaxies"
  },
  "exoplanets": {
    title: "Exoplanets: how worlds around other stars are found",
    description:
      "Transits, radial velocities, and exoplanet atmospheres: what detection methods can and cannot tell us.",
    tags: ["exoplanets", "transits", "atmospheres", "habitability"],
    relatedTopics: ["transit method", "radial velocity", "habitable zone"],
    overview:
      "Most exoplanets are known through indirect signals: a star dims, moves, or changes spectrum because a planet is present.",
    takeaways: [
      "A detection method usually gives only part of the planet's story.",
      "Transits can reveal radius and orbital period.",
      "Atmospheres require more difficult repeated observations."
    ],
    signal: "periodic dimming of a star or small stellar motion",
    data: "light curves, radial velocities, orbital models, and sometimes spectra",
    limitation: "size, mass, atmosphere, and surface conditions are not all measured at once",
    heroAlt: "Lineup of the seven TRAPPIST-1 planets based on measured sizes, masses, and orbits"
  },
  "galaxies-and-scale": {
    title: "Galaxies and the scale of the Universe",
    description:
      "How to understand galaxy sizes, distances, and why observing distant objects is also looking into the past.",
    tags: ["galaxies", "scale", "Universe", "observations"],
    relatedTopics: ["galaxies", "light-year", "redshift"],
    overview:
      "Cosmic scale turns distance into time: light from far galaxies carries information from earlier stages of the Universe.",
    takeaways: [
      "A telescope records light that has traveled for years, thousands, or billions of years.",
      "Redshift helps estimate distance and cosmic expansion.",
      "Galaxy images combine structure, time, and observational limits."
    ],
    signal: "galaxy light, redshift, shape, and brightness",
    data: "deep fields, catalogs, spectra, and distance estimates",
    limitation: "brightness, dust, and selection effects shape what can be seen",
    heroAlt: "Hubble Ultra Deep Field with thousands of galaxies at different distances and ages"
  },
  "habitable-worlds-framework": {
    title: "Habitable worlds: what scientists actually test",
    description:
      "Habitability is not a pretty planet image. It depends on water, energy, chemistry, environmental stability, and data quality.",
    tags: ["habitability", "water", "energy", "chemistry"],
    relatedTopics: ["habitable zone", "subsurface ocean", "biosignature"],
    overview:
      "A world is assessed as a system, not a slogan: the key question is which physical conditions are present and how well they are measured.",
    takeaways: [
      "The habitable zone is a starting point, not a conclusion.",
      "Icy moons can be interesting far from the classical habitable zone.",
      "Claims about habitability must state the limits of the data."
    ],
    signal: "water-related features, energy sources, atmosphere, surface history, or chemical exchange",
    data: "mission observations, spectra, maps, models, and comparison with known worlds",
    limitation: "conditions that allow habitability are not evidence that life exists",
    heroAlt: "Diagram of the TRAPPIST-1 system with its habitable zone around a cool star"
  },
  "icy-moons": {
    title: "Icy moons: oceans beneath the crust",
    description:
      "Europa, Enceladus, and other icy worlds show that interesting environments can exist far outside the classical habitable zone.",
    tags: ["icy moons", "Europa", "oceans", "habitability"],
    relatedTopics: ["tidal heating", "subsurface ocean", "habitability"],
    overview:
      "Icy moons matter because liquid water may be hidden below an ice shell and powered by tidal heating rather than sunlight.",
    takeaways: [
      "Subsurface oceans can exist far from the Sun.",
      "Plumes can give spacecraft access to interior material.",
      "Water and organics are promising, but not proof of life."
    ],
    signal: "ice geology, plumes, gravity, magnetic data, and chemical traces",
    data: "Cassini measurements, Galileo data, and future Europa Clipper observations",
    limitation: "ocean composition and energy exchange remain hard to constrain directly",
    heroAlt: "Water vapor plume at Enceladus compared with Webb and Cassini observations"
  },
  "planetary-surfaces": {
    title: "Planetary surfaces: reading traces of water, wind, and volcanism",
    description:
      "How images of Mars and other worlds are read as records of water, climate, craters, layers, and geological history.",
    tags: ["Mars", "geology", "surfaces", "Perseverance"],
    relatedTopics: ["sedimentary rocks", "craters", "rovers"],
    overview:
      "A planetary surface is a record: layers, channels, dunes, craters, and minerals can preserve environmental history.",
    takeaways: [
      "Terrain is interpreted through process, not appearance alone.",
      "Mars preserves ancient landscapes that Earth often erases.",
      "Rovers connect images to chemistry and rock context."
    ],
    signal: "deltas, layered rocks, hydrated minerals, craters, dunes, and erosion patterns",
    data: "orbital images, rover cameras, spectroscopy, and sample context",
    limitation: "ancient habitability is not the same as evidence of ancient life",
    heroAlt: "Panorama of Jezero crater on Mars captured by the Perseverance rover"
  },
  "spectra": {
    title: "Spectra: the chemical passport of space",
    description:
      "How absorption and emission lines help measure composition, temperature, speed, and atmospheres of distant objects.",
    tags: ["spectra", "light", "chemical composition", "velocity"],
    relatedTopics: ["redshift", "absorption lines", "exoplanets"],
    overview:
      "A spectrum spreads light by wavelength, turning a point of light into a physical measurement.",
    takeaways: [
      "Spectral lines can reveal atoms and molecules.",
      "The same spectrum can carry temperature, velocity, and composition information.",
      "Weak signals require careful calibration and repeated data."
    ],
    signal: "absorption and emission lines at specific wavelengths",
    data: "spectrographs, wavelength calibration, comparison with laboratory physics",
    limitation: "noise, stellar contamination, and model assumptions can change interpretation",
    heroAlt: "Hubble spectroscopy graphic showing light split into wavelengths and element lines"
  },
  "stellar-activity-habitability": {
    title: "Stellar activity: why habitability starts with the star",
    description:
      "Flares, ultraviolet radiation, and stellar age can shape a planet's atmosphere more strongly than orbital distance alone.",
    tags: ["stars", "radiation", "atmospheres", "habitability"],
    relatedTopics: ["stellar activity", "ultraviolet", "atmosphere"],
    overview:
      "A planet cannot be assessed apart from its star: radiation, flares, wind, and age shape atmospheric survival.",
    takeaways: [
      "The same orbit can be benign or harsh depending on the star.",
      "Red dwarfs are common but often magnetically active.",
      "Atmospheric loss is a central uncertainty for habitability."
    ],
    signal: "stellar flares, ultraviolet output, wind, and atmospheric response",
    data: "stellar monitoring, spectra, flare statistics, and atmospheric models",
    limitation: "activity varies over time, and distant atmospheres are hard to measure directly",
    heroAlt: "Solar eruption and plasma on the Sun's limb observed in extreme ultraviolet by SDO"
  },
  "telescopes-and-light": {
    title: "Telescopes and light: why one object looks different",
    description:
      "A short guide to wavelength ranges, from visible light to infrared and X-ray observations.",
    tags: ["telescopes", "light", "observations", "wavelengths"],
    relatedTopics: ["electromagnetic spectrum", "Hubble", "JWST"],
    overview:
      "Different telescopes do not simply make prettier pictures; they measure different forms of light and therefore different physics.",
    takeaways: [
      "Visible, infrared, ultraviolet, radio, and X-ray light reveal different processes.",
      "Instrument design shapes what can be measured.",
      "A scientific image is tied to filters, wavelengths, and calibration."
    ],
    signal: "brightness and structure measured in specific wavelength ranges",
    data: "space telescopes, filters, detectors, exposure time, and calibration",
    limitation: "no single wavelength gives the whole physical story",
    heroAlt: "Hubble Space Telescope on Earth orbit as an example of a multi-wavelength observing instrument"
  }
} as const;

export const englishGlossaryCopy = {
  "accretion-disk": {
    title: "Accretion disk",
    description:
      "A disk of gas and dust around a compact or massive object, where material loses energy, heats up, and gradually moves inward."
  },
  "biosignature": {
    title: "Biosignature",
    description:
      "A measurable feature that may be linked to life, but must be tested against non-biological explanations."
  },
  "dark-matter": {
    title: "Dark matter",
    description:
      "An unseen form of matter inferred from its gravitational influence on galaxies, clusters, and large-scale structure."
  },
  "electromagnetic-spectrum": {
    title: "Electromagnetic spectrum",
    description:
      "The full range of electromagnetic radiation, from radio waves to gamma rays. Different parts reveal different physical processes."
  },
  "exoplanet": {
    title: "Exoplanet",
    description:
      "A planet orbiting a star other than the Sun, usually studied through transits, radial velocities, or direct imaging."
  },
  "false-positive": {
    title: "False positive signal",
    description:
      "An observation that resembles the target signal but can be explained by noise, geology, stellar activity, or model error."
  },
  "galaxy": {
    title: "Galaxy",
    description:
      "A gravitationally bound system of stars, gas, dust, dark matter, and compact objects."
  },
  "gravitational-lensing": {
    title: "Gravitational lensing",
    description:
      "The bending of light by massive objects. Lensing helps estimate mass distribution, including invisible dark matter."
  },
  "habitable-zone": {
    title: "Habitable zone",
    description:
      "The region around a star where liquid water could exist on a planet's surface under suitable atmospheric conditions."
  },
  "nebula": {
    title: "Nebula",
    description:
      "A cloud of gas and dust in interstellar space. Nebulae can be stellar nurseries, supernova remnants, or reflection clouds."
  },
  "planetary-geology": {
    title: "Planetary geology",
    description:
      "The study of terrain, rocks, craters, volcanism, ice, and water traces on planets, moons, and small bodies."
  },
  "redshift": {
    title: "Redshift",
    description:
      "An increase in the wavelength of light caused by motion, cosmic expansion, or gravity."
  },
  "spectroscopy": {
    title: "Spectroscopy",
    description:
      "The study of light by wavelength. Absorption and emission lines reveal composition, temperature, speed, and physical state."
  },
  "stellar-activity": {
    title: "Stellar activity",
    description:
      "Variability in a star: flares, spots, magnetic processes, and particle flows that can affect planetary atmospheres."
  },
  "tidal-heating": {
    title: "Tidal heating",
    description:
      "Internal heating caused by repeated gravitational deformation from a nearby planet, star, or moon."
  },
  "transit-method": {
    title: "Transit method",
    description:
      "A method for finding exoplanets by measuring a small dip in starlight when a planet crosses the stellar disk."
  }
} as const;

export const englishResourceCopy = {
  "esa-ariel": {
    title: "ESA Ariel",
    description:
      "An ESA mission designed to study many exoplanet atmospheres and build a stronger picture of their composition and climate."
  },
  "esa-space-science": {
    title: "ESA Space Science",
    description:
      "European space missions, science overviews, and educational resources."
  },
  "europa-clipper": {
    title: "Europa Clipper",
    description:
      "NASA's mission to investigate Jupiter's icy moon Europa and its possible subsurface ocean."
  },
  "exoplanet-archive": {
    title: "NASA Exoplanet Archive",
    description:
      "A catalog of confirmed exoplanets, candidates, and planetary system parameters."
  },
  "habitable-worlds-observatory": {
    title: "NASA Habitable Worlds Observatory",
    description:
      "NASA information about a future observatory for direct study of potentially habitable exoplanets and their atmospheres."
  },
  "hubble-site": {
    title: "ESA/Hubble",
    description:
      "Image archives and science material from the Hubble Space Telescope."
  },
  "mars-program": {
    title: "NASA Mars Exploration",
    description:
      "Official information about Mars missions, rovers, orbiters, and data."
  },
  "nasa-astrobiology": {
    title: "NASA Astrobiology",
    description:
      "NASA resources about water, life's chemistry, habitability, and the search for life beyond Earth."
  },
  "nasa-eyes": {
    title: "NASA Eyes",
    description:
      "Interactive visualizations of missions, planets, moons, and spacecraft."
  },
  "nasa-science": {
    title: "NASA Science",
    description:
      "Official NASA material on the Universe, Solar System, missions, and science images."
  },
  "nasa-universe": {
    title: "NASA Universe",
    description:
      "NASA Science material about galaxies, black holes, dark matter, and cosmology."
  },
  "simbad": {
    title: "SIMBAD Astronomical Database",
    description:
      "An astronomical database of objects beyond the Solar System."
  }
} as const;

export const englishObjectCopy = {
  "NGC 3324": {
    name: "NGC 3324",
    category: "Star-forming region",
    summary:
      "A star-forming region in the Carina Nebula where radiation from young massive stars sculpts gas walls and cavities.",
    keyFacts: ["Carina constellation", "JWST infrared data", "active star formation"]
  },
  "V404 Cygni": {
    name: "V404 Cygni",
    category: "Black hole system",
    summary:
      "An X-ray binary with a black hole, where outbursts help study dust scattering and accretion.",
    keyFacts: ["about 7,800 light-years", "X-ray binary", "Chandra and Swift observations"]
  },
  "Jezero": {
    name: "Jezero",
    category: "Planetary crater",
    summary:
      "A Martian crater where Perseverance studies ancient sedimentary rocks and traces of water history.",
    keyFacts: ["Mars", "delta deposits", "Perseverance rover"]
  },
  "Солнце": {
    name: "Sun",
    category: "Star",
    summary:
      "The nearest star and the main energy source for the Solar System; its activity links astronomy to space weather.",
    keyFacts: ["plasma", "magnetic fields", "solar wind"]
  },
  "Млечный Путь": {
    name: "Milky Way",
    category: "Galaxy",
    summary:
      "The galaxy that contains the Solar System; its structure helps explain stellar disks and dark matter.",
    keyFacts: ["spiral galaxy", "galactic disk", "dark matter"]
  },
  "Европа": {
    name: "Europa",
    category: "Icy moon",
    summary:
      "Jupiter's icy moon with a probable subsurface ocean, one of the key worlds in habitability studies.",
    keyFacts: ["Jupiter", "ice shell", "subsurface ocean"]
  },
  "Энцелад": {
    name: "Enceladus",
    category: "Icy moon",
    summary:
      "A small moon of Saturn with water-vapor and ice-particle plumes that sample a subsurface ocean.",
    keyFacts: ["Saturn", "south-pole plumes", "salty ocean"]
  },
  "Титан": {
    name: "Titan",
    category: "Atmospheric moon",
    summary:
      "Saturn's large moon with a dense nitrogen atmosphere, organic chemistry, and a methane cycle on a cold surface.",
    keyFacts: ["Saturn", "dense atmosphere", "methane lakes"]
  },
  "TRAPPIST-1e": {
    name: "TRAPPIST-1e",
    category: "Rocky exoplanet",
    summary:
      "An Earth-size planet in the TRAPPIST-1 system, important for testing atmospheres around cool red stars.",
    keyFacts: ["red dwarf", "transits", "habitable zone"]
  },
  "Proxima Centauri b": {
    name: "Proxima Centauri b",
    category: "Nearest exoplanet",
    summary:
      "A planet around the nearest star to the Sun; its orbit is interesting, but stellar activity complicates interpretation.",
    keyFacts: ["4.2 light-years", "radial velocity", "red dwarf"]
  },
  "TRAPPIST-1": {
    name: "TRAPPIST-1",
    category: "Exoplanet system",
    summary:
      "A compact system of rocky exoplanets around a cool star, useful for studying atmospheres and habitability.",
    keyFacts: ["seven planets", "transits", "red dwarf"]
  },
  "Крабовидная туманность": {
    name: "Crab Nebula",
    category: "Supernova remnant",
    summary:
      "A supernova remnant with a central pulsar, connecting stellar explosions, relativistic particles, and radiation.",
    keyFacts: ["pulsar", "supernova remnant", "X-ray emission"]
  }
} as const;

export const englishResourceCategoryLabels: Record<string, string> = {
  agency: "Space agency",
  catalog: "Data catalog",
  mission: "Mission",
  simulator: "Simulator",
  archive: "Science archive"
};

export const englishLevelLabels: Record<string, string> = {
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export const englishReadingMap = [
  {
    label: "Data",
    text:
      "Start with the source of the observation: instrument, wavelength range, mission, catalog, or measurement method."
  },
  {
    label: "Interpretation",
    text:
      "Separate what is directly measured from what a model infers: mass, temperature, chemistry, motion, or surface history."
  },
  {
    label: "Limits",
    text:
      "Note where the model is strong and where uncertainty, incomplete data, or alternative explanations remain."
  }
];

export const englishKnowledgeLenses = [
  {
    title: "World",
    text:
      "Planets, moons, and exoplanets are treated as systems with water, energy, chemistry, surface, and history."
  },
  {
    title: "Signal",
    text:
      "Spectra, transits, brightness, motion, minerals, and terrain turn an image or object into testable data."
  },
  {
    title: "Limit",
    text:
      "Models show what can be stated confidently and where noise, stellar activity, or incomplete observations remain."
  }
];

export function getEnglishSection(sectionId: string) {
  return englishSections[sectionId as keyof typeof englishSections];
}

export function getEnglishArticle(slug: string) {
  return englishArticleCopy[slug as keyof typeof englishArticleCopy];
}

export function getEnglishGlossaryTerm(id: string) {
  return englishGlossaryCopy[id as keyof typeof englishGlossaryCopy];
}

export function getEnglishResource(id: string) {
  return englishResourceCopy[id as keyof typeof englishResourceCopy];
}

export function getEnglishObject(name: string) {
  return englishObjectCopy[name as keyof typeof englishObjectCopy];
}
