import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopItem({ duck, handleAdd }) {
  function handleSubmit(e) {
    e.preventDefault();
    const add = parseInt(e.target.firstChild.value);
    handleAdd(duck, add);
  }

  return (
    <div className="shopItem">
      <div>
        <h3>{duck.title}</h3>
        <img src={duck.url} alt={duck.title} />
      </div>
      <div>
        <p>Price: {duck.price}</p>
        <FontAwesomeIcon icon="minus-circle" />
        <FontAwesomeIcon icon="plus-circle" />
        <form onSubmit={handleSubmit}>
          <input type="number" name="number" min="1" />
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
    </div>
  );
}

export default ShopItem;
