import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  eyebrow?: React.ReactNode;
  isDarkEyebrow?: boolean;
  title: React.ReactNode;
  lede?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  centered?: boolean;
}

export default function Hero({
  eyebrow,
  isDarkEyebrow = false,
  title,
  lede,
  actions,
  children,
  centered = false,
}: HeroProps) {
  return (
    <section className={`section-hero ${styles.heroSection}`}>
      <div className={`container ${styles.heroContainer} ${centered ? styles.centered : ""}`}>
        {eyebrow && (
          <div className={`eyebrow-pill animate-fade-in ${isDarkEyebrow ? "eyebrow-dark" : ""} ${styles.eyebrow}`}>
            {eyebrow}
          </div>
        )}

        <h1 className={`${styles.heroTitle} animate-fade-in`}>{title}</h1>

        {lede && <p className={`lede animate-fade-in ${styles.heroLede}`}>{lede}</p>}

        {actions && <div className={`${styles.heroActions} animate-fade-in`}>{actions}</div>}

        {children && <div className={styles.heroChildren}>{children}</div>}
      </div>
    </section>
  );
}
