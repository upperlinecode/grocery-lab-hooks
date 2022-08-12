import { ButtonGroup, ProductRoot } from "./Product.styles";

const Product = () => {
  return (
    <ProductRoot>
      <h2>NAME</h2>
      <h3>$$PRICE</h3>
      <ButtonGroup>
        <button
          onClick={() => {
            console.log("add button test");
          }}
        >
          Add
        </button>
        <button>Remove</button>
      </ButtonGroup>
    </ProductRoot>
  );
};

export default Product;
