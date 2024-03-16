import { Type } from "@/components/Type";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePageMetadata } from "@/hooks/usePageMetadata";
import type { Pokemon } from "pokenode-ts";
import { useLoaderData } from "react-router-dom";

const PokemonProfilePage = () => {
	const data = useLoaderData() as Pokemon;
	if (!data) return <p>Loading...</p>;
	const { abilities, types, sprites, moves, name } = data;
	const images = [
		sprites.front_default,
		sprites.other?.home.front_default,
		sprites.other?.dream_world.front_default,
		sprites.other?.["official-artwork"].front_default,
	];
	usePageMetadata({ title: name, favicon: images[0] || "" });

	return (
		<Card className="m-auto w-2/4">
			<CardHeader>
				<CardTitle>
					<h1 className="text-5xl">{name.toUpperCase()}</h1>
					<div>
						{types.map((t) => (
							<Type typeName={t.type.name} />
						))}
					</div>
				</CardTitle>
				<CardDescription>
					<ScrollArea className="">
						{abilities.map((a) => (
							<Badge variant={"secondary"}>{a.ability.name}</Badge>
						))}
					</ScrollArea>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full max-w-sm"
				>
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem
								key={`${image} + ${index + 1}`}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<div className="p-1">
									<Card>
										<CardContent className="flex justify-center items-center p-4">
											<img src={image || ""} alt={name} />
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</CardContent>
			<ScrollArea className="h-28">
				{moves.map((m) => (
					<Badge variant={"secondary"}>{m.move.name}</Badge>
				))}
			</ScrollArea>
		</Card>
	);
};

export default PokemonProfilePage;
