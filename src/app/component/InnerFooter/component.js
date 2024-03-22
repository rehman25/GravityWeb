import React from 'react'
import styles from '../InnerFooter/InnerFooter.module.css'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const page = () => {
    return (
        <>
            <div className={`container-fluid ${styles.InnerFooterSection}`}>
                <div className={`row ${styles.row}`}>
                        <div className={`col-lg-3 col-sm-6 ${styles.Innerfooter}`}>
                            <ul className={styles.ulFooter}>
                                <span className={styles.LinkHeading}>Overview</span>
                                <li><a href="">About us</a></li>
                                <li><a href="">Service</a> </li>
                                <li><a href="">Case Studies</a> </li>
                                <li><a href="">Partners</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className={`col-lg-3 col-sm-6 ${styles.Innerfooter}`}>
                            <ul className={styles.ulFooter}>
                                <span className={styles.LinkHeading}>Web Solutions</span>
                                <li><a href="/webdev">Web Development</a></li>
                                <li><a href="">UI/UX Design</a> </li>
                                <li><a href="">Digital Marketing Services</a> </li>
                                <li><a href="">Branding & Comunication</a></li>
                                <li><a href="">Ecommerce Web Development</a></li>
                                <li><a href="">Mobile App Development</a></li>
                                <li><a href="">IT Resource Outsouring Dubai</a></li>
                            </ul>
                        </div>
                        <div className={`col-lg-3 col-sm-6 ${styles.Innerfooter}`}>
                            <ul className={styles.ulFooter}>
                                <span className={styles.LinkHeading}>Digital Marketing Services</span>
                                <li><a href="">PPC</a></li>
                                <li><a href="">SEO</a> </li>
                                <li><a href="">Influencer Marketing</a> </li>
                                <li><a href="">Content Marketing</a></li>
                                <li><a href="">Social Media Marketing</a></li>
                                <li><a href="">App Store Optimization (ASO)</a></li>
                                <li><a href="">Email Marketing</a></li>
                            </ul>
                        </div>
                        <div className={`col-lg-3 col-sm-6 ${styles.Innerfooter}`}>
                            <ul className={styles.ulFooter}>
                                <span className={styles.LinkHeading}>Connect With Us</span>
                                <li className={styles.address}><FaXTwitter className={styles.FooterIcon} /> <FaFacebookF className={styles.FooterIcon} /> <FaInstagram className={styles.FooterIcon} /> <FaYoutube className={styles.FooterIcon} /> <FaLinkedin className={styles.FooterIcon} /> </li>
                                <li><a href="">Privacy Policy</a> </li>
                                <li><a href="">Terms & Conditions</a> </li>
                                <li><a href="">© 2024 Digital Gravity. All Rights Reserved.</a></li>
                            </ul>
                        </div>
                </div>
            </div>
        </>
    )
}

export default page
