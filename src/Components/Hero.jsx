"use client";

import { useEffect } from "react";
import "../Styles/Hero.css";
import { gsap } from "gsap";

export const Hero = () => {

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.from(".hero-content",{
        x:-650,
        delay:0.5,
        opacity:0.3,
        duration:1.5
      })
    })
    return () => ctx.revert();
  })
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Hi, I'm Pranav</h1>
        <p>Frontend Developer / Game Developer</p>
        <button>View My Work</button>
      </div>
    </div>
  );
};
