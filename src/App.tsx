import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MoreFeatures from "./components/MoreFeatures";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Service />
        <Features />
        <MoreFeatures />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
