import React from "react";

function Cart({ children }) {
  return (
    <div>
      <h1>Cartaroo</h1>
      <div>{children}</div>
    </div>
  );
}

export default Cart;
