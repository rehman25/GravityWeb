'use client'
import React, { useEffect } from 'react'
import style from "./text.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Text = ({
    text,
    animation,
    className
}) => {
    useEffect(() => {
        AOS.init({
              duration: 2000
        });
    }, []);
    return (
        <>
            <h3 className={`${style.h5} ${className}`} data-aos={animation} >{text}</h3>
        </>
    )
}

export default Text