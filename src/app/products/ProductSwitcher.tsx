"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./products.module.css";

type VentureId = "eco-marketing" | "one-content" | "physio-home";

const tabs: { id: VentureId; name: string }[] = [
  { id: "eco-marketing", name: "Eco Creative Marketing Agency" },
  { id: "one-content", name: "One Content Creation Studio" },
  { id: "physio-home", name: "Physio@Home" },
];

export default function ProductSwitcher() {
  const [activeTab, setActiveTab] = useState<VentureId>("eco-marketing");

  return (
    <div>
      {/* ── Pill Tabs ── */}
      <div className={styles.pillTabsWrap}>
        <div className={styles.pillTabsTrack} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.pillTabBtn} ${activeTab === tab.id ? styles.pillTabBtnActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* ── Panels ── */}
      <div>
        {activeTab === "eco-marketing" && <EcoMarketingPanel />}
        {activeTab === "one-content" && <OneContentPanel />}
        {activeTab === "physio-home" && <PhysioHomePanel />}
      </div>
    </div>
  );
}

/* ══════════════════════════════
   Venture 1: Eco Creative Marketing Agency
   ══════════════════════════════ */
function EcoMarketingPanel() {
  return (
    <div className={styles.venturePanel}>
      {/* LEFT */}
      <div className={styles.panelLeft}>
        <div>
          <div className={styles.panelCategoryRow}>
            <span className={styles.panelIconBox}>
              <span className="material-symbols-outlined">monitoring</span>
            </span>
            <span className={styles.panelCategoryLabel}>Growth &amp; Acquisition Engine</span>
          </div>

          <h2 className={styles.panelTitle}>Eco Creative Marketing Agency</h2>

          <p className={styles.panelDesc}>
            A performance-driven venture division engineering high-precision acquisition pipelines,
            programmatic brand narrative frameworks, and algorithm-informed multi-channel campaigns
            for fast-moving startups.
          </p>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>4.2x</span>
              <span className={styles.statLabel}>Avg ROAS</span>
            </div>
            <div className={styles.statBlock}>
              <span className={`${styles.statValue} ${styles.neutral}`}>120M+</span>
              <span className={styles.statLabel}>Impressions</span>
            </div>
            <div className={styles.statBlock}>
              <span className={`${styles.statValue} ${styles.tertiary}`}>38%</span>
              <span className={styles.statLabel}>CAC Reduction</span>
            </div>
          </div>

          {/* Tech Tags */}
          <div className={styles.techStackHeading}>Applied Technology &amp; Stack</div>
          <div className={styles.techTags}>
            <span className={styles.techTag}>Predictive Attribution</span>
            <span className={styles.techTag}>Programmatic Ads</span>
            <span className={styles.techTag}>Next.js Headless</span>
            <span className={styles.techTag}>BigQuery BI</span>
          </div>
        </div>

        <div>
          <Link href="/contact?product=eco-creative" className={styles.ventureCtaBtn}>
            <span>Visit Agency Site</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* RIGHT: Live Telemetry Dashboard */}
      <div className={styles.panelRight}>
        <div className={styles.dashPreview}>
          {/* Window Chrome */}
          <div className={styles.windowChrome}>
            <div className={styles.windowDotsGroup}>
              <span className={`${styles.windowDot} ${styles.dotRed}`} />
              <span className={`${styles.windowDot} ${styles.dotYellow}`} />
              <span className={`${styles.windowDot} ${styles.dotGreen}`} />
              <span className={styles.windowLabel}>Eco Campaign Live Telemetry</span>
            </div>
            <span className={styles.liveChip}>
              <span className={styles.livePingDot} /> Live sync
            </span>
          </div>

          {/* Metric Mini-cards */}
          <div className={styles.metricPair}>
            <div className={styles.metricCard}>
              <span className={styles.metricCardLabel}>Target Acquisition</span>
              <div>
                <span className={styles.metricCardValue}>$1.42</span>
                <span className={`${styles.metricCardChange} ${styles.changeNegative}`}>-18.4%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={`${styles.progressFill} ${styles.progressPrimary}`} style={{ width: "78%" }} />
              </div>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricCardLabel}>Conversion Velocity</span>
              <div>
                <span className={styles.metricCardValue}>9.4%</span>
                <span className={`${styles.metricCardChange} ${styles.changePositive}`}>+3.1%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={`${styles.progressFill} ${styles.progressGold}`} style={{ width: "64%" }} />
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <span className={styles.chartTitle}>Weekly Yield Trajectory</span>
              <span className={styles.chartSubtitle}>Cohort Q2</span>
            </div>
            <svg className={styles.chartSvg} viewBox="0 0 400 120" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad-eco" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 L40,85 L90,92 L140,65 L190,70 L240,40 L300,48 L350,20 L400,28 L400,120 L0,120 Z"
                fill="url(#grad-eco)"
              />
              <path
                d="M0,100 L40,85 L90,92 L140,65 L190,70 L240,40 L300,48 L350,20 L400,28"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="350" cy="20" r="4" fill="currentColor" />
            </svg>
            <div className={styles.chartLabels}>
              <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   Venture 2: One Content Creation Studio
   ══════════════════════════════ */
