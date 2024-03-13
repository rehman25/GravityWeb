
'use client'
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import style from './worth-read.module.css'
import one from '../../assets/images/blog/blog1.webp'
import two from '../../assets/images/blog/blog2.webp'
import three from '../../assets/images/blog/blog3.webp'
import four from '../../assets/images/blog/blog4.webp'
import five from '../../assets/images/blog/blog5.webp'
import Image from 'next/image';
import Text from '../text';


const index = () => {
    return (
        <>
            <section className={`${style.bgColor}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                            <Text text="Worth a read" className="mb-5" animation="fade-right" />
                                <WorthRead />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index

class WorthRead extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            className: "",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    }
                  },
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={`${style.read__box}`}>
                        <Image
                            src={one}
                            alt="Example Image"
                            className={`${style.read__img}`}
                        />
                        <h5></h5>
                        <div>
                            <span>Ecommerce</span>
                            <p>A Detailed Overview on Facebook for WooCommerce</p>
                        </div>
                    </div>
                    <div className={`${style.read__box}`}>
                        <Image
                            src={two}
                            alt="Example Image"
                            className={`${style.read__img}`}
                        />
                        <h5></h5>
                        <div>
                            <span>IT Outsourcing </span>
                            <p>Our Streamlined Approach Towards Resource Outsourcing Challenges in 2022</p>
                        </div>
                    </div>
                    <div className={`${style.read__box}`}>
                        <Image
                            src={three}
                            alt="Example Image"
                            className={`${style.read__img}`}
                        />
                        <h5></h5>
                        <div>
                            <span>DG NEWS</span>
                            <p>GITEX Global 2022: A look into the Future of Modern Middle East</p>
                        </div>
                    </div>
                    <div className={`${style.read__box}`}>
                        <Image
                            src={four}
                            alt="Example Image"
                            className={`${style.read__img}`}
                        />
                        <h5></h5>
                        <div>
                            <span>UI/UX</span>
                            <p>UX Audit Checklist For Every Business</p>
                        </div>
                    </div>
                    <div className={`${style.read__box}`}>
                        <Image
                            src={five}
                            alt="Example Image"
                            className={`${style.read__img}`}
                        />
                        <h5></h5>
                        <div>
                            <span>UI/UX</span>
                            <p>A Step-by-Step Look at the Modern Web Design Process in 2022</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}