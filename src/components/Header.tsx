import { Link } from "react-router-dom";
import { SearchByName } from "./SearchByName";

export function Header() {
	return (
		<nav className="bg-rose-500 inline-flex text-center justify-evenly items-center gap-4 px-4">
			<Link to="/" className="text-3xl  font-black text-yellow-300 p-4">
				Pokedex
			</Link>
			<SearchByName />
		</nav>
	);
}
