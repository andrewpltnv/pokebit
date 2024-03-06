import { Pagination } from "antd";
import useUrlState from "@ahooksjs/use-url-state";

export const PokemonListPagination = () => {
  const [{ page }, setPagination] = useUrlState(
    { page: 1 },
    { navigateMode: "push" },
  );

  return (
    <div className="m-auto text-3xl">
      <Pagination
        current={page}
        total={1302}
        showSizeChanger={false}
        simple
        pageSize={12}
        onChange={(targetPage) => {
          setPagination({ page: targetPage });
        }}
      />
    </div>
  );
};
