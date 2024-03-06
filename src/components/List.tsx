import { useGetPokemonsPerPageQuery } from "../app/api";
import { Spin } from "antd";
import PokemonPreview from "./PokemonPreview";
import useUrlState from "@ahooksjs/use-url-state";

export function List() {
  const [{ page }] = useUrlState({ page: 1 });
  const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

  if (isLoading) return <Spin />;

  return (
    <div className="flex max-w-5xl flex-wrap gap-6 p-8">
      {data?.map(({ name, id, types, sprite }) => (
        <PokemonPreview
          name={name}
          sprite={sprite}
          id={id}
          types={types}
          key={name}
        />
      ))}
    </div>
  );
}
