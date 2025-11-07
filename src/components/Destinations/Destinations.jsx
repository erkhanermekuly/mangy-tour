import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Destination.module.css";

export default function Destinations(){
  const { t } = useTranslation();
  const items = [
    { id: 1, img: "/images/bozjyra.jpeg" },
    { id: 2, img: "/images/sherkala.webp" },
    { id: 3, img: "/images/coastal.jpg" }
  ];

  return (
    <section id="destinations" className={styles.destSection}>
      <div className="container">
        <motion.h3 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
          {t('destinations.title')}
        </motion.h3>
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <motion.article 
              className={styles.card} 
              key={item.id}
              initial={{y:20,opacity:0}} 
              whileInView={{y:0,opacity:1}} 
              viewport={{once:true}} 
              transition={{delay: idx*0.08}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={`/destination/${item.id}`} className={styles.cardLink}>
                <div className={styles.media}>
                  <img src={item.img} alt={t(`destinationData.${item.id}.title`)} />
                  <div className={styles.overlay}>
                    <span className={styles.viewMore}>{t('destinations.viewMore', { defaultValue: 'View details' })}</span>
                  </div>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.h3}>{t(`destinationData.${item.id}.title`)}</h3>
                  <p>{t(`destinationData.${item.id}.excerpt`)}</p>
                  <span className={styles.link}>
                    {t('destinations.more', { defaultValue: 'More →' })}
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}