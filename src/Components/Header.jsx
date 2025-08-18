"use client";

import styles from "../Styles/Header.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Use GSAP context and query the list items via ref so hashed classes don't matter
    const ctx = gsap.context(() => {
      const items = navRef.current?.querySelectorAll("li");
      gsap.from(items, {
        y: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.4,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul ref={navRef} className={styles.navLinks}>
        <li>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass={styles.active}           // use hashed classname from module
            className={styles.hoverUnderline}
          >
            About Me
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="skills"
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass={styles.active}
            className={styles.hoverUnderline}
          >
            Skills
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass={styles.active}
            className={styles.hoverUnderline}
          >
            Projects
          </ScrollLink>
        </li>

        <li className={styles.contactDiv}>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-80}
            spy
            activeClass={styles.active}
          >
            Contact Me
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};
