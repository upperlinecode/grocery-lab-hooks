import { CartItem, ItemGroup, ShoppingCartRoot } from "./ShoppingCart.styles";

const ShoppingCart = () => {
  return (
    <ShoppingCartRoot>
      <CartItem>
        <h3>Sample Item</h3>
        <ItemGroup>
          <h5>$ 100</h5>
          <h6>x1</h6>
        </ItemGroup>
      </CartItem>
      <CartItem>
        <h3>Sample Two</h3>
        <ItemGroup>
          <h5>$ 20</h5>
          <h6>x5</h6>
        </ItemGroup>
      </CartItem>
      <h2>Total: $ 200</h2>
    </ShoppingCartRoot>
  );
};

export default ShoppingCart;
