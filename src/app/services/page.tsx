import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import styles from "./services.module.css";

export const metadata = {
  title: "Our Services | Digital Chautari",
  description:
    "Explore our full-service suite: Digital Marketing, Content Studio, and Custom Software Development in Kathmandu.",
};

interface SubService {
  id?: string;
  index: string;
  icon: string;
  title: string;
  desc: string;
  link: string;
}

interface ServicePillar {
  id: string;
  accent: "pillarTeal" | "pillarGold" | "pillarGreen";
  icon: string;
  eyebrow: string;
  title: string;
  desc: string;
  highlight: { title: string; sub: string; icon: string };
  subServices: SubService[];
}

interface PricingTier {
  name: string;
  badge: string;
  tag: string;
  accent: "accentTeal" | "accentGold" | "accentGreen";
  desc: string;
  pricePrefix?: string;
  price: string;
  period: string;
  dark: boolean;
  popular: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

export default function ServicesPage() {
  // 1. Hero metrics ticker
  const metrics = [
    { value: "98.4%", label: "SLA Adherence", accent: "metricTeal" },
    { value: "4.8x", label: "Avg. Client ROI", accent: "metricGold" },
    { value: "42+", label: "Ventures Launched", accent: "metricGreen" },
    { value: "<14d", label: "Sprint Cycle Velocity", accent: "metricInk" },
  ];

  // 2. Service Pillars: 3 rows with 2x2 sub-services
  const servicePillars: ServicePillar[] = [
    {
      id: "marketing",
      accent: "pillarTeal",
      icon: "trending_up",
      eyebrow: "Pillar 01 / Acquisition",
      title: "Digital Marketing & Growth Intelligence",
      desc: "Precision targeting anchored in local customer psychographics and high-signal analytics. We engineer automated multi-channel engines that reduce customer acquisition cost while maximizing organic equity.",
      highlight: {
        title: "Cross-channel ROAS",
        sub: "Continuous optimization pipeline",
        icon: "monitoring",
      },
      subServices: [
        {
          index: "01.1",
          icon: "query_stats",
          title: "Performance Marketing",
          desc: "Conversion-first ad campaigns across Meta, Google Ads, and programmatic DSPs with dynamic budget allocation.",
          link: "Real-time Attribution",
        },
        {
          index: "01.2",
          icon: "travel_explore",
          title: "SEO & Semantic Search",
          desc: "Technical architectural SEO, localized keyword domination, and search generative experience (SGE) optimization.",
          link: "Top-3 Ranking Focus",
        },
        {
          index: "01.3",
          icon: "hub",
          title: "Social Ecosystems",
          desc: "Community ignition and algorithmic content scaling built on authentic communal narratives across TikTok, IG, and LinkedIn.",
          link: "Community Growth",
        },
        {
          index: "01.4",
          icon: "insights",
          title: "Predictive Analytics",
          desc: "Bespoke Looker/Tableau dashboards unifying retention cohorts, blended CAC, and lifetime transactional value.",
          link: "Data Visibility",
        },
      ],
    },
    {
      id: "content",
      accent: "pillarGold",
      icon: "movie_filter",
      eyebrow: "Pillar 02 / Creative",
      title: "Content Studio & Narrative Craft",
      desc: "Cinematic visual culture paired with persuasive editorial voice. We transform brand values into visceral multimedia experiences that command audience attention in crowded timelines.",
      highlight: {
        title: "In-house Production Gear",
        sub: "4K Cinema rigs & podcast suite",
        icon: "mic",
      },
      subServices: [
        {
          index: "02.1",
          icon: "videocam",
          title: "Cinema-Grade Video",
          desc: "Commercial spots, founder documentaries, short-form viral vertical video series, and high-impact micro-documentaries.",
          link: "Production Reel",
        },
        {
          index: "02.2",
          icon: "draw",
          title: "Brand Systems & Visual Design",
          desc: "Complete brand identities, typography guidelines, interactive vector kits, and dynamic social media design libraries.",
          link: "Design Systems",
        },
        {
          index: "02.3",
          icon: "edit_note",
          title: "Strategic Copywriting",
          desc: "Deep-dive technical whitepapers, executive op-eds, bilingual regional messaging, and high-conversion landing page copy.",
          link: "Editorial Voice",
        },
        {
          index: "02.4",
          icon: "podcasts",
          title: "Podcasting & Voice Media",
          desc: "End-to-end podcast creation, multi-track audio engineering, YouTube visual casts, and episodic broadcast dissemination.",
          link: "Audio Master",
        },
      ],
    },
    {
      id: "software",
      accent: "pillarGreen",
      icon: "terminal",
      eyebrow: "Pillar 03 / Engineering",
      title: "Full-Stack Software & Health-Tech",
      desc: "Fault-tolerant cloud architectures, mobile native experiences, and secure HIPAA/telehealth compliance foundations. We construct digital products engineered to sustain heavy civic traffic.",
      highlight: {
        title: "Zero-Downtime Guarantee",
        sub: "99.99% Availability Architecture",
        icon: "cloud_done",
      },
      subServices: [
        {
          index: "03.1",
          icon: "devices",
          title: "Modern Web Applications",
          desc: "Serverless Next.js, React, and Python/Node backends engineered for blazing load speed and strict modularity.",
          link: "Architecture Specs",
        },
        {
          index: "03.2",
          icon: "stay_current_portrait",
          title: "Cross-Platform Mobile",
          desc: "Performant iOS & Android consumer applications built with Flutter or React Native, optimized for low-bandwidth environments.",
          link: "Mobile Engines",
        },
        {
          id: "health",
          index: "03.3",
          icon: "health_and_safety",
          title: "Health-Tech Systems",
          desc: "Integrated clinical record modules, telemedicine booking bridges, and smart hardware telemetry protocols.",
          link: "Clinical Security",
        },
        {
          index: "03.4",
          icon: "integration_instructions",
          title: "Enterprise API Gateways",
          desc: "Microservice orchestrations, regional payment gateways (Fonepay, Khalti, eSewa), and legacy database synchronizers.",
          link: "Microservices",
        },
      ],
    },
  ];

  // 3. Pricing: 3 tiers
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      badge: "Early Stage",
      tag: "Monthly",
      accent: "accentTeal",
      desc: "For emerging startups, early MVP rollouts, and foundational market validation.",
      pricePrefix: "Rs",
      price: "15,000",
      period: "/ month",
      dark: false,
      popular: false,
      features: [
        "Core Social Media & Brand Positioning (12 Assets)",
        "Foundational SEO & Monthly Performance Report",
        "Web Maintenance & Minor Feature Tuning",
        "Email Support with 48h Response SLA",
      ],
      ctaText: "Get Started",
      ctaLink: "/contact?tier=starter",
    },
    {
      name: "Professional",
      badge: "Growth Scale",
      tag: "Best Value",
      accent: "accentGold",
      desc: "Full-throttle growth engine with dedicated creatives and full-stack software velocity.",
      pricePrefix: "Rs",
      price: "45,000",
      period: "/ month",
      dark: true,
      popular: true,
      features: [
        "Full Performance Ads Management (Meta, Google, TikTok)",
        "Bi-weekly Cinema Video Production & Studio Podcast",
        "Custom Feature Engineering Sprint (Web/Mobile App)",
        "Conversion Rate Optimization & User Funnel Audits",
        "Direct Slack Channel with Dedicated Architect",
      ],
      ctaText: "Choose Professional",
      ctaLink: "/contact?tier=professional",
    },
    {
      name: "Enterprise",
      badge: "Corporates & Ecosystems",
      tag: "Tailored SLA",
      accent: "accentGreen",
      desc: "For established health networks, financial institutions, and multi-tier conglomerates.",
      price: "Bespoke",
      period: "/ Custom Scope",
      dark: false,
      popular: false,
      features: [
        "Dedicated Cross-Functional Pod (Engineer, Designer, Strategist)",
        "HIPAA / Banking Grade Infrastructure & Security Audits",
        "Custom Machine Learning & Automated Pipeline Integration",
        "24/7 Incident Escalation & 99.99% Availability Guarantee",
      ],
      ctaText: "Contact Us",
      ctaLink: "/contact?tier=enterprise",
    },
  ];

  // 4. Industries: 6 cards
  const industries = [
    { icon: "clinical_notes", name: "Healthcare", desc: "EHR, clinics, diagnostic labs & telemedicine." },
    { icon: "shopping_bag", name: "E-Commerce", desc: "D2C, marketplace engines & local checkout." },
    { icon: "apartment", name: "Real Estate", desc: "Visual tours, property MLS & lead funnels." },
    { icon: "school", name: "Education", desc: "LMS portals, student intake & gamification." },
    { icon: "landscape", name: "Tourism", desc: "Himalayan expeditions, booking platforms & PR." },
    { icon: "broadcast_on_home", name: "Media", desc: "Broadcast networks, dynamic news feeds & audio." },
  ];

  // 5. Dark trust section: 6 checklist items
  const trustItems = [
    {
      title: "Agile & Transparent Sprints",
      desc: "Direct visibility into Git commits, linear pipelines, and bi-weekly review sessions. No black boxes.",
    },
    {
      title: "Dedicated Venture Architects",
      desc: "Senior strategic leads embedded directly into your operational rhythm, functioning as fractional executive muscle.",
    },
    {
      title: "Strict Code & Quality Standards",
      desc: "Peer-reviewed PRs, automated test harnesses, and type-safe systems that reduce production anomalies by 94%.",
    },
    {
      title: "Data-Backed Analytics",
      desc: "Real telemetry, multi-touch attribution, and clear KPI roadmaps replace subjective agency guesswork.",
    },
    {
      title: "Continuous Support",
      desc: "We don't abandon you after launch. Proactive patch cadences, security auditing, and iterative UX refactors.",
    },
    {
      title: "Deep Regional Insights",
      desc: "Grounded local knowledge across payment behaviors, cultural nuances, and logistical intricacies across Nepal.",
    },
  ];

  return (
    <div className={styles.servicesPage}>
      {/* 1. HERO */}
      <Hero
        centered
        title={
          <>
            Services that drive{" "}
            <span className="gradient-text">measurable growth</span>
          </>
        }
        lede="Comprehensive digital strategy, creative content production, and enterprise software engineering tailored for bold enterprises navigating rapid market shifts."
      >
        <div className={styles.metricsGrid}>
          {metrics.map((metric, idx) => (
            <div key={idx} className={styles.metricCard}>
              <span className={`${styles.metricValue} ${styles[metric.accent]}`}>
                {metric.value}
              </span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      </Hero>

      {/* 2. SERVICE PILLARS (3 rows) */}
      <section className={styles.pillarsSection} data-reveal>
        <div className="container">
          <div className={styles.pillarsList}>
            {servicePillars.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`${styles.pillarRow} ${styles[pillar.accent]}`}
              >
                {/* Lead Narrative Panel */}
                <div className={styles.pillarLead}>
                  <div>
                    <div className={styles.pillarIconBox}>
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {pillar.icon}
                      </span>
                    </div>
                    <span className={styles.pillarEyebrow}>{pillar.eyebrow}</span>
                    <h2 className={styles.pillarTitle}>{pillar.title}</h2>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                  <div className={styles.pillarHighlight}>
                    <div className={styles.highlightText}>
                      <span className={styles.highlightTitle}>
                        {pillar.highlight.title}
                      </span>
                      <span className={styles.highlightSub}>
                        {pillar.highlight.sub}
                      </span>
                    </div>
                    <span className="material-symbols-outlined">
                      {pillar.highlight.icon}
                    </span>
                  </div>
                </div>

                {/* 4-item Sub-Services Grid */}
                <div className={styles.subServicesGrid}>
                  {pillar.subServices.map((sub) => (
                    <div
                      key={sub.index}
                      id={sub.id}
                      className={styles.subServiceCard}
                    >
                      <div className={styles.subTop}>
                        <span className="material-symbols-outlined">
                          {sub.icon}
                        </span>
                        <span className={styles.subIndex}>{sub.index}</span>
                      </div>
                      <h3 className={styles.subTitle}>{sub.title}</h3>
                      <p className={styles.subDesc}>{sub.desc}</p>
                      <span className={styles.subLink}>
                        {sub.link} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRICING SECTION (3 tiers) */}
      <section id="pricing" className={styles.pricingSection} data-reveal>
        <div className="container">
          <div className={styles.sectionHeadCenter}>
            <span className={styles.sectionEyebrowGold}>
              Transparent Engagement Models
            </span>
            <h2 className={styles.sectionTitle}>
              Predictable Investment, Calibrated Output
            </h2>
            <p className="lede">
              No opaque retainers. Choose an agility tier designed to deliver
              high velocity and tangible commercial outcomes.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.pricingCard} ${
                  tier.dark ? styles.pricingCardDark : ""
                }`}
              >
                {tier.popular && (
                  <span className={styles.popularBadge}>Most Popular</span>
                )}

                <div className={styles.tierTopRow}>
                  <span
                    className={`${styles.tierEyebrow} ${styles[tier.accent]}`}
                  >
                    {tier.badge}
                  </span>
                  <span
                    className={
                      tier.dark ? styles.tierTagDark : styles.tierTag
                    }
                  >
                    {tier.tag}
                  </span>
                </div>

                <h3
                  className={
                    tier.dark ? styles.tierNameDark : styles.tierName
                  }
                >
                  {tier.name}
                </h3>
                <p
                  className={
                    tier.dark ? styles.tierDescDark : styles.tierDesc
                  }
                >
                  {tier.desc}
                </p>

                <div className={styles.priceBox}>
                  {tier.pricePrefix && (
                    <span className={styles.pricePrefix}>
                      {tier.pricePrefix}
                    </span>
                  )}
                  <span className={styles.priceValue}>{tier.price}</span>
                  <span className={styles.pricePeriod}>{tier.period}</span>
                </div>

                <ul className={styles.featureList}>
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className={styles.featureItem}>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaLink}
                  className={`btn ${tier.dark ? styles.ctaGold : styles.ctaLight} ${styles.pricingBtn}`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className={styles.industriesSection} data-reveal>
        <div className="container">
          <div className={styles.splitHeader}>
            <div>
              <span className={styles.sectionEyebrowTeal}>
                Sector Domain Prowess
              </span>
              <h2 className={styles.sectionTitle}>Industries We Catalyze</h2>
            </div>
            <p className="lede">
              Specialized workflows calibrated for regional operational
              challenges, regulatory hurdles, and user behavior in South Asia.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((ind) => (
              <div key={ind.name} className={styles.industryCard}>
                <div className={styles.industryIcon}>
                  <span className="material-symbols-outlined">{ind.icon}</span>
                </div>
                <h3 className={styles.industryName}>{ind.name}</h3>
                <p className={styles.industryDesc}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DARK TRUST SECTION */}
      <section className={`section-dark ${styles.trustSection}`} data-reveal>
        <div className="container">
          <div className={styles.trustHeader}>
            <div>
              <span className={styles.sectionEyebrowGold}>
                The Chautari Foundation
              </span>
              <h2 className={styles.trustTitle}>
                Engineered for reliability, audited for velocity.
              </h2>
            </div>
            <p className={styles.trustLede}>
              We operate at the nexus of Himalayan resilience and modern
              software rigor. Our partners enjoy unmatched transparency, rapid
              feedback loops, and solutions designed to endure heavy
              operational stresses.
            </p>
          </div>

          <div className={styles.trustGrid}>
            {trustItems.map((item, idx) => (
              <div key={idx} className={styles.trustCard}>
                <div className={styles.trustCardHead}>
                  <span className={styles.trustCheck}>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check
                    </span>
                  </span>
                  <h3 className={styles.trustCardTitle}>{item.title}</h3>
                </div>
                <p className={styles.trustCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className={`section ${styles.ctaSection}`} data-reveal>
        <div className="container">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow} />
            <div className={styles.ctaContent}>
              <span className={styles.ctaPill}>
                <span className="material-symbols-outlined">bolt</span>
                Ready to scale?
              </span>
              <h2 className={styles.ctaTitle}>
                Let&apos;s find the right service for you
              </h2>
              <p className={styles.ctaDesc}>
                Schedule a high-impact diagnostic session with our venture
                architects in Kathmandu. We&apos;ll map your technical
                requirements and construct an actionable implementation roadmap.
              </p>
            </div>
            <Link href="/contact" className={styles.ctaButton}>
              Book a Consultation
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
