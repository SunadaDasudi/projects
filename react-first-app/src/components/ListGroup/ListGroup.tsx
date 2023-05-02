import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  // (item:string) => void
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  //hook : functions to tap into build in features
  //this component will have data or state that will change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No items found!</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>No items found!</p> : null;
  };

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //telling react to use Fragment
    <>
      <h1>{heading}</h1>
      {getMessage()}
      {message}
      {items.length === 0 && <p>No items found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
