import { Header } from "./components/Header";
import { PokemonListPagination } from "./components/Filters";
import { List } from "./components/List";
import { Outlet } from "react-router-dom";
import { MainClient } from "pokenode-ts";
const client = new MainClient();
const uff = client.pokemon.getPokemonById(1);
const ufg = client.pokemon.listPokemons();
console.log(uff, ufg);

function RootLayout() {
	return (
		<div className="flex flex-col bg-slate-600">
			<Header />
			<Outlet />
		</div>
	);
}

function RootPage() {
	return (
		<>
			<List />
			<PokemonListPagination />
		</>
	);
}

export { RootPage, RootLayout };
