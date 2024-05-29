import { useHits } from "react-instantsearch";
//import { Item } from "../Utils/Item";

// eslint-disable-next-line react/prop-types
export const Autocomplete = ({ handleSelection = () => {} }) => {
  const { Hits } = useHits();
  console.log("Autocomplete Inicio");

  return (
    <div>
      <>{console.log("Autocomplete ")}</>
      {Hits.length > 0 && (
        <ul>
          <>
            {console.log("Autocomplete validacion de que hits es mayor que 0")}
          </>
          {Hits.map((hit) => (
            <li key={hit.nikname || hit.objectID}>
              <>{console.log("se mapea Hits")}</>
              <button onClick={() => handleSelection(hit.nikname)}>
                {
                  <>
                    {console.log("Llamada a item")}
                    <Item hit={hit} />
                  </>
                }
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
  console.log("Item");
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
