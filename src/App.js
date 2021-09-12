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
import CartItemsContext from "./components/CartItemsContext";

function App() {
  const [cartItems, setCartItems] = useState({});

  library.add(faTimesCircle, faPlusCircle, faMinusCircle);
  return (
    <div className="App">
      <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Foot />
      </CartItemsContext.Provider>
    </div>
  );
}

export default App;
