import { Link } from "react-router-dom";
import { PokemonInfoEntry } from "../app/types";

const PokemonPreview = (pokemon: PokemonInfoEntry) => {
	const { name, types, sprite } = pokemon;

	return (
		<Link
			to={`name/${name}`}
			className="w-72 bg-slate-200 rounded-2xl h-96 align-middle grid grid-rows-[5fr_1fr_1fr] items-center justify-center"
		>
			<img src={sprite || ""} className=" w-auto h-full" alt={name} />
			<h3>{name}</h3>
			<div className="inline-flex gap-4">
				{types.map((pt) => (
					<span className="border-4 p-2" key={pt.type.name}>
						{pt.type.name}
					</span>
				))}
			</div>
		</Link>
	);
};

export default PokemonPreview;
