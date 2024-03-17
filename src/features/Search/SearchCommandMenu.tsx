import { PokeTypesMock } from "@/app/constants";
import { CommandMenu } from "@/components/commandMenu";
import { KeySequence } from "@/components/ui/kbd";
import { useNavigate } from "react-router-dom";

export const SearchCommandMenu = () => {
	const navigate = useNavigate();

	return (
		<CommandMenu
			keyToSequence="k"
			items={PokeTypesMock}
			handleSubmit={(link) => navigate(link)}
			placeholder={
				<>
					Press{" "}
					<KeySequence>
						<span>⌘</span>K
					</KeySequence>{" "}
					to search
				</>
			}
		/>
	);
};
