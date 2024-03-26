'use Client'
import Workslidercomponent from './components/Workslidercomponent'
import styles from "./webdev.module.css";
import FAQ from "./components/FAQ/component";
import WorkRead from "./components/Work-Read/index";
import Header from '../component/Header/component'
import Cursor from '../component/cursor/cursor'
import Testimonials from '../component/Testimonials/index'
import ServiceTechDevelopment from '../component/ServiceTechDevelopment/Component'
import Expansion from '../component/Expansion/Component'
import InnerFooter from '../component/InnerFooter/component'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Best from './components/Best/components'
import Slider from './components/Slider/Components'
import Highlights from './components/Highlights/components'

const Page = () => {
    return (
        <>
            <div style={{
                width: "100%",
                overflowX: "clip"
            }}>

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
                <Best />
                <Slider />
                <Highlights />
                <Workslidercomponent />
                <Testimonials />
                <ServiceTechDevelopment />
                <FAQ />
                <WorkRead />
                <Expansion />
                <section className={`${styles.bottomSection}`}>
                    <div className="container-fliud">
                        <div className={`row ${styles.row}`}>
                            <div className={`col-lg-6 ${styles.leftContainer}`}>
                                <h1 className={styles.letsbuild}>
                                    {`Let's`} build <br />
                                    <p className={styles.something}>something awesome</p>
                                </h1>
                                <h2 className={styles.footerPara}>
                                    Reach out to our team and {`we'll`} get back to you within a
                                    day.
                                </h2>
                                <div className={`row ${styles.innnerRow}`}>
                                    <div className={styles.DashContainer}>
                                        <span className={styles.dash}>____</span>
                                    </div>
                                    <div className={styles.addressContainer}>
                                        <ul>
                                            <li className={styles.address}>
                                                Office M-13, The Curve Building, Sheikh Zayed Road, Dubai,
                                                UAE
                                            </li>
                                            <li className={styles.address}>
                                                discover@digitalgravity.ae
                                            </li>
                                            <li className={styles.address}>+971 4 242 1375</li>
                                            <li className={styles.address}>+971 4 242 1375</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-lg-6 ${styles.rightContainer}`}>
                                <h1 className={styles.letsbuild1}>
                                    Subscribe To Our
                                    <br />
                                    <p className={styles.something1}>Newsletter</p>
                                </h1>
                                <div className={`row ${styles.row1}`}>
                                    <div className={styles.Formgroup1}>
                                        <label htmlFor="" className={styles.label1}>
                                            Your Name*
                                        </label>
                                        <input
                                            type="text"
                                            className={` ${styles.Input1}`}
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className={styles.Formgroup1}>
                                        <label htmlFor="" className={styles.label1}>
                                            Your Email*
                                        </label>
                                        <input
                                            type="text"
                                            className={` ${styles.Input1}`}
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className={styles.button1}>
                                        <span className={styles.sendtext1}>Subscribe</span>
                                        <span className={styles.sendIcon}>
                                            <FaArrowRight className={styles.sIcon} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <InnerFooter />
            </div>
        </>


    )
}

export default Page

