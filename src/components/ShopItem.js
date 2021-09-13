import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopItem({ duck, handleAdd }) {
  function handleSubmit(e) {
    e.preventDefault();

    const add = parseInt(e.target.querySelector(".number").value);
    console.log(add, "in handle");
    if (add) {
      handleAdd(duck, add);
    }
  }

  function handlePlus(e) {
    console.log(e.target.closest("form"), "in handlePlus");
    let element = e.target.closest("form").querySelector(".number");
    let val = element.value;
    if (val === "") {
      val = 1;
    } else {
      val = parseInt(val) + 1;
    }

    element.value = val;
  }

  function handleMinus(e) {
    console.log(e.target.closest("form"), "in handleMinus");
    let element = e.target.closest("form").querySelector(".number");
    let val = element.value;
    if (val !== "") {
      val = parseInt(val) - 1;
    }

    element.value = val;
  }

  return (
    <div className="shopItem">
      <div>
        <h3>{duck.title}</h3>
        <img src={duck.url} alt={duck.title} />
      </div>
      <div>
        <p>Price: {duck.price}</p>
        <form onSubmit={handleSubmit}>
          <FontAwesomeIcon icon="minus-circle" onClick={handleMinus} />
          <input type="number" name="number" min="1" className="number" />
          <FontAwesomeIcon icon="plus-circle" onClick={handlePlus} />
          <input type="submit" value="Add to Cart" />
        </form>
      </div>
    </div>
  );
}

export default ShopItem;
