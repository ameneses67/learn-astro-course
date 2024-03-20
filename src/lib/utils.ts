import type { CollectionEntry } from "astro:content";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getSearchParamsAsArray(url: URL, key: string) {
	const params = new URLSearchParams(url.search);
	const value = params.get(key);

	if (!value) {
		return [];
	}

	return value.split(",") as CollectionEntry<"tools">["id"][];
}
