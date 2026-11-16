
import styles from "./Footer.module.scss";
import React from 'react'

export const Footer = () => {
  return (
    <footer className={styles.footerBlock}>
        <div className={styles.footerLine}></div>

        <p>All Right Reserved</p>
        <p>Design creation, software development written by the author of this site<br/>Sincerely Andrii Leontovych</p>
    </footer>
  )
}
