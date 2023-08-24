import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services"></Title>
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            ></Service>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
