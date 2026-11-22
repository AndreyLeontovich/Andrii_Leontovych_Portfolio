import styles from "./TechSkills.module.scss";

export function TechSkills() {
  const skills = [
    {
      id: "languages",
      title: "LANGUAGES",
      list: ["JavaScript (ES6+)", "TypeScript", "HTML", "SCSS", "CSS"],
    },
    {
      id: "frameworks",
      title: "FRAMEWORKS",
      list: ["React", "Next", "Vue"],
    },
    {
      id: "library",
      title: "LIBRARY",
      list: [
        "React Router",
        "i18next",
        "React Query",
        "Formik",
        "Material UI (MUI)",
        "Styled Components",
        "Lottie React",
        "Chart.js",
        "Stripe.js",
        "PayPal JavaScript SDK",
        "Firebase Authentication",
        "React Hot Toast",
        "dnd-kit",
        "React DnD",
        "Mapbox GL JS",
        "Swiper",
        "Socket.IO Client",
        "..."
      ],
    },
    {
      id: "tools",
      title: "TOOLS",
      list: [
        "GitLab",
        "GitHub",
        "Vite",
        "npm",
        "yarn",
        "VS Code",
        "Chrome DevTools",
      ],
    },
    {
      id: "frontend",
      title: "FRONTEND",
      list: [
        "React",
        "React Router",
        "Redux Toolkit",
        "Context API",
        "Hooks",
        "Responsive Design",
      ],
    },
    {
      id: "stateManagement",
      title: "STATE MANAGEMENT",
      list: ["Redux", "MobX", "Zustand", "redux toolkit"],
    },
    {
      id: "other",
      title: "OTHER",
      list: [
        "REST API",
        "Session Storage",
        "Fetch API",
        "Local Storage",
        "Cookies",
      ],
    },
  ];

  return (
    <div className={styles.techSkillsBlock}>
      <h1 className={styles.techSkillsTitle}>TECHNICAL SKILLS</h1>

      <div className={styles.techSkillsLine}>
        <div className={styles.techSkillsLineLogos}>
          
          <div className={styles.logo}><img src="/logos/HTML.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/CSS.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/JavaScript-logo.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/5968381.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/vscode-dark.svg" alt="" /></div>
          <div className={styles.logo}><img src="/logos/react-1.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/figma.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/PS.png" alt="" /></div>
          <div className={styles.logo}><img src="/logos/Illistrator.png" alt="" /></div>
        </div>

        <div className={styles.backLine}></div>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((category) => (
          <div
            key={category.id}
            className={`${styles.skillCategory} ${styles[category.id]}`}
          >
            <h3 className={styles.categoryTitle}>{category.title}</h3>

            <ul className={styles.skillsList}>
              {category.list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* <div className={styles.skillsInfoBlock}></div> */}
    </div>
  );
}
