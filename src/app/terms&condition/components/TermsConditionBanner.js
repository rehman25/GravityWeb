import React from "react";
import styles from "../../styles/terms&condition.module.css";


const TermsConditionBanner = () => {
  return (
    <>
      <section>
        <div className={`${styles.termsconditionbanner} `}>
          <div className={`row mt-5 ${styles.termsconditionbannertext}`}>
            <div className="col-md-6">
              <div className={`${styles.termsconditionbannertextleftside}`}>
                <span className={`${styles.leftborderdesign}`}></span>
                <h6>Digital Marketing Agency In Dubai</h6>
                <h1>
                  By Using The Website, <br />
                  You Agree To Have <br />
                  Read And Comply <br />
                  With The <span className={`${styles.leftextdisplaycenter}`}>Terms And <br /> Conditions</span>
                </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles.termconbannrightside}`}>
                <span>
                  At Digital Gravity, we have leading industry professionals and state-of-the-art technology to ensure your business and brands lifts up on the digital front
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditionBanner;