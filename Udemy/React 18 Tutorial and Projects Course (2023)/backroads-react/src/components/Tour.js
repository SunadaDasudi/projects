const Tour = ({
  src,
  date,
  title,
  description,
  destination,
  duration,
  price
}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={src} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {destination}
          </p>
          <p>{duration}</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
