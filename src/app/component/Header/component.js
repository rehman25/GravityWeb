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






const page = () => {
  const [iscontactForm, setContactForm] = useState(false);
  const [isMenu, setMenu] = useState(false);
  const [isTabs, setTabs] = useState(false);
  const handleContactForm = () => {
    setContactForm(!iscontactForm);
  }
  const handleMenu = () => {
    setMenu(!isMenu);
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
                <li className={Style.dropList}><a href="">WEB DEVELOPMENT</a></li>
                <li className={Style.dropList}><a href="">MOBILE APPLICATION DEVELOPMENT</a></li>
                <li className={Style.dropList}><a href="">DIGITAL MARKETING</a></li>
                <li className={Style.dropList}><a href="">UI/UX</a></li>
                <li className={Style.dropList}><a href="">E-COMMERCE WEB DEVELOPMENT</a></li>
                <li className={Style.dropList}><a href="">DIGITAL BRANDING & COMMUNICATION</a></li>
              </ul>
            </div>
            <div className={`col-md-8 ${Style.Down}`}>

              <div className={Style.RowTabs}>
                <span className={Style.TabHead}>
                  WEB DEVELOPMENT
                </span>
              </div>
               <div className="row mt-3">
                 <div className={`col-4 ${Style.TabContent}`}>
                   <div className={Style.ImageDiv}>
                   <Image src={WordPress} className={Style.WordPress} />
                   </div>
                   <a href=''>WORD PRESS DEVELOPMENT</a>
                 </div>
                <div className={`col-4 ${Style.TabContent}`}>
                  <div className={Style.ImageDiv}>
                    <Image src={WordPress} className={Style.WordPress} />
                  </div>
                  <a href=''>WORD PRESS DEVELOPMENT</a>
                </div>
                <div className={`col-4 ${Style.TabContent}`}>
                  <div className={Style.ImageDiv}>
                    <Image src={WordPress} className={Style.WordPress} />
                  </div>
                  <a href=''>WORD PRESS DEVELOPMENT</a>
                </div>
               </div>
              <div className="row mt-3">
                <div className={`col-4 ${Style.TabContent}`}>
                  <div className={Style.ImageDiv}>
                    <Image src={WordPress} className={Style.WordPress} />
                  </div>
                  <a href=''>WORD PRESS DEVELOPMENT</a>
                </div>
                <div className={`col-4 ${Style.TabContent}`}>
                  <div className={Style.ImageDiv}>
                    <Image src={WordPress} className={Style.WordPress} />
                  </div>
                  <a href=''>WORD PRESS DEVELOPMENT</a>
                </div>
                <div className={`col-4 ${Style.TabContent}`}>
                  <div className={Style.ImageDiv}>
                    <Image src={WordPress} className={Style.WordPress} />
                  </div>
                  <a href=''>WORD PRESS DEVELOPMENT</a>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div> : ""
      }


    </div>
  )
}

export default page
