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
			<Card className="flex flex-col justify-between min-w-52 h-[490px]">
				<CardHeader>
					<CardTitle>
						<Skeleton className="mx-auto w-3/4 h-8" />
					</CardTitle>
					<CardDescription>
						<Skeleton className="m-auto w-full h-72" />
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Skeleton className="w-full h-8" />
				</CardContent>
				<CardFooter className="flex justify-evenly">
					<Skeleton className="w-12 h-8" />
					<Skeleton className="w-12 h-8" />
				</CardFooter>
			</Card>
		);

	const { name, types, sprite, cries } = data;

	return (
		<Card className="rounded-md min-w-52 text-center">
			<Link to={`/name/${name}`}>
				<CardHeader>
					<Button variant={"secondary"} asChild>
						<CardTitle className="text-2xl">{name.toUpperCase()}</CardTitle>
					</Button>
				</CardHeader>
				<CardDescription>
					<img
						src={sprite || ""}
						loading="lazy"
						decoding="async"
						alt={name}
						className="m-auto"
					/>
				</CardDescription>
			</Link>
			<CardContent className="hover:bg-secondary">
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
