import { pricing } from "../data/data";
import { PriceCardProps } from "../types";

const PLAN = "mo";

function Pricing() {
  return (
    <section id="pricing">
      <div>
        <h2>What deal suit you perfect</h2>
        <p>Meet our pricing plan</p>
      </div>

      <div className="switcher">
        <span>Monthly Plan</span>
        <div className="switch"></div>
        <span>Annual Plan</span>
      </div>

      <div className="cards">
        {pricing.map((card, index) => (
          <PriceCard
            key={index}
            heading={card.heading}
            price={card.price}
            description={card.description}
            points={card.points}
          />
        ))}
      </div>
    </section>
  );
}

export const PriceCard = ({
  heading,
  price,
  description,
  points,
}: PriceCardProps) => {
  return (
    <div className="price-card">
      <h3>{heading}</h3>
      <p>
        {price.monthly}/{PLAN}
      </p>
      <p>{description}</p>
      <hr />
      <ul>
        {points.map((point, index) => (
          <li key={index}>
            <img src={point.image} />
            <span>{point.statement}</span>
          </li>
        ))}
      </ul>
      <hr />
      <button className="btn btn-primary">Start Free Trial</button>
    </div>
  );
};

export default Pricing;
