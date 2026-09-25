import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us | Digital Chautari",
  description:
    "The people behind Digital Chautari: our story, mission, core values, leadership team, and innovation roadmap in Kathmandu, Nepal.",
};

interface StatTile {
  icon: string;
  category: string;
  value: string;
  label: string;
  theme: "tileTeal" | "tileGold" | "tileNavy" | "tileGreen";
}

interface TeamRole {
  role: string;
  badge: string;
  icon: string;
  accent: "accentTeal" | "accentGold" | "accentGreen";
  dept?: string;
  bio: string;
  focus?: string;
  featured?: boolean;
}

interface Milestone {
  year: string;
  title: string;
  desc: string;
  align: "left" | "right";
}

export default function AboutPage() {
  // 1. Hero micro-badges
  const heroBadges = [
    { icon: "nature_people", label: "Rooted in Kathmandu", accent: "badgeTeal" },
    { icon: "architecture", label: "Venture Architecture", accent: "badgeGold" },
    { icon: "deployed_code", label: "Autonomous Ecosystem", accent: "badgeGreen" },
  ];

  // 2. Story stat tiles (2x2)
  const storyTiles: StatTile[] = [
    { icon: "flag", category: "Genesis", value: "2025", label: "Year Founded", theme: "tileTeal" },
    { icon: "layers", category: "Ecosystem", value: "3", label: "Proprietary Products", theme: "tileGold" },
    { icon: "near_me", category: "Base", value: "Kathmandu", label: "Global HQ", theme: "tileNavy" },
    { icon: "groups", category: "Talent", value: "7+", label: "Core Team Members", theme: "tileGreen" },
  ];

  // 3. Mission & Vision cards
  const missionVision = [
    {
      type: "Our Mission",
      icon: "track_changes",
      accent: "barTeal",
      iconTheme: "mvIconTeal",
      body: "To build, nurture, and scale high-impact ventures that demystify complex technologies, democratize health access, and deliver sovereign digital products engineered with authentic craftsmanship.",
    },
    {
      type: "Our Vision",
      icon: "visibility",
      accent: "barGold",
      iconTheme: "mvIconGold",
      body: "To turn Nepal into a recognized hub for thoughtful venture architecture—where localized cultural wisdom interfaces seamlessly with resilient software to solve critical regional and planetary needs.",
    },
  ];

  // 4. Core values: 4 cards
  const coreValues = [
    {
      title: "Passion",
      icon: "local_fire_department",
      iconTheme: "valueTeal",
      desc: "Fueling a relentless pursuit of creative breakthroughs that defy ordinary constraints and inspire real change.",
    },
    {
      title: "Creativity",
      icon: "palette",
      iconTheme: "valueGold",
      desc: "Defying cookie-cutter patterns with distinctive visual identities, bespoke frameworks, and authentic storytelling.",
    },
    {
      title: "Excellence",
      icon: "verified",
      iconTheme: "valueGreen",
      desc: "Clean and documented code, bulletproof systems architecture, and relentless tracking of measurable impact.",
    },
    {
      title: "Collaboration",
      icon: "diversity_3",
      iconTheme: "valueMint",
      desc: "True open chautari-style partnership with founders, stakeholders, and community contributors at every tier.",
    },
  ];

  // 5. Trust banner badges
  const trustBadges = [
    { icon: "verified_user", label: "HIPAA-aligned Practices", accent: "iconTeal" },
    { icon: "speed", label: "Sub-100ms Microservices", accent: "iconGold" },
    { icon: "code", label: "100% Type-Safe Stacks", accent: "iconGreen" },
  ];

  // 6. Team roles: 7 cards (first featured)
  const teamRoles: TeamRole[] = [
    {
      role: "Founder & CEO",
      badge: "Executive Leadership",
      icon: "hub",
      accent: "accentTeal",
      dept: "Venture Architecture & Ecosystem Strategy",
      bio: "Spearheads vision, strategic investor alignment, and incubator direction across all three sovereign portfolio initiatives with a firm commitment to Himalayan innovation.",
      featured: true,
    },
    {
      role: "Chief Technology Officer",
      badge: "Architecture",
      icon: "terminal",
      accent: "accentTeal",
      bio: "Leads core engineering roadmaps, distributed cloud topology, security postures, and enterprise integrations.",
      focus: "Focus: Cloud Native & Resiliency",
    },
    {
      role: "Head of Product & Design",
      badge: "Design System",
      icon: "brush",
      accent: "accentGold",
      bio: "Shapes human-centered UX design language, design tokens, micro-interactions, and frictionless client onboardings.",
      focus: "Focus: UI Accessibility & Ergonomics",
    },
    {
      role: "Lead Creative Strategist",
      badge: "Storytelling",
      icon: "campaign",
      accent: "accentGreen",
      bio: "Drives narrative development for One Content Studio and crafts targeted organic growth trajectories for partners.",
      focus: "Focus: Multi-Channel Impact",
    },
    {
      role: "Senior Full-Stack Engineer",
      badge: "Execution",
      icon: "integration_instructions",
      accent: "accentTeal",
      bio: "Maintains responsive client web experiences, database schemas, and seamless continuous delivery pipelines.",
      focus: "Focus: TypeScript & NextJS Performance",
    },
    {
      role: "Health-Tech Clinical Lead",
      badge: "Physio@Home",
      icon: "medical_services",
      accent: "accentTeal",
      bio: "Directs remote clinical protocols, home-rehabilitation efficacy, and therapist certification workflows.",
      focus: "Focus: Care Compliance & Patient Safety",
    },
    {
      role: "Business Development Officer",
      badge: "Expansion",
      icon: "handshake",
      accent: "accentGold",
      bio: "Forges commercial alliances, client pipelines, and cross-border collaborative models with diaspora enterprises.",
      focus: "Focus: Market Penetration & Partnerships",
    },
  ];

  // 7. Roadmap milestones: 4 items
  const milestones: Milestone[] = [
    {
      year: "2024",
      title: "The Idea",
      desc: "Conceiving a unified digital studio and venture firm in Kathmandu. Establishing initial proofs-of-concept and cultural tenets rooted in collective community gathering.",
      align: "left",
    },
    {
      year: "Early 2025",
      title: "First Products",
      desc: "Launch of Eco Creative and One Content Studio. Operationalizing high-velocity brand design services alongside dedicated engineering pods for startup clients.",
      align: "right",
    },
    {
      year: "Mid 2025",
      title: "Health-Tech Entry",
      desc: "Closed-beta launch of Physio@Home platform. Direct deployment to 100+ home-based rehabilitation cases across the Kathmandu valley with automated clinical scheduling.",
      align: "left",
    },
    {
      year: "Late 2025 & Beyond",
      title: "Company Registration & Regional Scale",
      desc: "Institutional venture registration, cross-border client scaling in APAC & Europe, and releasing specialized SaaS tools tailored to emergent South Asian creator ecosystems.",
      align: "right",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* 1. HERO */}
      <Hero
        centered
        title={
          <>
            The people behind{" "}
            <span className="gradient-text">Digital Chautari</span>
          </>
        }
        lede="Inspired by the Nepali tradition of the ‘Chautari’—a communal resting tree where people gather, connect, and converse—we build modern spaces where technology, design, and audacious ideas foster human progress."
      >
        <div className={styles.microBadges}>
          {heroBadges.map((badge, idx) => (
            <span key={idx} className={`${styles.microBadge} ${styles[badge.accent]}`}>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {badge.icon}
              </span>
              {badge.label}
            </span>
          ))}
        </div>
      </Hero>

      {/* 2. STORY & STAT TILES */}
      <section className={`section ${styles.storySection}`} data-reveal>
        <div className="container">
          <div className={styles.storyGrid}>
            {/* Left Narrative Card */}
            <div className={styles.narrativeCard}>
              <div>
                <div className={styles.narrativeEyebrow}>
                  <span className="material-symbols-outlined">park</span>
                  <span className={styles.narrativeEyebrowText}>
                    Origin &amp; Ethos
                  </span>
                </div>
                <h2 className={styles.narrativeTitle}>
                  Reinventing the communal banyan for digital frontiers.
                </h2>
                <p className={styles.narrativePara}>
                  For generations across Nepal, weary travelers and village
                  thinkers congregated underneath sprawling banyan trees built
                  upon raised stone platforms: the{" "}
                  <em className={styles.narrativeEm}>Chautari</em>. It was a
                  catalyst for civic discourse, resource sharing, and honest
                  collaboration.
                </p>
                <p className={styles.narrativePara}>
                  Digital Chautari was created to bridge that profound cultural
                  impulse with rigorous venture architecture. We do not operate
                  as an isolated outsourcer. Instead, we assemble cohesive
                  multidisciplinary pods spanning clinical healthcare, creative
                  direction, and distributed engineering—incubating sovereign
                  products while engineering scalable platforms for global
                  partners.
                </p>
              </div>
              <div className={styles.narrativeQuote}>
                <div className={styles.quoteIconWrap}>
                  <span className="material-symbols-outlined">lightbulb</span>
                </div>
                <p className={styles.quoteText}>
                  “We gauge success not by mere lines of code, but by civic
                  resonance, durability under real friction, and measurable
                  equity.”
                </p>
              </div>
            </div>

            {/* Right 2x2 Stat Tiles */}
            <div className={styles.tilesGrid}>
              {storyTiles.map((tile, idx) => (
                <div key={idx} className={`${styles.statTile} ${styles[tile.theme]}`}>
                  <div className={styles.tileTopRow}>
                    <div className={styles.tileIconBox}>
                      <span className="material-symbols-outlined">{tile.icon}</span>
                    </div>
                    <span className={styles.tileCategory}>{tile.category}</span>
                  </div>
                  <div className={styles.tileBottom}>
                    <span
                      className={`${styles.tileValue} ${
                        tile.value.length > 6 ? styles.tileValueSmall : ""
                      }`}
                    >
                      {tile.value}
                    </span>
                    <span className={styles.tileLabel}>{tile.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & VALUES */}
      <section className={styles.mvvSection} data-reveal>
        <div className="container">
          <div className={styles.mvvSectionHeader}>
            <span className={styles.sectionEyebrow}>Our North Star</span>
            <h2 className={styles.sectionTitle}>
              Guiding purpose &amp; collective values
            </h2>
            <p className={styles.sectionSub}>
              We balance philosophical humility with unyielding technical
              execution.
            </p>
          </div>

          {/* Mission & Vision Side-by-Side */}
          <div className={styles.mvPair}>
            {missionVision.map((mv, idx) => (
              <div key={idx} className={styles.mvCard}>
                <div className={`${styles.mvAccentBar} ${styles[mv.accent]}`} />
                <div className={styles.mvIconRow}>
                  <div className={`${styles.mvIconBox} ${styles[mv.iconTheme]}`}>
                    <span className="material-symbols-outlined">{mv.icon}</span>
                  </div>
                  <h3 className={styles.mvCardType}>{mv.type}</h3>
                </div>
                <p className={styles.mvCardBody}>{mv.body}</p>
              </div>
            ))}
          </div>

          {/* 4 Core Value Cards */}
          <div className={styles.valuesGrid}>
            {coreValues.map((val, idx) => (
              <div key={idx} className={styles.valueCard}>
                <div className={`${styles.valueIconBox} ${styles[val.iconTheme]}`}>
                  <span className="material-symbols-outlined">{val.icon}</span>
                </div>
                <h4 className={styles.valueTitle}>{val.title}</h4>
                <p className={styles.valueDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRUST BANNER & TEAM */}
      <section id="team" className={`section ${styles.teamSection}`} data-reveal>
        <div className="container">
          {/* Dark Quality & Trust Banner */}
          <div className={styles.trustBanner}>
            <div className={styles.trustGlow} />
            <div className={styles.trustContent}>
              <span className={styles.trustEyebrow}>
                Venture Standards &amp; Quality
              </span>
              <h2 className={styles.trustTitle}>
                Engineered with institutional rigor, executed with studio
                intimacy.
              </h2>
              <p className={styles.trustDesc}>
                Every venture launched under the Digital Chautari umbrella
                conforms to rigorous clinical benchmarks, end-to-end telemetry,
                and modern data security conventions. We honor the trust placed
                in our solutions by hundreds of daily clinical users and
                enterprise collaborators.
              </p>
              <div className={styles.trustBadges}>
                {trustBadges.map((badge, idx) => (
                  <span key={idx} className={styles.trustBadgeItem}>
                    <span className={`material-symbols-outlined ${styles[badge.accent]}`}>
                      {badge.icon}
                    </span>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Team Header */}
          <div className={styles.teamHeaderRow}>
            <div>
              <span className={styles.teamEyebrow}>Our Stewards</span>
              <h2 className={styles.teamSectionTitle}>The Core Team</h2>
            </div>
            <p className={styles.teamHeaderRight}>
              A dedicated crew uniting medical practitioners, brand architects,
              and full-stack software artisans based in Nepal.
            </p>
          </div>

          {/* 7 Team Role Cards */}
          <div className={styles.teamGrid}>
            {teamRoles.map((member, idx) =>
              member.featured ? (
                <div key={idx} className={styles.teamCardFeatured}>
                  <div className={styles.featuredImageWrap}>
                    <img
                      alt="Founder and CEO"
                      className={styles.featuredImage}
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_vYAsMlAP4ygn393bSAtgDIRuAkK397E7plHgEPPfnLp3HQgFiBOLix1c_hDLu0ggnIEa9nFHdDxLLjDZ8fTWATD63loqNEsGCGyxRPlbM6qSqWxbBVcHULeLYXW5KY9cJ5KoKeHKuij_M-vkUMKA6eoSlOahyUknK3ABJYsLyCREx0sC9maEX83uYgAy1uSKCZZ7mkbCMfJ9tO-V5DuF5_epcX91YdNylHWbNRZ9o90L9I2nmLE"
                    />
                  </div>
                  <div className={styles.featuredInfo}>
                    <span className={styles.featuredBadge}>{member.badge}</span>
                    <h3 className={styles.featuredRole}>{member.role}</h3>
                    <p className={styles.featuredDept}>{member.dept}</p>
                    <p className={styles.featuredBio}>{member.bio}</p>
                    <div className={styles.featuredLocation}>
                      <span className={styles.featuredLocationIcon}>
                        <span className="material-symbols-outlined">
                          {member.icon}
                        </span>
                      </span>
                      <span className={styles.featuredLocationText}>
                        Kathmandu Studio Base
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={idx} className={styles.teamCard}>
                  <div>
                    <div className={`${styles.teamCardIconBox} ${styles[member.accent]}`}>
                      <span className="material-symbols-outlined">
                        {member.icon}
                      </span>
                    </div>
                    <span className={styles.teamCardDeptBadge}>
                      {member.badge}
                    </span>
                    <h3 className={styles.teamCardRole}>{member.role}</h3>
                    <p className={styles.teamCardBio}>{member.bio}</p>
                  </div>
                  <div className={styles.teamCardFocus}>
                    <span className={styles.teamCardFocusLabel}>
                      {member.focus}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 5. DARK ROADMAP */}
      <section className={styles.roadmapSection} data-reveal>
        <div className={styles.roadmapGlow} />
        <div className={`container ${styles.roadmapInner}`}>
          <div className={styles.roadmapHeader}>
            <span className={styles.roadmapEyebrow}>
              Our Journey &amp; Trajectory
            </span>
            <h2 className={styles.roadmapTitle}>Milestones toward scale</h2>
            <p className={styles.roadmapSub}>
              From an initial brainstorming session in Lalitpur to a unified
              multi-venture platform.
            </p>
          </div>

          {/* Alternating Timeline */}
          <div className={styles.timeline}>
            <div className={styles.timelineSpine} />
            <div className={styles.timelineItems}>
              {milestones.map((ms, idx) => (
                <div
                  key={idx}
                  className={`${styles.timelineItem} ${
                    ms.align === "left" ? styles.timelineItemLeft : styles.timelineItemRight
                  }`}
                >
                  <div className={styles.timelineDot}>
                    <div className={styles.timelineDotInner} />
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineYearPill}>{ms.year}</span>
                    <h3 className={styles.timelineMilestoneTitle}>{ms.title}</h3>
                    <p className={styles.timelineMilestoneDesc}>{ms.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trajectory Callout */}
          <div id="careers" className={styles.roadmapCta}>
            <h4 className={styles.roadmapCtaTitle}>
              Want to build under our Chautari?
            </h4>
            <p className={styles.roadmapCtaDesc}>
              We are always eager to converse with engineers, clinical
              researchers, and founders building for lasting collective value.
            </p>
            <Link href="/contact" className={styles.roadmapCtaBtn}>
              Join the Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
