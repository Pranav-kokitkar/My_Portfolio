import "./header.css"

export const Header = () => {
  return (
    <nav className="navbar">

      <ul className="nav-links">
        <li>
          <a href="About me">About Me</a>
        </li>
        <li>
          <a href="skills">Skills</a>
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
      </ul>

      <div className="contact-div">
        <button>Contact Me</button>
      </div>
    </nav>
  );
};
