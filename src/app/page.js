'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import style from './styles/home.module.css'
import Image from 'next/image';
import Button from './component/buttons/index';
import Text from './component/text/index';
import OurWork from './component/OurWork/component'
import Portfolio from './Portfolio/page'
import Packages from './component/Packages/index'
import Cursor from './component/cursor/cursor'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { Tab, Tabs,  TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from './component/Header/component'
import webDevImg from './assets/images/web/web-development.webp'
import mobileImg from './assets/images/mobile/mobile-application.webp'
import digiMarketImg from './assets/images/digital-marketing/digital-marketing.webp'
import digiBranfingImg from './assets/images/digital-branding/digital-branding.webp'
import EcommerceImg from './assets/images/Ecommerce/ecommerce-development.webp'
import UIUXImg from './assets/images/UI-UX-Design/ui-ux-design.webp'
import VideoImg from './assets/images/video-animation/video-animation.webp'
import IT_ResourcesImg from './assets/images/IT-Resources/it-resource.webp'
import Branding from './component/Branding/index';
import FAQ from './component/FAQ/component'
import Footer from './component/Footer/component'
import Worth__Read from './component/Work-Read/index'
import Award from './component/Awards/components'
import Social from './component/SocialJoin/component'
import ReactPlayer from "react-player";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const [isActive, setActive] = useState('Web_Dev');
  const setIsActive = (tab) => {
    setActive(tab);
  };

 
  return (
    <div className={`${style.home}`}>
      <Cursor />
      <Header />
      <section>
        <div className={`${style.heroSection} container-fluid p-0`}>
          <div className="row mt-5 mx-0 p-0" style={{ width: "100%" }}>
            <div className={`col-lg-12 p-0 ${style.videoBox}`}>
              <div className={`${style.videoFrame}`}>
                <ReactPlayer
                  url="https://dg-demo.logomish.com/videos/home.mp4"
                  width={"100"} height={"80"}
                  playing="playing"
                  preload="true"
                  autoplay="true"
                  muted="true"
                  loop="true"
                  playsInline={true}
                />
              </div>
              <div className={`${style.heroRightSide}`}>
                <span className={`${style.heroHeadOne}`}>CONNECTING BRANDS</span>
                <span className={`${style.heroHeadTwo}`}>WITH GLOBAL</span>
                <span className={`${style.heroHeadTwo}`}>AUDIENCES</span>
              </div>
              <div className={`${style.heroSectionIcons}`}>
                <ul>
                  <span><FaFacebookF /></span>
                  <span><FaXTwitter /></span>
                  <span><AiOutlineInstagram /></span>
                  <span><CiLinkedin /></span>
                  <span><FaYoutube /></span>
                </ul>
              </div>
              <div className={`${style.heroLeftSide} col-lg-6 mt-5`}>
                <div>
                  <p>
                    You have an idea, we have the talent and resources to turn it into a reality.
                    Digital Gravity is a globally recognized digital agency elevating brands through
                    ground-breaking user experience and disruptive digital products.
                  </p>
                  <Button text="Let's Talk" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
     
      <section className={`${style.homeTabmainBox}`}
        id={`${isActive == "Web_Dev" ? style.webDevBg :
          isActive == "Mobile_Application" ? style.mobileBg :
            isActive == "Digital_Marketing" ? style.digiBg :
              isActive == "Digital_Branding" ? style.Digital_BranBg :
                isActive == "Ecommerce_Web" ? style.Ecommerce_WebBg :
                  isActive == "UI/UX" ? style.UIUXbg :
                    isActive == "Video_Animation" ? style.Video_Animationbg :
                      isActive == "IT_Resource" ? style.IT_ResourceBg : ""
          }`}
      >
        <div className="container-fluid" style={{position: "relative"}}> 
          <div className={`${style.mouseBox}`}>
            <div className={`${style.mouse}`}></div>
            <h6></h6>
           
          </div>
          <div className="row">
            <div className="col-lg-12">
            <Text text="Services" className="mb-5" animation="fade-right" />
              <div className={`${style.tabsFlexBox}`}>
                <ul className={`${style.tabslist}`} onMouseEnter={() => { setIsActive(null) }}>
                  <li onMouseEnter={() => { setIsActive("Web_Dev") }}><a href="" className={isActive === "Web_Dev" ? `${style.active}` : ""}>Web Development</a></li>
                  <li onMouseEnter={() => { setIsActive("Mobile_Application") }}><a href="" className={isActive === "Mobile_Application" ? `${style.active}` : ""}>Mobile Application Development</a></li>
                  <li onMouseEnter={() => { setIsActive("Digital_Marketing") }}><a href="" className={isActive === "Digital_Marketing" ? `${style.active}` : ""}>Digital Marketing</a></li>
                  <li onMouseEnter={() => { setIsActive("Digital_Branding") }}><a href="" className={isActive === "Digital_Branding" ? `${style.active}` : ""} style={{ color : isActive === "Digital_Branding" ? "white" : "rgb(179, 167, 167)", }}>Digital Branding & Communication</a></li>
                  <li onMouseEnter={() => { setIsActive("Ecommerce_Web") }}><a href="" className={isActive === "Ecommerce_Web" ? `${style.active}` : ""}>Ecommerce Web Development</a></li>
                  <li onMouseEnter={() => { setIsActive("UI/UX") }}><a href="" className={isActive === "UI/UX" ? `${style.active}` : ""}>UI/UX Design</a></li>
                  <li onMouseEnter={() => { setIsActive("Video_Animation") }}><a href="" className={isActive === "Video_Animation" ? `${style.active}` : ""}>Video Animation</a></li>
                  <li onMouseEnter={() => { setIsActive("IT_Resource") }}><a href="" className={isActive === "IT_Resource" ? `${style.active}` : ""}>Resource Outsourcing</a></li>
                </ul>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "Web_Dev" ? "block" : "none", }}>
                  <Image
                    src={webDevImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Get an edge over your competitors and boost your profitability
                      with magnetic web experiences. Digital Gravity is the choice of the UAE’s
                      leading brands for website design and web development services in Dubai.
                      Whether it’s custom web development or WordPress web development,
                      we make sure you get the best of both worlds in the form of a responsive,
                      secure, and high-performance website.
                    </p>
                    <p className='mt-3'> You can receive services in the following categories of Web Development:</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li><a href="">Wordpress Development </a></li>
                        <li><a href="">Sharepoint Development </a></li>
                        <li><a href="">Enterprise Development </a> </li>
                        <li><a href=""> Sitecore Development </a></li>
                        <li><a href="">PHP Development </a></li>
                        <li><a href="">Joomla Development </a></li>
                        <li><a href="">ASP.NET Development </a></li>
                        <li> <a href="">CMS Development </a></li>
                        <li><a href="">Drupal Development </a></li>
                        <li><a href="">Ibexa DXP </a></li>
                        <li><a href="">Laravel Development </a></li>
                        <li><a href="">Python Web App Development </a></li>
                        <li><a href=""> Angularjs Development </a> </li>
                        <li><a href=""> Website Maintenance Services </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "Mobile_Application" ? "block" : "none", }}>
                  <Image
                    src={mobileImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Leverage the power of mobile solutions and create a personalised marketing
                      channel for your audience. Digital Gravity offers comprehensive mobile
                      app development services for iOS and Android devices. In the form of native
                      and cross-platform applications, we carve out interfaces that win hearts
                      and accelerate your growth.
                    </p>
                    <p className='mt-3'> Innovative & Ingenious Mobile App Development Solutions in Dubai</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li><a href="">Hybrid Apps </a> </li>
                        <li><a href="">Android App Development </a></li>
                        <li><a href="">IOS App Development </a></li>
                        <li><a href="">React Native Apps </a></li>
                        <li><a href="">Flutter Apps </a></li>
                        <li><a href="">Progressive Web Apps </a></li>
                        <li><a href="">Ruby on Rails (ROR) Development </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "Digital_Marketing" ? "block" : "none", }}>
                  <Image
                    src={digiMarketImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Climb the ladder of success by accumulating more leads and sales with our
                      digital marketing services. We will help you achieve a substantial ROI in a
                      little time with search engine optimization, social media marketing,
                      and Google Ads with our tried and tested strategies.
                    </p>
                    <p className='mt-3'>Communicable & Captivating Digital Marketing Services</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li><a>Social Media Marketing (SMM) </a></li>
                        <li><a>Social Media Optimization (SMO) </a></li>
                        <li><a>Pay Per Click (PPC)</a></li>
                        <li><a>Search Engine Optimization (SEO) </a></li>
                        <li><a>Conversion Rate Optimization (CRO) </a></li>
                        <li><a>Email Marketing </a></li>
                        <li><a>Content Marketing </a></li>
                        <li><a>Online Reputation Management (ORM) </a></li>
                        <li><a>App Store Optimization (ASO) </a></li>
                        <li><a>Public Relation (PR) </a></li>
                        <li><a>Online Translation Services </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "Digital_Branding" ? "block" : "none", }}>
                  <Image
                    src={digiBranfingImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Promote your business to the masses and build a strong reputation in the
                      market with our branding and communication services. Now you can focus
                      on meeting the bottom line while we get your branding message across
                      to the target audience. We have a knack for crafting memorable brand
                      stories that win you lifelong customers and boost engagement for your brand.
                    </p>
                    <p className='mt-3'> Creative Branding & Communication Agency for Curious Minds.</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li> <a>
                          Company Profile &amp; Brochure Design </a>
                        </li>
                        <li>
                          <a>
                            Business Card Design </a>
                        </li>
                        <li>
                          <a>
                            Corporate Identity Design </a>
                        </li>
                        <li>
                          <a>
                            Packaging Designs </a>
                        </li>
                        <li>
                          <a>
                            Logo Design </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "Ecommerce_Web" ? "block" : "none", }}>
                  <Image
                    src={EcommerceImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Robust, sales-driven, and intuitive eCommerce solutions for online
                      businesses yearning to scale in a competitive digital landscape.
                      Digital Gravity is recognized as the top eCommerce web development
                      company in Dubai with a team of tech-savvy professionals, who can
                      integrate both simple and complex features into your online store.
                    </p>
                    <p className='mt-3'>You can receive services in the following categories of Ecommerce Web Development:</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li>
                          <a>
                            Woo Commerce Development </a>
                        </li>
                        <li>
                          <a>
                            Mirakl Development </a>
                        </li>
                        <li>
                          <a>
                            Magento Ecommerce Development </a>
                        </li>
                        <li>
                          <a>
                            Big Commerce Development </a>
                        </li>
                        <li>
                          <a>
                            Shopify Ecommerce Development </a>
                        </li>
                        <li>
                          <a>
                            Shopify Plus Ecommerce Developments </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "UI/UX" ? "block" : "none", }}>
                  <Image
                    src={UIUXImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Get bespoke user experiences that meet all your design needs.
                      We take pride in crafting stunning user interfaces that make it
                      fun for your audience to interact with your brand and come back
                      in the future for more. Whether it’s a mobile app or a website,
                      Digital Gravity’s team of UX/UI designers is the best you can hire for
                      UX/UI design services in Dubai.
                    </p>
                    <p className='mt-3'> A Creative UI/UX Design Agency in Dubai with Business Centric Approach</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li>
                          <a>
                            PSD To Responsive HTML </a>
                        </li>
                        <li>
                          <a>
                            UX Design Workshop </a>
                        </li>
                        <li>
                          <a>
                            Responsive Web Design </a>
                        </li>
                        <li>
                          <a>
                            UX Design </a>
                        </li>
                        <li>
                          <a>
                            Landing Page Design </a>
                        </li>
                        <li>
                          <a>
                            UX Audit </a>
                        </li>
                        <li>
                          <a>
                            Graphic Design </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "Video_Animation" ? "block" : "none", }}>
                  <Image
                    src={VideoImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      Create bewitching videos for your brand and enthral your
                      prospective customers. Digital Gravity is the best video
                      production company in Dubai you can choose to make yourself
                      look and sound awesome. We create everything you need from
                      explainer videos to sales videos, product videos, branding videos,
                      and a lot more in exactly the way you envisioned them.
                    </p>
                    <p className='mt-3'>  Compelling, Aesthetically Appealing & Immersive Video Animation.</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li>
                          <a>
                            Explanier Video Production </a>
                        </li>
                        <li>
                          <a>
                            Product Demo Animation </a>
                        </li>
                        <li>
                          <a>
                            Video Game Trailer </a>
                        </li>
                        <li>
                          <a>
                            3D Architectural Walkthroughs </a>
                        </li>
                        <li>
                          <a>
                            Medical Animation Studio </a>
                        </li>
                        <li>
                          <a>
                            Character Animation Video </a>
                        </li>
                        <li>
                          <a>
                            Whiteboard Animation Video </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${style.tab_Panel}`} style={{ display: isActive === "IT_Resource" ? "block" : "none", }}>
                  <Image
                    src={IT_ResourcesImg}
                    alt="Example Image"
                    className={`${style.TabImage}`}
                  />
                  <div>
                    <p>
                      We are an IT outsourcing company in Dubai to offer an
                      extended range of services including End User Support,
                      Application Investment, Cloud & Infrastructure expertise.
                      On-demand IT staff outsourcing solution Dubai specialises
                      exclusively for digital transformation with Custom Software
                      Development, Software Testing & QA, Cloud Computing, Mobile
                      & Web Development, Maintenance & Support, Blockchain Consulting,
                      Data Science, Internet of Things, UI/UX Design, MVP Development,
                      Nearshore/Offshore Software Development.
                    </p>
                    <p className='mt-3'> Cost-effective and Comprehensive IT Outsourcing Company</p>
                    <div>
                      <ul className={`${style.service_item__list_wrapper}`}>
                        <li>
                          <a>
                            Hire Mobile App Developer </a>
                        </li>
                        <li>
                          <a>
                            Hire Scrum Master in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire AWS Resources in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire QA Resources in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire Node.js Developer in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire Azure Developer in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire React JS Developers in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire React Native Developers in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire Sharepoint Developers in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire Dynamics 365 Developers in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire Project Managers in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire Dot Net Developers in Dubai </a>
                        </li>
                        <li>
                          <a>
                            Hire RPA in Dubai </a>
                        </li>
                        <li>
                          <a>
                            3D Google Maps Integration </a>
                        </li>
                        <li>
                          <a>
                            MarTech Consulting </a>
                        </li>
                        <li>
                          <a>
                            Digital Cloud Transformation Solutions </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   

      {/* AFTER BREAKPOINT 992 SHOW THIS SECTION */}
      <section className={`${style.servicesListBox}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <ul>
                <h5>Services</h5>
                <li><Link href={""}>Web Development</Link></li>
                <li><Link href={""}>Mobile Application Development</Link></li>
                <li><Link href={""}>Digital Marketing</Link></li>
                <li><Link href={""}>Digital Branding & Communication</Link></li>
                <li><Link href={""}>Ecommerce Web Development</Link></li>
                <li><Link href={""}>UI/UX Design</Link></li>
                <li><Link href={""}>Video Animation</Link></li>
                <li><Link href={""}>IT Resource Outsourcing</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <OurWork/> */}
      {/* <OurWork/> */}
      {/* <OurWork/> */}
      <Portfolio page="home"/>
      {/* <Branding /> */}
      <Packages />
      <Award />
      <FAQ />
      <Worth__Read />
      <Social />
      <Footer />
    </div>
  )
}

export default Page