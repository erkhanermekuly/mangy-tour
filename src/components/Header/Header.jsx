import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

export default function Header(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
      document.documentElement.setAttribute('data-theme', JSON.parse(savedTheme) ? 'dark' : 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  };

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className={styles.logo}/>
              <span>{t('header.brand', { defaultValue: 'MangyTour' })}</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            {isHomePage ? (
              <>
                <Link to="/about">{t('header.nav.about', { defaultValue: 'About' })}</Link>
                <a href="#destinations">{t('header.nav.destinations', { defaultValue: 'Destinations' })}</a>
                <a href="#gallery">{t('header.nav.gallery', { defaultValue: 'Gallery' })}</a>
                <a href="#contact" className={styles.cta}>{t('header.nav.contact', { defaultValue: 'Contact' })}</a>
              </>
            ) : (
              <>
                <Link to="/about">{t('header.nav.about', { defaultValue: 'About' })}</Link>
                <Link to="/#destinations">{t('header.nav.destinations', { defaultValue: 'Destinations' })}</Link>
                <Link to="/#gallery">{t('header.nav.gallery', { defaultValue: 'Gallery' })}</Link>
                <Link to="/#contact" className={styles.cta}>{t('header.nav.contact', { defaultValue: 'Contact' })}</Link>
              </>
            )}

            <div className={styles.langSwitcher} role="group" aria-label="Language switcher">
              {['kz','ru','en'].map(code => (
                <button
                  key={code}
                  type="button"
                  className={`${styles.langBtn} ${i18n.language?.startsWith(code) ? styles.active : ''}`}
                  onClick={() => { i18n.changeLanguage(code); localStorage.setItem('app_lang', code); }}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            
            <button 
              className={styles.themeToggle}
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Жарық режимге ауысу" : "Түнгі режимге ауысу"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            
            <button 
              className={styles.menuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Мәзір"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
          
          <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
            {isHomePage ? (
              <>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.about')}</a>
                <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.destinations')}</a>
                <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.gallery')}</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.contact')}</a>
              </>
            ) : (
              <>
                <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.about')}</Link>
                <Link to="/#destinations" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.destinations')}</Link>
                <Link to="/#gallery" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.gallery')}</Link>
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('header.nav.contact')}</Link>
              </>
            )}

            <div className={styles.mobileLangSwitcher}>
              {['kz','ru','en'].map(code => (
                <button
                  key={code}
                  type="button"
                  className={`${styles.langBtn} ${i18n.language?.startsWith(code) ? styles.active : ''}`}
                  onClick={() => { i18n.changeLanguage(code); localStorage.setItem('app_lang', code); setIsMobileMenuOpen(false); }}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
