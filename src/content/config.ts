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
			icons: z.array(reference("tools")),
			url: z.string().url(),
		}),
});

const posts = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string().max(65, {
				message: "El título no puede ser mayor de 65 caracteres de largo.",
			}),
			description: z.string().max(165, {
				message:
					"La descripción no puede ser mayor de 165 caracteres de largo.",
			}),
			image: image().refine((img) => img.width >= 1000, {
				message: "La imagen debe medir por lo menos 1,000 pixeles de ancho.",
			}),
			pubDate: z.date(),
			isDraft: z.boolean().optional(),
		}),
});

export const collections = {
	features,
	tools,
	projects,
	posts,
};
