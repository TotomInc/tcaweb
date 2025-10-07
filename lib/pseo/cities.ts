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
    name: "Avon",
    slug: "avon",
    department: seineEtMarne,
    demonym: {
      masculine: "avonnais",
      feminine: "avonnaise",
      plural: "avonnais",
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
  {
    name: "Nemours",
    slug: "nemours",
    department: seineEtMarne,
    demonym: {
      masculine: "nemourien",
      feminine: "nemourienne",
      plural: "nemouriens",
    },
  },
  {
    name: "Montereau-Fault-Yonne",
    slug: "montereau-fault-yonne",
    department: yonne,
    demonym: {
      masculine: "monterelais",
      feminine: "monterelaise",
      plural: "monterelais",
    },
  },
  {
    name: "Moissy-Cramayel",
    slug: "moissy-cramayel",
    department: seineEtMarne,
    demonym: {
      masculine: "moisséen",
      feminine: "moisséenne",
      plural: "moisséens",
    },
  },
  {
    name: "Combs-la-Ville",
    slug: "combs-la-ville",
    department: seineEtMarne,
    demonym: {
      masculine: "combslavillais",
      feminine: "combslavillaises",
      plural: "combslavillais",
    },
  },
  {
    name: "Chailly-en-Biere",
    slug: "chailly-en-biere",
    department: seineEtMarne,
    demonym: {
      masculine: "chaillotin",
      feminine: "chaillotine",
      plural: "chaillotins",
    },
  },
  {
    name: "Lieusaint",
    slug: "lieusaint",
    department: seineEtMarne,
    demonym: {
      masculine: "lieusaintais",
      feminine: "lieusaintaise",
      plural: "lieusaintais",
    },
  },
  {
    name: "Héricy",
    slug: "hericy",
    department: seineEtMarne,
    demonym: {
      masculine: "héricéen",
      feminine: "héricéenne",
      plural: "héricéens",
    },
  },
  {
    name: "Barbizon",
    slug: "barbizon",
    department: seineEtMarne,
    demonym: {
      masculine: "barbizonnais",
      feminine: "barbizonnaises",
      plural: "barbizonnais",
    },
  },
  {
    name: "Cesson",
    slug: "cesson",
    department: seineEtMarne,
    demonym: {
      masculine: "cessonnais",
      feminine: "cessonnaise",
      plural: "cessonnais",
    },
  },
];