function OneContentPanel() {
  return (
    <div className={styles.venturePanel}>
      {/* LEFT */}
      <div className={styles.panelLeft}>
        <div>
          <div className={styles.panelCategoryRow}>
            <span className={`${styles.panelIconBox} ${styles.secondary}`}>
              <span className="material-symbols-outlined">movie_filter</span>
            </span>
            <span className={`${styles.panelCategoryLabel} ${styles.secondary}`}>Multimedia Engine &amp; Foundry</span>
          </div>

          <h2 className={styles.panelTitle}>One Content Creation Studio</h2>

          <p className={styles.panelDesc}>
            State-of-the-art production pipeline turning complex business models and Himalayan
            founder stories into high-resonance visual assets, cinematic series, and multi-format
            audio broadcast assets.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statBlock}>
              <span className={`${styles.statValue} ${styles.secondary}`}>480+</span>
              <span className={styles.statLabel}>Films Produced</span>
            </div>
            <div className={styles.statBlock}>
              <span className={`${styles.statValue} ${styles.neutral}`}>4K HDR</span>
              <span className={styles.statLabel}>Native Ingest</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>24h</span>
              <span className={styles.statLabel}>Rough-Cut SLA</span>
            </div>
          </div>

          <div className={styles.techStackHeading}>Studio Capabilities</div>
          <div className={styles.techTags}>
            <span className={styles.techTag}>Audio Acoustic Chambers</span>
            <span className={styles.techTag}>Color Grading Suite</span>
            <span className={styles.techTag}>DaVinci Resolve Pro</span>
            <span className={styles.techTag}>Motion Rigging</span>
          </div>
        </div>

        <div>
          <Link href="/contact?product=one-studio" className={styles.ventureCtaBtn}>
            <span>Explore Studio</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* RIGHT: Production Pipeline */}
      <div className={styles.panelRight}>
        <div className={styles.dashPreview}>
          {/* Pipeline Header */}
          <div className={styles.pipelineHeader}>
            <span className={styles.pipelineTitle}>
              <span className="material-symbols-outlined">tune</span>
              Post-Production Processing Pipeline
            </span>
            <span className={styles.renderBadge}>Render Node Active</span>
          </div>

          {/* File Items */}
          <div className={styles.fileItemsStack}>
            <div className={styles.fileItem}>
              <div className={styles.fileItemLeft}>
                <span className="material-symbols-outlined" style={{ color: "var(--color-primary)" }}>videocam</span>
                <div>
                  <div className={styles.fileItemTitle}>Series 04: &quot;Founding Everest Tech&quot;</div>
                  <div className={styles.fileItemMeta}>ProRes 4444 XQ • 8.4 GB</div>
                </div>
              </div>
              <span className={styles.fileStatusReady}>100% Ready</span>
            </div>

            <div className={styles.fileItem}>
              <div className={styles.fileItemLeft}>
                <span className="material-symbols-outlined" style={{ color: "var(--color-gold)" }}>mic</span>
                <div>
                  <div className={styles.fileItemTitle}>Chautari Dialogues: Ep. 18 (Master)</div>
                  <div className={styles.fileItemMeta}>FLAC 24-bit 96kHz • 620 MB</div>
                </div>
              </div>
              <div className={styles.miniProgressTrack}>
                <div className={styles.miniProgressFill} style={{ width: "72%" }} />
              </div>
            </div>

            <div className={styles.fileItem}>
              <div className={styles.fileItemLeft}>
                <span className="material-symbols-outlined" style={{ color: "var(--color-leaf-green)" }}>animation</span>
                <div>
                  <div className={styles.fileItemTitle}>3D Kinetic Typography Package</div>
                  <div className={styles.fileItemMeta}>After Effects Render • WebM / Alpha</div>
                </div>
              </div>
              <span className={styles.fileStatusQueued}>Queued</span>
            </div>
          </div>

          {/* Studio Image */}
          <div className={styles.studioImageWrap}>
            <img
              className={styles.studioImage}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6neHswf2dLiP3TQa4geoA29fJvZCwno2GrJE_Ofm3hxLIVr5dIc9Jjx3HX9LHQD0rImUltZEYkcXuxqpqvoSyTX8F3pH_jc_C_dDsEPZgXFDgANGdoRbwKSgGb-UKX9ultQBFt2gE7S6NROdJhiNwXG7OCum4wZ7NOliZRyYj8KiTQ9DXY-NNpPXoZdbah8YKBNJb_iG0hwHPgaELJ62HI4GhEqcWEd9QlohFZjaPsX4fm3Od52kU"
              alt="Digital film production studio in Kathmandu"
            />
            <div className={styles.studioImageOverlay}>
              <span className={styles.studioImageCaption}>
                <span className="material-symbols-outlined">videocam</span>
                Studio Stage A — Kathmandu Hub
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════
   Venture 3: Physio@Home
   ══════════════════════════════ */
