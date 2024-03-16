import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { NamedAPIResource, NamedAPIResourceList } from "pokenode-ts";
import type { PokemonInfoEntry } from "./types";
import { pipeResourceToPokemon } from "./utils";
import { BASE_API_URL, RESULTS_LIMIT } from "./constants";

const pipeResourceList = async (baseQueryReturnValue: NamedAPIResourceList) => {
	return baseQueryReturnValue.results;
};

export const api = createApi({
	reducerPath: "pokeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_API_URL,
	}),
	endpoints: (builder) => ({
		getPokemonsPerPage: builder.query<NamedAPIResource[], { page: number }>({
			query: ({ page = 1 }) =>
				`pokemon?offset=${--page * RESULTS_LIMIT}&limit=${RESULTS_LIMIT}`,
			transformResponse: pipeResourceList,
		}),
		getPokemonByName: builder.query<PokemonInfoEntry, { name: string }>({
			query: ({ name }) => `pokemon/${name}`,
			transformResponse: pipeResourceToPokemon,
		}),
	}),
});

export const { useGetPokemonsPerPageQuery, useGetPokemonByNameQuery } = api;
