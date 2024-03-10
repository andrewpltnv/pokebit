import { useGetPokemonsPerPageQuery } from "../app/api";
import { Spin } from "antd";
import PokemonCard from "../features/Pokemon/PokemonCard";
import useUrlState from "@ahooksjs/use-url-state";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function List() {
  const [{ page }] = useUrlState({ page: 1 });
  const [animate] = useAutoAnimate();
  const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

  if (isLoading) return <Spin />;

  return (
    <div
      ref={animate}
      className="grid min-h-screen max-w-screen-xl grid-cols-1 place-content-stretch gap-8 p-2 lg:grid-cols-2 lg:p-8 xl:grid-cols-3"
    >
      {data?.map(({ cries, name, id, types, sprite }) => (
        <PokemonCard
          name={name}
          sprite={sprite}
          cries={cries}
          id={id}
          types={types}
          key={name}
        />
      ))}
    </div>
  );
}
