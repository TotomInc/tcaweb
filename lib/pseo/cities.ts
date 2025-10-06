import type { Demonym } from "./demonym";

interface Region {
  name: string;
  slug: string;
}

interface Department {
  name: string;
  slug: string;
  region: Region;
}

export interface City {
  name: string;
  slug: string;
  department: Department;
  demonym: Demonym;
}

const bourgogne: Region = {
  name: "Bourgogne-Franche-Comté",
  slug: "bourgogne-franche-comte",
};

const ileDeFrance: Region = {
  name: "Île-de-France",
  slug: "ile-de-france",
};

const yonne: Department = {
  name: "Yonne",
  slug: "yonne",
  region: bourgogne,
};

const aube: Department = {
  name: "Aube",
  slug: "aube",
  region: bourgogne,
};

const seineEtMarne: Department = {
  name: "Seine-et-Marne",
  slug: "seine-et-marne",
  region: ileDeFrance,
};

export const cities: City[] = [
  {
    name: "Auxerre",
    slug: "auxerre",
    department: yonne,
    demonym: {
      masculine: "auxerrois",
      feminine: "auxerroise",
      plural: "auxerrois",
    },
  },
  {
    name: "Sens",
    slug: "sens",
    department: yonne,
    demonym: {
      masculine: "sénonais",
      feminine: "sénonoise",
      plural: "sénonois",
    },
  },
  {
    name: "Pont-sur-Yonne",
    slug: "pont-sur-yonne",
    department: yonne,
    demonym: {
      masculine: "pontois",
      feminine: "pontoise",
      plural: "pontois",
    },
  },
  {
    name: "Migennes",
    slug: "migennes",
    department: yonne,
    demonym: {
      masculine: "migennois",
      feminine: "migennoise",
      plural: "migennois",
    },
  },
  {
    name: "Troyes",
    slug: "troyes",
    department: aube,
    demonym: {
      masculine: "troyen",
      feminine: "troyenne",
      plural: "troyens",
    },
  },
  {
    name: "Fontainebleau",
    slug: "fontainebleau",
    department: seineEtMarne,
    demonym: {
      masculine: "bellifontain",
      feminine: "bellifontaine",
      plural: "bellifontains",
    },
  },
  {
    name: "Moret-sur-Loing",
    slug: "moret-sur-loing",
    department: seineEtMarne,
    demonym: {
      masculine: "morétain",
      feminine: "morétaine",
      plural: "morétains",
    },
  },
  {
    name: "Melun",
    slug: "melun",
    department: seineEtMarne,
    demonym: {
      masculine: "melunais",
      feminine: "melunaise",
      plural: "melunais",
    },
  },
];
