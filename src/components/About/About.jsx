import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

export default function About(){
  const { t } = useTranslation();
  return (
    <section id="about" className={styles.about}>
      <motion.h2 initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
        {t('about.title', { defaultValue: 'About the project' })}
      </motion.h2>
      <motion.p className={styles.p} initial={{y:10,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{delay:0.08}}>
        {t('about.content', { defaultValue: "TravelX Mangystau is your guide to the region’s most exciting natural and cultural places. We share practical advice, routes and helpful information." })}
      </motion.p>
    </section>
  )
}
