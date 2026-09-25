import React from "react";
import Hero from "@/components/Hero";
import ContactForm from "./ContactForm";
import FaqAccordion from "./FaqAccordion";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | Digital Chautari",
  description:
    "Let's start a conversation. Reach out to our digital marketing, studio content, or software teams in Kathmandu, Nepal.",
};

export default function ContactPage() {
  // 1. Studio coordinates: HQ, Email, Phone, Hours
  const coordinates = [
    {
      icon: "location_city",
      accent: "coordTeal",
      label: "Headquarters",
      value: "Kathmandu",
      subtext: "Bagmati Province, Nepal",
      href: undefined,
    },
    {
      icon: "alternate_email",
      accent: "coordTeal",
      label: "Primary Email",
      value: "hello@digitalchautari.com",
      subtext: "General studio inquiries",
      href: "mailto:hello@digitalchautari.com",
    },
    {
      icon: "call",
      accent: "coordGold",
      label: "Telephone",
      value: "+977 1-4XXXXXX",
      subtext: "+977 98XXXXXXXX (Direct line)",
      href: undefined,
    },
    {
      icon: "schedule",
      accent: "coordGreen",
      label: "Studio Hours",
      value: "Sun – Fri, 9AM – 6PM",
      subtext: "Nepal Time (UTC+5:45)",
      href: undefined,
    },
  ];

  // 2. Direct channels: 4 department inboxes
  const channels = [
    {
      dot: "dotTeal",
      accent: "linkTeal",
      eyebrow: "New Business",
      title: "Venture Partnerships",
      desc: "Strategic alliances, incubation, and co-development programs.",
      email: "partnerships@digitalchautari.com",
    },
    {
      dot: "dotGreen",
      accent: "linkGreen",
      eyebrow: "Sustainable Design",
      title: "Eco Creative",
      desc: "Brand identity systems, low-carbon digital design, and climate tech.",
      email: "eco@digitalchautari.com",
    },
    {
      dot: "dotGold",
      accent: "linkGold",
      eyebrow: "Production",
      title: "One Content Studio",
      desc: "Visual storytelling, documentary media, and brand campaigns.",
      email: "studio@digitalchautari.com",
    },
    {
      dot: "dotContainer",
      accent: "linkTeal",
      eyebrow: "Health-Tech",
      title: "Physio@Home Clinical",
      desc: "Patient bookings, tele-rehab partnerships, and clinic integration.",
      email: "care@physioathome.com",
    },
  ];

  return (
    <div className={styles.contactPage}>
      {/* 1. HERO */}
      <Hero
        title={
          <>
            Let&apos;s start a{" "}
            <span className="gradient-text">conversation</span>
          </>
        }
        lede="Have a project in mind, want to partner with our ventures, or curious about Physio@Home? We'd love to hear from you."
      />

      {/* 2. PRIMARY STUDIO COORDINATES */}
      <section className={styles.coordinatesSection} data-reveal>
        <div className="container">
          <div className={styles.coordinatesGrid}>
            {coordinates.map((card, idx) => (
              <div key={idx} className={styles.coordinateCard}>
                <div className={`${styles.coordIcon} ${styles[card.accent]}`}>
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <span className={styles.coordLabel}>{card.label}</span>
                {card.href ? (
                  <a href={card.href} className={styles.coordValueLink}>
                    {card.value}
                  </a>
                ) : (
                  <span className={styles.coordValue}>{card.value}</span>
                )}
                <span className={styles.coordSubtext}>{card.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEPARTMENT DIRECTORY */}
      <section className={`section-tight ${styles.channelsSection}`} data-reveal>
        <div className="container">
          <div className={styles.channelsHeader}>
            <div>
              <h2 className={styles.channelsTitle}>Direct Channels</h2>
              <p className={styles.channelsSub}>
                Route your request directly to the responsible team lead.
              </p>
            </div>
            <span className={styles.channelsHint}>
              <span>Specialized Inboxes</span>
              <span className="material-symbols-outlined">arrow_downward</span>
            </span>
          </div>

          <div className={styles.channelsGrid}>
            {channels.map((ch, idx) => (
              <div key={idx} className={styles.channelCard}>
                <div>
                  <div className={styles.channelTop}>
                    <span
                      className={`${styles.channelDot} ${styles[ch.dot]}`}
                    />
                    <span className={styles.channelEyebrow}>{ch.eyebrow}</span>
                  </div>
                  <h3 className={styles.channelTitle}>{ch.title}</h3>
                  <p className={styles.channelDesc}>{ch.desc}</p>
                </div>
                <a
                  href={`mailto:${ch.email}`}
                  className={`${styles.channelLink} ${styles[ch.accent]}`}
                >
                  <span>{ch.email}</span>
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORM & CONTEXT SPLIT PANEL */}
      <section className="section" data-reveal>
        <div className="container">
          <div className={styles.splitPanel}>
            {/* Interactive Form (7 Columns) */}
            <div className={styles.formCol}>
              <ContactForm />
            </div>

            {/* Right Side Supporting Panel (5 Columns) */}
            <div className={styles.sidebarCol}>
              {/* Kathmandu Map Card */}
              <div className={styles.mapCard}>
                <div className={styles.mapHeader}>
                  <div className={styles.mapHeaderLeft}>
                    <span className="material-symbols-outlined">
                      pin_drop
                    </span>
                    <h4 className={styles.mapTitle}>Kathmandu Studio Base</h4>
                  </div>
                  <span className={styles.mapCoords}>
                    27.7172° N, 85.3240° E
                  </span>
                </div>
                <div
                  className={styles.mapVisual}
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpCobCn02sIyGjPzdhYHmnahETMyddEgL3ye-DXU6Dphddv3_vFrEe8SN6pO5u5Bi9iNyiaDShqDZVizasOe5dAYTzq0CxhtJ9Uij2VpHU_g1IHS6F3NDocwpahU_EcNTwV0nde99ZG5YRx4mFxpw__bueh7POUiySFQ-vUTAqOEJNpchVSndLTG0Z6XIdRsK0McaZjcC2q1szIrRxX5_EsEal9fGAx0HCuy5_jurFnuG8K6Cj5y0T')",
                  }}
                >
                  <div className={styles.mapOverlay} />
                  <div className={styles.mapMarker}>
                    <span className={styles.mapPing} />
                    <span className={styles.mapMarkerLabel}>
                      Kathmandu Valley Hub
                    </span>
                  </div>
                </div>
                <div className={styles.mapFooter}>
                  <span>Bagmati Province Innovation Corridor</span>
                  <a
                    className={styles.mapOpenLink}
                    href="https://www.google.com/maps/search/?api=1&query=27.7172,85.3240"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Open in maps</span>
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>
                </div>
              </div>

              {/* Service SLA Commitment Card */}
              <div className={styles.slaCard}>
                <div className={styles.slaGlow} />
                <div className={styles.slaTop}>
                  <div className={styles.slaIconBox}>
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div>
                    <h4 className={styles.slaTitle}>Our SLA Pledge</h4>
                    <p className={styles.slaDesc}>
                      Guaranteed response within 24 hours on business days.
                      Every request is reviewed directly by a venture partner.
                    </p>
                    <div className={styles.slaBadges}>
                      <span className={styles.slaBadge}>
                        <span className="material-symbols-outlined">bolt</span>
                        Priority intake
                      </span>
                      <span className={styles.slaBadge}>
                        <span className="material-symbols-outlined">lock</span>
                        Strict NDA compliance
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ Access Card */}
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
