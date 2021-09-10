import React from "react";
import { Link } from "react-router-dom";

function Nav() {
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
      </div>
    </nav>
  );
}

export default Nav;
