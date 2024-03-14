import { Link } from "react-router-dom";
import { twc } from "react-twc";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { CommandDialog } from "./ui/command";
import { ModeToggle } from "./ui/modeToggle";

export const LogoHeading = () => (
	<Link to="/" className="relative">
		<CircleBackslashIcon width={32} height={32} />
	</Link>
);

const LayoutHeader = twc.div`w-full inline-flex gap-4 justify-evenly items-center px-4 min-w-full text-center h-16`;

export function Header() {
	return (
		<LayoutHeader>
			<LogoHeading />
			<CommandDialog />
			<ModeToggle />
		</LayoutHeader>
	);
}
