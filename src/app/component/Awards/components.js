import React from 'react'
import styles from './Awards.module.css'
import Text from '../text'
import Image from 'next/image'
import firstImg from '../../assets/images/home/award-bagde-1.svg'
import SecondImg from '../../assets/images/home/award-bagde-2.svg'
import thirdImg from '../../assets/images/home/download.png'
import forthImg from '../../assets/images/home/award-bagde-4.webp'


const components = () => {
  return (
    <section className={`${styles.bgColor}`}>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row">
          <div className={`p-0 col-lg-6 ${styles.leftContainer}`}>
            <Text text="Awards" animation="fade-right" className={styles.Text} />
            <div className={styles.leftHeading}>
              <h2>Digital Gravity, a <br /> <p>Synonym of Quality, Trust and Distinction</p>
                </h2>
              <p>Client satisfaction is one of our top priorities. Our consistency, dedication toward work, and constant innovation have won us several accolades in the last decade.
                <b>Hire web designers and web developers in Dubai.</b>  from Digital Gravity to build highly responsive, scalable, and robust web applications with a touch of finesse.</p>
            </div>
          </div>
          <div className={`p-0 col-lg-6 ${styles.rightContainer}`}>
            <div className={styles.imagecontainer}>
              <div data-aos="fade-up"
                data-aos-duration="3000" className={styles.picture}>
                <Image  src={firstImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
              <div data-aos="fade-up"
                data-aos-duration="3000" className={styles.picture}>
                <Image src={SecondImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
              <div data-aos="fade-up"
                data-aos-duration="3000" className={styles.picture}>
                <Image src={thirdImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
              <div data-aos="fade-up"
                data-aos-duration="3000" className={styles.picture}>
                <Image src={forthImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default components