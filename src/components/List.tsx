import { useAutoAnimate } from "@formkit/auto-animate/react";
import PokemonCardSm from "../features/Pokemon/PokemonCardSm";
import type { PokemonInfoEntry } from "@/app/types";
import { twc } from "react-twc";

const ListWrapper = twc.div`place-content-stretch gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2 lg:p-8 min-h-screen `;

export function List({ items }: { items: PokemonInfoEntry[] }) {
	const [animate] = useAutoAnimate();

	return (
		<ListWrapper ref={animate}>
			{items.map(({ cries, name, id, types, sprite }) => (
				<PokemonCardSm
					name={name}
					sprite={sprite}
					cries={cries}
					id={id}
					types={types}
					key={name}
				/>
			))}
		</ListWrapper>
	);
}
