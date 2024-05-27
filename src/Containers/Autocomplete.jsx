import { useHits } from "react-instantsearch-core";
import { Item } from "../Utils/Item";

export const Autocomplete = (handleSelection) => {
  const { Hits } = useHits();

  return (
    <div>
      {Hits.length > 0 && (
        <ul>
          {Hits.map((hit) => (
            <li key={hit.nikname}>
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
