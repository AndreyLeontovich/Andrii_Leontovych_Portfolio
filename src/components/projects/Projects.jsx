import { NavLink } from "react-router";
import styles from "./Projects.module.scss";
import React from "react";

export const projects = [
  {
    id: 1,
    title: "Mivello Bot",
    image: "../../../src/assets/projectLogo/IMG_9595.JPG",
    link: "/mivello",
  },
  {
    id: 2,
    title: "TodoList — Firebase",
    image: "../../../src/assets/projectLogo/TodoList_Liquid_Glass.jpg",
    link: "/todoList",
    external: false,
  },
  {
    id: 3,
    title: "NEONIX",
    image: "./../src/assets/images/5p.jpg",
    link: "https://example.com/project-3",
  },
  {
    id: 4,
    title: "Possession",
    image: "./../src/assets/images/2p.jpg",
    link: "https://example.com/project-4",
  },
  {
    id: 5,
    title: "Dashboard",
    image: "./../src/assets/images/1p.jpg",
    link: "https://example.com/project-5",
  },
];

export const Projects = () => {
  return (
    <div className={styles.projectsBlock}>
      <h1 className={styles.projectsTitle}>PROJECTS</h1>
      <p className={styles.projectsDesc}>
        Unique and sophisticated design, various functionality creates a
        creative product for mass use
      </p>

      <div className={styles.projectsItemsBlock}>
        {projects.map((project) => {
          return (
            <NavLink
            key={project.id}
            to={project.link}
            className={styles.block}
          >
            <img
              src={project.image}
              alt={project.title}
            />

            <div className={styles.blockBehind}>
              <h3 className={styles.blockTextBehind}>
                {project.title}
              </h3>

              <h4 className={styles.blockLinkBehind}>
                Open for view
              </h4>
            </div>
          </NavLink>
          );
        })}
        {/* <a href="https://www.wikipedia.org" className={styles.block}>
                <img src="./../src/assets/images/1p.jpg" alt="" />
                <div className={styles.blockBehind}>
                    <h3 className={styles.blockTextBehind}>Sale moto<br/>Frontend side</h3>
                    <h4 className={styles.blockLinkBehind}>Open for view</h4>
                    
                </div>
            </a> */}
      </div>
    </div>
  );
};
