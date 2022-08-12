import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { inventory } from "../../utils";
import "./App.css";

const App = () => {
  return (
    <div className="AppRoot">
      <Hero />
      <ShoppingCart />
      <div>
        <ProductList inventory={inventory} />
      </div>
    </div>
  );
};

export default App;
