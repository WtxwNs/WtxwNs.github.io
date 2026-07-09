import { defineCollection, z } from 'astro:content';

const linkSchema = z.record(z.string(), z.string().nullable()).default({});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    authors: z.array(z.string()),
    authorNote: z.string().optional(),
    authorNoteZh: z.string().optional(),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['Published', 'Accepted', 'Preprint', 'Under Review']),
    tags: z.array(z.string()),
    tldr: z.string(),
    tldrZh: z.string().optional(),
    contributions: z.array(z.string()),
    contributionsZh: z.array(z.string()).optional(),
    links: linkSchema,
    bibtex: z.string().optional(),
    highlight: z.boolean().default(false),
    order: z.number().default(999)
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    role: z.string(),
    roleZh: z.string().optional(),
    area: z.string().optional(),
    areaZh: z.string().optional(),
    description: z.string(),
    descriptionZh: z.string().optional(),
    image: z.string().optional(),
    links: linkSchema,
    order: z.number().default(999)
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    lang: z.enum(['en', 'zh']).default('en'),
    category: z.enum(['Research', 'Technical', 'Notes', 'Life']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    lang: z.enum(['en', 'zh']).default('en'),
    tags: z.array(z.string()).default([])
  })
});

const timeline = defineCollection({
  type: 'data',
  schema: z.object({
    date: z.string(),
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'zh']).default('en')
  })
});

export const collections = { publications, projects, blog, notes, timeline };
