import { useState } from "react";
import Hero from "../Hero/Hero";
import ProductList from "../ProductList/ProductList";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { inventory } from "../../utils";
import "./App.css";

const exampleStartingCart = [
  {
    product: {
      name: "Apple",
      priceInCents: 199,
      productID: "a1582",
    },
    qty: 1,
  },
  {
    product: {
      name: "Loaf of Bread",
      priceInCents: 150,
      productID: "b2693",
    },
    qty: 1,
  },
  {
    product: {
      name: "Milk",
      priceInCents: 250,
      productID: "m3704",
    },
    qty: 1,
  },
];

const App = () => {
  const [cart, setCart] = useState(exampleStartingCart);

  const addItem = (id) => {
    // Find the index of the item to update
    const i = cart.findIndex((item) => item.product.productID === id);
    // Generate the new quantity
    const newQty = cart[i].qty + 1;
    // Make a copy of the item, and overwrite the quantity with our new quantity
    const newItem = { ...cart[i], qty: newQty };
    // Make a copy of the cart (spread of first half, new item, and spread of second half)
    const newState = [...cart.slice(0, i), newItem, ...cart.slice(i + 1)];
    // Update the cart with our setState function
    setCart(newState);
  };

  const removeItem = (id) => {
    const i = cart.findIndex((item) => item.product.productID === id);
    const newQty = cart[i].qty - 1;
    const newItem = { ...cart[i], qty: newQty };
    const newState = [...cart.slice(0, i), newItem, ...cart.slice(i + 1)];
    setCart(newState);
  };

  return (
    <div className="AppRoot">
      <Hero />
      <ShoppingCart cart={cart} />
      <div>
        <ProductList
          addItem={addItem}
          removeItem={removeItem}
          inventory={inventory}
        />
      </div>
    </div>
  );
};

export default App;
