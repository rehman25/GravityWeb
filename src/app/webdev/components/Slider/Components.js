'use client'
import React, { useState , useEffect } from 'react'
import styles from './Components.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Image from 'next/image';
import PHPD from '../../../assets/images/webdev/php-development.webp'
import CMS from '../../../assets/images/webdev/cms-development.webp'
import Laravel from '../../../assets/images/webdev/laravel-development.webp'
import Whatapp from '../../../assets/images/webdev/whatsapp-integration.webp'
import website from '../../../assets/images/webdev/website-maintenance-services.webp'
import wordpress from '../../../assets/images/webdev/wordpress-development.webp'
import { IoMdArrowForward } from "react-icons/io";






const Components = () => {
    const [isID , setID] = useState()
    const [HoverArrow , setHoverArrow] = useState(false)

    const handlHover = () => {
        setHoverArrow(true)
    }
    const handlHoverOFf = () => {
        setHoverArrow(false)
    }

    const handleMouse = () => {
        setID('1')
    }
   const HandleMousePhp = () => {
    setID('2')
   } 
   const HandleMouseCms = () => {
    setID('3')
   }
   const HandleMouseLaravel = () => {
    setID('4')
   }
   const HandleMouseWhatapp = () => {
    setID('5')
   }
   const HandleMouseWebsite = () => {
    setID('6')
   }

    // useEffect(() => {
    //   handleMouse()
    //   HandleMousePhp()
    //   HandleMouseCms()
    //  HandleMouseLaravel()
    //  HandleMouseWhatapp()
    //  HandleMouseWebsite()
    // }, [isID])
    
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.6,
        slidesToScroll: 1.6,
        autoplay: true, // Autoplay slides
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
        pauseOnHover: true, // Pause autoplay on hover
        arrows: true, // Show navigation arrows
        prevArrow: <MdOutlineArrowBackIos />, // Custom previous arrow component
        nextArrow: <MdArrowForwardIos />, // Custom next arrow component
        responsive: [
            {
                breakpoint: 768, // Adjust settings for screens smaller than 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Adjust settings for screens smaller than 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={`container-fluid ${styles.container}`}>

        <div className={`row ${styles.row2}`}>
        <div className={`col-lg-5 ${styles.sliderCont}`}>
        <h6 className={styles.Heading}>{`Your Go-To`}  <span> Website & Web Application  Development</span>{"Agency in Dubai"}</h6>
                    <Slider {...settings}>
                        <div className={styles.sliders} onMouseEnter={handleMouse}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={wordpress} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>Wordpress Developmentss</p>
                            </div>
                        </div>
                        <div className={styles.sliders} onMouseMove={HandleMousePhp}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={PHPD} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>PHP Development</p>
                            </div>
                        </div>
                        <div className={styles.sliders} onMouseMove={HandleMouseCms}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={CMS} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>CMS Development</p>
                            </div>
                        </div>
                        <div className={styles.sliders} onMouseMove={HandleMouseLaravel}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={Laravel} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>Laravel Development</p>
                            </div>
                        </div>
                        <div className={styles.sliders} onMouseMove={HandleMouseWhatapp}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={Whatapp} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>WhatsApp Integration</p>
                            </div>
                        </div>
                        <div className={styles.sliders} onMouseMove={HandleMouseWebsite}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={website} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>Website Maintenance Services</p>
                            </div>
                        </div>
                    </Slider>
                    
                </div>


                {/*    <div className={`col-lg-1 ${styles.arrows}`}>
                     <p>1/6</p>
                    <div className={styles.slideArrow}>
                        <MdArrowForwardIos />
                    </div>
                    <div className={styles.slideArrow}>
                        <MdOutlineArrowBackIos />
                    </div>
                </div> */}

                
           <div className={`col-lg-6 p-2 ${styles.cardcont}`}>
                   <div className={styles.card}>
                        <h2> Elevate Your Digital Presence With Digital Gravity: Dubai's Premier Web Development Agency</h2>
                        <p> At Digital Gravity, we don't just build websites; we craft digital experiences that leave a lasting impression. As a leading web development agency in Dubai, we have successfully designed and developed over 300 websites, catering to diverse industries both locally and globally.</p>
                        <p>From front-end developers to back-end engineers, our talent is the heartbeat of our success. We thrive on executing complex web projects while embracing out-of-the-box business models.</p>
                        <p>Our web team boasts expertise in a range of languages and frameworks, including PHP, Java, Python, JavaScript, C#, C++, Ruby, Codeigniter, and Laravel.</p>
                        <p>From real estate, healthcare, restaurants, and delivery services, to auto repair, SaaS, entertainment, education, and fashion. We gravitate to collaborating with any industry.</p>
                        {isID == "1" ? 
                            <div className={styles.showdiv}>
                                <span>Wordpress Development</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}
                                    
                                    
                                </div>
                            </div>
                            : 
                          ""
                        }
                        {isID == "2" ?
                            <div className={styles.showdiv}>
                                <span>PHP Development</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}

                                </div>
                            </div>
                            :
                            ""
                        }
                        {isID == "3" ?
                            <div className={styles.showdiv}>
                                <span>CMS Development</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}

                                </div>
                            </div>
                            :
                            ""
                        }
                        {isID == "4" ?
                            <div className={styles.showdiv}>
                                <span>Laravel Development</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}

                                </div>
                            </div>
                            :
                            ""
                        }
                        {isID == "5" ?
                            <div className={styles.showdiv}>
                                <span>Website Maintenance Services</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}

                                </div>
                            </div>
                            :
                            ""
                        }
                        {isID == "6" ?
                            <div className={styles.showdiv}>
                                <span>WhatsApp Integration</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}

                                </div>
                            </div>
                            :
                            ""
                        }
                        
                   </div>
                </div>   
            </div>
        </div>
    )
}

export default Components
