import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListResponse, PokemonInfoEntry } from "./types";

const baseUrl: string = "https://pokeapi.co/api/v2/";
const LIMIT = 144;

export const api = createApi({
	reducerPath: "rootListing",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getPokemonsPerPage: builder.query<ListResponse<PokemonInfoEntry>, number>({
			query: (offset = 0) => `pokemon?offset=${offset}&limit=${LIMIT}`,
		}),
	}),
});
export const { useGetPokemonsPerPageQuery } = api;
