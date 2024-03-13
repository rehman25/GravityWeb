import React from 'react'
import styles from './Awards.module.css'
import Text from '../../component/text/index'
import Image from 'next/image'
import firstImg from '../../assets/images/home/award-bagde-1.svg'
import SecondImg from '../../assets/images/home/award-bagde-2.svg'
import thirdImg from '../../assets/images/home/download.png'
import forthImg from '../../assets/images/home/award-bagde-4.webp'


const components = () => {
  return (
    <section className={`${styles.bgColor}`}>
      <div className={`container`}>
        <div className="row">
          <div className={`p-0 col-lg-6 ${styles.leftContainer}`}>
            <div className={styles.heading}>
              <Text text="Awards" animation="fade-right" className={styles.Text} />
            </div>
            <div className={styles.leftHeading}>
              <h2>Digital Gravity, a
                Synonym of Quality, Trust and Distinction</h2>
              <p>Client satisfaction is one of our top priorities. Our consistency, dedication toward work, and constant innovation have won us several accolades in the last decade.
                Hire web designers and web developers in Dubai from Digital Gravity to build highly responsive, scalable, and robust web applications with a touch of finesse.</p>
            </div>
          </div>
          <div className={`p-0 col-lg-6 ${styles.rightContainer}`}>
            <div className={styles.imagecontainer}>
              <div className={styles.picture}>
                <Image src={firstImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
              <div className={styles.picture}>
                <Image src={SecondImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
              <div className={styles.picture}>
                <Image src={thirdImg} alt="award-bagde-1" className={styles.slideImg} />
              </div>
              <div className={styles.picture}>
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