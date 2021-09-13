import React from "react";

function Shop({ children }) {
  return (
    <div>
      <h2>Welcome to our Shop!</h2>
      <div className="shopItemCont">{children}</div>
    </div>
  );
}

export default Shop;
