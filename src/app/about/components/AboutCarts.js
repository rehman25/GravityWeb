import React from 'react'
import style from '../../styles/about.module.css';



const AboutCarts = () => {
    return (
        <>
            <section>
                <div className={`${style.AboutCarts}container-fluid`}>
                    <div className="row mt-5">
                        <div className='col-lg-6 mt-5'>
                            <div className={`${style.LeftCart}`}>
                                <h3>We Pilot You to Take on the Digital Landscape</h3>
                                <p>At Digital Gravity, we have leading industry professionals and state-of-the-art technology to ensure your business and brands lifts up on the digital front. Our approach is highly strategic and carefully executed to transform your business the way you want, guaranteeing incredible results and maximum profit.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            {/* Right Side */}
                            <div className="row">
                                {/* First Cart */}
                                <div className="col-lg-6">
                                    <div className={style.cart}>
                                        <h2>We Are Different</h2>
                                        <p>
                                            Our creative expertise and approach take-off from where others left for greater outcome.
                                        </p>
                                    </div>
                                </div>
                                {/* Second Cart */}
                                <div className="col-lg-6">
                                    <div className={style.cart}>
                                        <h2>Right Cart 2</h2>
                                        <p>Design and content for right cart 2.</p>
                                    </div>
                                </div>
                                {/* Third Cart */}
                                <div className="col-lg-6">
                                    <div className={style.cart}>
                                        <h2>Right Cart 3</h2>
                                        <p>Design and content for right cart 3.</p>
                                    </div>
                                </div>
                                {/* Fourth Cart */}
                                <div className="col-lg-6">
                                    <div className={style.cart}>
                                        <h2>Right Cart 4</h2>
                                        <p>Design and content for right cart 4.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutCarts;