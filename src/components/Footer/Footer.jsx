import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer(){
  const { t } = useTranslation();
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className={styles.row}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>© {new Date().getFullYear()} {t('header.brand', { defaultValue: 'TravelX Mangystau' })}</div>
          <div className={styles.links}>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('footer.privacy', { defaultValue: 'Privacy' })}
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('footer.terms', { defaultValue: 'Terms' })}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
