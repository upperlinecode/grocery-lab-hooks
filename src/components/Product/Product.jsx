import "./Product.css";

const Product = () => {
  return (
    <div className="ProductRoot">
      <h2>NAME</h2>
      <h3>$$PRICE</h3>
      <div className="ButtonGroup">
        <button
          onClick={() => {
            console.log("add button test");
          }}
        >
          Add
        </button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Product;
