"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

const faqItems = [
  {
    question: "How does venture onboarding work?",
    answer:
      "We conduct a discovery sprint within 5 days, defining feasibility, tech architecture, and go-to-market milestones.",
  },
  {
    question: "Can we book clinical sessions online?",
    answer:
      "Yes, Physio@Home consultations can be initiated instantly via email or directly via phone booking coordinates.",
  },
  {
    question: "Do you support international clients?",
    answer:
      "Yes, we serve cross-border technology clients with asynchronous workflows across APAC, EMEA, and North America.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqCard}>
      <div className={styles.faqHeader}>
        <div>
          <span className={styles.faqEyebrow}>Support Desk</span>
          <h4 className={styles.faqTitle}>Common Queries</h4>
        </div>
        <span className="material-symbols-outlined">help</span>
      </div>

      <div className={styles.faqList}>
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
            >
              <button
                type="button"
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="material-symbols-outlined">
                  expand_more
                </span>
              </button>
              {isOpen && <p className={styles.faqAnswer}>{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
