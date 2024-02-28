import { useGetPokemonsPerPageQuery } from "../app/api";
import { PokemonInfoEntry } from "../app/types";
import { Spin } from "antd";
import useUrlState from "@ahooksjs/use-url-state";
import { Link } from "react-router-dom";

const PokemonPreview = ({
	url,
	name,
	id,
}: PokemonInfoEntry & { id: number }) => {
	return (
		<div className="w-5/6 h-24 inline-flex items-center">
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${id}.gif`}
				className="min-w-16 object-none"
				alt="poke"
			/>
			<div>
				<Link to={url} content={name} />
				{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
				<audio
					src={`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`}
					controls
					className="w-32"
				/>
			</div>
		</div>
	);
};

export function List() {
	const [pagination] = useUrlState({
		page: 1,
		limit: 12,
	});
	const { page, limit } = { page: +pagination.page, limit: +pagination.limit };
	const offset = (+page - 1) * limit;

	const { isLoading, data } = useGetPokemonsPerPageQuery({ offset, limit });

	if (isLoading) return <Spin />;

	return (
		<div className="flex flex-col  items-center gap-4 w-full">
			{data?.results.map(({ name, url }, i) => (
				<PokemonPreview name={name} key={name} url={url} id={offset + i + 1} />
			))}
		</div>
	);
}
