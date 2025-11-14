import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Destinations from '../../components/Destinations/Destinations';
import Gallery from '../../components/Gallery/Gallery';
import Contact from '../../components/Contact/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <About />
      </div>
      <Destinations />
      <div className="container">
        <Gallery />
        <Contact />
      </div>
    </>
  );
}
