'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Image from 'next/image';
import Style from './component.module.css'
import Brandlogo from '../../assets/images/employeessay/brand-logo.webp'
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import WordPress from '../../assets/images/headerTabs/wordpress.png'
import PHp from '../../assets/images/headerTabs/PHP.svg'
import CMS from '../../assets/images/headerTabs/CMS.svg'
import Laravel from '../../assets/images/headerTabs/LARAVEL.svg'
import System from '../../assets/images/headerTabs/setting.png'
import ReactNative from '../../assets/images/headerTabs/REACT-NATIVE.svg'
import Hybrid from '../../assets/images/headerTabs/HYBRID.svg'
import Android from '../../assets/images/headerTabs/ANDROID.svg'
import Ios from '../../assets/images/headerTabs/IOS.svg'
import Flutter from '../../assets/images/headerTabs/FLUTTER.svg'
import Progressive from '../../assets/images/headerTabs/PROGRESSIVE-WEB.svg'
import SEO from '../../assets/images/headerTabs/SEARCH-ENGINE-OPTIMIZATION.svg'
import SMM from '../../assets/images/headerTabs/SOCIAL-MEDIA-MARKETING.svg'
import PMM from '../../assets/images/headerTabs/PAY-PER-CLICK.svg'
import Email from '../../assets/images/headerTabs/EMAIL-MARKETING.svg'
import Influncer from '../../assets/images/headerTabs/influencer-marketing.svg'
import AppStore from '../../assets/images/headerTabs/APP-STORE-OPTIMIZATION.svg'
import PSD from '../../assets/images/headerTabs/PSD-TO-RESPONSIVE-HTML.svg'
import WorkShop from '../../assets/images/headerTabs/UX-DESIGN-WORKSHOP.svg'
import ResWeb from '../../assets/images/headerTabs/RESPONSIVE-WEB.svg'
import Uxdesign from '../../assets/images/headerTabs/UX-DESIGN.svg'
import Landingpage from '../../assets/images/headerTabs/LANDING-PAGE.svg'
import Uxaudit from '../../assets/images/headerTabs/UX-AUDIT.svg'
import GraphicDesign from '../../assets/images/headerTabs/GRAPHIC-DESIGN.svg'
import Woo from '../../assets/images/headerTabs/WOO-COMMERCE.svg'
import Mirakl from '../../assets/images/headerTabs/MIRAKL-DEVELOPMENT.svg'
import Magento from '../../assets/images/headerTabs/MAGENTO-ECOMMERCE.svg'
import Big from '../../assets/images/headerTabs/BIG-COMMERCE.svg'
import Shopify from '../../assets/images/headerTabs/SHOPIFY-ECOMMERCE.svg'
import Company from '../../assets/images/headerTabs/COMPANY-PROFILE-&-BROCHURE.svg'
import Bcard from '../../assets/images/headerTabs/BUSINESS-CARD.svg'
import Corporate from '../../assets/images/headerTabs/CORPORATE-IDENTITY.svg'
import packaging from '../../assets/images/headerTabs/PACKAGING.svg'
import LogoD from '../../assets/images/headerTabs/LOGO.svg'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { color } from 'framer-motion';
import { MdKeyboardArrowUp } from "react-icons/md";



