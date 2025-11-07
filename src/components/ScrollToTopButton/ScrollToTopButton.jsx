import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ScrollToTopButton.module.css';

export default function ScrollToTopButton(){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            const threshold = window.innerHeight * 0.3; // 30% экран биіктігі
            setVisible(scrolled > threshold);
        };
        
        // Бастапқы жағдайды тексеру
        onScroll();
        
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    className={styles.btn}
                    onClick={handleClick}
                    aria-label="Жоғарыға көтерілу"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: "0 12px 30px rgba(5, 150, 105, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25 
                    }}
                >
                    <motion.span
                        initial={{ y: 0 }}
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 2, 
                            ease: "easeInOut" 
                        }}
                    >
                        ↑
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
