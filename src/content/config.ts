import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tag: z.enum(['想法', '閱讀', '工作', '日常']),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
