import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhonelinkRingIcon from "@mui/icons-material/PhonelinkRing";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#f8f5f5" })}
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>JustBuy</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          itaque atque voluptatum et deleniti alias at porro sed quo, explicabo
          magni impedit eos dolorem omnis placeat eveniet aliquam fugiat
          laborum.
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Carrers</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Conatct</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          Vildandsvägen 18D227 34 Lund
        </ContactItem>
        <ContactItem>
          <PhonelinkRingIcon style={{ marginRight: "10px" }} />
          +46 0762976206
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "10px" }} />
          sunada.dasudi2010@gmail.com
        </ContactItem>
        <Payment src="https://n1gloves.com/img/cms/pagos_1.png" />
      </Right>
    </Container>
  );
}

export default Footer;
