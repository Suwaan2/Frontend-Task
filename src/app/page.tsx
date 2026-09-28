import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Digital Chautari | Venture Architecture & Digital Solutions",
  description:
    "We build digital bridges between ideas and impact. Creative strategy, full-stack engineering, and transformative health-tech ventures in Kathmandu, Nepal.",
};

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      {/* ===================================================================
          1. HERO CANVAS SECTION
          =================================================================== */}
      <section className={styles.heroSection}>
        {/* Atmospheric Ambient Glows */}
        <div className={styles.heroGlowCenter} />
        <div className={styles.heroGlowLeft} />

        <div className={styles.heroContent}>
          {/* Eyebrow */}
          <div className="eyebrow-pill">🚀 Welcome to Digital Chautari</div>

          {/* Main Headline */}
          <h1 className={styles.heroHeadline}>
            We build{" "}
            <span className={styles.gradientBridge}>
              digital bridges
            </span>{" "}
            between ideas and impact
          </h1>

          {/* Lede Paragraph */}
          <p className={styles.heroLede}>
            Empowering businesses and communities through world-class creative strategy, modern
            full-stack engineering, and transformative health-tech ventures.
          </p>

          {/* CTAs */}
          <div className={styles.heroCtaGroup}>
            <Link href="/services" className={styles.primaryCta}>
              <span>Explore Services</span>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            </Link>
            <Link href="/products" className={styles.secondaryCta}>
              <span>View Products</span>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                layers
              </span>
            </Link>
          </div>

          {/* Interactive Stat Bar Module */}
          <div className={styles.statBarModule}>
            {/* Stat 1 */}
            <div className={styles.statItem}>
              <div className={`${styles.statIconBox} ${styles.statIconTeal}`}>
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Proprietary Products &amp; Ventures</span>
            </div>

            {/* Stat 2 */}
            <div className={`${styles.statItem} ${styles.statItemDivided}`}>
              <div className={`${styles.statIconBox} ${styles.statIconAmber}`}>
                <span className="material-symbols-outlined">groups</span>
              </div>
                <span className={styles.statNumber}>7+</span>
              <span className={styles.statLabel}>Multidisciplinary Team Members</span>
            </div>

            {/* Stat 3 */}
            <div className={styles.statItem}>
              <div className={`${styles.statIconBox} ${styles.statIconGreen}`}>
                <span className="material-symbols-outlined">verified</span>
              </div>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Commitment to Scalable Impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. FEATURE STRIP: 4-COLUMN GRID
          =================================================================== */}
      <section className={styles.featureSection} data-reveal>
        <div className="container">
          <div className={styles.featureGrid}>
            {/* Feature 1 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconBox} ${styles.featureIconTeal}`}>
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h2 className={styles.featureTitle}>Growth-Driven</h2>
              <p className={styles.featureDesc}>
                Data-backed multi-channel campaigns calibrated to maximize ROI, market footprint, and sustainable capital velocity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconBox} ${styles.featureIconAmber}`}>
                <span className="material-symbols-outlined">palette</span>
              </div>
              <h2 className={styles.featureTitle}>Creative-First</h2>
              <p className={styles.featureDesc}>
                Magnetic visual identities, conversion-oriented UX, and cultural resonance that elevate your presence above commodity noise.
              </p>
            </div>

            {/* Feature 3 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconBox} ${styles.featureIconGreen}`}>
                <span className="material-symbols-outlined">code_blocks</span>
              </div>
              <h2 className={styles.featureTitle}>Tech-Powered</h2>
              <p className={styles.featureDesc}>
                Engineered on high-performance cloud backends, headless APIs, and responsive architectures crafted for uninterrupted scale.
              </p>
            </div>

            {/* Feature 4 */}
            <div className={styles.featureCard}>
              <div className={`${styles.featureIconBox} ${styles.featureIconSlate}`}>
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h2 className={styles.featureTitle}>Client-Centric</h2>
              <p className={styles.featureDesc}>
                Transparent sprints, direct founder access, and dedicated technical support aligned strictly with your operational roadmaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. WHO WE ARE SECTION
          =================================================================== */}
      <section className={styles.whoWeAreSection} data-reveal>
        <div className="container">
          <div className={styles.whoWeAreGrid}>
            {/* Narrative Left Column */}
            <div className={styles.whoLeftCol}>
              <div className={styles.sectionEyebrowRow}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>hub</span>
                <span>About Digital Chautari</span>
              </div>
              <h2 className={styles.sectionHeadline}>
                A communal digital hearth for Kathmandu&apos;s boldest ideas
              </h2>
              <p className={styles.paragraphLede}>
                In Nepali heritage, a <em className={styles.italicBold}>Chautari</em> is a traditional stone resting spot beneath broad banyan and pipal trees—a sanctuary where travelers congregate, exchange knowledge, and regain vigor.
              </p>
              <p className={styles.paragraphRegular}>
                We adapt this timeless civic philosophy into the technological frontier. Digital Chautari functions as both a high-velocity innovation agency and a venture incubator, engineering software, media narratives, and healthcare products that touch lives across the Himalayan corridor and the global marketplace.
              </p>

              {/* 2x2 Checklist Grid */}
              <div className={styles.checklistGrid}>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: "#426600", fontSize: "20px" }}>
                    check_circle
                  </span>
                  <span className={styles.checkText}>Creative Strategy</span>
                </div>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: "#426600", fontSize: "20px" }}>
                    check_circle
                  </span>
                  <span className={styles.checkText}>Brand Storytelling</span>
                </div>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: "#426600", fontSize: "20px" }}>
                    check_circle
                  </span>
                  <span className={styles.checkText}>Full-Stack Engineering</span>
                </div>
                <div className={styles.checkItem}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", color: "#426600", fontSize: "20px" }}>
                    check_circle
                  </span>
                  <span className={styles.checkText}>Health-Tech Expertise</span>
                </div>
              </div>

              <div>
                <Link href="/about" className={styles.learnMoreLink}>
                  <span>Meet the Team &amp; Philosophy</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* 2x2 Service Teasers Right Column */}
            <div className={styles.teaserGrid}>
              <Link href="/services#marketing" className={styles.teaserCard}>
                <div>
                  <div className={`${styles.teaserIconBox} ${styles.featureIconTeal}`}>
                    <span className="material-symbols-outlined">campaign</span>
                  </div>
                  <h3 className={styles.teaserTitle}>Growth &amp; SEO</h3>
                  <p className={styles.teaserDesc}>
                    Organic search dominance, paid social pipelines, and continuous funnel optimization.
                  </p>
                </div>
                <span className={styles.teaserAction}>
                  Explore track{" "}
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_outward</span>
                </span>
              </Link>

              <Link href="/services#content" className={styles.teaserCard}>
                <div>
                  <div className={`${styles.teaserIconBox} ${styles.featureIconAmber}`}>
                    <span className="material-symbols-outlined">videocam</span>
                  </div>
                  <h3 className={styles.teaserTitle}>Content Studio</h3>
                  <p className={styles.teaserDesc}>
                    High-definition reels, podcast production, and corporate editorial narrative craftsmanship.
                  </p>
                </div>
                <span className={styles.teaserAction}>
                  Explore studio{" "}
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_outward</span>
                </span>
              </Link>

              <Link href="/services#software" className={styles.teaserCard}>
                <div>
                  <div className={`${styles.teaserIconBox} ${styles.featureIconGreen}`}>
                    <span className="material-symbols-outlined">terminal</span>
                  </div>
                  <h3 className={styles.teaserTitle}>App Engineering</h3>
                  <p className={styles.teaserDesc}>
                    Robust Next.js, Node, and Flutter systems built for responsive mobile-first performance.
                  </p>
                </div>
                <span className={styles.teaserAction}>
                  Explore tech{" "}
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_outward</span>
                </span>
              </Link>

              <Link href="/products#physio" className={styles.teaserCard}>
                <div>
                  <div className={`${styles.teaserIconBox} ${styles.featureIconSlate}`}>
                    <span className="material-symbols-outlined">vital_signs</span>
                  </div>
                  <h3 className={styles.teaserTitle}>Health Systems</h3>
                  <p className={styles.teaserDesc}>
                    Decentralized clinical booking, telemetry, and at-home patient recovery workflows.
                  </p>
                </div>
                <span className={styles.teaserAction}>
                  Explore health{" "}
                  <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>arrow_outward</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. DARK STATS BANNER (#081220)
          =================================================================== */}
      <section className={styles.darkStatsSection} data-reveal>
        <div className={styles.dotsGridOverlay} />
        <div className={`container ${styles.darkStatsContent}`}>
          <div className={styles.darkHeader}>
            <span className={styles.darkEyebrow}>BY THE NUMBERS</span>
            <h2 className={styles.darkHeadline}>Proven Execution Across Sectors</h2>
          </div>

          <div className={styles.darkStatsGrid}>
            {/* Stat 1 */}
            <div className={styles.darkStatCard}>
              <div className={`${styles.darkIconBox} ${styles.darkIconBoxTeal}`}>
                <span className="material-symbols-outlined">check_box</span>
              </div>
              <span className={styles.darkStatNumber}>250+</span>
              <span className={styles.darkStatLabel}>Projects Delivered</span>
            </div>

            {/* Stat 2 */}
            <div className={styles.darkStatCard}>
              <div className={`${styles.darkIconBox} ${styles.darkIconBoxAmber}`}>
                <span className="material-symbols-outlined">sentiment_very_satisfied</span>
              </div>
              <span className={styles.darkStatNumber}>40+</span>
              <span className={styles.darkStatLabel}>Happy Enterprise Clients</span>
            </div>

            {/* Stat 3 */}
            <div className={styles.darkStatCard}>
              <div className={`${styles.darkIconBox} ${styles.darkIconBoxGreen}`}>
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <span className={styles.darkStatNumber}>1M+</span>
              <span className={styles.darkStatLabel}>Content Views Generated</span>
            </div>

            {/* Stat 4 */}
            <div className={styles.darkStatCard}>
              <div className={`${styles.darkIconBox} ${styles.darkIconBoxDim}`}>
                <span className="material-symbols-outlined">all_inclusive</span>
              </div>
              <span className={styles.darkStatNumber}>98%</span>
              <span className={styles.darkStatLabel}>Client Retention Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. PRODUCTS TEASER: FLAGSHIP VENTURES
          =================================================================== */}
      <section className={styles.productsSection} data-reveal>
        <div className="container">
          <div className={styles.productsHeaderRow}>
            <div>
              <div className={styles.sectionEyebrowRow}>
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>rocket</span>
                <span>Venture Studio Ecosystem</span>
              </div>
              <h2 className={styles.sectionHeadline} style={{ marginBottom: 0 }}>
                Our Flagship Ventures
              </h2>
            </div>
            <p className={styles.productsHeaderSubtitle}>
              Proprietary digital engines incubated, engineered, and scaled internally by our studio specialists.
            </p>
          </div>

          <div className={styles.venturesGrid}>
            {/* Venture 1: Eco Creative */}
            <div className={styles.ventureCard}>
              <div className={styles.ventureImgContainer}>
                <img
                  className={styles.ventureImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWlwIqz_MIfdQXCajhWqDmRAt03ST_OLr8I6-iKrA8g4Bpzw6jZJQPtc4Lowxv0c8NjaI083WvdkV9SYPkqDghSEfzTZcfnSXpLOOzERupErBoxrFvilhcIMVX_P29e5Hq_bqZFrlKPlJgrzr7t5YX1GnzZupSqnvFshRadHHPIjSO1VnLQ4uUY2sXU0gGa1zM_8czAZNc0J0jBa18bzl3eliuq0316ix5EiukqzeUjDKM3Kl719S7"
                  alt="Eco Creative Marketing Studio"
                />
                <div className={`${styles.ventureBadge} ${styles.badgeGreen}`}>
                  Brand &amp; Sustainability
                </div>
              </div>
              <div className={styles.ventureBody}>
                <div>
                  <h3 className={styles.ventureTitle}>Eco Creative</h3>
                  <p className={styles.ventureDesc}>
                    Specialized agency unit engineering zero-waste digital campaigns, climate-conscious brand narratives, and circular enterprise marketing systems.
                  </p>
                </div>
                <Link href="/products#eco" className={styles.ventureFooter}>
                  <span>Explore Case Studies</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Venture 2: One Content Studio */}
            <div className={styles.ventureCard}>
              <div className={styles.ventureImgContainer}>
                <img
                  className={styles.ventureImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATXhU3H2Rpt9EawYhHeCT7FyrWIQKgV11vlatl4mZ1LkQ2cymE7pjuF7tqSPW1LfZheGQCWNhx9VrYapMpcZax-9Uf8DB2qCKcgrtkGui-dULajrMre6pSbulutEgPNNW1fhXQdkzEQ5FJMuaWlg9tStiKsgBDpN_6UqDCUl5xRXHCJRh4pWkJb035BfxIijgfpidNolqjMtrHkybSxIpkiEefLMpO0kawTpiYG50YRwjBYMIQ6WVr"
                  alt="One Content Creation Studio"
                />
                <div className={`${styles.ventureBadge} ${styles.badgeAmber}`}>
                  Media &amp; Film
                </div>
              </div>
              <div className={styles.ventureBody}>
                <div>
                  <h3 className={styles.ventureTitle}>One Content Studio</h3>
                  <p className={styles.ventureDesc}>
                    End-to-end audiovisual powerhouse crafting commercial film assets, social-first reels, podcasts, and viral multi-platform narratives.
                  </p>
                </div>
                <Link href="/products#content-studio" className={styles.ventureFooter}>
                  <span>View Media Reel</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Venture 3: Physio@Home */}
            <div className={styles.ventureCard}>
              <div className={styles.ventureImgContainer}>
                <img
                  className={styles.ventureImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmQg-3gJ6CaACdgr0ldSFx-4aGYH2P8fndrCt17eTJruEtvYpaLPeL7FOqkfs6tzvywCK8caOY-wwr_fizBrOLguo98e7L0DSQ3za8wTZWoBXKTZffkr6fmCj1SyW_0_W6oQ0TycCQOgNzoJ4RTsZUr_aoy2OcExAlDZtLNjypzVwCYNc1wj742xhGDZqagfQobntaFpuTkss4B2tDqdqnM8rUm3KL-d-E8N8gQ344rkBc_TZuHycy"
                  alt="Physio@Home clinical rehabilitation platform"
                />
                <div className={`${styles.ventureBadge} ${styles.badgeTeal}`}>
                  Health-Tech
                </div>
              </div>
              <div className={styles.ventureBody}>
                <div>
                  <h3 className={styles.ventureTitle}>Physio@Home</h3>
                  <p className={styles.ventureDesc}>
                    On-demand rehabilitative therapy platform matching verified physiotherapists with patients for customized home treatments and recovery tracking.
                  </p>
                </div>
                <Link href="/products#physio" className={styles.ventureFooter}>
                  <span>Discover Platform</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. SECTORS WE SERVE: 6-CARD BENTO
          =================================================================== */}
      <section className={styles.sectorsSection} data-reveal>
        <div className="container">
          <div className={styles.centerSectionHeader}>
            <span className={styles.sectionEyebrowRow} style={{ justifyContent: "center" }}>
              Domain Specialization
            </span>
            <h2 className={styles.sectionHeadline} style={{ marginBottom: "12px" }}>
              Sectors We Serve
            </h2>
            <p className={styles.paragraphLede} style={{ marginBottom: 0 }}>
              Architecting specialized digital infrastructure tailored to key economic verticals.
            </p>
          </div>

          <div className={styles.sectorsGrid}>
            {/* Sector 1 */}
            <div className={styles.sectorCard}>
              <div className={`${styles.sectorIconBox} ${styles.featureIconTeal}`}>
                <span className="material-symbols-outlined">health_and_safety</span>
              </div>
              <h3 className={styles.sectorTitle}>Healthcare</h3>
              <p className={styles.sectorDesc}>
                HIPAA-aware portals, clinical scheduling engines, telemedicine infrastructure, and patient adherence analytics.
              </p>
            </div>

            {/* Sector 2 */}
            <div className={styles.sectorCard}>
              <div className={`${styles.sectorIconBox} ${styles.featureIconAmber}`}>
                <span className="material-symbols-outlined">shopping_cart</span>
              </div>
              <h3 className={styles.sectorTitle}>E-Commerce</h3>
              <p className={styles.sectorDesc}>
                Headless Shopify storefronts, localized payment gateways for South Asia, and high-velocity conversion optimization.
              </p>
            </div>

            {/* Sector 3 */}
            <div className={styles.sectorCard}>
              <div className={`${styles.sectorIconBox} ${styles.featureIconGreen}`}>
                <span className="material-symbols-outlined">apartment</span>
              </div>
              <h3 className={styles.sectorTitle}>Real Estate</h3>
              <p className={styles.sectorDesc}>
                Immersive 3D architectural virtual tours, property catalog databases, and localized buyer lead acquisition funnels.
              </p>
            </div>

            {/* Sector 4 */}
            <div className={styles.sectorCard}>
              <div className={`${styles.sectorIconBox} ${styles.featureIconSlate}`}>
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className={styles.sectorTitle}>Education</h3>
              <p className={styles.sectorDesc}>
                Custom LMS platforms, interactive student evaluation modules, and digital campus enrollment automation.
              </p>
            </div>

            {/* Sector 5 */}
            <div className={styles.sectorCard}>
              <div className={`${styles.sectorIconBox} ${styles.featureIconTeal}`}>
                <span className="material-symbols-outlined">travel_explore</span>
              </div>
              <h3 className={styles.sectorTitle}>Tourism &amp; Hospitality</h3>
              <p className={styles.sectorDesc}>
                Direct booking reservation hubs, multi-currency itineraries, and Himalayan expedition narrative showcases.
              </p>
            </div>

            {/* Sector 6 */}
            <div className={styles.sectorCard}>
              <div className={`${styles.sectorIconBox} ${styles.featureIconAmber}`}>
                <span className="material-symbols-outlined">newspaper</span>
              </div>
              <h3 className={styles.sectorTitle}>Media &amp; Publishing</h3>
              <p className={styles.sectorDesc}>
                Ultra-fast editorial newsrooms, subscription paywalls, podcast syndication hubs, and syndication feeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. DARK PROCESS SECTION: METHODOLOGY (#081220)
          =================================================================== */}
      <section className={styles.methodologySection} data-reveal>
        <div className="container">
          <div className={styles.centerSectionHeader}>
            <span className={styles.darkEyebrow}>METHODOLOGY</span>
            <h2 className={styles.darkHeadline} style={{ marginBottom: "12px" }}>
              How We Work
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: "1.6" }}>
              From the first shared dialogue to high-availability deployment, our 4-step framework guarantees execution rigor.
            </p>
          </div>

          <div className={styles.methodologyGrid}>
            {/* Step 1 */}
            <div className={styles.methodCard}>
              <div>
                <span className={styles.methodNumber}>01</span>
                <h3 className={styles.methodTitle}>Discover</h3>
                <p className={styles.methodDesc}>
                  Deep stakeholder immersion, architectural audits, competitive market landscaping, and KPI alignment.
                </p>
              </div>
              <div className={styles.methodTag}>
                <span>Sprint 0 Audit</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.methodCard}>
              <div>
                <span className={styles.methodNumber}>02</span>
                <h3 className={styles.methodTitle}>Design</h3>
                <p className={styles.methodDesc}>
                  Interactive wireframing, high-fidelity design systems, user journeys, and tactile brand language definition.
                </p>
              </div>
              <div className={styles.methodTag}>
                <span>Interactive Prototyping</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className={styles.methodCard}>
              <div>
                <span className={styles.methodNumber}>03</span>
                <h3 className={styles.methodTitle}>Develop</h3>
                <p className={styles.methodDesc}>
                  Agile two-week sprints, cloud microservices, clean and modular code, rigorous QA, and performance profiling.
                </p>
              </div>
              <div className={styles.methodTag}>
                <span>Continuous Deployment</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className={styles.methodCard}>
              <div>
                <span className={styles.methodNumber}>04</span>
                <h3 className={styles.methodTitle}>Deliver</h3>
                <p className={styles.methodDesc}>
                  Production launch, real-time observability telemetry, operational handoff, and iterative growth loops.
                </p>
              </div>
              <div className={styles.methodTag}>
                <span>Scale &amp; Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. TESTIMONIALS & INSIGHTS SECTION
          =================================================================== */}
      <section className={styles.testimonialsSection} data-reveal>
        <div className="container">
          {/* Header */}
          <div className={styles.centerSectionHeader}>
            <span className={styles.sectionEyebrowRow} style={{ justifyContent: "center" }}>
              Client Endorsements
            </span>
            <h2 className={styles.sectionHeadline}>
              Trusted by Leaders in Kathmandu &amp; Beyond
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className={styles.testimonialsGrid}>
            {/* Review 1 */}
            <div className={styles.testimonialCard}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className={styles.testimonialQuote}>
                  &ldquo;Digital Chautari delivered our mobile clinical portal ahead of schedule. Their understanding of health-tech workflows in developing markets is unmatched.&rdquo;
                </p>
              </div>
              <div className={styles.authorRow}>
                <img
                  className={styles.authorAvatar}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzkbjgnLIzZORLv5Q-bRmTHmhxzv-uxGRqutnhocULcNYs7zyhZAu3ZSaMfEYsayiyzawM6IgHCkG3XOqYJLhHJzAHskxC3kjxJPFg8PlRIX5j10B4yt-ns_XHSZk9F7994mCdf80fDrIeogetLICusMjXQaO-mllsdVNy9Y7_vHlLZDuVbJK_mGnOYqjHuyBy6dv-mLOj3m7F3eGcK5MVC6vyZgZNKCfI3XdMYfUVqkIQwY4eca_B"
                  alt="Dr. Anish Sharma portrait"
                />
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>Dr. Anish Sharma</span>
                  <span className={styles.authorRole}>Director, Himalayan Health</span>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className={styles.testimonialCard}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className={styles.testimonialQuote}>
                  &ldquo;Their creative studio helped transform our heritage hotel brand into an experiential destination. Our direct web bookings tripled in two quarters.&rdquo;
                </p>
              </div>
              <div className={styles.authorRow}>
                <img
                  className={styles.authorAvatar}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqzYrXV2zwmuNmqCWt_hOJ4uai0KpU4WwtpvvZSRGoiEDyMsdiFrb5jAlAk1mcrI3MlyNEg5QpNVmp97AYDnAvoDqUiNtakC4KmA8zWwzwS7hDLaJygcqN4SmweX7u613dBVHPKhCqkFFiMKfE7MKZr85iushZPz-053n4uITs8Ajn-8SPxS4EV36WiqTUVBjV0Himh1TrR0caj5a545RixpkN0fYWM5a74ON7TlqwzPNsWkLVXYg8"
                  alt="Prerana Thapa portrait"
                />
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>Prerana Thapa</span>
                  <span className={styles.authorRole}>MD, Valley Heritage Resorts</span>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className={styles.testimonialCard}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className={styles.testimonialQuote}>
                  &ldquo;Working with Digital Chautari is like having an elite technical co-founder on call. Fast, transparent, and thoroughly obsessed with product excellence.&rdquo;
                </p>
              </div>
              <div className={styles.authorRow}>
                <img
                  className={styles.authorAvatar}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRWf-QGfEJcozQAV4uziJzTYN1WNNM1N_c9VTmlKlJvIjl9nD4SyZPWjp8CwiBpGr6QJU1KeWyVyVYKYx61qMUufwni2KuJeGNtQh1NUtkro-8Y6Yo9U6Zcynr-35ymUj0jdSQpQiXNSwyjDSALvqzRz27hv0fBNwuCID0G4V4IOoPfm7-QpQhOKdDq76nAR_phfALUdrBF6m47iv4hBjw4RBvRdNDh2PR6KAv7jvaM8gSUKeo4qWV"
                  alt="Bikash Adhikari portrait"
                />
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>Bikash Adhikari</span>
                  <span className={styles.authorRole}>Co-Founder, Everest Pay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className={styles.sectionDivider} />

          {/* Blog / Insights Section */}
          <div className={styles.productsHeaderRow}>
            <div>
              <span className={styles.sectionEyebrowRow}>
                Thoughts &amp; Artifacts
              </span>
              <h2 className={styles.sectionHeadline} style={{ marginBottom: 0 }}>
                Latest Publications
              </h2>
            </div>
            <Link href="/about" className={styles.learnMoreLink}>
              <span>Read All Articles</span>
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
            </Link>
          </div>

          <div className={styles.publicationsGrid}>
            {/* Article 1 */}
            <article className={styles.publicationCard}>
              <div className={styles.pubImgContainer}>
                <img
                  className={styles.pubImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWejtNzevOfohVnyYer7U-5XcphUrpOfvo9PwsNkQiVGFznEt-pnqGbmQ25fLMi7vEI8HI7dwdnRCHT6pIdbFWHPF50DRYtGQJu0VWFc_71iJEOzuv30qgVc6iXsqAN3bSlOlHXwxDkpD0xx5I_fjql5YroN9_e09gdUbpqPmkQVL_hmOBWnv0y2FAAgCqc-SbufVATwoLsYYr481P7lVqj-0k6NvGQqEslIHfe2V4WUAfqSUPjYsI"
                  alt="Abstract visualization of digital networks spanning across Himalayan mountain silhouettes"
                />
              </div>
              <div className={styles.pubBody}>
                <div>
                  <div className={styles.pubMetaRow}>
                    <span className={`${styles.pubTag} ${styles.pubTagTeal}`}>Engineering</span>
                    <span>Oct 14, 2024</span>
                    <span>• 5 min read</span>
                  </div>
                  <h3 className={styles.pubTitle}>
                    Building Resilient Edge Microservices for Developing Markets
                  </h3>
                  <p className={styles.pubExcerpt}>
                    Strategies for low-bandwidth environments, offline synchronization, and distributed database sharding in South Asia.
                  </p>
                </div>
                <div className={styles.pubFooter}>
                  <span className={styles.readStoryLink}>Read Story →</span>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className={styles.publicationCard}>
              <div className={styles.pubImgContainer}>
                <img
                  className={styles.pubImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3RgUbfNQKdB5ALuw0ehnCz2DAsLfNLEh4dttbam6L1co4lOcATiCXTX7SIHIyZ0jJ5chptky1RcvYOv2UtsEkupaJzSI7mE3RvwLqcpaWgaI3xWjfXIXxCPu82zU-9dlDcah6mcNKb-_gqsMEdL1elIJHVryNahcGpwYmNX4sx4yvxRDYi4GU3xtrw4pRE8b3q505X2JKpcw2UVjPUgIS1K4lCj9o3zXmBggKKT0mNeASjS-K1Kfq"
                  alt="Modern physical therapy telemedicine mobile app mockup"
                />
              </div>
              <div className={styles.pubBody}>
                <div>
                  <div className={styles.pubMetaRow}>
                    <span className={`${styles.pubTag} ${styles.pubTagGreen}`}>Health-Tech</span>
                    <span>Sep 28, 2024</span>
                    <span>• 7 min read</span>
                  </div>
                  <h3 className={styles.pubTitle}>
                    The Decentralized Clinic: How Physio@Home Redefines Care
                  </h3>
                  <p className={styles.pubExcerpt}>
                    A case examination into replacing congested outpatient waiting rooms with certified at-home physical therapy visits.
                  </p>
                </div>
                <div className={styles.pubFooter}>
                  <span className={styles.readStoryLink}>Read Story →</span>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className={styles.publicationCard}>
              <div className={styles.pubImgContainer}>
                <img
                  className={styles.pubImg}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXVseCGy2gzlmGf0MBjVxuUEmZF9Eyv5lvvUSKGwCHCW5CqJQKcdgA3-wTPSldMIiMk25pJGhXBIckqx-ujZh-pdlptY3mOWHZNroDcyk_e8XpX-6FDckwGvT-o15T0ZcbdzUnfSBvVUZfxoAiA7xZ6c7E5Yd6inlG0v3TNkmf_XSTV8x5Hg1rmHRPpMlWJeEYMitAKBNGooQrhEkfptTskg301m4dXvVTBARbEn7sgxOb5OjHpJVo"
                  alt="Creative director sketching branding typography and color swatches"
                />
              </div>
              <div className={styles.pubBody}>
                <div>
                  <div className={styles.pubMetaRow}>
                    <span className={`${styles.pubTag} ${styles.pubTagAmber}`}>Branding</span>
                    <span>Sep 12, 2024</span>
                    <span>• 4 min read</span>
                  </div>
                  <h3 className={styles.pubTitle}>
                    Beyond Generic Aesthetics: Cultivating Distinct Cultural Tech
                  </h3>
                  <p className={styles.pubExcerpt}>
                    Why modern SaaS design homogenizes global products, and how embracing regional symbolism builds defensible community moats.
                  </p>
                </div>
                <div className={styles.pubFooter}>
                  <span className={styles.readStoryLink}>Read Story →</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. CLOSING CTA BANNER
          =================================================================== */}
      <section className={styles.closingCtaSection} data-reveal>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaGlowRight} />
            <div className={styles.ctaGlowLeft} />

            <div className={styles.ctaInner}>
              <span className={styles.ctaEyebrow}>Initiate Collaboration</span>
              <h2 className={styles.ctaTitle}>
                Ready to build something extraordinary together?
              </h2>
              <p className={styles.ctaSubtitle}>
                Whether you need agency execution for a flagship brand, full-stack software development, or desire a joint venture partnership in health-tech—let us gather at the Chautari.
              </p>
              <div className={styles.ctaButtonGroup}>
                <Link href="/contact" className={styles.ctaButton}>
                  <span>Start a Project</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    arrow_forward
                  </span>
                </Link>
                <Link href="/services" className={styles.ctaButtonSecondary}>
                  <span>View Services</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
