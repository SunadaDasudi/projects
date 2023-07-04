import { styled } from "styled-components";

import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0", flexDirection: "column" })}
`;
function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          key={item.id}
          image={item.img}
          title={item.title}
        ></CategoryItem>
      ))}
    </Container>
  );
}

export default Categories;
