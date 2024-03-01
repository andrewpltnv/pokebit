import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";

const RootListPage = () => {
	return (
		<div className="flex flex-col gap-4">
			<List />
			<PokemonListPagination />
		</div>
	);
};
export default RootListPage;
