import { Type } from "@/components/Type";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
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
import { faviconHref } from "@/utils";
import type { Pokemon } from "pokenode-ts";
import { useLoaderData } from "react-router-dom";

const PokemonProfilePage = () => {
	const data = useLoaderData() as Pokemon;
	if (!data) return <p>Loading...</p>;

	const { abilities, types, sprites, moves, name, id } = data;

	const images = [
		sprites.other?.["official-artwork"].front_default,
		faviconHref(id),
		sprites.other?.dream_world.front_default,
		sprites.other?.home.front_default,
		sprites.front_default,
	];

	usePageMetadata({ title: name.toUpperCase(), favicon: faviconHref(id) });

	return (
		<div className="flex flex-col gap-4 p-4 w-full">
			<Button asChild>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<span onClick={() => window.history.back()}>Back</span>
			</Button>
			<Card className="m-auto container">
				<CardHeader>
					<CardTitle>
						<h2 className="text-3xl">{name.toUpperCase()}</h2>
					</CardTitle>
					<CardDescription className="space-x-2">
						<div>
							{types.map((t) => (
								<Type typeName={t.type.name} />
							))}
						</div>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Carousel
						opts={{
							align: "center",
							loop: true,
							duration: 10,
						}}
						className="w-full"
					>
						<CarouselContent>
							{images.map((image, index) => (
								<CarouselItem
									key={`${image} + ${index + 1}`}
									className="md:basis-1/2 lg:basis-1/3"
								>
									<Card className="grid min-h-full">
										<img
											src={image || ""}
											alt={name}
											loading="lazy"
											decoding="async"
											className="m-auto"
										/>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</CardContent>
				<CardFooter className="flex flex-col gap-4">
					<div>
						<h5>Abilities:</h5>
						<ScrollArea className="space-x-2">
							{abilities.map((a) => (
								<Badge variant={"secondary"}>{a.ability.name}</Badge>
							))}
						</ScrollArea>
					</div>
					<div>
						<h5>Moves:</h5>
						<ScrollArea className="space-x-2">
							{moves.map((m) => (
								<Badge variant={"secondary"}>{m.move.name}</Badge>
							))}
						</ScrollArea>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
};

export default PokemonProfilePage;
