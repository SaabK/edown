import { useState } from "react";
import { featureTabs, moreFeatures } from "../data/data";
import SVGIcon from "./SVGIcon";

function MoreFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="more-features">
      <div className="container">
        <ul className="features-tab">
          {featureTabs.map((tab, index) => (
            <li key={index}>
              <SVGIcon
                width={tab.image.width}
                height={tab.image.height}
                viewBox={tab.image.viewBox}
                pathFill="#000"
                d={tab.image.d}
              />
              <h4>{tab.name}</h4>
            </li>
          ))}
        </ul>

        <div>
          <div>
            <h2>{moreFeatures[activeTab].title}</h2>
            <p>{moreFeatures[activeTab].description}</p>
            <button className="btn btn-primary">More Details</button>
          </div>

          <img
            src={moreFeatures[activeTab].image}
            alt="dashboard for your agency"
          />
        </div>
      </div>
    </section>
  );
}

export default MoreFeatures;
