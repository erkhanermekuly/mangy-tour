import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";

export default function Hero(){
  const { t } = useTranslation();
  return (
    <section className={styles.hero} id="home">
      <div className={styles.overlay}>
        <div className="container">
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}}>
            {t('hero.heading', { defaultValue: 'Discover the wonders of Mangystau' })}
          </motion.h1>
          <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className={styles.lead}>
            {t('hero.description', { defaultValue: 'Canyons, mountains and the Caspian coast — top spots, practical tips and trip planning in one place.' })}
          </motion.p>
          <motion.div className={styles.actions} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35}}>
            <a href="#destinations" className={styles.primary}>{t('hero.ctaPrimary', { defaultValue: 'Start exploring' })}</a>
            <a href="#contact" className={styles.secondary}>{t('hero.ctaSecondary', { defaultValue: 'Contact us' })}</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
