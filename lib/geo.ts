import rawCities from "@/data/cities.json";

function capitalizeEachWord(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const cities = rawCities
  .map((city) => capitalizeEachWord(city.city_code))
  .filter((value, index, self) => self.indexOf(value) === index);

export function slugify(str: string) {
  return str.toLowerCase().replaceAll(" ", "-");
}
