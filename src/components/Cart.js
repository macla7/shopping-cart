import React from "react";
import { Link } from "react-router-dom";

function Cart({ children, total, clearCart }) {
  // <Link to="/bought" className="cartLink" onClick={clearCart}>
  //   Purchase
  // </Link>;
  console.log(total, "what is total");
  return (
    <div className="cartCont">
      <div className="cart">
        <header>
          <h2>Your Cart</h2>
          <h3>Price</h3>
        </header>
        <div className="cartItemsConts">{children}</div>
        <div className="cartTotal">Total: ${total}</div>
        <div className="cartBuy"></div>
        {total !== 0 ? (
          <Link to="/bought" className="cartLink" onClick={clearCart}>
            Purchase
          </Link>
        ) : (
          <Link to="/shop" className="cartLink" onClick={clearCart}>
            Purchase
          </Link>
        )}
      </div>
    </div>
  );
}

export default Cart;
