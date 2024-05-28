/* eslint-disable react/prop-types */
export const Item = ({ hit }) => {
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

export default Item;
