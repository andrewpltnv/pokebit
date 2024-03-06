import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";
import { Space } from "antd";

const RootListPage = () => {
  return (
    <Space align="center" direction="vertical">
      <List />
      <PokemonListPagination />
    </Space>
  );
};
export default RootListPage;
