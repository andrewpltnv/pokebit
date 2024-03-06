import { Link } from "react-router-dom";
import { SearchByName } from "./SearchByName";
import { Affix, Layout } from "antd";

export function Header() {
  return (
    <Layout.Header className="inline-flex items-center justify-evenly gap-4 bg-rose-500 px-4 text-center">
      <Link to="/" className="p-4  text-3xl font-black text-yellow-300">
        Pokedex
      </Link>
      <Affix>
        <SearchByName />
      </Affix>
    </Layout.Header>
  );
}
