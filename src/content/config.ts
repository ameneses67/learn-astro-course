import { defineCollection, reference, z } from "astro:content";

const features = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.string(),
	}),
});

const tools = defineCollection({
	type: "data",
	schema: z.object({
		title: z.string(),
		icon: z.string(),
	}),
});

const projects = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			thumbnail: image(),
			icon: z.array(reference("tools")),
			url: z.string().url(),
		}),
});

export const collections = {
	features,
	tools,
	projects,
};
