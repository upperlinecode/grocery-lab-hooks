import "./Product.css";

const Product = ({ name, priceInCents, productID, addItem, removeItem }) => {
  return (
    <div className="ProductRoot">
      <h2>{name}</h2>
      <h3>${priceInCents / 100}</h3>
      <div className="ButtonGroup">
        <button
          onClick={() => {
            addItem(productID);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            removeItem(productID);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
