import { Link } from "react-router-dom";
import type { PokemonInfoEntry } from "../../app/types";
import { Card, Image, Space } from "antd";
import SoundWave from "../../components/audioUrls";
import { Type } from "../../components/Type";
// import { usePermission } from "react-use";

const PokemonCard = (pokemon: PokemonInfoEntry) => {
	// const permission = usePermission({ name: "speaker" });
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
			className="flex flex-col justify-end min-w-64 h-fit"
			hoverable
		>
			<Link to={`/name/${name}`} className="">
				<Card.Meta
					style={{ padding: 12 }}
					title={<h3 className="text-xl">{name.toUpperCase()}</h3>}
					description={
						<Space align="baseline" direction="horizontal">
							{types.map((slot) => (
								<Type typeName={slot.type.name} key={slot.type.name} />
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
