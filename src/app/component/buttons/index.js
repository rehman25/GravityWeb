import React from 'react'
import style from './button.module.css'
import { FaLongArrowAltRight } from "react-icons/fa";


const Button = ({
    text,
    id
}) => {
    return (
        <>
            <button className={`${style.button}`} id={id}>{text} <FaLongArrowAltRight /> </button>
        </>
    )
}

export default Button