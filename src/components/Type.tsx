import { Link } from "react-router-dom";
import { PokemonType } from "pokenode-ts";

export const Type = ({ typeSlot }: { typeSlot: PokemonType }) => {
  return (
    <Link to={`/type/${typeSlot.type.name}`}>
      <span className="m-auto rounded-md p-2 text-lg ">
        {typeSlot.type.name}
      </span>
    </Link>
  );
};
