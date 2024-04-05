'use client'
import React, { useState, useEffect, useRef } from 'react';
import style from "./text.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Text = ({
  text,
  animation,
  className,
  id
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headingPosition, setHeadingPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const newPosition = window.scrollY;
      setScrollPosition(newPosition);
      // Calculate heading position within the range (300 - 600)
      setHeadingPosition(Math.min(Math.max(newPosition, 0), 0));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <>
    {/* style={{ transform: `translateX(${headingPosition - 300}px)` }} */}
      <h5 className={`${style.h5} ${className}`} id={id} style={{ transform: `translateX(${scrollPosition - 100}px)` }}>{text}</h5>
    </>
  )
}

export default Text