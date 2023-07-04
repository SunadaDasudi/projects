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
    url("https://wallpaperaccess.com/full/1437673.jpg");
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #fff;
  ${mobile({ width: "80%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Aggrement = styled.div`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 10px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;

function Register() {
  return (
    <Conatiner>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name"></Input>
          <Input placeholder="User Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Aggrement>
            By creating an account, I concent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Aggrement>
          <Button>Create Acount</Button>
        </Form>
      </Wrapper>
    </Conatiner>
  );
}

export default Register;
