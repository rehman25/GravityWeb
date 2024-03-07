import React from 'react';
import style from '../../styles/about.module.css';
import Image from 'next/image';
import bannerdownimg from '../../assets/images/banner/bannner.jpg';

const Bannerdown = () => {
  return (
    <section>
      <div className={`${style.bannerContainer}`}>
        <div className="row">
          <div className='col-lg-6'>
            <div className={`${style.imageContainer}`}>
              <Image src={bannerdownimg} alt="Banner" className={`${style.bannerdownimg}`}/>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className={`${style.textContainer}`}>
              <div className={`${style.headingContainer}`}>
              <marquee className={`${style.marquee}`} direction="left" scrollamount="-2">
                  <h1 className={`${style.heading}`}>Concept.</h1>
                  <h1 className={`${style.heading}`}>Strategy.</h1>
                  <h1 className={`${style.heading}`}>Execute.</h1>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bannerdown;
