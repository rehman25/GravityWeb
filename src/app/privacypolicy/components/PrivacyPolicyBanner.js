import React from "react";
import styles from "../../styles/privacypolicy.module.css";


const PrivacyPolicyBanner = () => {
    return (
        <>
            <section>
                <div className={`${styles.PrivacyPolicyBanner} `}>
                    <div className={`row mt-5 ${styles.PrivacyPolicyBannertext}`}>
                        <div className="col-md-6">
                            <div className={`${styles.PrivacyPolicyBannertextleftside}`}>
                                <span className={`${styles.leftborderdesign}`}></span>
                                <h6>Digital Marketing Agency In Dubai</h6>
                                <h1>
                                    Privacy Policy
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className={`${styles.PrivacyPolicyBannertextrightside}`}>
                                <span>
                                    At Digital Gravity, we have leading industry professionals and state-of-the-art technology to ensure your business and brands lifts up on the digital front.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyBanner;