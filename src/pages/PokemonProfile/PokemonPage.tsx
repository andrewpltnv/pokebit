import { useLoaderData, useNavigate } from "react-router-dom";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { faviconHref, upperCaseName } from "../../utils";
import type { Pokemon, PokemonSprites } from "pokenode-ts";
import SoundWave from "../../components/audioUrls";

const PokemonPage = () => {
	const navigate = useNavigate();
	const data = useLoaderData();
	const { name, id, sprites, types, cries } = data as unknown as Pokemon & {
		cries: {
			latest: string;
			legacy: string;
		};
	};
	const sprite = (sprites as PokemonSprites).other?.["official-artwork"]
		.front_default;

	usePageMetadata({
		title: upperCaseName(name),
		favicon: faviconHref(id),
	});

	return (
		<div className="flex flex-col gap-4 p-4 w-full">
			<button
				className="text-lg text-red-500"
				type="button"
				onClick={() => {
					navigate(-1);
				}}
			>
				Go Back
			</button>

			<h1>{name}</h1>
			{JSON.stringify(types)}
			<img src={sprite || ""} alt={name} />
			<SoundWave sound={cries.latest} />
		</div>
	);
};

export default PokemonPage;
