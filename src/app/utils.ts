import { MainClient, NamedAPIResource, Pokemon } from "pokenode-ts";
import { PokemonInfoEntry } from "./types";

export const client = new MainClient({ logs: true });

export const cropPokemonData = (
  fullPokemonData: Pokemon & {
    cries?: {
      latest: string;
      legacy: string;
    };
  },
) => {
  const {
    id,
    name,
    types,
    cries,
    sprites: { other },
  } = fullPokemonData;

  console.log({ cries });

  return {
    id,
    name,
    types,
    sprite: other?.["official-artwork"].front_default,
    cries,
  } satisfies PokemonInfoEntry;
};

export const pipeResourceToPokemon = async (res: NamedAPIResource) => {
  const fullPokemonData = await client.pokemon.getPokemonByName(res.name);
  return cropPokemonData(fullPokemonData);
};
