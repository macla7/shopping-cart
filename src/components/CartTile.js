import React from "react";
import ducks from "../ducks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartTile({ id, num, changeCart, onRemove }) {
  function handleChange(e) {
    console.log(e.target.value, "in cartTile");
    changeCart(id, parseInt(e.target.value));
  }

  function handleClick() {
    console.log("?");
    onRemove(id);
  }

  return (
    <div className="cartTile">
      <p>
        {id} : {num}
      </p>
      <img src={ducks[id].url} alt={ducks[id].title} />
      <FontAwesomeIcon icon="minus-circle" />
      <input
        type="number"
        name="number"
        min="1"
        className="number"
        value={num}
        onChange={handleChange}
      />
      <FontAwesomeIcon icon="plus-circle" />
      <button onClick={handleClick}>Remove from Cart</button>
    </div>
  );
}

export default CartTile;
