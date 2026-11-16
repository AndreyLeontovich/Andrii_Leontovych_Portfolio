
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";

const pages = ["HOME", "SKILLS", "PROJECTS", "CONTACTS"];

export function Header() {
  const [activeBtn, setActiveBtn] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CLICK NAVIGATION

  const getBtn = (page) => {
    setActiveBtn(page);
    setIsMenuOpen(false);

    if (page === "HOME") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    document.getElementById(page)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  // SCROLL SPY

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "HOME";

      const scrollPosition = window.scrollY + 150;

      pages.forEach((page) => {
        const section = document.getElementById(page);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = page;
        }
      });

      // Проверяем достижение конца страницы

      const isBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5;

      if (isBottom && window.scrollY > 0) {
        currentSection = "CONTACTS";
      }

      setActiveBtn(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className={styles.header}>

      {/* DESKTOP MENU */}

      <nav className={styles.desktopMenu}>
        {pages.map((item) => (
          <button
            key={item}
            onClick={() => getBtn(item)}
            className={`${styles.headerBtn} ${
              activeBtn === item ? styles.headerBtnActive : ""
            }`}
          >
            {item}
          </button>
        ))}
      </nav>


      {/* MOBILE MENU */}

      <nav className={styles.mobileMenu}>
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {activeBtn}

          <span
            className={`${styles.arrow} ${
              isMenuOpen ? styles.arrowActive : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`${styles.dropdown} ${
            isMenuOpen ? styles.dropdownActive : ""
          }`}
          inert={!isMenuOpen}
        >
          {pages.map((item) => (
            <button
              key={item}
              onClick={() => getBtn(item)}
              className={`${styles.dropdownBtn} ${
                activeBtn === item ? styles.dropdownBtnActive : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

    </header>
  );
}
