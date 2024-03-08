import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "../../styles/about.module.css";

const Aboutbanner = () => {
  return (
    <>
      <section>
        <div className={`${style.banneraboutsection} container-fluid`}>
          <div className="row mt-5 justify-content-between align-items-end">
            <div className="col-md-6 mb-4 px-5 mt-4">
              <div className={`${style.bannertextleftside}`}>
                <h6 className={`${style.bannertexth6}`}>
                  Digital Marketing Agency In Dubai
                  <span className={style.bordertext}></span>
                </h6>
                <h1 className={`${style.bannertexth1}`}>
                  We Activate <br/>
                  Businesses & Brands  <br/>
                  for the
                </h1>
              </div>
            </div>
            <div className="col-md-6 mb-4 px-5 ">
              <div className={`${style.bannertextrightside}`}>
                <p>
                  Digital Gravity is an accomplished digital transformation
                  company in Dubai with a progressive perspective. We offer
                  scalable web and mobile solutions coupled with digital
                  marketing services under one roof — without silos or handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbanner;
