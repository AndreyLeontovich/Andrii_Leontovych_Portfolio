
import React from "react";
import styles from "./MivelloProject.module.scss";

import logo from "../../../assets/projectLogo/IMG_9595.JPG";

const features = [
  {
    number: "01",
    title: "Interactive Product Catalog",
    description:
      "Organized product listings with photos, prices, and detailed descriptions."
  },
  {
    number: "02",
    title: "Product Management",
    description:
      "Create, edit, and manage boutique products directly through Telegram."
  },
  {
    number: "03",
    title: "Bulk Import",
    description:
      "Import multiple products using ZIP archives and Excel spreadsheets."
  },
  {
    number: "04",
    title: "Automated Publishing",
    description:
      "Daily scheduled publications at 10:00 AM and 6:00 PM (Europe/Madrid)."
  },
  {
    number: "05",
    title: "Smart Publication Queue",
    description:
      "Persistent FIFO queue with status tracking and duplicate prevention."
  },
  {
    number: "06",
    title: "Flexible Publishing",
    description:
      "Publish immediately, add products to the queue, or save them as drafts."
  },
  {
    number: "07",
    title: "Role-Based Access",
    description:
      "Separate permissions for administrators and managers."
  },
  {
    number: "08",
    title: "Database & Development",
    description:
      "SQLite storage with separate DEV and production databases."
  }
];

const technologies = [
  "Node.js",
  "JavaScript",
  "grammY",
  "Telegram Bot API",
  "SQLite",
  "SQL"
];

export const MivelloProject = () => {
  return (
    <section className={styles.project}>
      <div className={styles.container}>

        {/* HERO */}
        <header className={styles.hero}>
          <div className={styles.logoWrapper}>
            <img
              src={logo}
              alt="Mivello Boutique logo"
              className={styles.logo}
            />
          </div>

          <div className={styles.version}>
            <span className={styles.statusDot}></span>
            VERSION 1.0
          </div>

          <h1 className={styles.title}>
            Mivello <span>Boutique</span>
          </h1>

          <p className={styles.subtitle}>
            Telegram E-Commerce Bot
          </p>

          <p className={styles.heroDescription}>
            A custom-built Telegram commerce platform designed
            to simplify product management, automate content
            publishing, and streamline daily boutique operations.
          </p>

          <div className={styles.tags}>
            <span>Telegram Bot Development</span>
            <span>E-Commerce Automation</span>
            <span>Backend Engineering</span>
          </div>
        </header>

        {/* OVERVIEW */}
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>01 / OVERVIEW</span>
            <h2>About the project</h2>
          </div>

          <div className={styles.overview}>
            <p>
              Mivello Boutique Bot v1.0 combines an interactive
              product catalog, administrative tools, and an
              automated publishing system into a single
              Telegram-based platform.
            </p>

            <p>
              The solution reduces repetitive administrative
              tasks and provides a structured workflow for
              managing boutique products and publications.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>02 / FEATURES</span>
            <h2>What I built</h2>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature) => (
              <article
                key={feature.number}
                className={styles.featureCard}
              >
                <span className={styles.featureNumber}>
                  {feature.number}
                </span>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* AUTOMATION */}
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>
              03 / AUTOMATION
            </span>
            <h2>Publishing workflow</h2>
          </div>

          <div className={styles.workflow}>
            <div className={styles.workflowStep}>
              <span>01</span>
              <h3>Product Import</h3>
              <p>ZIP / Excel / Telegram</p>
            </div>

            <div className={styles.workflowArrow}>→</div>

            <div className={styles.workflowStep}>
              <span>02</span>
              <h3>Publication Queue</h3>
              <p>FIFO / Persistent Storage</p>
            </div>

            <div className={styles.workflowArrow}>→</div>

            <div className={styles.workflowStep}>
              <span>03</span>
              <h3>Auto Publishing</h3>
              <p>10:00 / 18:00 Madrid</p>
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className={styles.section}>
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>
              04 / TECHNOLOGIES
            </span>
            <h2>Tech stack</h2>
          </div>

          <div className={styles.techGrid}>
            {technologies.map((technology) => (
              <div
                key={technology}
                className={styles.techItem}
              >
                {technology}
              </div>
            ))}
          </div>
        </div>

        {/* OUTCOME */}
        <div className={styles.outcome}>
          <span className={styles.sectionNumber}>
            05 / PROJECT OUTCOME
          </span>

          <h2>
            Built to automate.
            <br />
            Designed to scale.
          </h2>

          <p>
            Developed a functional first version of an
            automated Telegram commerce platform that
            simplifies product uploads, reduces repetitive
            administrative work, and establishes a scalable
            foundation for future e-commerce features.
          </p>

          <div className={styles.role}>
            <span>MY ROLE</span>
            <p>
              Full-Stack Bot Development · Backend Architecture ·
              Database Design · Telegram API Integration ·
              Workflow Automation
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
