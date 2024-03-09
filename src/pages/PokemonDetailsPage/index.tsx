import { useLoaderData, useNavigate } from "react-router-dom";
import { PokemonInfoEntry } from "../../app/types";
import PokemonPreview from "../../components/PokemonPreview";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Layout } from "antd";

function upperCaseName(name: string) {
  return name[0].toUpperCase()+name.slice(1);
}

function faviconHref(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
}

const PokemonDetailsPage = () => {
  const navigate = useNavigate();

  const data = useLoaderData();
  const { name, id, sprite, types } = data as unknown as PokemonInfoEntry;

  usePageMetadata({
    title: upperCaseName(name),
    favicon: faviconHref(id),
  });

  return (
    <Layout>
      <button
        className="text-lg text-red-500"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
      <PokemonPreview name={name} id={id} types={types} sprite={sprite} />
    </Layout>
  );
};

export default PokemonDetailsPage;
