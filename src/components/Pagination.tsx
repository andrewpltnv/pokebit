import useUrlState from "@ahooksjs/use-url-state";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./ui/pagination";
import { twc } from "react-twc";

const PaginationWrapper = twc(Pagination)``;

export const PokemonListPagination = () => {
	const [{ page }] = useUrlState(
		{ page: 1 },
		{ navigateMode: "push", parseOptions: { parseNumbers: true } },
	);

	return (
		<PaginationWrapper>
			<PaginationContent>
				{page > 1 ? (
					<PaginationItem>
						<PaginationPrevious to={{ search: `page=${page - 1}` }} />
					</PaginationItem>
				) : (
					<PaginationEllipsis />
				)}
				<PaginationItem>
					<PaginationLink to="#" isActive>
						{page}
					</PaginationLink>
				</PaginationItem>
				{page < 1302 / 12 ? (
					<PaginationItem>
						<PaginationNext to={{ search: `page=${page + 1}` }} />
					</PaginationItem>
				) : (
					<PaginationEllipsis />
				)}
			</PaginationContent>
		</PaginationWrapper>
	);
};
