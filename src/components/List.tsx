import PokemonCardSm from "../features/Pokemon/PokemonCardSm";
import type { NamedAPIResource } from "pokenode-ts";
import { VirtuosoGrid } from "react-virtuoso";

export function List({ items }: { items: NamedAPIResource[] }) {
	return (
		<VirtuosoGrid
			data={items}
			useWindowScroll
			overscan={{ main: 18, reverse: 18 }}
			listClassName="grid min-h-screen grid-cols-1 place-content-stretch gap-6 p-2 sm:grid-cols-2 md:grid-cols-3 lg:p-8"
			itemContent={(_, item) => <PokemonCardSm item={item} key={item.name} />}
		/>
	);
}
