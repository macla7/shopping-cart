import React, { useState } from "react";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Foot from "./components/Foot";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimesCircle,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import ShopItem from "./components/ShopItem";
import ducks from "./ducks";
import uniqid from "uniqid";

function App() {
  const [cartItems, setCartItems] = useState({});

  library.add(faTimesCircle, faPlusCircle, faMinusCircle);

  const shopItems = ducks.map((duck) => (
    <ShopItem duck={duck} handleAdd={handleAdd} key={uniqid()} />
  ));

  function handleAdd(duck, add) {
    if (cartItems[duck.id]) {
      const boi = { [duck.id]: cartItems[duck.id] + add };
      setCartItems({ ...cartItems, ...boi });
    } else {
      const bek = { [duck.id]: add };
      setCartItems({ ...cartItems, ...bek });
    }
    console.log(cartItems, "in app func");
  }

  return (
    <div className="App">
      {console.log(cartItems, "in render of app")}
      <Nav cartItems={cartItems} />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/shop">
        <Shop>{shopItems}</Shop>
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Foot />
    </div>
  );
}

export default App;
