"use Client";
import Workslidercomponent from "./components/Workslidercomponent";
import styles from "./webdev.module.css";
import FAQ from "./components/FAQ/component";
import WorkRead from "./components/Work-Read/index";
import Header from "../component/Header/component";
import Cursor from "../component/cursor/cursor";
import Testimonials from "../component/Testimonials/index";
import ServiceTechDevelopment from "../component/ServiceTechDevelopment/Components";
import Expansion from "../component/Expansion/component";
import InnerFooter from "../component/InnerFooter/component";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Best from "./components/Best/components";
import Slider from "./components/Slider/Components";
import Highlights from "./components/Highlights/components";

const Page = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          overflowX: "clip",
        }}
      >
        <Cursor />
        <Header />
        <section className={styles.bgSection}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.desBox}>
                  <div className={styles.iconsdiv}>
                    <BsInstagram className={styles.HeadIcon} />
                    <div className={styles.divline}></div>
                    <FaXTwitter className={styles.HeadIcon} />
                    <div className={styles.divline}></div>
                    <FaLinkedin className={styles.HeadIcon} />
                    <div className={styles.divtext}>SOCIALIZE</div>
                  </div>

                  <div className={styles.innerDesBox}>
                  <h5>Web Development <br /> Leaders In UAE</h5>
                  <p>Bring the digital vision of your brand to life with a
                        fully-functional, responsive website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Best />
        <Slider />
        <Highlights />
        {/* <Workslidercomponent /> */}
        {/* <Testimonials /> */}
        {/* <ServiceTechDevelopment /> */}
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
                        Office X-X, XXXXXXXXXXX, XXXX XXXXXX XXXXXX, Dubai, UAE
                      </li>
                      <li className={styles.address}>
                        discover@digitalmobix.ae
                      </li>
                      <li className={styles.address}>+XXX X XXX XXXX</li>
                      <li className={styles.address}>+XXX X XXX XXXX</li>
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
  );
};

export default Page;
