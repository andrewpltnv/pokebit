export interface RootListingState {
	offset: number;
	limit: number;
}

export type PokemonInfoEntry = {
	name: string;
	url: string;
};

export type ListResponse<T> = {
	count: number;
	next: string;
	previous: string;
	results: T[];
};
