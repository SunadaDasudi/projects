import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books"; //named import
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>Best Sellers in Books</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} index={index + 1} key={book.id}></Book>;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BookList></BookList>
  </StrictMode>
);

// export default Greeting;
