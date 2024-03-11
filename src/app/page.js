'use client'
import React, { useState } from 'react'
// import NoSSR from 'react-no-ssr';
import style from './styles/home.module.css'
import Image from 'next/image';
import Button from './components/buttons/index';
import Text from './components/text/index';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from './component/Header/component'
import Footer from './component/Footer/component'

const page = () => {
  const [isActive, setActive] = useState("Web_Dev")
  return (
    <>
      <Header />
      <section>
        <div className={`${style.heroSection} container-fluid`}>
          <div className="row mt-5" style={{ width: "100%" }}>
            <div className='col-lg-12' style={{ position: "relative" }}>
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
            </div>
            <div className='col-lg-12 mt-5' >
              <div className="col-lg-6">
                <div className={`${style.heroLeftSide}`}>
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${style.homeTabs} hometabsSection`}>
                <Text text="Services" animation="fade-right" />
                <Tabs style={{ marginTop: "40px" }}>
                  <TabList>
                    <Tab onClick={() => { setActive("Web_Dev") }}>Web Development</Tab>
                    <Tab onClick={() => { setActive("Mobile_Application") }}>Mobile Application Development</Tab>
                    <Tab onClick={() => { setActive("Digital_Marketing") }}>Digital Marketing</Tab>
                    <Tab onClick={() => { setActive("Digital_Branding") }}>Digital Branding & Communication</Tab>
                    <Tab onClick={() => { setActive("Ecommerce_Web") }}>Ecommerce Web Development</Tab>
                    <Tab onClick={() => { setActive("UI/UX") }}>UI/UX Design</Tab>
                    <Tab onClick={() => { setActive("Video_Animation") }}>Video Animation</Tab>
                    <Tab onClick={() => { setActive("IT_Resource") }}>IT Resource Outsourcing</Tab>
                  </TabList>
                  <>
                    <TabPanel>
                      <h5>hamza</h5>
                    </TabPanel>
                  </>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default page