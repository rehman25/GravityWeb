import React from 'react'
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




const component = () => {
  return (
    <div className={`container ${style.container}`}>
      <div className={`row ${style.row}`}>
        <div className="col-lg-3">
          <h2 className={style.heading}>A FULL-Service <span>Create Digital <br /> Agency</span> </h2>
        </div>
        <div className="col-lg-9">
           <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                  <div className={style.imgdiv}>
                      <Image src={WebD} className={style.Image} />
                  </div> 
                  <div className={style.cardcontent}>
                     <span>Web Development</span>
                     <p>Desktop &amp; Mobile websites done right by professional web development experts.</p>
                  </div> 
                  <div className={style.Arrow}>
                     <IoMdArrowForward />
                  </div> 
               </div>
             </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={Mobileapp} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>Mobile Application</span>
                  <p>High performance mobile apps for your business.</p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={Digital} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>Digital Marketing</span>
                  <p>Strategies to boost your conversions &amp; ROI done by gurus.</p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={Uiux} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>UX/UI Design</span>
                  <p>Great user experience, with responsive web design</p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={Eco} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>E-Commerce Solution</span>
                  <p>Ecommerce: We create awesome online stores for simple, better and convenient shopping. Greater ecommerce experience, every time!</p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={Branding} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>Branding & Communication</span>
                  <p>We cover the entire spectrum of digital marketing, including, designing your company logo.</p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={Video} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>Video Animation</span>
                  <p>Video Animation: Giving Your World a Better, More Inspirational Look. Tell Amazing Stories with Our Video Animation. </p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className={style.card}>
                <div className={style.imgdiv}>
                  <Image src={It} className={style.Image} />
                </div>
                <div className={style.cardcontent}>
                  <span>IT Resource Outsourcing</span>
                  <p>Resource Outsourcing: We Empower Your Business &amp; Boost Competitiveness with Valuable Skillset &amp; the Right Talent.</p>
                </div>
                <div className={style.Arrow}>
                  <IoMdArrowForward />
                </div>
              </div>
            </div>
          
           </div>
        </div>
      </div>
    </div>
  )
}

export default component