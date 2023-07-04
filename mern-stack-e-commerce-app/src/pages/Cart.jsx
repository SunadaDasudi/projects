import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

import { mobile } from "../responsive";

const Conatiner = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  background-color: ${(prop) => prop.bg};
  color: ${(prop) => prop.color};
  border: ${(prop) => prop.border};
`;

const TopLinks = styled.div`
  ${mobile({ display: "none" })}
`;

const TopLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0px;
  border-bottom: 1px solid lightgray;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({ width: "100%" })}
`;

const Image = styled.img`
  width: 200px;
  height: 30vh;
  object-fit: contain;
  ${mobile({ width: "300px" })}
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(prop) => prop.color};
`;

const QuantityContainer = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Quantity = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 10px;
  border: 1px solid teal;
  border-radius: 10px;
  padding: 5px 15px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  ${mobile({ fontSize: "30px" })}
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SummaryTitle = styled.h1`
  margin: 10px 0;
  font-size: 35px;
  font-weight: 200;
`;

const SummaryItem = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  font-weight: 600;
  font-size: ${(prop) => (prop.type === "total" ? "25px" : "20px")};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 90%;
  padding: 10px;
  border: none;
  background-color: black;
  color: #fff;
  font-size: 18px;
  margin: 30px 0;
`;

function Cart() {
  return (
    <Conatiner>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton bg="transparent" color="black" border="1">
            CONTINUE SHOPPING
          </TopButton>
          <TopLinks>
            <TopLink>Shopping Bag (2)</TopLink>
            <TopLink>Your Wishlist (0)</TopLink>
          </TopLinks>
          <TopButton bg="black" color="white" border="none">
            CHECKOUT NOW
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://img.ltwebstatic.com/images3_pi/2023/04/04/1680576643db494f83cb2ddb7a5b33da85ca51e7ec_thumbnail_600x.webp"></Image>
                <Details>
                  <ProductName>
                    <b>Product: </b> Slant Pocket Skinny Capri Jeans
                  </ProductName>
                  <ProductId>
                    <b>Id: </b> sw2303012746641122
                  </ProductId>
                  <ProductColor color="blue"></ProductColor>
                  <ProductSize>
                    <b>Size: </b> 32
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <QuantityContainer>
                  <RemoveIcon />
                  <Quantity>1</Quantity>
                  <AddIcon />
                </QuantityContainer>
                <Price>189kr</Price>
              </PriceDetails>
            </Product>
            <Product>
              <ProductDetails>
                <Image src="https://img.ltwebstatic.com/images3_pi/2023/05/08/16835535460522150bce9ff4089940cb5913a756c0_thumbnail_600x.webp"></Image>
                <Details>
                  <ProductName>
                    <b>Product: </b> SHEIN VCAY Allover Print Criss Cross
                    Backless Cami Dress
                  </ProductName>
                  <ProductId>
                    <b>Id: </b> sz2304205619144449
                  </ProductId>
                  <ProductColor color="green"></ProductColor>
                  <ProductSize>
                    <b>Size: </b> M
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <QuantityContainer>
                  <RemoveIcon />
                  <Quantity>2</Quantity>
                  <AddIcon />
                </QuantityContainer>
                <Price>179kr</Price>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>547Kr</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>49Kr</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-49Kr</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>547Kr</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Conatiner>
  );
}

export default Cart;
