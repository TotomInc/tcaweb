import idfCities from "@/data/77.json";

const capitalizeEachWord = (str: string) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const cities = idfCities
  .map((city) => capitalizeEachWord(city.city_code))
  .filter((value, index, self) => self.indexOf(value) === index);

export const slugify = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "-");
};
