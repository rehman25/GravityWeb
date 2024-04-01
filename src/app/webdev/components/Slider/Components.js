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
    const [currentSlider , setCurrentSlider] = useState(0)
    const [Previous , setPrevious] = useState(0)

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

 
    
  
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true, // Autoplay slides
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
        pauseOnHover: true, // Pause autoplay on hover
        arrows: true, // Show navigation arrows
        prevArrow: <MdOutlineArrowBackIos />, // Custom previous arrow component
        nextArrow: <MdArrowForwardIos />, // Custom next arrow component
        beforeChange: (current, next) => setCurrentSlider(next),
        

       
    };
    
   const slider = [
       { image: wordpress, text: "Wordpress Developments", ID : "1"},
       { image: PHPD, text: "PHP Development", ID : "2"},
       { image: CMS, text: "CMS Development", ID : "3"},
       { image: Laravel, text: "Laravel Development" ,  ID : "4"},
       { image: Whatapp, text: "WhatsApp Integration", ID: "5"},
       { image: website, text: "Website Maintenance Services", ID : "6"},
   ];

    return (
        <div className={`container-fluid ${styles.container}`}>

        <div className={`row ${styles.row2}`}>
        <div className={`col-lg-5 ${styles.sliderCont}`}>
        <h6 className={styles.Heading}>{`Your Go-To`}  <span> Website & Web Application  Development</span>{"Agency in Dubai"}</h6>
                   
                    <Slider {...settings}>
                        {slider.map((slider, index) =>   (
                        <div key={index} className={styles.sliders} onMouseEnter={handleMouse}>
                            <div className={styles.ContentConatiner}>
                                <div className={styles.slidercontent}>
                                    <Image src={slider.image} alt='' className={styles.slideImage} />
                                </div>
                                <p className={styles.sliderPara}>{slider.text}</p>
                            </div>
                        </div>
                        ))}
                        
                    
                    </Slider>
                    
                </div>


                 <div className={`col-lg-1 ${styles.arrows}`}>
                     <p>1/6</p>
                    <div className={styles.slideArrow}>
                        <MdArrowForwardIos />
                    </div>
                    <div className={styles.slideArrow}>
                        <MdOutlineArrowBackIos />
                    </div>
                </div> 

                
           <div className={`col-lg-6 first-letter: ${styles.cardcont}`}>
                   <div className={styles.card}>
                        <h2> Elevate Your Digital Presence With Digital Gravity: {"Dubai's"} Premier Web Development Agency</h2>
                        <p> At Digital Gravity, we {"don't"} just build websites; we craft digital experiences that leave a lasting impression. As a leading web development agency in Dubai, we have successfully designed and developed over 300 websites, catering to diverse industries both locally and globally.</p>
                        <p>From front-end developers to back-end engineers, our talent is the heartbeat of our success. We thrive on executing complex web projects while embracing {"out-of-the-box"} business models.</p>
                        <p>Our web team boasts expertise in a range of languages and frameworks, including PHP, Java, Python, JavaScript, C#, C++, Ruby, Codeigniter, and Laravel.</p>
                        <p>From real estate, healthcare, restaurants, and delivery services, to auto repair, SaaS, entertainment, education, and fashion. We gravitate to collaborating with any industry.</p>
                        {slider[currentSlider].ID == "1" && ( 
                            <div className={styles.showdiv}>
                                <span>Wordpress Development</span>
                                <p>Craft exceptional PHP websites to impress and captivate your clients. We begin by understanding your needs and crafting a tailored plan for your future solution. Our expertise extends to selecting the most efficient PHP framework for seamless development.</p>
                                <div className={styles.read} onMouseEnter={handlHover} onMouseLeave={handlHoverOFf}>
                                    <h6 className={HoverArrow ? styles.readmore2 : styles.readmore}>read more</h6>
                                    {HoverArrow ? <span className={styles.arrow2}> <IoMdArrowForward className={styles.ArrowICon} /></span> : <span className={styles.arrow}> <MdArrowOutward /></span>}
                                    
                                    
                                </div>
                            </div>
                        )}
                        {slider[currentSlider].ID == "2" ?
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
                        {slider[currentSlider].ID == "3" ?
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
                        {slider[currentSlider].ID == "4" ?
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
                        {slider[currentSlider].ID == "5" ?
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
                        {slider[currentSlider].ID == "6" ?
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
