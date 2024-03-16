import { MainClient, type NamedAPIResource, type Pokemon } from "pokenode-ts";
import type { PokemonInfoEntry } from "./types";

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
