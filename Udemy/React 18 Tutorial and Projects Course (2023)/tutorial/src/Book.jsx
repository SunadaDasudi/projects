const Book = ({ img, title, author, index }) => {
  return (
    <article className="book">
      <span className="number">#{index}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>by {author}</h4>
    </article>
  );
};

export default Book;
