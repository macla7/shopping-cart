import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
