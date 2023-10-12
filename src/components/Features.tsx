import michalMessaging from "../assets/michalMessaging.png";
import octaviaMessaging from "../assets/octaviaMessaging.svg";
import shocked from "../assets/shocked.svg";
import smiling from "../assets/smiling.svg";
import { feature1, feature2 } from "../data/data";
import tick from "../assets/tick.svg";
import rightArrow from "../assets/right arrow.svg";

function Features() {
  return (
    <section id="features" className="container">
      <div className="even-columns">
        <img src={michalMessaging} alt="" />
        <div className="text-content">
          <h2 className="">
            Meet our premium features that will make you wow
            <img src={shocked} />
          </h2>
          <p>
            Build an incredible workplace and grow your business with Gusto's
            all-in-one platform with amazing contents.
          </p>
          <ul role="list" className="featuers-list">
            {feature1.map((feature, index) => (
              <li key={index}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="even-columns">
        <div className="text-content">
          <h2>
            Built in one app to make instant reply with in lowest minutes
            <span>
              <img src={smiling} />
            </span>
          </h2>
          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <ul role="list">
            {feature2.map((feature, index) => (
              <li key={index}>
                <img src={tick} />
                <span>{feature.title}</span>
              </li>
            ))}
          </ul>
          <button className="explore">
            Explore more <img src={rightArrow} />
          </button>
        </div>

        <img src={octaviaMessaging} />
      </div>
    </section>
  );
}

export default Features;
