import { useGetPokemonsPerPageQuery } from "../app/api";
import { Spin } from "antd";
import useUrlState from "@ahooksjs/use-url-state";
import PokemonPreview from "./PokemonPreview";

// ЙОбАнаРотНахуй, пусть оно принимает на ротан, то бишь пачку ListedAPIResourse {name, url}
export function List() {
	const [{ page }] = useUrlState({ page: "1" });
	const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

	if (isLoading) return <Spin />;

	return (
		<div className="flex flex-col  items-center gap-4 w-full">
			{data?.map(({ name, types, sprite }) => (
				<PokemonPreview name={name} sprite={sprite} types={types} key={name} />
			))}
		</div>
	);
}
