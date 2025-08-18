"use client";

import { useEffect, useRef } from "react";
import styles from "../Styles/Header.module.css";
import { gsap } from "gsap";

import "@fortawesome/fontawesome-free/css/all.min.css";

export const ScoialLinks = () => {
  const links = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const link = links.current;
      gsap.from(link, {
        x: 50,
        delay: 1.7,
        duration: 1.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={links} className={styles.rsticky}>
      <a
        href="https://github.com/Pranav-kokitkar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/pranav-kokitkar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};
