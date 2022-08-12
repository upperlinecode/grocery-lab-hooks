import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ inventory, addItem, removeItem }) => {
  console.log(inventory);
  return (
    <div className="ProductListRoot">
      {inventory.map((item) => (
        <Product
          name={item.name}
          priceInCents={item.priceInCents}
          productID={item.productID}
          key={item.productID}
          addItem={addItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default ProductList;
