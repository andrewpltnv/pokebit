//ts-worksheet-with-variables
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MainClient, NamedAPIResourceList } from "pokenode-ts";
import { PokemonInfoEntry } from "./types";

const BASE_API_URL: string = "https://pokeapi.co/api/v2/";
const RESULTS_LIMIT = 12;
export const client = new MainClient({ logs: true });

function newFunction() {
	return async (baseQueryReturnValue: NamedAPIResourceList) => {
		return await Promise.all(
			baseQueryReturnValue.results.map(async (namedAPIResourcePokemon) => {
				const fullPokemonData = await client.pokemon.getPokemonByName(
					namedAPIResourcePokemon.name,
				);
				return {
					name: fullPokemonData.name,
					types: fullPokemonData.types,
					sprite: fullPokemonData?.sprites?.other?.dream_world.front_default,
				} satisfies PokemonInfoEntry;
			}),
		);
	};
}

export const api = createApi({
	reducerPath: "pokeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_API_URL,
	}),
	endpoints: (builder) => ({
		getPokemonsPerPage: builder.query<PokemonInfoEntry[], { page: number }>({
			query: ({ page = 1 }) =>
				`pokemon?offset=${--page * RESULTS_LIMIT}&limit=${RESULTS_LIMIT}`,
			transformResponse: newFunction(),
		}),
	}),
});

export const { useGetPokemonsPerPageQuery } = api;
