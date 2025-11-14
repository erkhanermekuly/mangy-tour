import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import HomePage from './pages/HomePage/HomePage';
import DestinationPage from './components/DestinationPage/DestinationPage';
import AboutProject from './pages/AboutProject/AboutProject';

export default function App() {
  return (
    <Router basename="/mangy-tour">
      <div className={styles.app}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutProject />} />
            <Route path="/destination/:id" element={<DestinationPage />} />
            {/* Добавь fallback на случай 404 */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
