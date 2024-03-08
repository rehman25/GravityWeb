'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Style from './component.module.css'
import Brandlogo from '../../../../public/Images/brand-logo.webp'
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

const page = () => {
  const [iscontactForm, setContactForm] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [isTabs, setTabs] = useState(false);
  // const [isWordPress, setWordpress] = useState(false)
  const [WebDev, setWebDev] = useState(true)
  const [MobileDev, setMobileDev] = useState(false)
  const [Design, setDesign] = useState(false)
  const [Marketing, setMarketing] = useState(false)
  const [Ecommerce , setEcommerce] = useState(false)
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



  return (

    <div className={`container-fluid p-0 ${Style.Container}`}>
      <div className={`${'row'} ${Style.row}`}>
        <div className={`col-lg-2 ${Style.logoCont}`}>
          <div className={Style.logo}>
            <Image src={Brandlogo} className={Style.brandImage} />
          </div>
        </div>
        <div className={`col-lg-8 ${Style.MENU}`}>
          <ul className={Style.HeaderUl}>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="" onMouseEnter={onHover} >SERVICES</a></li>
            <li><a href="">CASE STUDIES</a></li>
            <li><a href="">BLOG</a></li>
          </ul>
        </div>
        <div className={`col-lg-2 ${Style.Expert}`}>
          <div className={Style.ExpertBtn} onClick={handleContactForm}>
            <span>Speak to an Expert</span>
          </div>
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
            <Image src={Brandlogo} className={Style.brandImage} />
          </div>
        </div>
        <div className={`col-6 ${Style.ResponsiveMENU}`}>
          <ul className={Style.HeaderUl}>

          </ul>
        </div>
        <div className={`col-4 ${Style.Expert}`}>
          <div className={Style.ExpertBtn} onClick={handleContactForm}>
            <span>Speak to an Expert</span>
          </div>
          <div className={Style.ExpertWhatsapp}>
            <RiWhatsappFill />
          </div>
          <div className={Style.ExpertPhone}>
            <FaPhoneAlt />
          </div>
          <div className={Style.ExpertBtn2} >
            {isMenu ? <ImCross className={Style.ManuIcon2} onClick={handleMenu} /> : <HiOutlineMenuAlt4 onClick={handleMenu} className={Style.ManuIcon} />}
          </div>
        </div>
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
                      <option value="">I'm interested in</option>
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
      {isMenu ?
        <div className={`${'row'} ${Style.MenuRow}`}>
          <div className={`col-12 ${Style.MenuList}`}>
            <div className={`col-12 ${Style.Cross}`}>

            </div>
            <div className={`col-12 ${Style.MenuListing}`}>
              <ul className={Style.listing}>
                <li><a href="">HOME</a></li>
                <li><a href="">ABOUT</a></li>
                <li className={Style.listTabv}><a href="">SERVICES</a> <FaPlus /></li>
                <li><a href="">CASE STUDIES</a></li>
                <li><a href="">BLOG</a></li>
              </ul>
            </div>
          </div>
        </div>

        : ""}
      {
        isTabs ?
          <div className={`row ${Style.servicesTable}`} onMouseEnter={onHover}>
            <div className={`col-md-4 ${Style.Tabs}`} >
              <ul>
                <li className={Style.dropList} onMouseEnter={handleWebDev}><a href="">WEB DEVELOPMENT</a></li>
                <li className={Style.dropList} onMouseEnter={handleMobileDev}><a href="" >MOBILE APPLICATION DEVELOPMENT</a></li>
                <li className={Style.dropList} onMouseEnter={HandleMarketing}><a href="">DIGITAL MARKETING</a></li>
                <li className={Style.dropList} onMouseEnter={handleDesign}><a href="">UI/UX</a></li>
                <li className={Style.dropList} onMouseEnter={HandleEcommerce}><a href="">E-COMMERCE WEB DEVELOPMENT</a></li>
                <li className={Style.dropList} onMouseEnter={HandleBranding}><a href="">DIGITAL BRANDING & COMMUNICATION</a></li>
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
                        <Image src={WordPress} className={Style.WordPress} />
                      </div>
                      <a href=''>WORD PRESS DEVELOPMENT</a>
                    </div>
                    <div className={`col-4 ${Style.TabContent}`}>
                      <div className={Style.ImageDiv}>
                          <Image src={PHp} className={Style.WordPress} />
                      </div>
                      <a href=''>PHP DEVELOPMENT</a>
                    </div>
                    <div className={`col-4 ${Style.TabContent}`}>
                      <div className={Style.ImageDiv}>
                        <Image src={CMS} className={Style.WordPress} />
                      </div>
                      <a href=''>CMS DEVELOPMENT</a>
                    </div>
                  </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                    <div className={`col-4 ${Style.TabContent}`}>
                      <div className={Style.ImageDiv}>
                        <Image src={Laravel} className={Style.WordPress} />
                      </div>
                      <a href=''>LARAVEL DEVELOPMENT</a>
                    </div>
                    <div className={`col-4 ${Style.TabContent}`}>
                      <div className={Style.ImageDiv}>
                          <Image src={System} className={Style.WordPress} />
                      </div>
                      <a href=''>WEBSITE MAINTENANCE SERVICES</a>
                    </div>
                    <div className={`col-4 ${Style.TabContent}`}>
                      <div className={Style.ImageDiv}>
                          <Image src={System} className={Style.WordPress} />
                      </div>
                      <a href=''>WORD PRESS DEVELOPMENT</a>
                    </div>
                  </div>
                  </div>
                   </>:""}
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
                          <Image src={Hybrid} className={Style.WordPress} />
                        </div>
                        <a href=''>HYBIRD APPS</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Android} className={Style.WordPress} />
                        </div>
                        <a href=''>ANDROID APP DEVELOPMENT</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Ios} className={Style.WordPress} />
                        </div>
                        <a href=''>IOS APP DEVELOPMENT</a>
                      </div>
                    </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={ReactNative} className={Style.WordPress} />
                        </div>
                        <a href=''>REACT NATIVE APPS</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Flutter} className={Style.WordPress} />
                        </div>
                        <a href=''>FLUTTER APPS</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Progressive} className={Style.WordPress} />
                        </div>
                        <a href=''>PROGRESSIVE WEB APPS</a>
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
                          <Image src={PSD} className={Style.WordPress} />
                        </div>
                        <a href=''>PSD TO RESPONSIVE HTML</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={WorkShop} className={Style.WordPress} />
                        </div>
                        <a href=''>UX DESIGN WORKSHOP</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={ResWeb} className={Style.WordPress} />
                        </div>
                        <a href=''>RESPONSIVE WEB DESIGN</a>
                      </div>
                    </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Uxdesign} className={Style.WordPress} />
                        </div>
                        <a href=''>UX DESIGN</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Landingpage} className={Style.WordPress} />
                        </div>
                        <a href=''>LANDING PAGE DESIGN</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Uxaudit} className={Style.WordPress} />
                        </div>
                        <a href=''>UX AUDIT</a>
                      </div>
                    </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={GraphicDesign} className={Style.WordPress} />
                        </div>
                        <a href=''>GRAPHIC DESIGN</a>
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
                          <Image src={SEO} className={Style.WordPress} />
                        </div>
                        <a href=''>SEARCH ENGINE OPTIMIZATION(SE0)</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={SMM} className={Style.WordPress} />
                        </div>
                        <a href=''>SOCIAL MEDIA MARKETING</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={PMM} className={Style.WordPress} />
                        </div>
                        <a href=''>PAID MEDIA MARKETING</a>
                      </div>
                    </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Email} className={Style.WordPress} />
                        </div>
                        <a href=''>EMAIL MARKETING</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Influncer} className={Style.WordPress} />
                        </div>
                        <a href=''>INFLUENCER MARKETING</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={AppStore} className={Style.WordPress} />
                        </div>
                        <a href=''>APP STORE OPTIMIZATION</a>
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
                          <Image src={Woo} className={Style.WordPress} />
                        </div>
                        <a href=''>WOO COMMERCE DEVELOPMENT</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Mirakl} className={Style.WordPress} />
                        </div>
                        <a href=''>MIRAKL DEVELOPMENT</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Magento} className={Style.WordPress} />
                        </div>
                        <a href=''>MAGENTO ECOMMERCE DEVELOPMENT</a>
                      </div>
                    </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Big} className={Style.WordPress} />
                        </div>
                        <a href=''>BIG ECOMMERCE DEVELOPMENT</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Shopify} className={Style.WordPress} />
                        </div>
                        <a href=''>SHOPIFY ECOMMERCE DEVELOPMENT</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Shopify} className={Style.WordPress} />
                        </div>
                        <a href=''>SHOPIFY PLUS ECOMMERCE DEVELOPMENT</a>
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
                          <Image src={Company} className={Style.WordPress} />
                        </div>
                        <a href=''>COMPANY PROFILE & BROUCHER DESIGN</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Bcard} className={Style.WordPress} />
                        </div>
                        <a href=''>BUSINESS CARD DESIGN</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={Corporate} className={Style.WordPress} />
                        </div>
                        <a href=''>CORPORATE DESIGN</a>
                      </div>
                    </div>
                    <div className={`col-12 mt-3 ${Style.ContentCol}`}>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={packaging} className={Style.WordPress} />
                        </div>
                        <a href=''>PACKAGING DESIGN</a>
                      </div>
                      <div className={`col-4 ${Style.TabContent}`}>
                        <div className={Style.ImageDiv}>
                          <Image src={LogoD} className={Style.WordPress} />
                        </div>
                        <a href=''>LOGO DESIGN</a>
                      </div>
                     
                    </div>
                  </div>
                   </> : ""}
              
              

              <div>

              </div>
            </div>
          </div> : ""
      }


    </div>
  )
}

export default page
