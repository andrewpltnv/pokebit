import { Link } from "react-router-dom";
import type { PokemonType } from "pokenode-ts";
import { bgColors } from "@/app/constants";
import { Button } from "./ui/button";

export const Type = ({
	typeName,
}: { typeName: PokemonType["type"]["name"] }) => {
	return (
		<Button asChild variant="ghost">
			<Link
				to={`/type/${typeName}`}
				className={`${bgColors[typeName]} dark:text-primary-foreground`}
			>
				{typeName}
			</Link>
		</Button>
	);
};
