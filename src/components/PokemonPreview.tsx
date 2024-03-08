import { Link } from "react-router-dom";
import { PokemonInfoEntry } from "../app/types";
import { Card, Image } from "antd";
import { PokemonType } from "pokenode-ts";

export const renderTypes = (types: PokemonType[]) => {
  return types.map((slot) => (
    <Link to={`/type/${slot.type.name}`}>
      <span color="cyan" key={slot.type.name}>
        {slot.type.name}
      </span>
    </Link>
  ));
};

const PokemonPreview = (pokemon: PokemonInfoEntry) => {
  const { name, types, sprite, id } = pokemon;

  return (
    <Card
      cover={<Image src={`${sprite}`} />}
      actions={renderTypes(types)}
      className="flex h-fit min-w-64 flex-col justify-end p-6"
      hoverable
    >
      <Link to={`/name/${name}`} className="isolation-auto">
        <Card.Meta
          // style={{ padding: 0 }}
          description={`#00${id}`}
          title={<h3 className="text-xl">{name.toUpperCase()}</h3>}
          style={{ padding: "1rem" }}
        />
      </Link>
    </Card>
  );
};

export default PokemonPreview;
