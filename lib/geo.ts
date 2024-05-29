import idfCities from "@/data/77.json";

function capitalizeEachWord(str: string) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const cities = idfCities
  .map(city => capitalizeEachWord(city.city_code))
  .filter((value, index, self) => self.indexOf(value) === index);

export function slugify(str: string) {
  return str.toLowerCase().replaceAll(" ", "-");
}
