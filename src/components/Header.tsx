"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.headerInner}`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Digital Chautari Home">
          {/* Logo Mark */}
          <Logo size={34} className={styles.brandLogoImg} />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>Digital Chautari</span>
            <span className={styles.brandTagline}>Venture Architecture &amp; Digital Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
              >
                {link.label}
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className={styles.headerRight}>
          <Link href="/contact" className={styles.contactBtnPill}>
            Contact Us
          </Link>

          <button
            type="button"
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barTop : ""}`} />
            <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barMid : ""}`} />
            <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barBot : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavItem} ${isActive ? styles.mobileNavActive : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className={`btn btn-primary ${styles.mobileContactBtn}`}>
              Contact Us →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
