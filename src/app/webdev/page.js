'use Client'
import React from 'react'
import styles from './webdev.module.css'
import Header from '../component/Header/component'
import Cursor from '../component/cursor/cursor'
import Footer from '../component/Footer/component'
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Page = () => {
  return (
        <>
        <Cursor />
        <Header />
          <div className={`container-fluid ${styles.headerContainer}`}>
              <div className="container">
                  <div className={`row ${styles.servicero}`}>
                      <div className={`col-lg-6 ${styles.leftside}`}>
                          <div className={styles.iconsdiv}>
                              <BsInstagram className={styles.HeadIcon} />
                              <div className={styles.divline}></div>
                              <FaXTwitter className={styles.HeadIcon} />
                              <div className={styles.divline}></div>
                              <FaLinkedin className={styles.HeadIcon} />
                              <div className={styles.divtext}>SOCIALIZE</div>
                          </div>
                          <div>
                              <span className={styles.Heading}>Web Development <br /> Leaders In UAE</span>
                              <span className={styles.headingpara}> <p className={styles.pdash}>___</p><p>Bring the digital vision of your brand to life with a fully-functional, responsive website.</p> </span>
                          </div>
                      </div>
                      <div className={`col-lg-6 ${styles.Rightside}`}>
                          <div className={styles.FormContainer}>
                              <form action="" className={styles.ContactForm}>
                                  <h3>Speak to an Expert</h3>
                                  <div className={`row ${styles.row}`}>
                                    <div className={styles.Formgroup}>
                                        <label htmlFor="" className={styles.label}>Your Name*</label>
                                        <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className={styles.Formgroup}>
                                        <label htmlFor="" className={styles.label}>Your Email*</label>
                                        <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                  </div>
                                  <div className={`row ${styles.row}`}>
                                    <div className={styles.Formgroup}>
                                        <label htmlFor="" className={styles.label}>Phone Number*</label>
                                        <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                      <div className={styles.Formgroup}>
                                          <label htmlFor="" className={styles.label}>Phone Number</label>                    
                                          <select name="" id="" className={` ${styles.Input}`}>
                                              <option value="">0 - 3000 AED</option>
                                              <option value="">3000 AED - 6000 AED</option>
                                              <option value="">6000 AED - 8000 AED</option>
                                          </select>
                                      </div>
                                    </div>
                                    <div className={styles.Formgrouptextarea}>
                                        <label htmlFor="" className={styles.label}>Message</label>
                                        <textarea name="" id="" cols="118" rows="5" className={styles.textarea} />
                                    </div>
                                  <div className={styles.button}>
                                      <span className={styles.sendtext}>Send</span>
                                      <span className={styles.sendIcon}>
                                          <FaArrowRight className={styles.sIcon} />
                                      </span>
                                      <p className={styles.formpara}>if you have any RFP requirement please share with us at discover@digitalgravity.ae and if you are looking for a career related enquiry please check our Career section.</p>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        <Footer />
      </>
      
 
  )
}

export default Page

