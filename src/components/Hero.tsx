import illustration from "../assets/hero_illustration.svg";
import paypal from "../assets/paypal.svg";
import google from "../assets/google.svg";
import dropbox from "../assets/dropbox.svg";

function Hero() {
  return (
    <section id="hero" className="container">
      <div>
        <h1>Ultimate support system for leading agencies</h1>

        <p>
          Get your tests delivered at let home collect sample from the victory
          of the managements that supplies best design guidelines ever.
        </p>

        <form>
          <input type="email" name="email" id="email" />
          <button className="btn btn-primary">Get Started</button>
        </form>

        <div>
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

      <div>
        <img src={illustration} />
      </div>
    </section>
  );
}

export default Hero;
