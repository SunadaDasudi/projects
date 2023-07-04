import { useEffect, useState } from "react";

function ProductList({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching products in category ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
}

export default ProductList;
