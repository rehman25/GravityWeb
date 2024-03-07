import React from 'react'
import style from './button.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";


const Button = ({
    text
}) => {
    return (
        <>
            <button className={`${style.button}`}>{text} <FaLongArrowAltRight /> </button>
        </>
    )
}

export default Button