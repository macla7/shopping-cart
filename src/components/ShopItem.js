import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItemsContext from "./CartItemsContext";

function ShopItem({ duck }) {
  const cart = useContext(CartItemsContext);
  console.log(cart);

  function handleSubmit(e) {
    e.preventDefault();
    const add = parseInt(e.target.firstChild.value);
    console.log(add);
    if (cart.cartItems[duck.id]) {
      cart.setCartItems(
        Object.assign(cart.cartItems, {
          [duck.id]: cart.cartItems[duck.id] + add,
        })
      );
    } else {
      cart.setCartItems(
        Object.assign(cart.cartItems, {
          [duck.id]: add,
        })
      );
    }
    console.log(cart.cartItems);
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
