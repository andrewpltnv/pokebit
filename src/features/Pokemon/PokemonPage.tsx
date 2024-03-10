import { useLoaderData, useNavigate } from "react-router-dom";
import { usePageMetadata } from "../../hooks/usePageMetadata";
import { Image, Layout } from "antd";
import { faviconHref, upperCaseName } from "../../utils";
import { Pokemon, PokemonSprites } from "pokenode-ts";
import SoundWave from "../../components/audioUrls";

const PokemonPage = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const { name, id, sprites, types, cries } = data as unknown as Pokemon & {
    cries: {
      latest: string;
      legacy: string;
    };
  };
  const sprite = (sprites as PokemonSprites).other?.["official-artwork"]
    .front_default;

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

      <h1>{name}</h1>
      {JSON.stringify(types)}
      <Image src={sprite || ""} />
      <SoundWave sound={cries.latest} />
    </Layout>
  );
};

export default PokemonPage;
