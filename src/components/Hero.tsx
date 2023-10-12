import illustration from "../assets/hero_illustration.svg";
import paypal from "../assets/paypal.svg";
import google from "../assets/google.svg";
import dropbox from "../assets/dropbox.svg";

function Hero() {
  return (
    <section id="hero">
      <div className="container flex items-center">
        <div className="text-content">
          <h1>Ultimate support system for leading agencies</h1>

          <p>
            Get your tests delivered at let home collect sample from the victory
            of the managements that supplies best design guidelines ever.
          </p>

          <form className="newsletter">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
            <button className="btn btn-primary">Get Started</button>
          </form>

          <div className="sponsors">
            <span>Sponsored by: </span>
            <ul role="list">
              <li>
                <img src={paypal} alt="paypal" />
              </li>
              <li>
                <img src={google} alt="google" />
              </li>
              <li>
                <img src={dropbox} alt="dropbox" />
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-image">
          <img src={illustration} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
