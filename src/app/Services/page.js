'use client'
import React from 'react'
import styles from './Services.module.css'
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Header from '../component/Header/component'
import Footer from '../component/Footer/component'
import { FaArrowRight } from "react-icons/fa6";
import FullService from './FullService/component';
import Cursor from '../component/cursor/cursor';


const Page = () => {

    return (
        <div className={styles.services}>
            <Cursor />
            <Header />
            <div className={`container-fluid ${styles.headerContainer}`}>
                {/*   <div className="container">
                </div> */}
                <div className={`row ${styles.servicero}`}>
                    <div className={`col-lg-6  ${styles.leftside}`}>
                        <div className={styles.iconsdiv}>
                            <BsInstagram className={styles.HeadIcon} />
                            <div className={styles.divline}></div>
                            <FaXTwitter className={styles.HeadIcon} />
                            <div className={styles.divline}></div>
                            <FaLinkedin className={styles.HeadIcon} />
                            <div className={styles.divtext}>SOCIALIZE</div>
                        </div>
                        <div>
                            <span className={styles.Heading}>Our Digital Services Create Lovely Projects & Deliver Memorable Experiences</span>
                        </div>
                    </div>
                    <div className={`col-lg-6  ${styles.Rightside}`}>
                        <div className={styles.FormContainer}>
                            <form action="" className={styles.ContactForm}>
                                <h3>Speak to an Expert</h3>
                                <p>if you have any RFP requirement please share with us at discover@digitalmobix.ae and if you are looking for a career related enquiry please check our Career section.</p>
                                <div className={styles.Formgroup}>
                                    <label htmlFor="" className={styles.label}>Your Name</label>
                                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className={styles.Formgroup}>
                                    <label htmlFor="" className={styles.label}>Email</label>
                                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className={styles.Formgroup}>
                                    <label htmlFor="" className={styles.label}>Phone Number</label>
                                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className={styles.Formgroup}>
                                    <label htmlFor="" className={styles.label}>Message</label>
                                    <textarea name="" id="" cols="118" rows="2" className={styles.Input} />
                                </div>
                                <div className={styles.button}>
                                    <span className={styles.sendtext}>Send</span>
                                    <span className={styles.sendIcon}>
                                        <FaArrowRight className={styles.sIcon} />
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FullService />
            <Footer />
        </div>
    )
}

export default Page