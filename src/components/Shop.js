import React from "react";
import ducks from "../ducks";
import ShopItem from "./ShopItem";
import uniqid from "uniqid";

function Shop() {
  const shopItems = ducks.map((duck) => (
    <ShopItem duck={duck} key={uniqid()} />
  ));
  return (
    <div>
      <div>Shop</div>
      <div className="shopItemCont">{shopItems}</div>
    </div>
  );
}

export default Shop;
