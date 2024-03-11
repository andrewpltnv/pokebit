import { Link } from "react-router-dom";
import { PokemonInfoEntry } from "../../app/types";
import { Avatar, Card, Space } from "antd";
import SoundWave from "../../components/audioUrls";
import { Type } from "../../components/Type";

const PokemonCardSm = (pokemon: PokemonInfoEntry) => {
  const {
    name,
    types,
    sprite,
    // id,
    cries,
  } = pokemon;

  return (
    <Card
      // className="flex h-fit min-w-64 flex-col justify-end "
      hoverable
    >
      <Link to={`/name/${name}`} className="">
        <Card.Meta
          style={{ padding: 12 }}
          title={<h3 className="text-xl">{name.toUpperCase()}</h3>}
          avatar={<Avatar src={sprite} size="large" shape="square" />}
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

export default PokemonCardSm;
