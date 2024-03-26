"use client"
import React, { Component } from 'react'
import style from '../webdev.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import img1 from '../../assets/images/our-work/global-catering.webp'
import icon1 from '../../assets/images/our-work/saeed-logo.svg'



function Workslidercomponent() {
    return (
        <>
            <section className={`${style.our__work__section}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-1 d-lg-block d-none"></div>
                        <div className='col-11'>
                            <Work />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Workslidercomponent

class Work extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: false,
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
                    <div className={`${style.cardMainBox}`}>
                        <div className={`${style.cardbox}`}>
                            <div className={`${style.card}`}>
                                <div className={`${style.card_front}`}>
                                    <Image
                                        src={img1}
                                        alt="Example Image"
                                        className={`${style.card_img}`}
                                    />
                                </div>
                                <div className={`${style.card_back}`}>
                                    <div className={`${style.inner_card_back}`}>
                                        <Image
                                            src={icon1}
                                            alt="Example Image"
                                            className={`${style.card_img}`}
                                        />
                                        <span>
                                            The dynamic marketing consultant entrusted us to transform their outdated website into a captivating online showcase. Our team delivered a visually appealing, {"user-friendly"}, and informative platform, elevating {"Deebaj's"} online presence to resonate effectively with their target audience.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Dubai Silicon Oasis</p>
                    </div>
                    <div className={`${style.cardMainBox}`}>
                        <div className={`${style.cardbox}`}>
                            <div className={`${style.card}`}>
                                <div className={`${style.card_front}`}>
                                    <Image
                                        src={img1}
                                        alt="Example Image"
                                        className={`${style.card_img}`}
                                    />
                                </div>
                                <div className={`${style.card_back}`}>
                                    <div className={`${style.inner_card_back}`}>
                                        <Image
                                            src={icon1}
                                            alt="Example Image"
                                            className={`${style.card_img}`}
                                        />
                                        <span>
                                            The dynamic marketing consultant entrusted us to transform their outdated website into a captivating online showcase. Our team delivered a visually appealing, {"user-friendly"}, and informative platform, elevating {"Deebaj's"} online presence to resonate effectively with their target audience.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Dubai Silicon Oasis</p>
                    </div>
                    <div className={`${style.cardMainBox}`}>
                        <div className={`${style.cardbox}`}>
                            <div className={`${style.card}`}>
                                <div className={`${style.card_front}`}>
                                    <Image
                                        src={img1}
                                        alt="Example Image"
                                        className={`${style.card_img}`}
                                    />
                                </div>
                                <div className={`${style.card_back}`}>
                                    <div className={`${style.inner_card_back}`}>
                                        <Image
                                            src={icon1}
                                            alt="Example Image"
                                            className={`${style.card_img}`}
                                        />
                                        <span>
                                            The dynamic marketing consultant entrusted us to transform their outdated website into a captivating online showcase. Our team delivered a visually appealing, {"user-friendly"}, and informative platform, elevating {"Deebaj's"} online presence to resonate effectively with their target audience.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Dubai Silicon Oasis</p>
                    </div>
                    <div className={`${style.cardMainBox}`}>
                        <div className={`${style.cardbox}`}>
                            <div className={`${style.card}`}>
                                <div className={`${style.card_front}`}>
                                    <Image
                                        src={img1}
                                        alt="Example Image"
                                        className={`${style.card_img}`}
                                    />
                                </div>
                                <div className={`${style.card_back}`}>
                                    <div className={`${style.inner_card_back}`}>
                                        <Image
                                            src={icon1}
                                            alt="Example Image"
                                            className={`${style.card_img}`}
                                        />
                                        <span>
                                            The dynamic marketing consultant entrusted us to transform their outdated website into a captivating online showcase. Our team delivered a visually appealing, {"user-friendly"}, and informative platform, elevating {"Deebaj's"} online presence to resonate effectively with their target audience.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Dubai Silicon Oasis</p>
                    </div>
                </Slider>
            </div>
        );
    }
}