function PhysioHomePanel() {
  return (
    <div className={styles.venturePanel}>
      {/* LEFT */}
      <div className={styles.panelLeft}>
        <div>
          <div className={styles.panelCategoryRow}>
            <span className={`${styles.panelIconBox} ${styles.tertiary}`}>
              <span className="material-symbols-outlined">medical_services</span>
            </span>
            <span className={`${styles.panelCategoryLabel} ${styles.tertiary}`}>Health-Tech Innovation</span>
          </div>

          <h2 className={styles.panelTitle}>Physio@Home</h2>

          <p className={styles.panelDesc}>
            Nepal&apos;s premier home-based clinical physiotherapy platform. Connecting certified
            specialists directly to patients recovering from orthopedic surgeries, neurological
            conditions, and mobility trauma.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statBlock}>
              <span className={`${styles.statValue} ${styles.tertiary}`}>500+</span>
              <span className={styles.statLabel}>Recovered</span>
            </div>
            <div className={styles.statBlock}>
              <span className={styles.statValue}>15+</span>
              <span className={styles.statLabel}>Top Clinicians</span>
            </div>
            <div className={styles.statBlock}>
              <span className={`${styles.statValue} ${styles.secondary}`}>99%</span>
              <span className={styles.statLabel}>Positive Score</span>
            </div>
          </div>

          <div className={styles.techStackHeading}>Platform Ecosystem</div>
          <div className={styles.techTags}>
            <span className={styles.techTag}>Encrypted Patient Records</span>
            <span className={styles.techTag}>Geo-Dispatch Routing</span>
            <span className={styles.techTag}>Range-of-Motion Tracking</span>
            <span className={styles.techTag}>Tele-Rehab Bridge</span>
          </div>
        </div>

        <div>
          <a href="#flagship-spotlight" className={styles.ventureCtaBtn}>
            <span>View Flagship Details</span>
            <span className="material-symbols-outlined">arrow_downward</span>
          </a>
        </div>
      </div>

      {/* RIGHT: Patient Session */}
      <div className={styles.panelRight}>
        <div className={styles.dashPreview}>
          {/* Session Header */}
          <div className={styles.sessionHeader}>
            <div className={styles.sessionHeaderLeft}>
              <span className={styles.sessionIndicator} />
              <span className={styles.sessionTitle}>Patient Mobile Session Active</span>
            </div>
            <span className={styles.sessionSector}>Lalitpur Sector</span>
          </div>

          {/* Therapist Card */}
          <div className={styles.therapistCard}>
            <div className={styles.therapistProfile}>
              <img
                className={styles.therapistAvatar}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJoCC6IZ3NuCcPuB5yZrJsLnRJHy-yRwZnOaJZGpLxXLu5qk9AB7esXkVFl2-7yXWEahyS4L82pEwucEFlWQy3ly5zUnEp2y1NmuFnTJ-DD_kilt6Bkd_yND_NLCEGMzGVPuk0QR76m9XLnaXZuYbG1T-CLKfuHu5XwxMXK8R_gS9-PeKU1hxKeFnKvEzJtZFhTx-6gHv7E2vC0a66zrXEd85dFbzeeSR3bxyeWlH_JGZ5gcSE3EsE"
                alt="Dr. Anisha Shrestha"
              />
              <div>
                <h3 className={styles.therapistName}>Dr. Anisha Shrestha, BPT</h3>
                <p className={styles.therapistSpecialty}>Post-Op Knee Specialist • 8 Yrs Experience</p>
              </div>
            </div>

            <div className={styles.appointmentRow}>
              <div className={styles.appointmentLeft}>
                <span className="material-symbols-outlined">schedule</span>
                <span className={styles.appointmentTime}>Today, 4:30 PM • Home Visit</span>
              </div>
              <span className={styles.enRouteBadge}>En Route</span>
            </div>
          </div>

          {/* Recovery Card */}
          <div className={styles.recoveryCard}>
            <div className={styles.recoveryHeader}>
              <span className={styles.recoveryTitle}>Gait Mobility Recovery Target</span>
              <span className={styles.recoveryPercent}>84%</span>
            </div>
            <div className={styles.recoveryProgressTrack}>
              <div className={styles.recoveryProgressFill} style={{ width: "84%" }} />
            </div>
            <div className={styles.recoveryFooter}>
              <span>Week 4 of 6 Plan</span>
              <span>12 Sessions Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
