import { Link } from "react-router-dom";
import { PokemonInfoEntry } from "../app/types";
import { Card, Image, Space, Tag } from "antd";

const PokemonPreview = (pokemon: PokemonInfoEntry) => {
  const { name, types, sprite } = pokemon;

  return (
    <Card
      cover={
        <Link to={`/name/${name}`} className="p-2">
          <Image src={`${sprite}`} preview={false} />
        </Link>
      }
      hoverable
      className="flex h-auto w-72  flex-col justify-end"
    >
      <h3 className="text-2xl">{name.toUpperCase()}</h3>
      <Space.Compact direction="horizontal">
        {types.map((pt) => (
          <Link to={`/type/${pt.type.name}`}>
            <Tag color="cyan" key={pt.type.name}>
              {pt.type.name}
            </Tag>
          </Link>
        ))}
      </Space.Compact>
    </Card>
  );
};

export default PokemonPreview;
