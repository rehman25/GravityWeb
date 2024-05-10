// import React from 'react'
// import styles from './Awards.module.css'
// import Text from '../text'
// import Image from 'next/image'
// import firstImg from '../../assets/images/home/award-bagde-1.svg'
// import SecondImg from '../../assets/images/home/award-bagde-2.svg'
// import thirdImg from '../../assets/images/home/download.png'
// import forthImg from '../../assets/images/home/award-bagde-4.webp'


// const components = () => {
//   return (
//     <section className={`${styles.bgColor}`}>
//       <div className={`container-fluid ${styles.container}`}>
//         <div className="row">
//           <div className={`p-0 col-lg-6 ${styles.leftContainer}`}>
//             <Text text="Awards" animation="fade-right" className={styles.Text} />
//             <div className={styles.leftHeading}>
//               <h2>Digital Gravity, a <br /> <p>Synonym of Quality, Trust and Distinction</p>
//                 </h2>
//               <p>Client satisfaction is one of our top priorities. Our consistency, dedication toward work, and constant innovation have won us several accolades in the last decade.
//                 <b>Hire web designers and web developers in Dubai.</b>  from Digital Gravity to build highly responsive, scalable, and robust web applications with a touch of finesse.</p>
//             </div>
//           </div>
//           <div className={`p-0 col-lg-6 ${styles.rightContainer}`}>
//             <div className={styles.imagecontainer}>
//               <div data-aos="fade-up"
//                 data-aos-duration="3000" className={styles.picture}>
//                 <Image  src={firstImg} alt="award-bagde-1" className={styles.slideImg} />
//               </div>
//               <div data-aos="fade-up"
//                 data-aos-duration="3000" className={styles.picture}>
//                 <Image src={SecondImg} alt="award-bagde-1" className={styles.slideImg} />
//               </div>
//               <div data-aos="fade-up"
//                 data-aos-duration="3000" className={styles.picture}>
//                 <Image src={thirdImg} alt="award-bagde-1" className={styles.slideImg} />
//               </div>
//               <div data-aos="fade-up"
//                 data-aos-duration="3000" className={styles.picture}>
//                 <Image src={forthImg} alt="award-bagde-1" className={styles.slideImg} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default components
'use client'
import React from 'react'
import styles from './Awards.module.css'
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


const components = () => {

    return (
      
        <div className={styles.services}>
          
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
            
        </div>
    )
}

export default components