
'use client'
import React, { useEffect } from 'react'
import style from './cursor.module.css'
import AnimatedCursor from "react-animated-cursor"

const cursor = () => {

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
                    mixBlendMode: 'exclusion',
                    zIndex: 9999
                }}
                innerStyle={{
                    backgroundColor: '#E3204A',
                    zIndex: 9999
                }}
            />
        </>
    )
}

export default cursor