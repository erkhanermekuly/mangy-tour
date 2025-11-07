import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

export default function Contact(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  
  const sendToTelegram = async (data) => {
    const telegramMessage = `🆕 ${t('contact.telegram.newRequest', { defaultValue: 'New request' })}!\n\n` +
      `👤 ${t('contact.telegram.name', { defaultValue: 'Name' })}: ${data.name}\n` +
      `📱 ${t('contact.telegram.phone', { defaultValue: 'Phone' })}: ${data.phone}\n` +
      `💬 ${t('contact.telegram.message', { defaultValue: 'Message' })}: ${data.message}`;
    const telegramUrl = `https://t.me/ermekuly_014?text=${encodeURIComponent(telegramMessage)}`;
    window.open(telegramUrl, '_blank');
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert(t('contact.alerts.fillFields', { defaultValue: 'Please fill in all fields!' }));
      return;
    }
    
    const formData = {
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim()
    };
    
    sendToTelegram(formData);
    alert(t('contact.alerts.sentThanks', { name, defaultValue: `Thanks, ${name}! Your request has been sent via Telegram.` }));
    setName(""); 
    setPhone(""); 
    setMessage("");
  };

  return (
    <motion.section 
      id="contact" 
      className={styles.contact}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <motion.h5 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t('contact.title', { defaultValue: 'Contact' })}
        </motion.h5>
        <motion.p 
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t('contact.lead', { defaultValue: 'Have questions or need a custom route? Leave a message.' })}
        </motion.p>
        <motion.p 
          className={styles.notice}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          {t('contact.notice', { defaultValue: '* required fields. Your data is sent directly via Telegram.' })}
        </motion.p>
        <motion.form 
          className={styles.form} 
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.input 
            type="text"
            value={name} 
            onChange={e=>setName(e.target.value)} 
            placeholder={t('contact.placeholders.name', { defaultValue: 'Your name *' })}
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.1)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.input 
            type="tel"
            value={phone} 
            onChange={e=>setPhone(e.target.value)} 
            placeholder={t('contact.placeholders.phone', { defaultValue: 'Your phone * (+7 705 123 4567)' })}
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.1)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.textarea 
            value={message} 
            onChange={e=>setMessage(e.target.value)} 
            placeholder={t('contact.placeholders.message', { defaultValue: "Tell us what you’re planning * (e.g., a 3-day trip to Mangystau)" })}
            rows="5" 
            required
            whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(5, 150, 105, 0.1)" }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className={styles.actions}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button 
              type="submit" 
              className={styles.btnPrimary}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(5, 150, 105, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('contact.actions.submit', { defaultValue: '📱 Send to Telegram' })}
            </motion.button>
            <motion.a 
              href="https://t.me/ermekuly_014" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('contact.actions.write', { defaultValue: '💬 Message directly' })}
            </motion.a>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}
