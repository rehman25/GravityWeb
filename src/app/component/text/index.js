'use client'
import React, { useEffect, useState } from 'react'
import style from "./text.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Text = ({
    text,
    animation,
    className
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
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
            <h5 className={`${style.h5} ${className}`} style={{ transform: `translateX(${scrollPosition}px)` }}>{text}</h5>
        </>
    )
}

export default Text