'use client'
import React, { useEffect, useRef, useState } from 'react'
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
            duration: 1000
        });
    }, []);
    return (
        <>
            <h5 className={`${style.h5}
                ${className}`} 
                data-aos={animation}>
                {text}
            </h5>
        </>
    )
}

export default Text