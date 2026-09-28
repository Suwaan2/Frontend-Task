import React from "react";
import Link from "next/link";
import ProductSwitcher from "./ProductSwitcher";
import styles from "./products.module.css";

export const metadata = {
  title: "Our Products & Ventures | Digital Chautari",
  description:
    "Three ventures, one vision: Eco Creative Marketing Agency, One Content Creation Studio, and Physio@Home.",
};

export default function ProductsPage() {
  return (
    <div className={styles.productsPage}>
      {/* ═══ 1. HERO ═══ */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />

        <div className={styles.heroInner}>
          <div className={styles.heroCenter}>
            <h1 className={styles.heroTitle}>
              Three ventures,{" "}
              <span className={styles.heroTitleGradient}>one  vision</span>
            </h1>

            <p className={styles.heroLede}>
              We incubate, build, and scale proprietary digital products that solve real-world
              problems in marketing, content, and healthcare across Nepal and emerging frontiers.
            </p>
          </div>

          {/* ═══ 2. TABBED PRODUCT SWITCHER ═══ */}
          <ProductSwitcher />
        </div>
      </section>

      {/* ═══ 3. FLAGSHIP SPOTLIGHT: Physio@Home ═══ */}
      <section className={styles.spotlightSection} id="flagship-spotlight" data-reveal>
        <div className={styles.spotlightGlowA} />
        <div className={styles.spotlightGlowB} />

        <div className={styles.spotlightInner}>
          {/* Top Row: Header + CTAs */}
          <div className={styles.spotlightTopRow}>
            <div className={styles.spotlightHeaderLeft}>
              <div className={styles.spotlightEyebrow}>
                <span className="material-symbols-outlined">award_star</span>
                <span className={styles.spotlightEyebrowText}>Flagship Health-Tech Innovation</span>
              </div>
              <h2 className={styles.spotlightTitle}>
                Physio@Home — Healthcare Reimagined
              </h2>
              <p className={styles.spotlightLede}>
                Bringing verified physical therapy and rehabilitation directly to patient doorsteps
                across Nepal with digital scheduling, encrypted telemetry, and unified patient
                recovery tracking.
              </p>
            </div>
            <div className={styles.spotlightActions}>
              <Link href="/contact?inquiry=physio-app" className={styles.spotlightBtnPrimary}>
                <span className="material-symbols-outlined">download</span>
                Download Physio App
              </Link>
              <Link href="/contact?inquiry=physio-partner" className={styles.spotlightBtnSecondary}>
                <span className="material-symbols-outlined">handshake</span>
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={styles.spotlightStatsRow}>
            <div className={styles.spotlightStatCard}>
              <div className={`${styles.spotlightStatIcon} ${styles.primary}`}>
                <span className="material-symbols-outlined">personal_injury</span>
              </div>
              <div>
                <div className={styles.spotlightStatValue}>500+</div>
                <div className={styles.spotlightStatLabel}>Patients Treated</div>
                <div className={styles.spotlightStatSub}>
                  Across Kathmandu Valley and neighboring municipal hubs
                </div>
              </div>
            </div>
            <div className={styles.spotlightStatCard}>
              <div className={`${styles.spotlightStatIcon} ${styles.gold}`}>
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <div className={styles.spotlightStatValue}>15+</div>
                <div className={styles.spotlightStatLabel}>Certified Therapists</div>
                <div className={styles.spotlightStatSub}>
                  NHPC licensed clinical practitioners with post-grad training
                </div>
              </div>
            </div>
            <div className={styles.spotlightStatCard}>
              <div className={`${styles.spotlightStatIcon} ${styles.leaf}`}>
                <span className="material-symbols-outlined">sentiment_very_satisfied</span>
              </div>
              <div>
                <div className={styles.spotlightStatValue}>99%</div>
                <div className={styles.spotlightStatLabel}>Satisfaction Score</div>
                <div className={styles.spotlightStatSub}>
                  Independent post-treatment patient feedback audit
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid: Text + Image */}
          <div className={styles.spotlightFeatureGrid}>
            <div className={styles.featureContent}>
              <div className={styles.featureBadge}>
                <span className="material-symbols-outlined">domain_verification</span>
                Digital Clinical Infrastructure
              </div>

              <h3 className={styles.featureTitle}>
                Bridging clinical expertise with compassionate home rehabilitation.
              </h3>

              <p className={styles.featureDesc}>
                Physio@Home removes the friction of physical travel for mobility-compromised patients.
                Through smart geolocation matching, automated care-plan updates, and direct medical
                follow-up, our technology accelerates healing journeys where patients feel safest: in
                their homes.
              </p>

              <div className={styles.featureChecklist}>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Zero travel strain for post-operative recovery</span>
                </div>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Real-time recovery metrics shared with consulting surgeons</span>
                </div>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Transparent session pricing &amp; cashless digital payment</span>
                </div>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Tailored home exercises accessible via mobile application</span>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.spotlightImageWrap}>
                <img
                  className={styles.spotlightImage}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1zK4riQBSrFsudhN9hBkLLH6HHvPE-hCUAclkLuECPJyCogv_VM-Lcc5DES9a2IiadrJc3Nl_cYFzYvfIxUTZmSUmcrptlypPUxEi2sxot5S-HtmklPU51qR9RlQ1l6IPfF0yUVLydg5zChfoJOhMT5pvSpzIIFqcWAJsaRny4GpziwC-JGmBwS3naEovy5fKUTAabjwc7IUM5z5gjWCmZ3CmEVFKhx7W2Bzwvfv1hrTgnm9sYGrV"
                  alt="Physiotherapy session in a Nepali home"
                />
                <div className={styles.spotlightImageOverlay}>
                  <span className={styles.spotlightImageCaption}>
                    <span className="material-symbols-outlined">shield_with_heart</span>
                    Licensed by Nepal Health Professional Council (NHPC)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
