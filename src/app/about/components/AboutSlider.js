import React from 'react';
import styles from '../../styles/about.module.css';
import Image from 'next/image';
import Creativity from '../../assets/images/Slider/Creative.png';
import Design from '../../assets/images/Slider/Design.png'
import consultancy from "../../assets/images/Slider/Consultancy.png"
import Tech from '../../assets/images/Slider/Technology.png'
import TechDevliv from '../../assets/images/Slider/TechnicalDelivery.png'
import Dev from '../../assets/images/Slider/Development.png'
import Strategy from '../../assets/images/Slider/Strategy.png'
import Marketing from '../../assets/images/Slider/Management.png'
import Management from '../../assets/images/Slider/Management.png'



const AboutSlider = () => {
    return (
        <section style={{width: '100%'}}>
            <div className={`${styles.grid__wrapper} container-fluid`}>
                <div className='row mt-5' style={{flexWrap: "nowrap"}}>
                    <div style={{width: "250px"}}>
                        <div className={`${styles.twoBox}`}>
                            <div style={{background: "#ffe0d0"}}>
                                <span>Creativity</span>
                                <Image src={Creativity} alt='example'/>
                            </div>
                            <div style={{background: "#ffd3ee"}}>
                                <span>Design</span>
                                <Image src={Design} alt='example'/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "240px"}}>
                        <div className={`${styles.twoBox}`}>
                            <div style={{background: "#FCFBFE"}}>
                                <span>Consultancy</span>
                                <Image src={consultancy}  alt='example'style={{top: "0",height: "100%",width: "100%"}}/>
                            </div>
                            <div style={{background: "#E6EDEF"}}>
                                <span>Technology</span>
                                <Image src={Tech} alt='example' style={{width: "100%"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "240px"}}>
                        <div className={`${styles.twoBox}`}>
                            <div style={{background: "#ffe0d0",height: "220px"}}>
                                <span>Technical Delivery</span>
                                <Image src={TechDevliv} alt='example' style={{bottom: "-33px",height: "100%",width: "60%"}}/>
                            </div>
                            <div style={{background: "#D7FDFF", height: "140px"}}>
                                <span>Development</span>
                                <Image src={Dev} alt='example' style={{width: "82px",height: "50px"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "350px"}}>
                        <div className={`${styles.twoBox}`}>
                            <div style={{background: "#FFDDE4",height: "381px"}}>
                                <span>Strategy</span>
                                <Image src={Strategy} alt='example' style={{ width: "100%"}}/>
                            </div>
                        </div>
                    </div>
                    <div style={{width: "260px"}}>
                        <div className={`${styles.twoBox}`}>
                            <div style={{background: "#FFE0D0",height: "220px"}}>
                                <span>Marketing</span>
                                <Image src={Marketing} alt='example' style={{bottom: "-38px",height: "100%",width: "100%"}}/>
                            </div>
                            <div style={{background: "#E6EDEF", height: "140px"}}>
                                <span>Management</span>
                                <Image src={Management} alt='example' style={{width: "110px",height: "85px"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSlider;

