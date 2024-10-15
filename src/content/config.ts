import { defineCollection, z } from "astro:content";

const proyectsCollection = defineCollection({
    schema: z.object({
      name: z.string(),
      description: z.string(),
      tecnologies: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
        })
      ),
      funcionality: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
        })
      ),
      images: z.array(z.string()),
    }),
  });

export const collections = {
    proyectsCollection,
}