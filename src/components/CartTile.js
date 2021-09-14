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

  function handleMinus(e) {
    let element = e.target.closest("div").querySelector(".number");
    let val = parseInt(element.value);
    if (val === 1) {
      handleClick();
    } else {
      val = parseInt(val) - 1;
      changeCart(id, val);
    }
  }

  function handlePlus(e) {
    let element = e.target.closest("div").querySelector(".number");
    changeCart(id, parseInt(element.value) + 1);
  }

  return (
    <div className="cartTile">
      <img src={ducks[id].url} alt={ducks[id].title} />
      <div className="cartItemBtns">
        <FontAwesomeIcon icon="minus-circle" onClick={handleMinus} />
        <input
          type="number"
          name="number"
          min="1"
          className="number"
          value={num}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon="plus-circle" onClick={handlePlus} />
        <FontAwesomeIcon icon="trash" onClick={handleClick} className="trash" />
      </div>
      <div>
        <p>${ducks[id].price * num}</p>
      </div>
    </div>
  );
}

export default CartTile;
