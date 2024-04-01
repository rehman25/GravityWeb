'use client'
import React, { useState } from 'react'
import styles from './Expansion.module.css'
import Image from 'next/image';
import Map from '../../assets/images/Expansion/map.png'
import USAIcon from '../../assets/images/Expansion/usa-icon.svg'
import UAEIcon from '../../assets/images/Expansion/uae-icon.svg'
import PAKISTANIcon from '../../assets/images/Expansion/pakistan-icon.svg'
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";


const Components = () => {
  const [isBtnHover, setBtnHover] = useState(false)
  const [isBtnHover2, setBtnHover2] = useState(false)
  

  const handleHover = () => {
    setBtnHover(true)
  }
  const LeaveMouse = () => {
    setBtnHover(false)
  }

  const handleHover2 = () => {
    setBtnHover2(true)
  }
  const LeaveMouse2 = () => {
    setBtnHover2(false)
  }


  return (
    <section className={`${styles.Expansionsection}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className={`${styles.Expansionsectionleft} p-5`}>
              <h3>Now Epanding To Multiple <br />
                Cities Across <span className={`${styles.Expansionheadersub}`}>USA, GCC Region & Asia</span></h3>
              <Image src={Map} alt='example' />
              <div className={`${styles.CitiesInfo}`}>
                <div className={`col-lg-4 ${styles.USAIH5} ${styles.USAIH5Box}`}>
                  <div className={isBtnHover2 ? styles.iconName2 : styles.iconName} onMouseEnter={handleHover2} onMouseLeave={LeaveMouse2}>
                    <Image src={USAIcon} alt='example' />
                    <h5> USA </h5>
                  </div>
                  <div className={`${styles.USAContent} ${styles.USAIH5Box}`}>
                    <span>+191 038 40703</span>
                    <p>832 via Palermo, San Ramon, CA, 94583, USA </p>
                  </div>
                </div>
                <div className={`col-lg-4 ${styles.UAEIH5} ${styles.USAIH5Box}`}>
                  <div className={isBtnHover2 ? styles.iconName2 : styles.iconName} onMouseEnter={handleHover2} onMouseLeave={LeaveMouse2}>
                    <Image src={UAEIcon} alt='example' />
                    <h5> UAE </h5>
                  </div>
                  <div className={`${styles.UAEContent}`}>
                    <span>+971 4 242 1375 <br /> +971 4 242 1375</span>
                    <p>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE  </p>
                  </div>
                </div>
                <div className={`col-lg-4 ${styles.PAKISTANIH5} ${styles.USAIH5Box}`}>
                  <div className={isBtnHover2 ? styles.iconName2 : styles.iconName} onMouseEnter={handleHover2} onMouseLeave={LeaveMouse2}>
                    <Image src={PAKISTANIcon} alt='example'/>
                    <h5> Pakistan </h5>
                  </div>
                  <div className={`${styles.PAKISTANContent}`}>
                    <span>+92 335 549 2225</span>
                    <p>Office Nos: 101, 102 & 103, NASTP Sierra, Shahrah-e-Faisal Rd, Faisal Cantonment, Karachi, Pakistan </p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div className={`col-lg-6 ${styles.Rightside}`}>
            <div className={styles.FormContainer}>
              <form action="" className={styles.ContactForm}>
                <h2>Got an Idea? <br /> <b>Let’s get started</b> </h2>
                <h3> Fill out the From </h3>
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
                    <label htmlFor="" className={styles.label}>Budget</label>
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
                <div className={styles.button} >
                  <div className={styles.button} onMouseEnter={handleHover} onMouseLeave={LeaveMouse}>
                    <span className={isBtnHover ? styles.hovertext : styles.sendtext}>Send</span>
                    {isBtnHover ? <span className={styles.sendIcon}>
                      <FaArrowRight className={styles.sIcon} />
                    </span> : <span className={styles.sendIcon2}>
                        <MdArrowOutward className={styles.sIcon} />
                    </span>}
                  </div>

                  <p className={styles.formpara}>if you have any RFP requirement please share with us at <b> discover@digitalgravity.ae</b> and if you are looking for a career related enquiry please check our 
                    <b>Career</b>section.</p>
                </div>
              </form>
            </div>
          </div>
          {/*   <div className={`col-lg-6 mt-5 p-5 ${styles.Expansionsectionright}`}>
            <div className={styles.FormContainer}>
              <form action="" className={styles.ContactForm}>
                <h3>Got an Idea? <br />  <span className={`${styles.Expansionheaderrightsub}`}> Let’s get started </span> </h3>
                <h4> Fill out the Form </h4>
                <div className={`row ${styles.row}`}>
                  <div className={`${styles.Formgroup} col-md-6`}>
                    <label htmlFor="" className={styles.label}>Your Name*</label>
                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name' />
                  </div>
                  <div className={`${styles.Formgroup} col-md-6`}>
                    <label htmlFor="" className={styles.label}>Your Email*</label>
                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' />
                  </div>
                </div>
                <div className={`row ${styles.row}`}>
                  <div className={`${styles.Formgroup} col-md-6`}>
                    <label htmlFor="" className={styles.label}>Your Phone Number*</label>
                    <input type="text" className={` ${styles.Input}`} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your phone number' />
                  </div>
                  <div className={`${styles.Formgroup} col-md-6`}>
                    <label htmlFor="" className={styles.label}>Budget</label>
                    <select name="" id="" className={` ${styles.Input}`}>
                      <option value="">Budget</option>
                      <option value="">3000 AED - 6000 AED</option>
                      <option value="">6000 AED - 8000 AED</option>
                    </select>
                  </div>
                </div>
                <div className={styles.Formgrouptextarea}>
                  <label htmlFor="" className={styles.label}>Your Message</label>
                  <textarea name="" id="" cols="60" rows="5" className={styles.textarea} placeholder='Type Here' />
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
          </div> */}
        </div>
      </div >
    </section >
  )
}

export default Components