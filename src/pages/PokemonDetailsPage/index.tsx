import { useLoaderData, useNavigate } from "react-router-dom";

const PokemonDetailsPage = () => {
	const navigate = useNavigate();
	const data = useLoaderData();
	console.log({ data });

	return (
		<div>
			<button
				className="text-lg text-red-500"
				type="button"
				onClick={() => {
					navigate(-1);
				}}
			>
				Go Back
			</button>
			<h2>{JSON.stringify(data)}</h2>
		</div>
	);
};

export default PokemonDetailsPage;
