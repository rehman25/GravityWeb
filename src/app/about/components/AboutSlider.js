import React from 'react';
import styles from '../../styles/about.module.css';

const AboutSlider = () => {
    return (
        <section>
            <div className={`${styles.AboutsliderSection} container-fluid mt-5`}>
                <div className="row d-flex mt-5 px-5 ">
                    <div className={`col-lg-2 col-md-2 col-sm-2 `}>
                        <div className={`col-6 ${styles.card}`}>
                            <div >
                                <h4> Creativity </h4>
                            </div>
                        </div>
                        <div className={`col-6 mt-1 ${styles.card}`}>
                            <div >
                                <h4> Design </h4>
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-2 col-md-2 col-sm-2 `}>
                        <div className={`col-6 ${styles.card}`}>
                            <div >
                                <h4> Consultancy </h4>
                            </div>
                        </div>
                        <div className={`col-6 mt-1 ${styles.card}`}>
                            <div >
                                {/* <h4> Technology </h4> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className={`col-lg-2 col-md-2 col-sm-2 `}>
                        <div className={`col-6 ${styles.card}`}>
                            <div >
                                <h4> Technical Delivery </h4>
                            </div>
                        </div>
                        <div className={`col-6 mt-1 ${styles.card}`}>
                            <div >
                                <h4> Development </h4>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className={'col-lg-12 col-md-12 col-sm-12'}>
                        <div>
                            <h4> Strategy </h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default AboutSlider;