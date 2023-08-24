import Title from "./Title";
import Tour from "./Tour";

import { tours } from "../data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.title}
              src={tour.src}
              date={tour.date}
              title={tour.title}
              description={tour.description}
              destination={tour.destination}
              duration={tour.duration}
              price={tour.price}
            ></Tour>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
