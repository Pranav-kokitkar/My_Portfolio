"use client";

import "../Styles/Header.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";

export const Header = () => {
  const navlinks = useRef();

  useEffect(()=>{

    const ctx = gsap.context(()=>{
      gsap.from(".nav-links li",{
        y:-50,
        stagger: 0.3
      });
    }, navlinks);

    return ()=> ctx.revert();
  },[])
  
  return (
    <nav className="navbar">
      <ul ref={navlinks} className="nav-links">
        <li>
          <a
            to="AboutMe"
            smooth={true}
            duration={500}
            className="hover-underline-animation left"
            href="About me"
          >
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
        <li className="contact-div">
          <a>Contact Me</a>
        </li>
      </ul>

      {/* <div className="contact-div">
        <button>Contact Me</button>
      </div> */}
    </nav>
  );
};
