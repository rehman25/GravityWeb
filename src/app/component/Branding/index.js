'use client'
import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import style from './branding.module.css'
import one from '../../assets/images/icons/1.svg'
import two from '../../assets/images/icons/2.svg'
import three from '../../assets/images/icons/3.svg'
import four from '../../assets/images/icons/4.svg'
import five from '../../assets/images/icons/5.svg'
import six from '../../assets/images/icons/6.svg'
import seven from '../../assets/images/icons/7.svg'
import eight from '../../assets/images/icons/8.svg'
import nine from '../../assets/images/icons/9.svg'
import ten from '../../assets/images/icons/10.svg'
import eleven from '../../assets/images/icons/11.svg'
import twelve from '../../assets/images/icons/12.svg'
import thirteen from '../../assets/images/icons/13.svg'
import fourteen from '../../assets/images/icons/14.svg'
import fiveteen from '../../assets/images/icons/15.svg'
import sixteen from '../../assets/images/icons/16.svg'
import seventeen from '../../assets/images/icons/17.svg'
import eighteen from '../../assets/images/icons/18.svg'
import nineteen from '../../assets/images/icons/19.svg'
import twenty from '../../assets/images/icons/20.svg'
import twenty__one from '../../assets/images/icons/21.svg'
import twenty__two from '../../assets/images/icons/22.svg'
import twenty__three from '../../assets/images/icons/23.svg'
import twenty__four from '../../assets/images/icons/24.svg'
import twenty__five from '../../assets/images/icons/25.svg'
import twenty__six from '../../assets/images/icons/26.svg'
import twenty__seven from '../../assets/images/icons/27.svg'
import twenty__eight from '../../assets/images/icons/28.svg'
import twenty__nine from '../../assets/images/icons/29.svg'
import thirty from '../../assets/images/icons/30.svg'
import thirty__one from '../../assets/images/icons/31.svg'
import thirty__two from '../../assets/images/icons/32.svg'
import thirty__three from '../../assets/images/icons/33.svg'
import thirty__four from '../../assets/images/icons/34.svg'
import thirty__five from '../../assets/images/icons/35.svg'
import thirty__six from '../../assets/images/icons/36.svg'
import thirty__seven from '../../assets/images/icons/37.svg'
import hand_direction_img from '../../assets/images/icons/drag-img.svg'









const Branding = () => {
  return (
    <>
      <section className={`${style.slider__section}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <h5>
                  We are ready to uplift your
                  <span>brand like many others in</span>
                  the past!
                </h5>
                <Demo />
                <div className={`${style.info__hand}`}>
                <Image
                  src={hand_direction_img}
                  alt="Example Image"
                />
                  <span>Drag to see more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Branding

class Demo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      arrows: false,
      className: "branding",
    };
    return (
      <div>
        <Slider {...settings}>

          <div className={`${style.demo__slider}`}>
            <div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={one}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={two}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={three}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={four}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={five}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={six}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={seven}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
            </div>
            <div className={`${style.img__mask}`}>
              <div>
                <Image
                  src={eight}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={nine}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={ten}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={eleven}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twelve}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirteen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={fourteen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
            </div>
          </div>

          <div className={`${style.demo__slider}`}>
            <div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={fiveteen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={sixteen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={seventeen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={eighteen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={nineteen}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__one}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
            </div>
            <div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__two}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__three}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__four}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__five}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__six}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__seven}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__eight}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
            </div>
          </div>

          <div className={`${style.demo__slider}`}>
            <div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__nine}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__one}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__two}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__three}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__four}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__five}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
            </div>
            <div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__six}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={thirty__seven}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__four}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__five}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__six}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__seven}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
              <div className={`${style.img__mask}`}>
                <Image
                  src={twenty__eight}
                  alt="Example Image"
                  className={`${style.demo__Img}`}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}