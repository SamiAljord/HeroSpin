export type TGetMovieResponse = {
  Search: TMovieData[];
};
export type TMovieData = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
export enum ESearchMovieParams {
  search = 's',
  type = 'type',
  apikey = 'apikey',
}
export type THeroData = {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    eyeColor: string;
    hairColor: string;
    height: string[];
    weight: string[];
  };
  biography: {
    fullName: string;
    alterEgos: string;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
    aliases: string[];
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
};
