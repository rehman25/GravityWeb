
'use client'
import React, { useEffect } from 'react'
import style from './cursor.module.css'
import AnimatedCursor from "react-animated-cursor"

const cursor = () => {
    //     const cursor = document.getElementById("cursor");
    //     const stalker = document.getElementById("stalker");
    //    useEffect(() => {
    //     document.addEventListener("mousemove", (event) => {
    //         const x = event.clientX;
    //         const y = event.clientY;
    //         cursor.style.transform = `translate(${x}px, ${y}px)`;
    //         stalker.style.transform = `translate(${x}px, ${y}px)`;
    //     });
    //    }, [stalker,cursor])


    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: '1px solid #e3204a96',
                    mixBlendMode: 'exclusion'
                }}
                innerStyle={{
                    backgroundColor: '#E3204A'
                }}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                  ]}
            />
        </>
    )
}

export default cursor