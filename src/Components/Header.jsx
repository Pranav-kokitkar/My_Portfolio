import "../Styles/Header.css";

export const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a className="hover-underline-animation left" href="About me">
            About Me
          </a>
        </li>
        <li>
          <a className="hover-underline-animation left" href="skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover-underline-animation left" href="projects">
            Projects
          </a>
        </li>
      </ul>

      <div className="contact-div">
        <button>Contact Me</button>
      </div>
    </nav>
  );
};
