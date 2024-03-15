import { Link } from "react-router-dom";
import type { PokemonInfoEntry } from "../../app/types";
import SoundWave from "../../components/audioUrls";
import { Type } from "../../components/Type";
import { twc } from "react-twc";

const Avatar = twc.img`w-20 h-18 float-start`;

const PokemonCardSm = (pokemon: PokemonInfoEntry) => {
	const {
		name,
		types,
		sprite,
		// id,
		cries,
	} = pokemon;

	return (
		<div className="flex flex-col bg-blend-color-dodge p-4 rounded-md min-w-52 ring-1 ring-inset ring-ring space-2">
			<Link
				to={`/name/${name}`}
				className="flex justify-between items-center h-full text-center"
			>
				<Avatar src={sprite || ""} alt={name} />
				<h3 className="text-xl">{name.toUpperCase()}</h3>
			</Link>
			<SoundWave sound={cries?.latest} />
			<div className="flex gap-2">
				{types.map((slot) => (
					<Type typeName={slot.type.name} key={slot.type.name} />
				))}
			</div>
		</div>
	);
};

export default PokemonCardSm;
