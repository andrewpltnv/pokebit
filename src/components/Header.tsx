import { Link } from "react-router-dom";
import { twc } from "react-twc";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./ui/modeToggle";
import { Button } from "./ui/button";
import { SearchCommandMenu } from "@/features/Search/SearchCommandMenu";

export const ButtonWrapper = twc(Button).attrs({
	asChild: true,
	variant: "outline",
	size: "icon",
})``;

const LayoutHeader = twc.div`w-full inline-flex gap-4 justify-evenly items-center px-4 min-w-full text-center h-16`;

export function Header() {
	return (
		<LayoutHeader>
			<ButtonWrapper>
				<Link to="/" className="relative">
					<CircleBackslashIcon className="w-4 h4" />
				</Link>
			</ButtonWrapper>
			<SearchCommandMenu />
			<ButtonWrapper>
				<ModeToggle />
			</ButtonWrapper>
		</LayoutHeader>
	);
}
