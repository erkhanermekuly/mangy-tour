import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import DestinationPage from './components/DestinationPage/DestinationPage';
import AboutProject from './pages/AboutProject/AboutProject';

function HomePage() {
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

export default function App(){
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutProject />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}
