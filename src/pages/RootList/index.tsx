import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";
import useUrlState from "@ahooksjs/use-url-state";
import { useGetPokemonsPerPageQuery } from "@/app/api";

const RootListPage = () => {
	const [{ page }] = useUrlState({ page: 1 });
	const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

	if (isLoading || !data) return <p>Loading...</p>;

	return (
		<div className="flex flex-col gap-4 p-4 w-full">
			<PokemonListPagination />
			<List items={data} />
		</div>
	);
};
export default RootListPage;
