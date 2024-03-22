import { Link } from "react-router-dom";
import SoundWave from "../../components/audioUrls";
import { Type } from "../../components/Type";
import { useGetPokemonByNameQuery } from "@/app/api";
import type { NamedAPIResource } from "pokenode-ts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const PokemonCardSm = ({ item }: { item: NamedAPIResource }) => {
	const { data, isLoading } = useGetPokemonByNameQuery({ name: item.name });

	if (isLoading || !data)
		return (
			<Card className="flex h-[490px] min-w-52 flex-col justify-between">
				<CardHeader>
					<CardTitle>
						<Skeleton className="mx-auto h-8 w-3/4" />
					</CardTitle>
					<CardDescription>
						<Skeleton className="m-auto h-72 w-full" />
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Skeleton className="h-8 w-full" />
				</CardContent>
				<CardFooter className="flex justify-evenly">
					<Skeleton className="h-8 w-12" />
					<Skeleton className="h-8 w-12" />
				</CardFooter>
			</Card>
		);

	const { name, types, sprite, cries } = data;

	return (
		<Card className="h-[490px] min-w-52 rounded-md text-center">
			<Link to={`/name/${name}`}>
				<CardHeader>
					<Button variant={"secondary"} asChild>
						<CardTitle className="truncate px-1 text-2xl">
							{name.toUpperCase()}
						</CardTitle>
					</Button>
				</CardHeader>
				<CardDescription>
					<img
						src={sprite || ""}
						loading="lazy"
						decoding="async"
						alt={name}
						className="m-auto"
						width={284}
						height={284}
					/>
				</CardDescription>
			</Link>
			<CardContent className="m-2 rounded-md p-2 hover:bg-secondary">
				<SoundWave sound={cries?.latest} />
			</CardContent>
			<CardFooter className="flex justify-evenly">
				{types.map((slot) => (
					<Type typeName={slot.type.name} key={slot.type.name} />
				))}
			</CardFooter>
		</Card>
	);
};

export default PokemonCardSm;
