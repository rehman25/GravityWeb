'use client'
import React, { useState } from 'react'
import styles from './components.module.css'
import OOP from '../../../assets/images/webdev/oop.webp'
import { MdArrowOutward } from "react-icons/md";
import Image from 'next/image';



const components = () => {


    const [active, setActive] = useState(false)
    const [isPhp, setPhp] = useState(false)
    const [isLaravel, setLaravel] = useState(false)
    const [isWordpress, setWordpress] = useState(false)
    const [CMS, setCMS] = useState(false)
    const [isWhatsapp, setWhatsapp] = useState(false)
    const [isWorpressChild, setisWorpressChild] = useState(false)
    const [isCTD , setCTD] = useState(false)
    const [isPI , setPI] = useState(false)
    const [isPO, setPO] = useState(false)
    const [isSI, setSI] = useState(false)
    const [isOOP, setOOP] = useState(false)
    const [isDB , setDB] = useState(false)
    const [isAD , setAD] = useState(false)
    const [isFx, setFx] = useState(false)
    const [isCMD , setCMD] = useState(false)
    const [isURM , setURM] = useState(false)
    const [isRD , setRD] = useState(false)
    const [isWA , setWA] = useState(false)
    const [isMA , setMA] = useState(false)
    const [isEO , setEO] = useState(false)
    const [isRAD, setRAD] = useState(false)
    const [isSP , setSP] = useState(false)


    const HandleMouseLeave = () =>{
        setCTD(false)
        setPI(false)
        setPO(false)
        setSI(false)
        setOOP(false)
        setDB(false)
        setAD(false)
        setFx(false)
        setCMD(false)
        setURM(false)
        setRD(false)
        setWA(false)
        setMA(false)
        setEO(false)
        setRAD(false)
        setSP(false)
    }

    const handleMA = () => {
        setMA(true)
        setEO(false)
        setRAD(false)
        setSP(false)
    }
    const handleEO = () => {
        setMA(false)
        setEO(true)
        setRAD(false)
        setSP(false)
    }
    const handleRAD = () => {
        setMA(false)
        setEO(false)
        setRAD(true)
        setSP(false)
    }
    const handleSP = () => {
        setMA(false)
        setEO(false)
        setRAD(false)
        setSP(true)
    }

    const handleCMD = () => {
        setCMD(true)
        setURM(false)
        setRD(false)
        setWA(false)
    }
    const handleURM = () => {
        setCMD(false)
        setURM(true)
        setRD(false)
        setWA(false)
    }
    const handleRD = () => {
        setCMD(false)
        setURM(false)
        setRD(true)
        setWA(false)
    }
    const handleWA = () => {
        setCMD(false)
        setURM(false)
        setRD(false)
        setWA(true)
    }
    const handleOPP = () => {
        setOOP(true)
        setDB(false)
        setAD(false)
        setFx(false)
    }
    const handleDB = () => {
        setOOP(false)
        setDB(true)
        setAD(false)
        setFx(false)
    }
    const handleAD = () => {
        setOOP(false)
        setDB(false)
        setAD(true)
        setFx(false)
    }
    const handleFx = () => {
        setOOP(false)
        setDB(false)
        setAD(false)
        setFx(true)
    }
    const handleCTD = () => {
        setPO(false)
        setSI(false)
        setPI(false)
        setCTD(true)
    }
    const handlePI = () => {
        setPO(false)
        setSI(false)
        setPI(true)
        setCTD(false)
    }
    const handlePO = () => {
        setPO(true)
        setSI(false)
        setPI(false)
        setCTD(false)
    }
    const handleSI = () => {
        setPO(false)
        setSI(true)
        setPI(false)
        setCTD(false)
    }


    const handleActive = () => {
        setActive(!active)
        setPhp(false)
        setWordpress(false)
        setLaravel(false)
        setCMS(false)
        setWhatsapp(false)


    }
    const handlePhp = () => {
        setPhp(!isPhp)
        setWordpress(false)
        setLaravel(false)
        setActive(false)
        setCMS(false)
        setWhatsapp(false)

    }
    const handleWordpress = () => {
        setWordpress(!isWordpress)
        setPhp(false)
        setLaravel(false)
        setActive(false)
        setCMS(false)
        setWhatsapp(false)

    }
    const handleLaravel = () => {
        setLaravel(!isLaravel)
        setWordpress(false)
        setPhp(false)
        setActive(false)
        setCMS(false)
        setWhatsapp(false)


    }
    const handleCMS = () => {
        setCMS(!CMS)
        setWordpress(false)
        setPhp(false)
        setActive(false)
        setLaravel(false)
        setWhatsapp(false)



    }
    const handleWhatsapp = () => {
        setWhatsapp(!isWhatsapp)
        setWordpress(false)
        setPhp(false)
        setActive(false)
        setCMS(false)
        setLaravel(false)
    }


  

   


    return (
        <div className={`container ${styles.container}`}>
            <div className={`row ${styles.row}`}>
                <div className="col-lg-8">
                    <span className={styles.heading}>The Best  Website & Web Application Development Company In Dubai</span>
                </div>
            </div>
            <div className={`row  ${styles.secRow}`}>
                <div className="col-lg-5">
                    <ul onMouseEnter={handleWordpress} >
                        <li className={isWordpress ? styles.active : styles.list}> {isWordpress ? <span className={styles.dash}><b>___</b></span> : ""} Wordpress Development</li>
                    </ul>
                    <ul onMouseEnter={handlePhp} >
                        <li className={isPhp ? styles.active : styles.list}> {isPhp ? <span className={styles.dash}><b>___</b></span> : ""} PHP Development</li>
                    </ul>
                    <ul onMouseEnter={handleCMS} >
                        <li className={CMS ? styles.active : styles.list}> {CMS ? <span className={styles.dash}><b>___</b></span> : ""} CMS Development</li>
                    </ul>
                    <ul onMouseEnter={handleLaravel} >
                        <li className={isLaravel ? styles.active : styles.list}> {isLaravel ? <span className={styles.dash}><b>___</b></span> : ""} Laravel Development</li>
                    </ul>
                    <ul onMouseEnter={handleActive} >
                        <li className={active ? styles.active : styles.list}> {active ? <span className={styles.dash}><b>___</b></span> : ""}Website Maintenance</li>
                    </ul>
                    <ul onMouseEnter={handleWhatsapp} >
                        <li className={isWhatsapp ? styles.active : styles.list}> {isWhatsapp ? <span className={styles.dash}><b>___</b></span> : ""}Whats App Integration</li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    {isWordpress ?
                        <div>
                            <ul onMouseEnter={handleCTD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isCTD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""} <li className={isCTD ? styles.ChlidActive : styles.chlidlist}>Custom Theme Development</li>
                            </ul>
                            <ul onMouseEnter={handlePI} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isPI ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}   <li className={isPI ? styles.ChlidActive : styles.chlidlist}>Plugin Integration</li>
                            </ul>
                            <ul onMouseEnter={handlePO} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isPO ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}   <li className={isPO ? styles.ChlidActive : styles.chlidlist}>Performance Optimization</li>
                            </ul>
                            <ul onMouseEnter={handleSI} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isSI ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  <li className={isSI ? styles.ChlidActive : styles.chlidlist}>Security Implementation</li>
                            </ul>
                        </div>
                        : ""}
                    {CMS ?
                        <div>
                            <ul onMouseEnter={handleCMD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isCMD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  <li className={isCMD ? styles.ChlidActive : styles.chlidlist}>Custom Module Development</li>
                            </ul>
                            <ul onMouseEnter={handleURM} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isURM ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}   <li className={isURM ? styles.ChlidActive : styles.chlidlist}> User Roll Management</li>
                            </ul>
                            <ul onMouseEnter={handleRD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isRD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}    <li className={isRD ? styles.ChlidActive : styles.chlidlist}>Responsive Design</li>
                            </ul>
                            <ul onMouseEnter={handleWA} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isWA ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  <li className={isWA ? styles.ChlidActive : styles.chlidlist}>WorkFlow Automation</li>
                            </ul>
                        </div>
                        : ""}
                    {isLaravel ?
                        <div>
                            <ul onMouseEnter={handleMA} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isMA ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  
                                <li className={isMA ? styles.ChlidActive : styles.chlidlist}>MVC Architecture</li>
                            </ul>
                            <ul onMouseEnter={handleEO} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isEO ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  

                                <li className={isEO ? styles.ChlidActive : styles.chlidlist}> Eloquent ORM</li>
                            </ul>
                            <ul onMouseEnter={handleRAD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isRAD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  

                                <li className={isRAD ? styles.ChlidActive : styles.chlidlist}>Restfull Api Development</li>
                            </ul>
                            <ul onMouseEnter={handleSP} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isSP ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  

                                <li className={isSP ? styles.ChlidActive : styles.chlidlist}>Scalibility Planning</li>
                            </ul>
                        </div>
                        : ""}
                    {isPhp ?
                        <div>
                            <ul onMouseEnter={handleOPP} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isOOP ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  
                                <li className={isOOP ? styles.ChlidActive : styles.chlidlist}> Object-Oriented Programming</li>
                            </ul>
                            <ul onMouseEnter={handleDB} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isDB ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  
                                <li className={isDB ? styles.ChlidActive : styles.chlidlist}> Database Integration</li>
                            </ul>
                            <ul onMouseEnter={handleAD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isAD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  
                                <li className={isAD ? styles.ChlidActive : styles.chlidlist}> Api Development</li>
                            </ul>
                            <ul onMouseEnter={handleFx} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isFx ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}  
                                <li className={isFx ? styles.ChlidActive : styles.chlidlist}> Frameword Expertise</li>
                            </ul>
                        </div>
                        : ""}
                    {active ?
                        <div>
                            <ul onMouseEnter={handleOPP} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isOOP ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isOOP ? styles.ChlidActive : styles.chlidlist}> Object-Oriented Programming</li>
                            </ul>
                            <ul onMouseEnter={handleDB} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isDB ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isDB ? styles.ChlidActive : styles.chlidlist}> Database Integration</li>
                            </ul>
                            <ul onMouseEnter={handleAD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isAD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isAD ? styles.ChlidActive : styles.chlidlist}> Api Development</li>
                            </ul>
                            <ul onMouseEnter={handleFx} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isFx ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isFx ? styles.ChlidActive : styles.chlidlist}> Frameword Expertise</li>
                            </ul>
                        </div>
                        : ""}
                    {isWhatsapp ?
                        <div>
                            <ul onMouseEnter={handleOPP} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isOOP ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isOOP ? styles.ChlidActive : styles.chlidlist}> Object-Oriented Programming</li>
                            </ul>
                            <ul onMouseEnter={handleDB} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isDB ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isDB ? styles.ChlidActive : styles.chlidlist}> Database Integration</li>
                            </ul>
                            <ul onMouseEnter={handleAD} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isAD ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isAD ? styles.ChlidActive : styles.chlidlist}> Api Development</li>
                            </ul>
                            <ul onMouseEnter={handleFx} onMouseLeave={HandleMouseLeave} className={styles.ul}>
                                {isFx ? <span className={styles.ArrowIcon}> <MdArrowOutward className={styles.icons} /> </span> : ""}
                                <li className={isFx ? styles.ChlidActive : styles.chlidlist}> Frameword Expertise</li>
                            </ul>
                        </div>
                        : ""}

                </div>
                <div className="col-lg-3">
                    {isCTD ? 
                        <Image src={OOP} alt=''  className={styles.Imagess}/> : ""}
                    {isPI ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isPO ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isSI ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isOOP ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isDB ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isAD ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isFx ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isCMD ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isRD ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isURM ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isWA ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isMA ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isEO ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isRAD ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                    {isSP ? <Image src={OOP} alt='' className={styles.Imagess} /> : ""}
                </div>
            </div>

        </div>
    )
}

export default components
