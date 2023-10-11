function Navbar() {
  return (
    <header id="header" className="container">
      <div className="logo">
        <img src="../assets/logo.svg" alt="Edown" />
        <span>Edown</span>
      </div>

      <nav>
        <ul role="list">
          <li>Home</li>
          <li>Support</li>
          <li>Feature</li>
          <li>Pricing</li>
          <li>Testimonials</li>
        </ul>
      </nav>

      <div className="registeration">
        <button className="btn btn-secondary">
          <img src="../assets/lock.svg" />
          Login
        </button>
        <button className="btn btn-inverse">Get Started</button>
      </div>
    </header>
  );
}

export default Navbar;
