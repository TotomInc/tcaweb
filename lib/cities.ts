export const cities = [
  "Fontainebleau",
  "Melun",
  "Moret Loing et Orvanne",
  "Ecuelles",
  "Montargis",
  "Nemours",
  "Montereau",
  "Bois le Roi",
  "Avon",
  "Provins",
  "Chatelet en Brie",
  "Villiers en Bière",
  "Dammarie lès Lys",
  "Vaux le Pénil",
  "La Rochette",
  "Samoreau",
  "Vulaines sur Seine",
];

export const slugifyCity = (city: string) => {
  return city.toLowerCase().replaceAll(" ", "-");
};
