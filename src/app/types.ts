import { OtherPokemonSprites, Pokemon } from "pokenode-ts";

export type PokemonInfoEntry = Pick<Pokemon, "name" | "types" | "id"> & {
  sprite?: OtherPokemonSprites["official-artwork"]["front_default"];
  cries?: {
    latest: string;
    legacy: string;
  };
};
