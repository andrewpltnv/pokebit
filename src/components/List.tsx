import { useAutoAnimate } from "@formkit/auto-animate/react";
import PokemonCardSm from "../features/Pokemon/PokemonCardSm";
import type { PokemonInfoEntry } from "@/app/types";

export function List({ items }: { items: PokemonInfoEntry[] }) {
	const [animate] = useAutoAnimate();

	return (
		<div //TODO leverage styles to twc
			ref={animate}
			className="place-content-stretch gap-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-2 lg:p-8 min-h-screen"
		>
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
		</div>
	);
}
