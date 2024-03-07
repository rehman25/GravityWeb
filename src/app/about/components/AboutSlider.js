import React from 'react';
import styles from '../../styles/about.module.css';

const AboutSlider = () => {
    return (
        <section>
            <div className={`${styles.AboutsliderSection} container-fluid`}>
                <div className="row d-flex ">
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card1}`}>
                            <h4> Creative </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card3}`}>
                            <h4> TechnicalDelivery </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card5}`}>
                            <h4> Marketing </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card7}`}>
                            <h4> Technology </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card8}`}>
                            <h4> Management </h4>
                        </div>
                    </div>
                </div>
                <div className="row d-flex ">
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card9}`}>
                            <h4> New Card 1 </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card10}`}>
                            <h4> New Card 2 </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card11}`}>
                            <h4> New Card 3 </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card12}`}>
                            <h4> New Card 4 </h4>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 ${styles.card}`}>
                        <div className={`${styles.card13}`}>
                            <h4> New Card 5 </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSlider;