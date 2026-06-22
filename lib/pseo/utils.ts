import _slugify from "slugify";

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
 * Slugify a text. Ensure to remove `'` which isn't handled by the default slugify.
 *
 * @param text The text to slugify
 * @returns The slugified text
 */
const slugify = (text: string) => _slugify(text, { lower: true, remove: /'/g });

/**
 * Get the preposition to use before a word if it starts with a vowel
 *
 * @param previousWord The word before the preposition
 * @param type The type of preposition to use (default is "de").
 * @returns The preposition to use before the word
 */
export function getPreposition(previousWord: string, type: "de" | "a" = "de"): string {
  const vowels = ["a", "e", "i", "o", "u", "y", "â", "é", "è", "ê", "î", "ô", "û", "ï", "ü", "ë"];
  const firstChar = previousWord.trim()[0].toLowerCase();
  const startsWithVowel = vowels.includes(firstChar);

  if (type === "a") {
    return "à ";
  }

  return startsWithVowel ? "d'" : "de ";
}

export function buildSearchRequests(): SearchRequestBuilt[] {
  const requests: SearchRequestBuilt[] = [];

  // Interate on all possible search request intents.
  searchRequests.forEach((searchRequest) => {
    if (!searchRequest.forCity) {
      industries.forEach((industry) => {
        requests.push({
          slug: slugify(`${searchRequest.slug} ${industry.slug}`),
          title: `${searchRequest.title} ${industry.name}`,
          intent: searchRequest,
          industry,
        });
      });
    }

    if (searchRequest.forCity && searchRequest.cityPrepositionType) {
      cities.forEach((city) => {
        requests.push({
          slug: slugify(
            `${searchRequest.slug} ${getPreposition(city.name, searchRequest.cityPrepositionType)}${city.slug}`,
          ),
          title: `${searchRequest.title} ${getPreposition(city.name, searchRequest.cityPrepositionType)}${city.name}`,
          intent: searchRequest,
          city,
        });
      });
    }
  });

  return requests;
}
