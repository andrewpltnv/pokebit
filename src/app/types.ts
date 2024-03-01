import { OtherPokemonSprites, Pokemon } from "pokenode-ts";

export interface RootListingState {
	offset: number;
	limit: number;
}

export type PokemonInfoEntry = Pick<Pokemon, "name" | "types"> & {
	//	sprite: Pokemon["sprites"]["front_default"];

	sprite?: OtherPokemonSprites["dream_world"]["front_default"];
};

export type ListResponse<T> = {
	count: number;
	next: string;
	previous: string;
	results: T[];
};