const Page = () => {
  const [iscontactForm, setContactForm] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [isTabs, setTabs] = useState(false);
  const [WebDev, setWebDev] = useState(true)
  const [MobileDev, setMobileDev] = useState(false)
  const [Design, setDesign] = useState(false)
  const [Marketing, setMarketing] = useState(false)
  const [Ecommerce, setEcommerce] = useState(false)
  const [Branding, setBranding] = useState(false)

  const handleContactForm = () => {
    setContactForm(!iscontactForm);
  }
  const handleMenu = () => {
    setMenu(!isMenu);
  }


  const handleWebDev = () => {
    setWebDev(true);
    setBranding(false);
    setDesign(false);
    setMarketing(false);
    setEcommerce(false);
    setMobileDev(false);
  }

  const handleMobileDev = () => {
    setMobileDev(true);
    setWebDev(false);
    setBranding(false);
    setDesign(false);
    setMarketing(false);
    setEcommerce(false);
  }

  const handleDesign = () => {
    setDesign(true);
    setWebDev(false);
    setBranding(false);
    setMarketing(false);
    setEcommerce(false);
    setMobileDev(false);
  }

  const HandleBranding = () => {
    setBranding(true);
    setWebDev(false);
    setDesign(false);
    setMarketing(false);
    setEcommerce(false);
    setMobileDev(false);
  }

  const HandleMarketing = () => {
    setMarketing(true);
    setWebDev(false);
    setDesign(false);
    setBranding(false);
    setEcommerce(false);
    setMobileDev(false);
  }

  const HandleEcommerce = () => {
    setEcommerce(true);
    setWebDev(false);
    setDesign(false);
    setBranding(false);
    setMarketing(false);
    setMobileDev(false);
  }

  const onHover = () => {
    setTabs(true);
  }

  const offHover = () => {
    setTabs(false);
  }


  const [isCollapsed, setCollapsed] = useState(true);
  const [isInnerCollapsed, setInnerCollapsed] = useState(true);
  const [isMobileCollapsed, setMobileCollapsed] = useState(true);
  const [isDigitalCollapsed, setDigitalCollapsed] = useState(true);
  const [isUxCollapsed, setUxCollapsed] = useState(true);
  const [isEcommerceWebCollapsed, setEcommerceWebCollapsed] = useState(true);
  const [isBrandingCollapsed, setBrandingCollapsed] = useState(true);
  const [isVedioCollapsed, setVedioCollapsed] = useState(true)
  const [isResourceCollapsed , setResourceCollapsed] = useState(true)

  const handleToggle = () => {
    setCollapsed(!isCollapsed);
  };

  const handleInnerToggle = () => {
    setInnerCollapsed(!isInnerCollapsed);
    
  };

  const handleMobileToggle = () => {
    setMobileCollapsed(!isMobileCollapsed);
  };

  const handleDigitalToggle = () => {
    setDigitalCollapsed(!isDigitalCollapsed);
  };

  const HandleUxToggle = () => {
    setUxCollapsed(!isUxCollapsed);
  }

  const HandleEcommerceToggle = () => {
    setEcommerceWebCollapsed(!isEcommerceWebCollapsed);
  }

  const HandleBrandingToggle = () => {
    setBrandingCollapsed(!isBrandingCollapsed);
  }
  const HandleVedioToggle = () => {
    setVedioCollapsed(!isVedioCollapsed);
  }
  const HandleResourceToggle = () => {
    setResourceCollapsed(!isResourceCollapsed);
  }

  const textStyle = {
    color: isCollapsed ? 'black' : 'red',
  };
  const ActiveInnerWeb ={
    color: isInnerCollapsed ? 'black' : 'red',
  }
  const ActiveMobile = {
    color: isMobileCollapsed ? 'black' : 'red',
  }

  const ActiveDigital = {
    color: isDigitalCollapsed ? 'black' : 'red',
  }
  
  const ActiveUX = {
    color: isUxCollapsed ? 'black' : 'red',
  }
  const ActiveEcommerce = {
    color: isEcommerceWebCollapsed ? 'black' : 'red',
  }

  const ActiveBranding = {
    color: isBrandingCollapsed ? 'black' : 'red',
  }

  const ActiveVedio = {
    color: isVedioCollapsed ? 'black' : 'red',
  }
  const ActiveResource = {
    color: isResourceCollapsed ? 'black' : 'red',
  }
  return (

    <div className={`container-fluid ${Style.Container}`} onMouseLeave={offHover}>
      <div className={`${'row'} ${Style.row}`}>
        <div className={`col-lg-2 ${Style.logoCont}`}>
          <div className={Style.logo}>
            <Image alt="Example" src={Brandlogo} className={Style.brandImage} />
          </div>
        </div>
        <div className={`col-lg-7 ${Style.MENU}`}>
          <ul className={Style.HeaderUl}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/Services" onMouseEnter={onHover}>SERVICES</Link>
              {
                isTabs ?
                  <div className={`row ${Style.servicesTable}`} onMouseEnter={onHover}>
                    <div className={`col-md-4 ${Style.Tabs}`} >
                      <ul>
                        <li className={Style.dropList} onMouseEnter={handleWebDev}><Link href="">WEB DEVELOPMENT</Link></li>
                        <li className={Style.dropList} onMouseEnter={handleMobileDev}><Link href="" >MOBILE APPLICATION DEVELOPMENT</Link></li>
                        <li className={Style.dropList} onMouseEnter={HandleMarketing}><Link href="">DIGITAL MARKETING</Link></li>
                        <li className={Style.dropList} onMouseEnter={handleDesign}><Link href="">UI/UX</Link></li>
                        <li className={Style.dropList} onMouseEnter={HandleEcommerce}><Link href="">E-COMMERCE WEB DEVELOPMENT</Link></li>
                        <li className={Style.dropList} onMouseEnter={HandleBranding}><Link href="">DIGITAL BRANDING & COMMUNICATION</Link></li>
                      </ul>
                    </div>  
                    <div className={`col-md-8 ${Style.Down}`}>
                      {WebDev ?
                        <>
                          <div className={Style.RowTabs}>
                            <span className={Style.TabHead}>
                              WEB DEVELOPMENT
                            </span>
                          </div>
                          <div className={`row ${Style.ContentRow}`}>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={WordPress} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>WORD PRESS DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={PHp} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>PHP DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={CMS} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>CMS DEVELOPMENT</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Laravel} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>LARAVEL DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={System} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>WEBSITE MAINTENANCE SERVICES</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={System} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>WORD PRESS DEVELOPMENT</Link>
                              </div>
                            </div>
                          </div>
                        </> : ""}
                      {MobileDev ?
                        <>
                          <div className={Style.RowTabs}>
                            <span className={Style.TabHead}>
                              MOBILE APPLICATION DEVELOPMENT
                            </span>
                          </div>
                          <div className={`row ${Style.ContentRow}`}>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Hybrid} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>HYBIRD APPS</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Android} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>ANDROID APP DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Ios} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>IOS APP DEVELOPMENT</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={ReactNative} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>REACT NATIVE APPS</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Flutter} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>FLUTTER APPS</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Progressive} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>PROGRESSIVE WEB APPS</Link>
                              </div>
                            </div>
                          </div>
                        </> : ""}
                      {Design ?
                        <>
                          <div className={Style.RowTabs}>
                            <span className={Style.TabHead}>
                              UI/UX DESIGN
                            </span>
                          </div>
                          <div className={`row ${Style.ContentRow}`}>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={PSD} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>PSD TO RESPONSIVE HTML</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={WorkShop} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>UX DESIGN WORKSHOP</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={ResWeb} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>RESPONSIVE WEB DESIGN</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Uxdesign} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>UX DESIGN</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Landingpage} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>LANDING PAGE DESIGN</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Uxaudit} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>UX AUDIT</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={GraphicDesign} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>GRAPHIC DESIGN</Link>
                              </div>
                            </div>
                          </div>
                        </> : ""}
                      {Marketing ?
                        <>
                          <div className={Style.RowTabs}>
                            <span className={Style.TabHead}>
                              DIGITAL MARKETING
                            </span>
                          </div>
                          <div className={`row ${Style.ContentRow}`}>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={SEO} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>SEARCH ENGINE OPTIMIZATION(SE0)</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={SMM} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>SOCIAL MEDIA MARKETING</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={PMM} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>PAID MEDIA MARKETING</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Email} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>EMAIL MARKETING</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Influncer} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>INFLUENCER MARKETING</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={AppStore} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>APP STORE OPTIMIZATION</Link>
                              </div>
                            </div>
                          </div>
                        </> : ""}
                      {Ecommerce ?
                        <>
                          <div className={Style.RowTabs}>
                            <span className={Style.TabHead}>
                              E-COMMERCE WEB DEVELOPMENT
                            </span>
                          </div>
                          <div className={`row ${Style.ContentRow}`}>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Woo} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>WOO COMMERCE DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Mirakl} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>MIRAKL DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Magento} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>MAGENTO ECOMMERCE DEVELOPMENT</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Big} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>BIG ECOMMERCE DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Shopify} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>SHOPIFY ECOMMERCE DEVELOPMENT</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Shopify} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>SHOPIFY PLUS ECOMMERCE DEVELOPMENT</Link>
                              </div>
                            </div>
                          </div>
                        </> : ""}
                      {Branding ?
                        <>
                          <div className={Style.RowTabs}>
                            <span className={Style.TabHead}>
                              DIGITAL BRANDING & COMMUNICATION
                            </span>
                          </div>
                          <div className={`row ${Style.ContentRow}`}>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Company} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>COMPANY PROFILE & BROUCHER DESIGN</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Bcard} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>BUSINESS CARD DESIGN</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={Corporate} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>CORPORATE DESIGN</Link>
                              </div>
                            </div>
                            <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={packaging} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>PACKAGING DESIGN</Link>
                              </div>
                              <div className={`col-4 ${Style.TabContent}`}>
                                <div className={Style.ImageDiv}>
                                  <Image alt="Example" src={LogoD} className={Style.WordPress} />
                                </div>
                                <Link href='/webdev'>LOGO DESIGN</Link>
                              </div>

                            </div>
                          </div>
                        </> : ""}



                      <div>

                      </div>
                    </div>
                  </div> : ""
              }
            </li>
            <li><Link href="/CaseStudies">CASE STUDIES</Link></li>
            <li><Link href="/careers">CAREERS</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
          </ul>
        </div>
        <div className={`col-lg-3 ${Style.Expert}`}>
          <div className={Style.ExpertBtn} onClick={handleContactForm}>
            <span>Speak to an Expert</span>
          </div>
          {iscontactForm ?
            <div className={`${'row'} ${Style.FormRow}`}>
              <div className={`col-12 ${Style.contactForm}`}>
                <div className={`col-12 ${Style.Cross}`}>
                  <span className={Style.CrosDiv} onClick={handleContactForm}>
                    <ImCross className={Style.CrossIcon} />
                  </span>
                </div>
                <div className={`col-12 ${Style.contactForm}`}>
                  <h1>Speak to an Expert</h1>
                  <form action="">
                    <div className="row">
                      <div className={`col-4 ${Style.InputBox}`}>
                        <label htmlFor=""> Full Name*</label>
                        <input type="text" name="name" id="" className={Style.ContactInput} />
                      </div>
                      <div className={`col-4 ${Style.InputBox}`}>
                        <label htmlFor="">Company*</label>
                        <input type="text" name="" id="" className={Style.ContactInput} />
                      </div>
                      <div className={`col-4 ${Style.InputBox}`}>
                        <label htmlFor="">Email*</label>
                        <input type="text" name="" id="" className={Style.ContactInput} />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className={`col-4 ${Style.InputBox}`}>
                        <label htmlFor="">Email*</label>
                        <input type="text" name="" id="" className={Style.ContactInput} />
                      </div>
                      <div className={`col-4 ${Style.InputBox}`}>
                        <label htmlFor="">Insterested</label>
                        <select name="" id="" className={Style.ContactInput}>
                          <option value="">{`I'm`} interested in</option>
                          <option value="">Corporate Identity / Branding</option>
                          <option value="">Company Profile / Brochure /E-Magazine</option>
                          <option value="">6000-9000 AED</option>
                        </select>
                      </div>
                      <div className={`col-4 ${Style.InputBox}`}>
                        <label htmlFor="">Budget</label>
                        <select name="" id="" className={Style.ContactInput}>
                          <option value="">Budget</option>
                          <option value="">0-3000 AED</option>
                          <option value="">3000-6000 AED</option>
                          <option value="">6000-9000 AED</option>
                        </select>

                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <textarea name="" id="" cols="118" rows="15" className={Style.ContactInput} placeholder='Message' />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-12">
                        <button className={Style.submitbtn}>Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> : ""
          }
          <div className={Style.ExpertWhatsapp}>
            <RiWhatsappFill />
          </div>
          <div className={Style.ExpertPhone}>
            <FaPhoneAlt />
          </div>
        </div>
      </div>

      <div className={`${'row'} ${Style.responsiveRow}`}>
        <div className={`col-2 ${Style.logoCont}`}>
          <div className={Style.logo}>
            <Image alt="Example" src={Brandlogo} className={Style.brandImage} />
          </div>
        </div>
        <div className={`col-6 ${Style.ResponsiveMENU}`}>
          <ul className={Style.HeaderUl}>

          </ul>
        </div>
        <div className={`col-4 ${Style.ExpertResponsive}`}>
          <div className={Style.ExpertBtn2} >
            {isMenu ? <ImCross className={Style.ManuIcon2} onClick={handleMenu} /> : <HiOutlineMenuAlt4 onClick={handleMenu} className={Style.ManuIcon} />}
            {isMenu ?
              <div className={`${'row'} ${Style.MenuRow}`}>
                <div className={`col-12 ${Style.MenuList}`}>
                  <div className={`col-12 ${Style.Cross}`}>
                    <div className={Style.ExpertBtn2} >

                    </div>
                  </div>
                  <div className={`col-12 ${Style.MenuListing}`}>
                    <ul className={Style.listing}>
                      <li><Link href="/">HOME</Link></li>
                      <li><Link href="/about">ABOUT</Link></li>
                      <li className={Style.listTabv}><Link href="/Services" style={textStyle}>SERVICES</Link><button type="button" className={Style.Arcadian} onClick={handleToggle}> {isCollapsed ? <FaPlus /> : <FaMinus />} </button></li>
                      <div className={`collapse ${isCollapsed ? '' : 'show'}`}>
                        <ul className={Style.listing}>
                          <li className={Style.listTabv}><Link href="" style={ActiveInnerWeb}>WEB DEVELOPMENT</Link><button type="button" className={Style.Arcadian} onClick={handleInnerToggle}> {isInnerCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} </button></li>
                          <div className={`collapse ${isInnerCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">WordPress Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Php Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">CMS Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Laravel Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Website Maintaince Services</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Whatsapp Integration</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveMobile}>MOBILE APPLICATION DEVELOPMENT</Link><button type="button" className={Style.Arcadian} onClick={handleMobileToggle}> {isMobileCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} </button></li>
                          <div className={`collapse ${isMobileCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">Hybrid Apps</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Android App Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">IOS App Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">React Native Apps</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Flutter Apps</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Progressive Web Apps</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">VIDEO ANIMATION</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">IT RESOURCE</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveDigital}>DIGITAL MARKETING</Link><button type="button" className={Style.Arcadian} onClick={handleDigitalToggle}> {isDigitalCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} </button></li>
                          <div className={`collapse ${isDigitalCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">Search Engine Optimization(SEO) </Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Social Media Marketing (SMM)</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Paid Media Marketing(PMM)</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Email Marketing</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Influencer Marketing</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">App Store Optimization(ASO)</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveUX}>UI/UX DESIGN</Link><button type="button" className={Style.Arcadian} onClick={HandleUxToggle}> {isUxCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</button></li>
                          <div className={`collapse ${isUxCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">PSD To Responsive HTML </Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">UX Design Workshop</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Responsive Web Design</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">UX Design</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Landing Page Design</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">UX Audit</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Graphic Design</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveEcommerce}>E-COMMERCE WEB DEVELOPMENT</Link><button type="button" className={Style.Arcadian} onClick={HandleEcommerceToggle}> {isEcommerceWebCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} </button></li>
                          <div className={`collapse ${isEcommerceWebCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">Woo Commerce Development </Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Mirakl Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Magento Ecommerce Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Big Commerce Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Shopify Ecommerce Development</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Shopify Plus Ecommerce Development</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveBranding}>DIGITAL BRANDING & COMMUNICATION</Link><button type="button" className={Style.Arcadian} onClick={HandleBrandingToggle}> {isBrandingCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} </button></li>
                          <div className={`collapse ${isBrandingCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">Company Profile & Broucher Design </Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Business Card Design</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Corporate Identity Design</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Packaging Designs</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Logo Design</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">DIGITAL BRANDING & COMMUNICATION</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">VIDEO ANIMATION</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">IT RESOURCE</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveVedio}>VIDEO ANIMATION</Link><button type="button" className={Style.Arcadian} onClick={HandleVedioToggle}> {isVedioCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} </button></li>
                          <div className={`collapse ${isVedioCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">Explainer Video Production </Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Product Demo Animation</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Video Game Trailer</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">3D Architectual Walkthroughs</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Medical Animation Studio</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Character Animation Video</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Whiteboard Animation Video</Link></li>
                            </ul>
                          </div>
                          <li className={Style.listTabv}><Link href="" style={ActiveResource}>IT RESOURCE</Link><button type="button" className={Style.Arcadian} onClick={HandleResourceToggle}> {isResourceCollapsed ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</button></li>
                          <div className={`collapse ${isResourceCollapsed ? '' : 'show'}`}>
                            <ul className={Style.listing}>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Mobile App Developer </Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Scrums Master in Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Aws Resources In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire QA Resources In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Nodejs Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Azure Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Reactjs Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire React Native Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Sharepoint Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Dynamics 365 Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Project Managers In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire Dot Net Developer In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Hire RPA In Dubai</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">3D Google Maps Integration</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">MarTech Consulting</Link></li>
                              <li className={Style.listTabv}><Link href="/webdev">Digital Cloud Transformation</Link></li>

                            </ul>
                          </div>
                        </ul>
                      </div>
                      <li><Link href="/CaseStudies">CASE STUDIES</Link></li>
                      <li><Link href="/careers">CAREER</Link></li>
                      <li><Link href="/blog">BLOG</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              : ""}
          </div>
        </div>
      </div>

      {/*
      {iscontactForm ?
        <div className={`${'row'} ${Style.FormRow}`}>
          <div className={`col-12 ${Style.contactForm}`}>
            <div className={`col-12 ${Style.Cross}`}>
              <span className={Style.CrosDiv} onClick={handleContactForm}>
                <ImCross className={Style.CrossIcon} />
              </span>
            </div>
            <div className={`col-12 ${Style.contactForm}`}>
              <h1>Speak to an Expert</h1>
              <form action="">
                <div className="row">
                  <div className={`col-4 ${Style.InputBox}`}>
                    <label htmlFor=""> Full Name*</label>
                    <input type="text" name="name" id="" className={Style.ContactInput} />
                  </div>
                  <div className={`col-4 ${Style.InputBox}`}>
                    <label htmlFor="">Company*</label>
                    <input type="text" name="" id="" className={Style.ContactInput} />
                  </div>
                  <div className={`col-4 ${Style.InputBox}`}>
                    <label htmlFor="">Email*</label>
                    <input type="text" name="" id="" className={Style.ContactInput} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className={`col-4 ${Style.InputBox}`}>
                    <label htmlFor="">Email*</label>
                    <input type="text" name="" id="" className={Style.ContactInput} />
                  </div>
                  <div className={`col-4 ${Style.InputBox}`}>
                    <label htmlFor="">Insterested</label>
                    <select name="" id="" className={Style.ContactInput}>
                      <option value="">{`I'm`} interested in</option>
                      <option value="">Corporate Identity / Branding</option>
                      <option value="">Company Profile / Brochure /E-Magazine</option>
                      <option value="">6000-9000 AED</option>
                    </select>
                  </div>
                  <div className={`col-4 ${Style.InputBox}`}>
                    <label htmlFor="">Budget</label>
                    <select name="" id="" className={Style.ContactInput}>
                      <option value="">Budget</option>
                      <option value="">0-3000 AED</option>
                      <option value="">3000-6000 AED</option>
                      <option value="">6000-9000 AED</option>
                    </select>

                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <textarea name="" id="" cols="118" rows="15" className={Style.ContactInput} placeholder='Message' />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12">
                    <button className={Style.submitbtn}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> : ""
      } */}
     
    </div>
  )
}

export default Page
