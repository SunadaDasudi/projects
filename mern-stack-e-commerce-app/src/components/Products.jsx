import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`;

function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} image={item.img}></Product>
      ))}
    </Container>
  );
}

export default Products;
