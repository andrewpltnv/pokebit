import { useSelector } from "react-redux";
import { useGetPokemonsPerPageQuery } from "../app/api";
import { RootState } from "../app/store";
import { PokemonInfoEntry } from "../app/types";

const PokemonPreview = ({
	url,
	name,
	id,
}: PokemonInfoEntry & { id: number }) => {
	return (
		<div className="w-40 h-52 flex flex-col justify-end">
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${id}.gif`}
				className="min-w-16 object-none"
				alt="poke"
			/>
			<a href={url}>{name}</a>
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<audio
				src={`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`}
				controls
				className="w-full"
			/>
		</div>
	);
};

export function List() {
	const pagination = useSelector((state: RootState) => state.pagination);
	const { isLoading, data } = useGetPokemonsPerPageQuery(pagination.offset);

	if (isLoading)
		return (
			<img
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif"
				alt="Loading..."
			/>
		);
	return (
		<div className="p-4 flex flex-wrap">
			{data?.results.map(({ name, url }, i) => (
				<PokemonPreview name={name} url={url} id={i + 1} />
			))}
		</div>
	);
}
