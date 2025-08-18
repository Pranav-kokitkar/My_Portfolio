import styles from "../Styles/Footer.module.css";
import { Link as ScrollLink } from "react-scroll";

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div className={styles.lFooter}>
        <h2>Pranav K</h2>
      </div>

      <div className={styles.rFooter}>
        <div className={styles.socialLinks}>
          <h4>Social Links</h4>
          <ul>
            <li>
              <a
                href="https://github.com/Pranav-kokitkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pranav-kokitkar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:kokitkarpranav@gmail.com">Gmail</a>
            </li>
          </ul>
        </div>

        <div className={styles.quickLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <ScrollLink
                to="about"
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass={styles.active}
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
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth duration={500} offset={-80} spy>
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
