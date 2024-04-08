
'use client'
import React, { useEffect } from 'react';
import styles from "../../styles/careers.module.css";
import Image from 'next/image';
import FESTIVTIY from "../../assets/images/OurCulture/Festivity.jpg"
import TEAMWORK from "../../assets/images/OurCulture/Teamwork.jpg"
import CAMARADERIE from "../../assets/images/OurCulture/Camaraderie.jpg"
import IMAGINATION from "../../assets/images/OurCulture/Imagination.jpg"
import Text from '../../component/text/index'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurCulture = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <div className={`${styles.ourculturesection} container-fluid `}>
            <div className="row mt-5">
                <div className="col-lg-5 p-0" data-aos={"fade-up"}>
                    <div className={`${styles.leftourculture}`}>
                    <Text text="Our Culture" animation="fade-right" />
                        <h2>OPPORTUNITIES <br /> {`DON'T`} HAPPEN, <br /> <span className={`${styles.highlightedWord}`} style={{ display: "inline" }}>YOU</span> CREATE THEM</h2>
                    </div>
                </div>
                <div className="col-lg-7 p-0">
                    <div className={`row ${styles.imageRow}`}>
                        <div className={`col-6 p-0 ${styles.imageColumn}`}>
                            <div className={`card`} data-aos={"fade-up"}>
                                <Image src={FESTIVTIY} className={`${styles.image}`} alt="Image 1" />
                            </div>
                            <div className={`card`} data-aos={"fade-up"}>
                                <Image src={CAMARADERIE} className={`${styles.image}`} alt="Image 3" />
                            </div>
                        </div>
                        <div className={`col-6 p-0 ${styles.imageColumn}`}>
                            <div className={`card`} data-aos={"fade-up"}>
                                <Image src={TEAMWORK} className={`${styles.image}`} alt="Image 2" />
                            </div>
                            <div className={`card`} data-aos={"fade-up"}>
                                <Image src={IMAGINATION} className={`${styles.image}`} alt="Image 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCulture;
