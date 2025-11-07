import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Gallery.module.css";

export default function Gallery() {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);
    
    const imgs = [
        "/images/1.webp",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.webp",
        "/images/5.jpg",
        "/images/6.jpeg"
    ];
    return (
        <section id="gallery" className={styles.gallery}>
            <motion.h4 initial={{y:8,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}}>
                {t('gallery.title', { defaultValue: 'Photo gallery' })}
            </motion.h4>
            <div className={styles.grid}>
                {imgs.map((src, i) => (
                    <motion.div 
                        key={i} 
                        className={styles.item} 
                        initial={{scale:0.98,opacity:0}} 
                        whileInView={{scale:1,opacity:1}} 
                        viewport={{once:true}} 
                        transition={{delay: i*0.05}}
                        onClick={() => setSelectedImage({src, index: i})}
                    >
                        <img src={src} alt={`gallery-${i}`} />
                        <div className={styles.overlay}>
                            {/* <span className={styles.viewIcon}></span> */}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Модальды терезе */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            className={styles.modalContent}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className={styles.closeBtn}
                                onClick={() => setSelectedImage(null)}
                            >
                                ✕
                            </button>
                            
                            <img 
                                src={selectedImage.src} 
                                alt={`Сурет ${selectedImage.index + 1}`}
                                className={styles.modalImage}
                            />
                            
                            <div className={styles.navigation}>
                                <button 
                                    className={styles.navBtn}
                                    onClick={() => {
                                        const prevIndex = selectedImage.index === 0 
                                            ? imgs.length - 1 
                                            : selectedImage.index - 1;
                                        setSelectedImage({src: imgs[prevIndex], index: prevIndex});
                                    }}
                                >
                                    ‹
                                </button>
                                
                                <span className={styles.counter}>
                                    {selectedImage.index + 1} / {imgs.length}
                                </span>
                                
                                <button 
                                    className={styles.navBtn}
                                    onClick={() => {
                                        const nextIndex = selectedImage.index === imgs.length - 1 
                                            ? 0 
                                            : selectedImage.index + 1;
                                        setSelectedImage({src: imgs[nextIndex], index: nextIndex});
                                    }}
                                >
                                    ›
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
