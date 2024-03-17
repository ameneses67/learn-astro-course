import { defineCollection, z } from "astro:content";

export const featuresCollection = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.string(),
	}),
});
