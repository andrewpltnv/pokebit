import { useLoaderData } from "react-router-dom";
import type { Type } from "pokenode-ts";
import { List } from "@/components/List";

const ByTypeListPage = () => {
	const data = useLoaderData() as Type;
	const pokemons = data.pokemon.map((p) => p.pokemon);

	console.log(pokemons);
	if (!pokemons) {
		return <p>Loading...</p>;
	}

	return (
		<div className="flex flex-col gap-4 p-4 w-full">
			<List items={pokemons} />
		</div>
	);
};
export default ByTypeListPage;
