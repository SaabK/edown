import { ServiceCardProps } from "../types";
import arrow from "../assets/arrow.svg";
import { services } from "../data/data";

function Service() {
  return (
    <section id="service" className="container">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}

export const ServiceCard = ({
  image,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="service-card">
      <img src={image} alt="" />
      <div className="text-content">
        <div>
          <h3>{title}</h3>
          <img src={arrow} />
        </div>
        <p className="body">{description}</p>
      </div>
    </div>
  );
};

export default Service;
