import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  padding: 10px;
  color: gray;
  cursor: pointer;
`;

function CategoryItem({ image, title }) {
  return (
    <Container>
      <Image src={image}></Image>
      <Info>
        <Title>{title}</Title>
        <Button>EXPLORE</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
