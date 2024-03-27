'use client'
import React, { useState } from 'react'
import style from './component.module.css'
import Image from 'next/image'
import WebD from '../../assets/images/service/web-development.svg'
import { IoMdArrowForward } from "react-icons/io";
import Mobileapp from '../../assets/images/service/mobile-application.svg'
import Digital from "../../assets/images/service/digital-marketing.svg"
import Uiux from "../../assets/images/service/ui-ux-design.svg"
import Eco from "../../assets/images/service/ecommerce-solution.svg"
import Branding from "../../assets/images/service/branding-comm.svg"
import Video from "../../assets/images/service/video-animation.svg"
import It from "../../assets/images/service/resource-outsourcing.svg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Component = () => {
  const [isArrow, setArrow] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [isDigital, setDigital] = useState(false)
  const [isUiux, setUiux] = useState(false)
  const [isEco, setEco] = useState(false)
  const [isBranding, setBranding] = useState(false)
  const [isVideo, setVideo] = useState(false)
  const [isIt, setIt] = useState(false)


  const handleArrow = () => {
    setArrow(true)
  }
  const LehandleArrow = () => {
    setArrow(false)
  }


  const handleMobile = () => {
    setMobile(true)
  }

  const LehandleMobile = () => {
    setMobile(false)
  }

  const handleDigital = () => {
    setDigital(true)
  }
  const LehandleDigital = () => {
    setDigital(false)
  }
  const handleUiux = () => {
    setUiux(true)
  }
  const LehandleUiux = () => {
    setUiux(false)
  }
  const handleEco = () => {
    setEco(true)
  }
  const LehandleEco = () => {
    setEco(false)
  }
  const handleBranding = () => {
    setBranding(true)
  }
  const LehandleBranding = () => {
    setBranding(false)
  }
  const handleVideo = () => {
    setVideo(true)
  }
  const LehandleVideo = () => {
    setVideo(false)
  }
  const handleIt = () => {
    setIt(true)
  }
  const LehandleIt = () => {
    setIt(false)
  }


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Autoplay slides
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    pauseOnHover: true, // Pause autoplay on hover
    arrows: false, // Show navigation arrows
    // Custom next arrow component
    // beforeChange: (current, next) => setCurrentSlider(next),



  };

  return (
    <div className={`container-fluid ${style.container}`}>
      <div className={`row ${style.row}`}>
        <div className="col-lg-3">
          <h2 className={style.heading}>A FULL-Service <b>Create Digital  Agency</b> </h2>
        </div>
        <div className={`col-lg-9 ${style.boxrow}`}>

          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.box}`} onMouseEnter={handleArrow} onMouseLeave={LehandleArrow}>
            <div className={style.card}>
              {isArrow ?
                <div className={style.imgdivres}>
                  <Image alt="Example" src={WebD} className={style.Image} />
                </div>
                : <div className={style.imgdiv}>
                  <Image alt="Example" src={WebD} className={style.Image} />
                </div>
              }

              <div className={style.cardcontent}>
                <span>Web Development</span>
                <p>Desktop &amp; Mobile websites done right by professional web development experts.</p>
              </div>
              {isArrow ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}


            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4  ${style.box}`} onMouseEnter={handleMobile} onMouseLeave={LehandleMobile}>
            <div className={style.card}>
              {isMobile ? <div className={style.imgdivres}>
                <Image alt="Example" src={Mobileapp} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={Mobileapp} className={style.Image} />
              </div>}

              <div className={style.cardcontent}>
                <span>Mobile Application</span>
                <p>High performance mobile apps for your business.</p>
              </div>
              {isMobile ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>
          <div className={`col-lg-4 col-md-4  col-sm-4 ${style.box}`} onMouseEnter={handleDigital} onMouseLeave={LehandleDigital}>
            <div className={style.card}>
              {isDigital ? <div className={style.imgdivres}>
                <Image alt="Example" src={Digital} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={Digital} className={style.Image} />
              </div>}
              <div className={style.cardcontent}>
                <span>Digital Marketing</span>
                <p>Strategies to boost your conversions &amp; ROI done by gurus.</p>
              </div>
              {isDigital ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>
          <div className={`col-lg-4 col-md-4  col-sm-4 ${style.box}`} onMouseEnter={handleUiux} onMouseLeave={LehandleUiux}>
            <div className={style.card}>
              {isUiux ? <div className={style.imgdivres}>
                <Image alt="Example" src={Uiux} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={Uiux} className={style.Image} />
              </div>}
              <div className={style.cardcontent}>
                <span>UX/UI Design</span>
                <p>Great user experience, with responsive web design</p>
              </div>
              {isUiux ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.box}`} onMouseEnter={handleEco} onMouseLeave={LehandleEco}>
            <div className={style.card}>
              {isEco ? <div className={style.imgdivres}>
                <Image alt="Example" src={Eco} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={Eco} className={style.Image} />
              </div>}
              <div className={style.cardcontent}>
                <span>E-Commerce Solution</span>
                <p>Ecommerce: We create awesome online stores for simple, better and convenient shopping. Greater ecommerce experience, every time!</p>
              </div>
              {isEco ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.box}`} onMouseEnter={handleBranding} onMouseLeave={LehandleBranding}>
            <div className={style.card}>
              {isBranding ? <div className={style.imgdivres}>
                <Image alt="Example" src={Branding} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={Branding} className={style.Image} />
              </div>}
              <div className={style.cardcontent}>
                <span>Branding & Communication</span>
                <p>We cover the entire spectrum of digital marketing, including, designing your company logo.</p>
              </div>
              {isBranding ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.box}`} onMouseEnter={handleVideo} onMouseLeave={LehandleVideo}>
            <div className={style.card}>
              {isVideo ? <div className={style.imgdivres}>
                <Image alt="Example" src={Video} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={Video} className={style.Image} />
              </div>}
              <div className={style.cardcontent}>
                <span>Video Animation</span>
                <p>Video Animation: Giving Your World a Better, More Inspirational Look. Tell Amazing Stories with Our Video Animation. </p>
              </div>
              {isVideo ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.box}`} onMouseEnter={handleIt} onMouseLeave={LehandleIt}>
            <div className={style.card}>
              {isIt ? <div className={style.imgdivres}>
                <Image alt="Example" src={It} className={style.Image} />
              </div> : <div className={style.imgdiv}>
                <Image alt="Example" src={It} className={style.Image} />
              </div>}
              <div className={style.cardcontent}>
                <span>IT Resource Outsourcing</span>
                <p>Resource Outsourcing: We Empower Your Business &amp; Boost Competitiveness with Valuable Skillset &amp; the Right Talent.</p>
              </div>
              {isIt ? <div className={style.Arrow}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> : ""}
            </div>
          </div>


        </div>
        <Slider  {...settings} className={`col-lg-12 ${style.boxrowRes}`}>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.boxres}`} onMouseEnter={handleArrow} onMouseLeave={LehandleArrow}>
            <div className={style.card}>
              <div className={style.imgdiv}>
                <Image alt="Example" src={WebD} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>Web Development</span>
                <p>Desktop &amp; Mobile websites done right by professional web development experts.</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4  ${style.boxres}`} onMouseEnter={handleMobile} onMouseLeave={LehandleMobile}>
            <div className={style.card}>
                <div className={style.imgdiv}>
                <Image alt="Example" src={Mobileapp} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>Mobile Application</span>
                <p>High performance mobile apps for your business.</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>
          <div className={`col-lg-4 col-md-4  col-sm-4 ${style.boxres}`} onMouseEnter={handleDigital} onMouseLeave={LehandleDigital}>
            <div className={style.card}>
              <div className={style.imgdiv}>
                <Image alt="Example" src={Digital} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>Digital Marketing</span>
                <p>Strategies to boost your conversions &amp; ROI done by gurus.</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>
          <div className={`col-lg-4 col-md-4  col-sm-4 ${style.boxres}`} onMouseEnter={handleUiux} onMouseLeave={LehandleUiux}>
            <div className={style.card}>
              <div className={style.imgdiv}>
                <Image alt="Example" src={Uiux} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>UX/UI Design</span>
                <p>Great user experience, with responsive web design</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.boxres}`} onMouseEnter={handleEco} onMouseLeave={LehandleEco}>
            <div className={style.card}>
               <div className={style.imgdiv}>
                <Image alt="Example" src={Eco} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>E-Commerce Solution</span>
                <p>Ecommerce: We create awesome online stores for simple, better and convenient shopping. Greater ecommerce experience, every time!</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.boxres}`} onMouseEnter={handleBranding} onMouseLeave={LehandleBranding}>
            <div className={style.card}>
              <div className={style.imgdiv}>
                <Image alt="Example" src={Branding} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>Branding & Communication</span>
                <p>We cover the entire spectrum of digital marketing, including, designing your company logo.</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.boxres}`} onMouseEnter={handleVideo} onMouseLeave={LehandleVideo}>
            <div className={style.card}>
                <div className={style.imgdiv}>
                <Image alt="Example" src={Video} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>Video Animation</span>
                <p>Video Animation: Giving Your World a Better, More Inspirational Look. Tell Amazing Stories with Our Video Animation. </p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>
          <div className={`col-lg-4 col-md-4 col-sm-4 ${style.boxres}`} onMouseEnter={handleIt} onMouseLeave={LehandleIt}>
            <div className={style.card}>
               <div className={style.imgdiv}>
                <Image alt="Example" src={It} className={style.Image} />
              </div>
              <div className={style.cardcontent}>
                <span>IT Resource Outsourcing</span>
                <p>Resource Outsourcing: We Empower Your Business &amp; Boost Competitiveness with Valuable Skillset &amp; the Right Talent.</p>
              </div>
              <div className={style.Arrowres}>
                <IoMdArrowForward className={style.arrowIcon} />
              </div> 
            </div>
          </div>


        </Slider>
      </div>
    </div>
  )
}

export default Component