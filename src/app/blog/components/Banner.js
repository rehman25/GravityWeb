import React from "react";
import styles from "../../styles/blog.module.css";


const Banner = () => {
    return (
        <>
            <section>
                <div className={`${styles.bannersection} `}>
                    <div className={`row mt-5 ${styles.bannertex}`}>
                        <div className="col-md-6">
                            <div className={`${styles.bannertextleftside}`}>
                                <span className={`${styles.borderdesign}`}></span>
                                <h6>Digital Marketing Agency In Dubai</h6>
                                <h1>
                                    Our Content  <br />
                                    Professionals &  <br />
                                    Influencers Put You On <br /> Top Of The
                                    <span className={`${styles.leftextdisplaycenter}`}> Search <br /> Engine</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${styles.bannertextrightside}`}>
                                <span>
                                    At Digital Mobix, we have leading industry professionals 
                                    and state-of-the-art technology to ensure your business 
                                    and brands lift up on the digital front.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
