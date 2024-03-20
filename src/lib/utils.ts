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

export function setNewUrlParams({
	url,
	key,
	valueArray,
}: {
	url: URL;
	key: string;
	valueArray: string[];
}) {
	const params = new URLSearchParams(url.search);

	if (valueArray.length === 0) {
		params.delete(key);
		url.search = params.toString();
		return url;
	}

	params.set(key, valueArray.join(","));
	url.search = params.toString();
	return url;
}
