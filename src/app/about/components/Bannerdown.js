import React from 'react';
import styles from '../../styles/about.module.css';
import Image from 'next/image';
import bannerdownimg from '../../assets/images/banner/bannner.jpg';

const Bannerdown = () => {
  return (
    <section>
      <div className={`${styles.bannerdownsection}`}>
        <div className="row">
          <div className='col-lg-6 col-sm-6'>
            <div className={`${styles.imageleft}`}>
              <Image src={bannerdownimg} alt="Banner" className={`${styles.bannerdownimg}`} />
            </div>
          </div>
          <div className='col-lg-6 col-sm-6'>
            <div className={`${styles.textright}`}>
              <div className={`${styles.headingContainer} ${styles.marqueeContent}`}> 
                <h1 className={`${styles.heading}`}>Concept.</h1>
                <h1 className={`${styles.heading}`}>Strategy.</h1>
                <h1 className={`${styles.heading}`}>Execute.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bannerdown;
