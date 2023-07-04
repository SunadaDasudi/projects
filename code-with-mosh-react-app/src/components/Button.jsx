import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.color == "primary" ? "blue" : "none")};
  color: ${(props) => (props.color == "primary" ? "white" : "black")};
  border: 1px solid #c8c806;
  border-radius: 5px 5px;
  padding: 8px 12px;
  font-size: 20px;
  cursor: pointer;
`;

function Button({ children, color = "primary", onClickEvent }) {
  return (
    <StyledButton
      color={color}
      type="button"
      onClick={() => onClickEvent(color)}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
