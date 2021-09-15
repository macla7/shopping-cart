import React, { useState } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Foot from "./components/Foot";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faPlusCircle,
  faMinusCircle,
  faTrash,
  // faFacebookSquare,
  // faInstagramSquare,
  // faTwitterSquare,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ShopItem from "./components/ShopItem";
import ducks from "./ducks";
import uniqid from "uniqid";
import CartTile from "./components/CartTile";
import Bought from "./components/Bought";
import { isEmpty } from "lodash";

function App() {
  const [cartItems, setCartItems] = useState({});

  library.add(
    faTimesCircle,
    faPlusCircle,
    faMinusCircle,
    faTrash,
    fab
    // faFacebookSquare,
    // faInstagramSquare,
    // faTwitterSquare
  );

  const shopItems = ducks.map((duck) => (
    <ShopItem duck={duck} handleAdd={handleAdd} key={uniqid()} />
  ));

  const cartTileArr = [];
  for (const id in cartItems) {
    cartTileArr.push(
      <CartTile
        id={id}
        num={cartItems[id]}
        key={uniqid()}
        changeCart={handleChange}
        onRemove={handleDel}
      />
    );
  }

  function handleChange(duckID, add) {
    const bek = { [duckID]: add };
    setCartItems({ ...cartItems, ...bek });
  }

  function handleAdd(duck, add) {
    if (cartItems[duck.id]) {
      const boi = { [duck.id]: cartItems[duck.id] + add };
      setCartItems({ ...cartItems, ...boi });
    } else {
      handleChange([duck.id], add);
    }
    console.log(cartItems, "in app func");
  }

  function handleDel(duck) {
    const cart = cartItems;
    delete cart[duck];
    setCartItems({ ...cart });
    console.log(cartItems);
  }

  function cartTotal() {
    let total = 0;
    for (const id in cartItems) {
      total += ducks[id].price * cartItems[id];
    }
    return total;
  }

  function clearCart() {
    if (isEmpty(cartItems)) {
      alert(
        "You have to have some ducks in your cart before you can purchase them!"
      );
      console.log("beeep");
    } else {
      console.log(cartItems, "cart items are...");
      setCartItems({});
    }
  }

  return (
    <div className="app">
      {console.log(cartItems, "in render of app")}
      <BrowserRouter>
        <Nav cartItems={cartItems} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shop">
            <Shop>{shopItems}</Shop>
          </Route>
          <Route path="/cart">
            <Cart total={cartTotal()} clearCart={clearCart}>
              {cartTileArr}
            </Cart>
          </Route>
          <Route path="/bought">
            <Bought />
          </Route>
        </Switch>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
