import { Link } from "react-router-dom";
import { PokemonInfoEntry } from "../../app/types";
import { Card, Image, Space } from "antd";
import SoundWave from "../../components/audioUrls";
import { Type } from "../../components/Type";

const PokemonCard = (pokemon: PokemonInfoEntry) => {
  const {
    name,
    types,
    sprite,
    // id,
    cries,
  } = pokemon;

  return (
    <Card
      cover={<Image src={`${sprite}`} className="" />}
      className="flex h-fit min-w-64 flex-col justify-end "
      hoverable
    >
      <Link to={`/name/${name}`} className="">
        <Card.Meta
          style={{ padding: 12 }}
          title={<h3 className="text-xl">{name.toUpperCase()}</h3>}
          description={
            <Space align="baseline" direction="horizontal">
              {types.map((slot) => (
                <Type typeSlot={slot} key={slot.type.name} />
              ))}
            </Space>
          }
        />
      </Link>
      <SoundWave sound={cries?.latest} />
    </Card>
  );
};

export default PokemonCard;
