import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sectionEnum = z.enum(["astronomy", "astrophysics", "planetology"]);

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: sectionEnum,
    tags: z.array(z.string()),
    level: z.enum(["intermediate", "advanced"]),
    sources: z.array(
      z.object({
        label: z.string(),
        url: z.url()
      })
    ),
    updatedAt: z.coerce.date(),
    heroImage: z.string(),
    heroAlt: z.string(),
    relatedTopics: z.array(z.string()).default([])
  })
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: sectionEnum,
    relatedArticles: z.array(z.string())
  })
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["agency", "catalog", "mission", "simulator", "archive"]),
    url: z.url(),
    section: sectionEnum.optional()
  })
});

export const collections = { articles, glossary, resources };
