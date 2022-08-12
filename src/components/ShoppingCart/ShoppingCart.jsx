import "./ShoppingCart.css";

const ShoppingCart = ({ cart }) => {
  const computeTotalInCents = (cart) => {
    let total = 0;
    for (let item of cart) {
      total += item.product.priceInCents * item.qty;
    }
    return total;
  };

  return (
    <div className="ShoppingCartRoot">
      {/* <div className="CartItem">
        <h3>Sample Item</h3>
        <span className="ItemGroup">
          <h5>$ 100</h5>
          <h6>x1</h6>
        </span>
      </div> */}
      {cart.map((item) => (
        <div className="CartItem">
          <h3>{item.product.name}</h3>
          <span className="ItemGroup">
            <h5>$ {item.product.priceInCents / 100}</h5>
            <h6>x{item.qty}</h6>
          </span>
        </div>
      ))}

      <h2>Total: $ {computeTotalInCents(cart) / 100}</h2>
    </div>
  );
};

export default ShoppingCart;
