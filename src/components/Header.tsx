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

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

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

        {/* Mobile Toggle */}
        <div className={styles.headerRight}>
          <button
            type="button"
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className={styles.hamburgerIcon}>
              <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barTop : ""}`} />
              <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barMid : ""}`} />
              <span className={`${styles.hamburgerBar} ${mobileMenuOpen ? styles.barBot : ""}`} />
            </span>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
