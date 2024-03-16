import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";
import useUrlState from "@ahooksjs/use-url-state";
import { useGetPokemonsPerPageQuery } from "@/app/api";

const RootListPage = () => {
	const [{ page }] = useUrlState({ page: 1 });
	const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

	if (isLoading || !data) return <p>Loading...</p>;

	return (
		<div className="flex flex-col gap-4 mx-auto p-6 max-w-7xl">
			<PokemonListPagination />
			<List items={data} />
			<PokemonListPagination />
		</div>
	);
};
export default RootListPage;
