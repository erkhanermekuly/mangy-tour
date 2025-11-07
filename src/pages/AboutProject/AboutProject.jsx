import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./AboutProject.module.css";

export default function AboutProject() {
  const { t } = useTranslation();

  const aiList = t('aboutProject.solution.ai.items', { returnObjects: true, defaultValue: [] });
  const impactList = t('aboutProject.impact.items', { returnObjects: true, defaultValue: [] });

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Hero */}
        <motion.section className={`${styles.heroBlock} ${styles.glass}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.heroText}>
            <h1>{t('aboutProject.hero.title', { defaultValue: 'MangyTour: AI гид по Маңғыстау' })}</h1>
            <p>{t('aboutProject.hero.subtitle', { defaultValue: 'Цифровая платформа, объединяющая природу, культуру и умные рекомендации для каждого путешественника.' })}</p>
            <div className={styles.tagline}>{t('aboutProject.hero.tagline', { defaultValue: 'Жеке тәжірибе • Навигация • Инновация' })}</div>
          </div>
        </motion.section>

        {/* Problem */}
        <motion.section className={styles.glass}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTitle}><span className="icon">🧩</span>{t('aboutProject.problem.title', { defaultValue: 'Мәселе / Проблема' })}</div>
          <p>{t('aboutProject.problem.paragraph1')}</p>
          <p>{t('aboutProject.problem.paragraph2')}</p>
        </motion.section>

        {/* Solution Intro */}
        <motion.section className={styles.glass}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className={styles.sectionTitle}><span className="icon">🚀</span>{t('aboutProject.solution.title', { defaultValue: 'MangyTour Шешім / Решение' })}</div>
          <p>{t('aboutProject.solution.intro')}</p>
          <div className={styles.sectionTitle} style={{ marginTop: '1.6rem' }}><span className="icon">🤖</span>{t('aboutProject.solution.ai.title')}</div>
          <ul className={styles.aiList}>
            {aiList.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                {item}
              </motion.li>
            ))}
          </ul>
          <p style={{ marginTop: '1.5rem' }}>{t('aboutProject.solution.conclusion')}</p>
        </motion.section>

        {/* Impact */}
        <motion.section className={styles.glass}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.sectionTitle}><span className="icon">🌍</span>{t('aboutProject.impact.title')}</div>
          <ul className={styles.impactList}>
            {impactList.map((item, i) => (
              <motion.li key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* CTA */}
        <motion.section className={`${styles.glass} ${styles.ctaArea}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>{t('aboutProject.cta.title')}</h2>
            <p>{t('aboutProject.cta.subtitle')}</p>
            <div className={styles.buttons}>
              <button className={styles.btnPrimary} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>🔍 {t('aboutProject.cta.primary')}</button>
              <button className={styles.btnSecondary} onClick={() => window.location.href = '/#contact'}>🤝 {t('aboutProject.cta.secondary')}</button>
            </div>
        </motion.section>
      </div>
    </div>
  );
}