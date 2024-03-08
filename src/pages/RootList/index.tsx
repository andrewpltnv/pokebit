import { PokemonListPagination } from "../../components/Pagination";
import { List } from "../../components/List";
import { Flex } from "antd";

const RootListPage = () => {
  return (
    <Flex vertical wrap="wrap" align="center" justify="space-evenly">
      <List />
      <PokemonListPagination />
    </Flex>
  );
};
export default RootListPage;
