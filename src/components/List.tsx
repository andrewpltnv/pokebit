import { useGetPokemonsPerPageQuery } from "../app/api";
import { Spin } from "antd";
import PokemonPreview from "./PokemonPreview";
import useUrlState from "@ahooksjs/use-url-state";

export function List() {
  const [{ page }] = useUrlState({ page: 1 });
  const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

  if (isLoading) return <Spin />;

  return (
    // <div className="flex max-w-5xl flex-wrap gap-4 p-4">
    <div className="grid max-w-screen-lg grid-cols-1 place-content-stretch gap-8 p-8 lg:grid-cols-2 xl:grid-cols-3">
      {data?.map(({ cries, name, id, types, sprite }) => (
        <PokemonPreview
          name={name}
          sprite={sprite}
          cries={cries}
          id={id}
          types={types}
          key={name}
        />
      ))}
    </div>
    // </div>
  );
}
