import { useHits } from "react-instantsearch-core";
//import { Item } from "../Utils/Item";

export const Autocomplete = (handleSelection) => {
  const { Hits } = useHits();
  console.log("Hola");

  return (
    <div>
      {Hits.length > 0 && (
        <ul>
          {Hits.map((hit) => (
            <li key={hit.nikname || hit.objectID}>
              <button onClick={() => handleSelection(hit.nikname)}>
                <Item hit={hit} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Autocomplete;

/* eslint-disable react/prop-types */
const Item = ({ hit }) => {
  console.log("Errores");
  return (
    <div>
      <div>
        <img src={hit.imagen} alt={hit.handle} />
      </div>

      <div>
        <div>{hit.nombre}</div>

        <div>@{hit.nikname}</div>
      </div>
    </div>
  );
};
