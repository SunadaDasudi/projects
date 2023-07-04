import { useState } from "react";
import styled from "styled-components";

import { AiFillCamera } from "react-icons/ai";

const List = styled.ul`
  list-style-type: style none;
  padding: 0;
`;
const ListItem = styled.li`
  padding: 5px 0;
  background: ${(prop) => prop.bg};
`;

function ListGroup({ heading, items, onSelectItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const messsage = items.length == 0 && <h1>No Items Found!</h1>;

  return (
    <>
      <AiFillCamera></AiFillCamera>
      <h1>{heading}</h1>
      {messsage}
      <List>
        {items.map((item, index) => (
          <ListItem
            bg={index === selectedIndex ? "blue" : "none"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
