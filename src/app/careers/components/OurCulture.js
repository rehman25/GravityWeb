import React from 'react';
import styles from "../../styles/careers.module.css";
import Image from 'next/image';
import FESTIVTIY from "../../assets/images/OurCulture/Festivity.jpg"
import TEAMWORK from "../../assets/images/OurCulture/Teamwork.jpg"
import CAMARADERIE from "../../assets/images/OurCulture/Camaraderie.jpg"
import IMAGINATION from "../../assets/images/OurCulture/Imagination.jpg"


const OurCulture = () => {
    return (
        <div className={`${styles.ourculturesection}container-fluid `}>
            <div className="row mt-5">
                <div className="col-5 p-0">
                    <div className={`${styles.leftourculture}`}>
                    <h1 className={styles.fadeRight}>Our Culture</h1>
                        <h2>OPPORTUNITIES <br /> DON'T HAPPEN, <br /> YOU CREATE THEM</h2>
                    </div>
                </div>
                <div className="col-7 p-0">
                    <div className={`row ${styles.imageRow}`}>
                        <div className={`col-6 p-0 ${styles.imageColumn}`}>
                            <div className={`card ${styles.imageCard}`}>
                                <Image src={FESTIVTIY} className={`${styles.image}`} alt="Image 1" />
                            </div>
                            <div className={`card ${styles.imageCard}`}>
                                <Image src={CAMARADERIE} className={`${styles.image}`} alt="Image 3" />
                            </div>
                        </div>
                        <div className={`col-6 p-0 ${styles.imageColumn}`}>
                            <div className={`card ${styles.imageCard}`}>
                                <Image src={TEAMWORK} className={`${styles.image}`} alt="Image 2" />
                            </div>
                            <div className={`card ${styles.imageCard}`}>
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
