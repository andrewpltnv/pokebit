import useUrlState from "@ahooksjs/use-url-state";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationNext,
	PaginationPrevious,
} from "./ui/pagination";
import { twc } from "react-twc";
import { Button } from "./ui/button";

const PaginationItemWrapper = twc(Button).attrs({
	asChild: true,
	variant: "outline",
})`text-lg`;

export const PokemonListPagination = () => {
	const [{ page }] = useUrlState(
		{ page: 1 },
		{ navigateMode: "push", parseOptions: { parseNumbers: true } },
	);

	return (
		<Pagination>
			<PaginationContent>
				{page > 1 ? (
					<PaginationItemWrapper>
						<PaginationPrevious to={{ search: `page=${page - 1}` }} />
					</PaginationItemWrapper>
				) : (
					<PaginationEllipsis />
				)}
				<PaginationItemWrapper>
					<span>{page}</span>
				</PaginationItemWrapper>
				{page < 1302 / 12 ? (
					<PaginationItemWrapper>
						<PaginationNext to={{ search: `page=${page + 1}` }} />
					</PaginationItemWrapper>
				) : (
					<PaginationEllipsis />
				)}
			</PaginationContent>
		</Pagination>
	);
};
