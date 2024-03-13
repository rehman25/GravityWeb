import React from 'react'
import styles from './Footer.module.css'
import { GoDash } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const page = () => {
  return (
    <div className={`'container' ${styles.Container}`}>
      <span className={styles.heading}>Design.Build.Launch</span>
      <div className="row">
        <div className={`col-lg-6 ${styles.leftContainer}`}>
          <h2 className={styles.letsbuild}>let's build <br /> 
            <p className={styles.something}>something awesome</p>
          </h2>
          <p className={styles.footerPara}>Reach out to our team and we'll get back to you within a day.</p>
          <div className={`row ${styles.innnerRow}`}>
            <div className={styles.DashContainer}>
               <span className={styles.dash}>____</span>
            </div>
            <div className={styles.addressContainer}>
             <ul>
                <li className={styles.address}>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE</li>
                <li className={styles.address}>discover@digitalgravity.ae</li>
                <li className={styles.address}>+971 4 242 1375</li>
                <li className={styles.address}>+971 4 242 1375</li>
                <li className={styles.address}><FaXTwitter className={styles.FooterIcon} /> <FaFacebookF className={styles.FooterIcon} /> <FaInstagram className={styles.FooterIcon} /> <FaYoutube className={styles.FooterIcon} /> <FaLinkedin className={styles.FooterIcon} /> </li>
             </ul>
            
            </div>
          </div>
        </div>
        <div className={`col-lg-6 ${styles.rightContainer}`}></div>
      </div>
    </div>
  )
}

export default page
