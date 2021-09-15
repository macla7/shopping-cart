import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/cart.png";

function Nav({ cartItems }) {
  function totalCartItems(items) {
    if (items) {
      return Object.values(items).reduce((a, b) => a + b, 0);
    }
  }

  const [cartTotal, setCartTotal] = useState(totalCartItems(cartItems));

  useEffect(() => {
    setCartTotal(totalCartItems(cartItems));
    document.querySelector(".cartTot").innerHTML = cartTotal;
  }, [cartItems, cartTotal]);

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
      <div>
        <Link to="/cart" className="cartLink">
          <div className="cartTot">{cartTotal}</div>
          <img src={cartImg} alt="cart" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
