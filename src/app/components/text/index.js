'use client'
import React, { useEffect } from 'react'
import style from "./text.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Text = ({
    text,
    animation
}) => {
    useEffect(() => {
        AOS.init({
              duration: 3000
        });
    }, []);
    return (
        <>
            <h5 className={`${style.h5}`} data-aos={animation} >{text}</h5>
        </>
    )
}

export default Text