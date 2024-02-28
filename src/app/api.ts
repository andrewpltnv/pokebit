import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListResponse, PokemonInfoEntry } from "./types";

const baseUrl: string = "https://pokeapi.co/api/v2/";

export const api = createApi({
	reducerPath: "rootListing",
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),

	endpoints: (builder) => ({
		getPokemonsPerPage: builder.query<
			ListResponse<PokemonInfoEntry>,
			{ offset: number; limit: number }
		>({
			query: ({ offset = 0, limit = 12 }) =>
				`pokemon?offset=${offset}&limit=${limit}`,
		}),
	}),
});
export const { useGetPokemonsPerPageQuery } = api;
