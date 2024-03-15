import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";
import useUrlState from "@ahooksjs/use-url-state";
import { useGetPokemonsPerPageQuery } from "@/app/api";
import { ScrollArea } from "@/components/ui/scroll-area";

const RootListPage = () => {
	const [{ page }] = useUrlState({ page: 1 });
	const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

	if (isLoading || !data) return <p>Loading...</p>;

	return (
		<div className="flex flex-col gap-4 p-4 w-full">
			<PokemonListPagination />
			<ScrollArea className="w-full">
				<List items={data} />
			</ScrollArea>
		</div>
	);
};
export default RootListPage;
