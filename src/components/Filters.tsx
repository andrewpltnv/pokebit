import { Pagination } from "antd";
import useUrlState from "@ahooksjs/use-url-state";

export const PokemonListPagination = () => {
	const [{ page, limit }, setPagination] = useUrlState({
		page: 1,
		limit: 12,
	});

	return (
		<div className="m-auto">
			<Pagination
				defaultCurrent={page}
				total={1302}
				showSizeChanger={false}
				simple
				pageSize={12}
				showTotal={(total) => `Total _ ${total} _ `}
				onChange={(p, pS) => {
					console.log({ page, limit });
					setPagination((prev) => ({ ...prev, page: p, limit: pS }));
				}}
			/>
		</div>
	);
};
