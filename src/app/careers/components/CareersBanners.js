import React from "react";
import styles from "../../styles/careers.module.css";

const CareersBanners = () => {
    return (
        <>
            <section>
                <div className={`row ${styles.careersbannertext}`}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4>
                            For internships, please fill in a quick form <span className={`${styles.specialWord}`}>here</span>
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CareersBanners;
