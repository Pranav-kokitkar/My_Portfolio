"use client";

import "../Styles/Skills.css";
import skillApi from "../Api/skillsApi";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const listRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cards-container", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 60%", 
          toggleActions: "play none none reverse",
        },
      });
    }, listRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills">
      <ul ref={listRef} className="skills-container">
        {skillApi.map((curElem) => (
          <SkillsCard key={curElem.id} data={curElem} />
        ))}
      </ul>
    </section>
  );
};

const SkillsCard = ({ data }) => {
  const { name, image, knowledge, description } = data;

  return (
    <li className="cards-container">
      <div>
        <img src={image} alt={name} />
      </div>

      <div className="skill-name">
        <p>{name}</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="bar">
        <div className="fill" style={{ width: `${knowledge}%` }}></div>
      </div>
    </li>
  );
};
