import React from 'react'
import style from '../../styles/about.module.css';
import Image from 'next/image';
import CartImage2 from '../../assets/images/banner/Mobile.webp'
import CartImage3 from '../../assets/images/banner/Laptop.webp'



const AboutCarts = () => {
    return (
        <>
            <section>
                <div className={`${style.AboutCarts} container-fluid mt-5`}>
                    <div className="row mt-5">
                        <div className='col-lg-6 mt-5'>
                            <div className={`${style.LeftCart}`}>
                                <h3>We Pilot You to Take on the Digital Landscape</h3>
                                <p>At Digital Gravity, we have leading industry professionals and state-of-the-art technology to ensure your business and brands lifts up on the digital front. Our approach is highly strategic and carefully executed to transform your business the way you want, guaranteeing incredible results and maximum profit.</p>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            {/* Right Side */}
                            <div className={`row ${style.cartRow}`}>
                                {/* First Row */}
                                <div className="col-lg-6">
                                    <div className={`row ${style.cartRow}`}>
                                        {/* First Cart */}
                                        <div className="col-lg-12">
                                            <div className={`${style.cartRow1}`}>
                                                <h2>We Are Different</h2>
                                                <p>Our creative expertise and approach take-off from where others left for greater outcome.</p>
                                            </div>
                                        </div>
                                        {/* Second Cart */}
                                        <div className="col-lg-12">
                                            <div className={`${style.cartRow2}`}>
                                                <Image src={CartImage2} alt="Banner" className={`${style.CartImage2}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Second Row */}
                                <div className="col-lg-6">
                                    <div className={`row ${style.cartRow}`}>
                                        {/* Third Cart */}
                                        <div className="col-lg-12">
                                            <div className={`${style.cartRow3}`}>
                                                <Image src={CartImage3} alt="Banner" className={`${style.CartImage3}`} />
                                            </div>
                                        </div>
                                        {/* Fourth Cart */}
                                        <div className="col-lg-12">
                                            <div className={`${style.Cart4}`}>
                                                <h2>Our Inventive Style</h2>
                                                <p>We take your business as our own and give it just the makeover you want for the digital world</p>
                                            </div>
                                        </div>
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