import { Link } from "react-router-dom";
import type { PokemonType } from "pokenode-ts";
import { twc } from "react-twc";
import { bgColors } from "@/app/constants";

const TLink = twc(Link)`mt-3 p-1 rounded-md text-lg`;

export const Type = ({
	typeName,
}: { typeName: PokemonType["type"]["name"] }) => {
	return (
		<TLink
			to={`/type/${typeName}`}
			className={`${bgColors[typeName]} text-foreground dark:text-background
`}
		>
			{typeName}
		</TLink>
	);
};
