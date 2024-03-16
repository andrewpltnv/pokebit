import { useAutoAnimate } from "@formkit/auto-animate/react";
import PokemonCardSm from "../features/Pokemon/PokemonCardSm";
import { twc } from "react-twc";
import type { NamedAPIResource } from "pokenode-ts";

const ListWrapper = twc.div`place-content-stretch gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2 lg:p-8 min-h-screen `;

export function List({ items }: { items: NamedAPIResource[] }) {
	const [animate] = useAutoAnimate();

	return (
		<ListWrapper ref={animate}>
			{items.map((item) => (
				<PokemonCardSm item={item} key={item.name} />
			))}
		</ListWrapper>
	);
}
