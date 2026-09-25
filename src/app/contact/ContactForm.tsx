"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

const projectDomains = [
  "Digital Marketing",
  "Content Creation",
  "Software Engineering",
  "Physio@Home Partnership",
  "Other",
];

const budgetRanges = [
  "Under Rs 25,000",
  "Rs 25,000 – 50,000",
  "Rs 50,000+",
  "Custom Enterprise Venture",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState(projectDomains[0]);
  const [budget, setBudget] = useState(budgetRanges[0]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject: domain,
          projectType: domain,
          message,
          company,
          phone,
          budget,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(data.message);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setDomain(projectDomains[0]);
      setBudget(budgetRanges[0]);
      setMessage("");
    } catch {
      setError("Unable to reach the server. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Initiate an Engagement</h2>
        <p className={styles.formSub}>
          Fill in the framework below and our studio team will follow up
          swiftly.
        </p>
      </div>

      {success && (
        <div className={`${styles.alertBox} ${styles.alertSuccess}`}>
          <span className="material-symbols-outlined">check_circle</span>
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className={`${styles.alertBox} ${styles.alertError}`}>
          <span className="material-symbols-outlined">error</span>
          <span>{error}</span>
        </div>
      )}

      <form className={styles.formElement} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <label className={styles.fieldGroup}>
            <span className={styles.label}>
              Your Name <span className={styles.required}>*</span>
            </span>
            <input
              className={styles.inputField}
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className={styles.fieldGroup}>
            <span className={styles.label}>Company / Organization</span>
            <input
              className={styles.inputField}
              type="text"
              placeholder="e.g. Himalayan Dynamics"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.fieldGroup}>
            <span className={styles.label}>
              Corporate Email <span className={styles.required}>*</span>
            </span>
            <input
              className={styles.inputField}
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className={styles.fieldGroup}>
            <span className={styles.label}>Phone Number</span>
            <input
              className={styles.inputField}
              type="tel"
              placeholder="+977 9800000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.label}>Project Domain</span>
          <div className={styles.pillsWrapper}>
            {projectDomains.map((item) => (
              <button
                key={item}
                type="button"
                className={`${styles.projectPill} ${
                  domain === item ? styles.projectPillActive : ""
                }`}
                onClick={() => setDomain(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <label className={styles.fieldGroup}>
          <span className={styles.label}>Anticipated Budget Scope</span>
          <span className={styles.selectWrap}>
            <select
              className={styles.selectField}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined">expand_more</span>
          </span>
        </label>

        <label className={styles.fieldGroup}>
          <span className={styles.label}>
            Message or Brief Overview <span className={styles.required}>*</span>
          </span>
          <textarea
            className={styles.textareaField}
            rows={5}
            placeholder="Tell us about your goals, timeline, and how we can help..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={loading}
        >
          <span>{loading ? "Transmitting..." : "Send Message"}</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </form>
    </div>
  );
}
