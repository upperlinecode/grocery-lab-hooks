import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { inventory } from "../../utils";
import { AppRoot } from "./App.styles";

const App = () => {
  return (
    <AppRoot>
      <Hero />
      <ShoppingCart />
      <div>
        <ProductList inventory={inventory} />
      </div>
    </AppRoot>
  );
};

export default App;
