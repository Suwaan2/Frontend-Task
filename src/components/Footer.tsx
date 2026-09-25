import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Col 1: Brand Blurb */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <Logo size={30} />
              <span className={styles.brandTitle}>Digital Chautari</span>
            </div>
            <p className={styles.brandDesc}>
              Building digital bridges between visionary ideas and lasting impact across technology, marketing, and healthcare ventures in Kathmandu and beyond.
            </p>
            <div className={styles.socialRow}>
              <a href="#" aria-label="Global Network" className={styles.socialCircle}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>public</span>
              </a>
              <a href="#" aria-label="Corporate Channel" className={styles.socialCircle}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>hub</span>
              </a>
              <a href="#" aria-label="Direct Inquiries" className={styles.socialCircle}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>alternate_email</span>
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Ventures &amp; Products</Link></li>
              <li><Link href="/about#team">Leadership Team</Link></li>
              <li><Link href="/about#careers">Careers</Link></li>
              <li><Link href="/contact">Press &amp; Media</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><Link href="/services#marketing">Digital Marketing</Link></li>
              <li><Link href="/services#content">Content Studio</Link></li>
              <li><Link href="/services#software">Full-Stack Engineering</Link></li>
              <li><Link href="/services#health">Health-Tech Innovation</Link></li>
              <li><Link href="/contact">Consultation</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Contact */}
          <div className={styles.linkCol}>
            <h3 className={styles.colTitle}>Legal &amp; Contact</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "var(--color-primary)" }}>location_on</span>
                <span>Kathmandu, Bagmati, Nepal</span>
              </div>
              <div className={styles.contactItem}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px", color: "var(--color-primary)" }}>mail</span>
                <a href="mailto:hello@digitalchautari.com" className={styles.emailLink}>
                  hello@digitalchautari.com
                </a>
              </div>
            </div>
            <ul className={styles.linkList}>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.footerBottom}>
          <p>© 2025 Digital Chautari. All rights reserved.</p>
          <p className={styles.handcrafted}>Handcrafted with purpose in Nepal</p>
        </div>
      </div>
    </footer>
  );
}
