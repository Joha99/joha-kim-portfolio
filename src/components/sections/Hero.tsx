import { motion } from "motion/react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frontend Engineer
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Building polished, performant interfaces with React &amp; TypeScript.
        </motion.p>
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#projects" className={styles.btnPrimary}>
            View Projects
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
