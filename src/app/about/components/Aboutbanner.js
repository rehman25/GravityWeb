import React from "react";
import styles from "../../styles/about.module.css";


const Aboutbanner = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={`container ${styles.banneraboutsection} `}>
          <div className={`row mt-5 ${styles.bannertex}`}>
            <div className="col-md-6">
              <div className={`${styles.bannertextleftside}`}>
                <span className={`${styles.borderdesign}`}></span>
                <h6>Digital Marketing Agency In Dubai</h6>
                <h1>
                  We Activate <br />
                  Businesses & Brands <br />
                  for the <span className={`${styles.leftextdisplaycenter}`}>Digital Change</span>
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles.bannertextrightside}`}>
                <span>
                  Digital Gravity is an accomplished digital transformation
                  company in Dubai with a progressive perspective. We offer
                  scalable web and mobile solutions coupled with digital
                  marketing services under one roof — without silos or handoffs.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbanner;
