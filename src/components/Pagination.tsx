import { Pagination } from "antd";
import useUrlState from "@ahooksjs/use-url-state";

export const PokemonListPagination = () => {
	const [{ page }, setPagination] = useUrlState(
		{
			page: 1,
		},
		{
			navigateMode: "push",
		},
	);

	return (
		<div className="m-auto">
			<Pagination
				defaultCurrent={page}
				total={1302}
				showSizeChanger={false}
				simple
				pageSize={12}
				onChange={(p) => {
					console.log({ page });
					setPagination((prev) => ({ ...prev, page: p }));
				}}
			/>
		</div>
	);
};
