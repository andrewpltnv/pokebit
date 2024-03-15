import type { PokemonType } from "pokenode-ts";

const BASE_API_URL: string = "https://pokeapi.co/api/v2/";
const RESULTS_LIMIT = 12;

const PokeTypesMock = [
	{ name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
	{ name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
	{ name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
	{ name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
	{ name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
	{ name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
	{ name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
	{ name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
	{ name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
	{ name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
	{ name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
	{ name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
	{ name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
	{ name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
	{ name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
	{ name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
	{ name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
	{ name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
	{ name: "unknown", url: "https://pokeapi.co/api/v2/type/10001/" },
	{ name: "shadow", url: "https://pokeapi.co/api/v2/type/10002/" },
];

export const bgColors: Record<PokemonType["type"]["name"], string> = {
	normal: "bg-amber-200",
	fighting: "bg-red-200",
	flying: "bg-sky-200",
	poison: "bg-fuchsia-200",
	ground: "bg-yellow-200",
	rock: "bg-stone-200",
	bug: "bg-lime-200",
	ghost: "bg-purple-200",
	steel: "bg-blue-200",
	fire: "bg-orange-200",
	water: "bg-blue-200",
	grass: "bg-green-200",
	electric: "bg-yellow-200",
	psychic: "bg-pink-200",
	ice: "bg-cyan-200",
	dragon: "bg-purple-200",
	dark: "bg-violet-200",
	fairy: "bg-pink-200",
	unknown: "bg-gray-200",
	shadow: "bg-zink-200",
};

export { BASE_API_URL, RESULTS_LIMIT, PokeTypesMock };
