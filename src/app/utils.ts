import { MainClient, NamedAPIResource, Pokemon } from "pokenode-ts";
import { PokemonInfoEntry } from "./types";

export const client = new MainClient({ logs: true });

export const cropPokemonData = (fullPokemonData: Pokemon) => {
  const {
    id,
    name,
    types,
    sprites: { other },
  } = fullPokemonData;

  return {
    id,
    name,
    types,
    sprite: other?.["official-artwork"].front_default,
  } satisfies PokemonInfoEntry;
};

export const pipeResourceToPokemon = async (res: NamedAPIResource) => {
  const fullPokemonData = await client.pokemon.getPokemonByName(res.name);
  return cropPokemonData(fullPokemonData);
};
