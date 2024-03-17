import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./ui/command";
import { Button } from "./ui/button";
import { twc } from "react-twc";
import { useKeySequenceToggle } from "@/hooks/useKeySequenceToggle";
import { useState, type ReactElement } from "react";
import type { NamedAPIResource } from "pokenode-ts";
import { Type } from "./Type";

const SearchToggleButton = twc(Button).attrs({
	variant: "outline",
})`text-sm flex items-center gap-4`;

export function CommandMenu({
	placeholder,
	keyToSequence,
	items,
	handleSubmit,
}: {
	placeholder: ReactElement;
	keyToSequence: string;
	items: NamedAPIResource[];
	handleSubmit: (item: NamedAPIResource) => void;
}) {
	const [search, setSearch] = useState("");
	const { open, setOpen } = useKeySequenceToggle(keyToSequence);

	return (
		<>
			<SearchToggleButton onClick={() => setOpen((open) => !open)}>
				{placeholder}
			</SearchToggleButton>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput
					placeholder="Type a command or search..."
					value={search}
					onValueChange={setSearch}
				/>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						{items.map(({ name, url }) => (
							<CommandItem
								key={url}
								value={name}
								onSelect={() => {
									handleSubmit({ name, url });
									setSearch("");
								}}
								asChild
							>
								<Type typeName={name} />
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
