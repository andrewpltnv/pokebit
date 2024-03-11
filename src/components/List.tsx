import { useGetPokemonsPerPageQuery } from "../app/api";
import { Spin } from "antd";
import useUrlState from "@ahooksjs/use-url-state";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import ReactParallaxTilt from "react-parallax-tilt";
import PokemonCardSm from "../features/Pokemon/PokemonCardSm";

export function List() {
  const [{ page }] = useUrlState({ page: 1 });
  const [animate] = useAutoAnimate();
  const { isLoading, data } = useGetPokemonsPerPageQuery({ page });

  if (isLoading) return <Spin />;

  return (
    <div
      ref={animate}
      className="grid min-h-screen grid-cols-1 place-content-stretch gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3 lg:p-8"
    >
      {data?.map(({ cries, name, id, types, sprite }) => (
        <ReactParallaxTilt>
          <PokemonCardSm
            name={name}
            sprite={sprite}
            cries={cries}
            id={id}
            types={types}
            key={name}
          />
        </ReactParallaxTilt>
      ))}
    </div>
  );
}
