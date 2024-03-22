'use client'
import React, { useState } from 'react'
import styles from './component.module.css'
import Image from 'next/image'
import Planning from '../../../assets/images/webdev/highlights/card1.svg'
import ListElement from '../../../assets/images/webdev/highlights/list-element.svg'
import Developmet from '../../../assets/images/webdev/highlights/card2.svg'
import Testing from '../../../assets/images/webdev/highlights/card3.svg'
import Deployement from '../../../assets/images/webdev/highlights/card4.svg'
import Arrow from '../../../assets/images/webdev/highlights/card-arrow.svg'
import { BiSolidRightArrow } from "react-icons/bi";


const components = () => {
    const [isPlanning , setPlanning ] = useState(false)
    const [isDevelopment , setDevelopment] = useState(false)
    const [isTesting, setTesting] = useState(false)
    const [isDeployement, setDeployement] = useState(false)

    const HoverLeave = () => {
        setPlanning(false)
        setDevelopment(false)
        setTesting(false)
        setDeployement(false)
    }
    const HandlePlanning = () => {
        setPlanning(true)
    }
    const HandleDevelopment = () => {
        setDevelopment(true)
    }
    const HandleTesting = () => {
        setTesting(true)
    }
    const HandleDeployement = () => {
        setDeployement(true)
    }


    return (
        <div className={`container ${styles.container}`}>
            <div className={`row ${styles.row}`}>
                <div className={`col-lg-5 ${styles.left}`}>
                    <h2>Elevate Your Web Experience With Our Seamless Process</h2>
                    <p>Our process involves in-depth business analysis, documenting specifications, creating wireframes, and obtaining your approval before moving forward. Our seasoned web experts guide you through every step of the journey, right till the end, ensuring your website aligns with your brand’s objectives. Your vision deserves nothing less than perfection, and that's exactly what our process is designed to achieve.</p>
                </div>
                <div className={`col-lg-7  ${styles.right}`}>
                    <div className={styles.hightbox}>
                        <h4>Key Highlights Our Work In Numbers.</h4>
                        <div className={`row ${styles.box}`}>
                            <div className={`col-4 ${styles.boxe1}`}>
                                <p>Happy Clients</p>
                                <h2>265+</h2>
                            </div>
                            <div className={`col-4 ${styles.boxe2}`}>
                                <p>Projects Completed</p>
                                <h2>265+</h2>
                            </div>
                            <div className={`col-4 ${styles.boxe3}`}>
                                <p>Years of experience</p>
                                <h2>265+</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={`row mt-5 ${styles.row2}`}>
                <div className={styles.col} onMouseEnter={HandlePlanning} onMouseLeave={HoverLeave}>
                    <div className={isPlanning ? styles.cardHover :styles.card}>
                        <div className={styles.CardHead}>
                            <span className={isPlanning ? styles.cardImageHover :styles.cardImage}>
                                <Image src={Planning} alt="Planning" width="50%" height="50%" />
                            </span>
                            <span className={styles.Arrow}>
                                <Image src={Arrow} alt="Planning" className={styles.Arrow} />
                            </span>
                        </div>
                        <h2>Planning</h2>
                        <ul>
                            <li><BiSolidRightArrow className={isPlanning ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isPlanning ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isPlanning ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isPlanning ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                        </ul>

                    </div>
                </div>
                <div className={styles.col} onMouseEnter={HandleDevelopment} onMouseLeave={HoverLeave}>
                    <div className={isDevelopment ? styles.cardHover : styles.card}>
                        <div className={styles.CardHead}>
                            <span className={isDevelopment ? styles.cardImageHover : styles.cardImage}>
                                <Image src={Developmet} alt="Planning"  className={styles.svgImage} />
                            </span>
                            <span className={styles.Arrow2}>
                                <Image src={Arrow} alt="Planning" className={styles.ReverseImage} />
                            </span>
                        </div>
                        <h2>Development</h2>
                        <ul>
                            <li><BiSolidRightArrow className={isDevelopment ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isDevelopment ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isDevelopment ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isDevelopment ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                        </ul>

                    </div>
                </div>
                <div className={styles.col} onMouseEnter={HandleTesting} onMouseLeave={HoverLeave}>
                    <div className={isTesting ? styles.cardHover : styles.card}>
                        <div className={styles.CardHead}>
                            <span className={isTesting ? styles.cardImageHover : styles.cardImage}>
                                <Image src={Testing} alt="Planning" width="50%" height="50%" />
                            </span>
                            <span className={styles.Arrow}>
                                <Image src={Arrow} alt="Planning" className={styles.Arrow} />
                            </span>
                        </div>
                        <h2>Testing</h2>
                        <ul>
                            <li><BiSolidRightArrow className={isTesting ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isTesting ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isTesting ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isTesting ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                        </ul>

                    </div>
                </div>
                <div className={styles.col} onMouseEnter={HandleDeployement} onMouseLeave={HoverLeave}>
                    <div className={isDeployement ? styles.cardHover : styles.card}>
                        <div className={styles.CardHead}>
                            <span className={isDeployement ? styles.cardImageHover : styles.cardImage}>
                                <Image src={Deployement} alt="Planning" width="50%" height="50%" />
                            </span>
                           
                        </div>
                        <h2>Deployement</h2>
                        <ul>
                            <li><BiSolidRightArrow className={isDeployement ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isDeployement ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isDeployement ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                            <li><BiSolidRightArrow className={isDeployement ? styles.ELementHover : styles.ELement} /> &nbsp;Business analysis</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default components
