import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItemsContext from "./CartItemsContext";

function Nav() {
  const cart = useContext(CartItemsContext);

  function totalCartItems(items) {
    console.log(items);
    if (items !== {}) {
      return Object.values(items).reduce((a, b) => a + b);
    }
  }

  useEffect(() => {
    totalCartItems(cart.cartItems);
  }, [cart.cartItems]);
  return (
    <nav className="nav">
      <div className="navLinks">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
      <div className="cart">
        <Link to="/cart">
          <img src="./images/cart.png" alt="cart" />
        </Link>
        <div>1 -</div>
      </div>
    </nav>
  );
}

export default Nav;
