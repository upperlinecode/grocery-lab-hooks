import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="ShoppingCartRoot">
      <div className="CartItem">
        <h3>Sample Item</h3>
        <span className="ItemGroup">
          <h5>$ 100</h5>
          <h6>x1</h6>
        </span>
      </div>
      <div className="CartItem">
        <h3>Sample Two</h3>
        <span className="ItemGroup">
          <h5>$ 20</h5>
          <h6>x5</h6>
        </span>
      </div>
      <h2>Total: $ 200</h2>
    </div>
  );
};

export default ShoppingCart;
