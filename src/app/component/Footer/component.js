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
      <span data-aos="fade-right" className={styles.heading}>Design.Build.Launch</span>
      <div className={`row ${styles.row}`}>
        <div className={`col-lg-6 ${styles.leftContainer}`}>
          <h2 className={styles.letsbuild}>{`let's`} build <br />
            <p className={styles.something}>something awesome</p>
          </h2>
          <h2 className={styles.footerPara}>Reach out to our team and {`we'll`} get back to you within a day.</h2>
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
        <div  className={`col-lg-6 ${styles.rightContainer}`}>
          <div>
            <ul data-aos="fade-right" className={styles.ulFooter}>
              <span className={styles.LinkHeading}>Overview</span>
              <li><a href="/webdev">About us</a></li>
              <li><a href="/webdev">Service</a> </li>
              <li><a href="/webdev">Case Studies</a> </li>
              <li><a href="/webdev">Partners</a></li>
              <li><a href="/webdev">Blog</a></li>
              <li><a href="/webdev">Terms & Conditions</a></li>
              <li><a href="/webdev">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <ul data-aos="fade-right" className={styles.ulFooter}>
              <span className={styles.LinkHeading}>Web Solutions</span>
              <li><a href="/webdev">Web Development</a></li>
              <li><a href="/webdev">UI/UX Design</a> </li>
              <li><a href="/webdev">Digital Marketing Services</a> </li>
              <li><a href="/webdev">Branding & Comunication</a></li>
              <li><a href="/webdev">Ecommerce Web Development</a></li>
              <li><a href="/webdev">Mobile App Development</a></li>
              <li><a href="/webdev">IT Resource Outsouring Dubai</a></li>
            </ul>
          </div>
          <div>
            <ul data-aos="fade-right" className={styles.ulFooter}>
              <span className={styles.LinkHeading}>Digital Marketing Services</span>
              <li><a href="/webdev">PPC</a></li>
              <li><a href="/webdev">SEO</a> </li>
              <li><a href="/webdev">CRO</a> </li>
              <li><a href="/webdev">Content Marketing</a></li>
              <li><a href="/webdev">Social Media Marketing</a></li>
              <li><a href="/webdev">Social Media Optimization</a></li>
              <li><a href="/webdev">Email Marketing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
