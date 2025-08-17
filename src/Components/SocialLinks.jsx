"use client";

import { useEffect, useRef } from "react";
import "../Styles/Header.css";
import { gsap } from "gsap";

import "@fortawesome/fontawesome-free/css/all.min.css";

export const ScoialLinks = () => {
  const links = useRef();

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      const link = links.current;
      gsap.from(link,{
        x:50,
        delay:1.7,
        duration: 1.2
      })
    });
    return () => ctx.revert();
  },[])

  return (
    <div ref={links} className="rsticky">
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-linkedin-in"></i>
      <i className="fa-brands fa-instagram"></i>
    </div>
  );
};
