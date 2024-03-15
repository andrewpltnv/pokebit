import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";
import useUrlState from "@ahooksjs/use-url-state";
import { useGetPokemonsPerPageQuery } from "@/app/api";

const RootListPage = () => {
	const [{ page }] = useUrlState({ page: 1 });
	const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

	if (!data || isLoading) return <p>Loading...</p>;

	return (
		//TODO make it scrollableElement https://ui.shadcn.com/docs/components/scroll-area
		<div className="flex flex-col gap-4 p-8 w-full h-full">
			<List items={data} />
			<PokemonListPagination />
		</div>
	);
};
export default RootListPage;
