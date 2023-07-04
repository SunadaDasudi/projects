import styled from "styled-components";
import { mobile } from "../responsive";

const Conatiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://wallpaperaccess.com/full/1078692.jpg");
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin: 20px 0;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Conatiner>
      <Wrapper>
        <Form>
          <Title>Sign In</Title>
          <Input placeholder="User Name"></Input>
          {/* <Input placeholder="Email"></Input> */}
          <Input placeholder="Password"></Input>

          <Button>Sign in</Button>
          <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Conatiner>
  );
}

export default Login;
