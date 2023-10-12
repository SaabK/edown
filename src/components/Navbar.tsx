import logo from "../assets/logo.svg";
import lock from "../assets/lock.svg";

function Navbar() {
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Edown" />
          <span className="wordmark">Edown</span>
        </div>

        <nav className="navbar">
          <ul role="list">
            <li className="active">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
            <li>
              <a href="#feature">Feature</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </nav>

        <div className="registeration">
          <button className="btn btn-secondary">
            <img src={lock} width={16} />
            Login
          </button>
          <button className="btn btn-inverse">Get Started</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
