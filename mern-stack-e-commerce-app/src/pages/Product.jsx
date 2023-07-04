import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

import { mobile } from "../responsive";

const Conatiner = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "0 10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(prop) => prop.color};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  ${mobile({ width: "100%" })}
`;

const QuantityContainer = styled.div`
  flex: 1;
  display: flex;

  ${mobile({ alignItems: "center", width: "100%" })}
`;

const RemoveButton = styled.span`
  font-size: 30px;
  margin: 10px;
  cursor: pointer;
  ${mobile({ margin: "2px" })}
`;

const Quantity = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 5px 15px;
`;

const AddButton = styled.span`
  font-size: 30px;
  margin: 10px;
  cursor: pointer;
  ${mobile({ margin: "2px" })}
`;

const Button = styled.button`
  flex: 0.5;
  border: 1px solid teal;
  border-radius: 3px;
  background: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #f0eded;
  }

  ${mobile({ flex: "1" })}
`;

function Product() {
  return (
    <Conatiner>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://img.ltwebstatic.com/images3_pi/2023/04/27/1682582284d1f20a2bf7df37de923ffcd96e61ab9f_thumbnail_600x.webp"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Baby Letter & Dinosaur Print Tee & Shorts</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            voluptatum corporis eum sunt tempora harum eaque, natus temporibus
            nobis voluptates expedita consequatur? Laudantium maiores non
            corrupti repellat esse perspiciatis similique!
          </Description>
          <Price>89kr</Price>

          <FilterContainer>
            <Filter>
              <FilterText>Color:</FilterText>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterText>Size:</FilterText>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <QuantityContainer>
              <RemoveButton>-</RemoveButton>
              <Quantity>1</Quantity>
              <AddButton>+</AddButton>
            </QuantityContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Conatiner>
  );
}

export default Product;
