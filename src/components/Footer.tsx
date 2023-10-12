import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div>
          <h2>Subscribe</h2>
          <p>
            By subscribing with your mail, you will accept our privacy policy
          </p>
        </div>

        <form>
          <input
            type="email"
            id="email"
            name=""
            placeholder="Enter Email address"
          />
          <button className="btn btn-primary">Get Started</button>
        </form>

        <div className="">
          <div>
            <img src={logo} />
            <span>Edown</span>
            <span>&copy; Copyright by 2023 RedQ, Inc</span>
          </div>

          <nav>
            <ul role="list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">Supports</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
