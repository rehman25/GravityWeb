import React from 'react'
import style from '../../styles/about.module.css';
import Image from 'next/image';
import CartImage2 from '../../assets/images/banner/Mobile.webp'
import CartImage3 from '../../assets/images/banner/Laptop.webp'


const AboutCarts = () => {
    return (
        <>
            <section>
                <div className={`${style.AboutCarts}`}>
                    <div className="row mt-5">
                        <div className='col-lg-6 col-md-6 col-sm-6 mt-5 p-0'>
                            <div className={`${style.LeftCart}`}>
                                <h3>We Pilot You to Take on the Digital Landscape</h3>
                                <p>At Digital Gravity, we have leading industry professionals and state-of-the-art technology to ensure your business and brands lifts up on the digital front. Our approach is highly strategic and carefully executed to transform your business the way you want, guaranteeing incredible results and maximum profit.</p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 p-0'>
                            <div className={`row ${style.cartRows}`}>
                                <div className="col-lg-6  p-0">
                                    <div className={`row ${style.cartRow}`}>
                                        <div className="col-lg-12">
                                            <div className={`${style.cartBox1}`}>
                                                <h2 className={`${style.cartTitle}`}>We Are Different</h2>
                                                <p className={`${style.cartDescription}`}>Our creative expertise and approach take off from where others left for greater outcomes.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className={`${style.cartBox2}`}>
                                                <Image src={CartImage2} alt="Banner" className={`${style.cartImage1}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 p-0">
                                    <div className={`row ${style.cartRow}`}>
                                        <div className="col-lg-12">
                                            <div className={`${style.cartBox3}`}>
                                                <Image src={CartImage3} alt="Banner" className={`${style.cartImage2}`} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className={`${style.cartBox4}`}>
                                                <h2 className={`${style.cartTitle}`}>Our Inventive Style</h2>
                                                <p className={`${style.cartDescription}`}>We take your business as our own and give it just the makeover you want for the digital world</p>
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