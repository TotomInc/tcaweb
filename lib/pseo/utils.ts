import slugify from "slugify";

import type { City } from "@/lib/pseo/cities";
import { cities } from "@/lib/pseo/cities";
import type { Industry } from "@/lib/pseo/industries";
import { industries } from "@/lib/pseo/industries";
import { searchRequests } from "@/lib/pseo/search-requests";
import type { SearchRequest } from "@/lib/pseo/search-requests";

export interface SearchRequestBuilt {
  slug: string;
  title: string;
  intent: SearchRequest;
  industry?: Industry;
  city?: City;
}

/**
 * Get the preposition to use before a word if it starts with a vowel
 *
 * @param previousWord The word before the preposition
 * @returns The preposition to use before the word
 */
export function getPreposition(previousWord: string): string {
  const vowels = ["a", "e", "i", "o", "u", "y", "â", "é", "è", "ê", "î", "ô", "û", "ï", "ü", "ë"];
  const firstChar = previousWord.trim()[0].toLowerCase();
  const startsWithVowel = vowels.includes(firstChar);

  return startsWithVowel ? "d'" : "de ";
}

export function buildSearchRequests(): SearchRequestBuilt[] {
  const requests: SearchRequestBuilt[] = [];

  // Interate on all possible search request intents.
  searchRequests.forEach((searchRequest) => {
    if (!searchRequest.forCity) {
      industries.forEach((industry) => {
        requests.push({
          slug: slugify(`${searchRequest.slug} ${industry.slug}`, { lower: true }),
          title: `${searchRequest.title} ${industry.name}`,
          intent: searchRequest,
          industry,
        });
      });
    }

    if (searchRequest.forCity) {
      cities.forEach((city) => {
        requests.push({
          slug: slugify(`${searchRequest.slug} ${getPreposition(city.name)}${city.slug}`, {
            lower: true,
          }),
          title: `${searchRequest.title} ${getPreposition(city.name)}${city.name}`,
          intent: searchRequest,
          city,
        });
      });
    }
  });

  return requests;
}
