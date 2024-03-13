import React, { Component } from 'react'
import style from './ourwork.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Text from '../text';
import Image from 'next/image';
import one from '../../assets/images/our-work/our-work-1.webp'
import oneLogo from '../../assets/images/our-work/belgravia-logo.svg'
import two from '../../assets/images/our-work/our-work-2.webp'
import TwoLogo from '../../assets/images/our-work/betterhomes-logo.svg'
import three from '../../assets/images/our-work/our-work-3.webp'
import threeLogo from '../../assets/images/our-work/cryptosouk-logo.svg'
import four from '../../assets/images/our-work/our-work-4.webp'
import fourLogo from '../../assets/images/our-work/emaar-logo.svg'
import five from '../../assets/images/our-work/our-work-5.webp'
import fiveLogo from '../../assets/images/our-work/saeed-logo.svg'
import six from '../../assets/images/our-work/our-work-6.webp'
import sixLogo from '../../assets/images/our-work/sharjah-fdi.svg'
import seven from '../../assets/images/our-work/our-work-7.webp'
import sevenLogo from '../../assets/images/our-work/shurooq-logo.svg'
import eight from '../../assets/images/our-work/our-work-8.webp'
import eightLogo from '../../assets/images/our-work/suzuki-logo.svg'
import Button from '../buttons';




function component() {
    return (
        <>
            <section className={`${style.our__work__section}`}>
                <div className="container-fluid">
                    <div className="row">
                            <div className="col-1"></div>
                            <div className='col-11'>
                                <Text text="Our Work" className="mb-5" animation="fade-right" />
                                <Work />
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default component

class Work extends Component {
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
            // centerMode: true,
            arrows: false,
            className: "",
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={one}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={oneLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Building a magnificent platform to aid the chanting purpose of the
                            Belgravia London. Loud and proud among competitors.
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={two}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={TwoLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Establishing a dynamic presence with incredible reach for a 
                            business with dedicated efforts to the real estate industry. 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={three}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={threeLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Assisting the business to stand tall and established among the 
                            competitors alongside growing with visibility, reach, and engagement. 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={four}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={fourLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Assisting businesses in representing and achieving their core 
                            values and objectives by initiating high-performing strategies. 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={five}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={fiveLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            A Well crafted and strategy-based project with utmost 
                            importance to the business objective achievement. 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={six}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={sixLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Developing a strong digital presence of platforms dedicated 
                            towards immense growth and recognizability. 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={seven}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={sevenLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Assisting business to maintain their digital 
                            footprint up to the mark while encouraging 
                            them to take more digital initiatives 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                    <div className={`${style.ourWork__Box}`}>
                        <Image
                            src={eight}
                            alt="Example Image"
                            className={`${style.work__Img}`}
                        />
                        <Image
                            src={eightLogo}
                            alt="Example Image"
                            className={`${style.work__Logo}`}
                        />
                        <p>
                            Assisting one of the most successful automobile 
                            companies to attain greater goals of digital presence. 
                        </p>
                        <Button id={`${style.show__Btn}`}/>
                    </div>
                </Slider>
            </div>
        );
    }
}