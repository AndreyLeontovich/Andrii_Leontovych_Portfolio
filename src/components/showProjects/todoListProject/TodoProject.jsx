
import React from "react";
import styles from "./TodoProject.module.scss";



const features = [
  {
    number: "01",
    title: "Firebase Authentication",
    description:
      "User registration and login with email and password using Firebase Authentication."
  },
  {
    number: "02",
    title: "Personal Task Lists",
    description:
      "Individual task lists stored in Cloud Firestore for each authenticated user."
  },
  {
    number: "03",
    title: "Task Management",
    description:
      "Create, complete, delete, and clear finished tasks through an intuitive interface."
  },
  {
    number: "04",
    title: "Smart Filtering",
    description:
      "Switch between all, active, and completed tasks."
  },
  {
    number: "05",
    title: "Progress Tracking",
    description:
      "Dynamic progress bar with completed-task statistics."
  },
  {
    number: "06",
    title: "React Context API",
    description:
      "Centralized user and task state management using React Context."
  }
];

const technologies = [
  "React",
  "JavaScript",
  "Firebase Auth",
  "Cloud Firestore",
  "React Router",
  "SCSS Modules",
  "Vite"
];

export const TodoProject = () => {
  return (
    <section className={styles.project}>
      <div className={styles.container}>

        <header className={styles.hero}>
          <div className={styles.logoWrapper}>
            <img
              src="/projectLogo/TodoList_Liquid_Glass.jpg"
              alt="TodoList project logo"
              className={styles.logo}
            />
          </div>

          <span className={styles.projectLabel}>
            PERSONAL PROJECT / WEB APPLICATION
          </span>

          <h1 className={styles.title}>
            TODO<span>LIST</span>
          </h1>

          <h2 className={styles.subtitle}>
            Task Management with Firebase Authentication
          </h2>

          <p className={styles.description}>
            A modern task management application built with
            React and Firebase, allowing users to organize
            their daily tasks, track productivity, and securely
            manage personal task lists in the cloud.
          </p>

          <div className={styles.tags}>
            <span>Frontend Development</span>
            <span>Firebase Integration</span>
            <span>State Management</span>
          </div>
        </header>

        <div className={styles.section}>
          <span className={styles.sectionNumber}>
            01 / OVERVIEW
          </span>

          <h2 className={styles.sectionTitle}>
            About the project
          </h2>

          <div className={styles.overview}>
            <p>
              TodoList is a React-based productivity application
              that combines personal task management with
              Firebase email and password authentication.
            </p>

            <p>
              User profiles and task lists are managed separately,
              while Cloud Firestore provides persistent storage
              and user-specific access to data.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <span className={styles.sectionNumber}>
            02 / FEATURES
          </span>

          <h2 className={styles.sectionTitle}>
            Key features
          </h2>

          <div className={styles.featuresGrid}>
            {features.map(feature => (
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

        <div className={styles.section}>
          <span className={styles.sectionNumber}>
            03 / ARCHITECTURE
          </span>

          <h2 className={styles.sectionTitle}>
            How it works
          </h2>

          <div className={styles.workflow}>
            <div className={styles.workflowStep}>
              <span>01</span>
              <h3>Authentication</h3>
              <p>Firebase Auth</p>
            </div>

            <div className={styles.workflowArrow}>→</div>

            <div className={styles.workflowStep}>
              <span>02</span>
              <h3>State Management</h3>
              <p>React Context API</p>
            </div>

            <div className={styles.workflowArrow}>→</div>

            <div className={styles.workflowStep}>
              <span>03</span>
              <h3>Cloud Storage</h3>
              <p>Cloud Firestore</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <span className={styles.sectionNumber}>
            04 / TECHNOLOGIES
          </span>

          <h2 className={styles.sectionTitle}>
            Tech stack
          </h2>

          <div className={styles.techGrid}>
            {technologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.outcome}>
          <span className={styles.sectionNumber}>
            05 / PROJECT OUTCOME
          </span>

          <h2>
            Organize tasks.
            <br />
            Track progress.
          </h2>

          <p>
            Developed a task management application integrating
            React with Firebase Authentication and Cloud Firestore.
            The project demonstrates component-based architecture,
            asynchronous data operations, state management,
            and user-specific cloud data storage.
          </p>

          <div className={styles.role}>
            <span>MY ROLE</span>
            <p>
              Frontend Development · React Architecture ·
              Firebase Integration · State Management ·
              UI Development
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
