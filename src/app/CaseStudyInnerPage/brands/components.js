import React from 'react'
import Image from 'next/image'
import styles  from './brands.module.css'
import LeftIMage from '../../assets/images/casestudyInnerPage/about-leftimg.jpg'
import RightImage from '../../assets/images/casestudyInnerPage/about-rightimg.jpg'

const components = () => {
  return (
    <div className={`container-fluid  ${styles.container}`}>
         <div className={`row ${styles.row}`}>
              <div className={`col-lg-6 ${styles.left}`}>
                  <Image src={LeftIMage} alt='' className={styles.letfImage} />
              </div>
              <div className={`col-lg-6 ${styles.rigth}`}>
                  <Image src={RightImage} alt='' className={styles.rigthImage} />
                  <div className={`col-lg-10 col-md-10 ${styles.Para}`}>       
                  <p>Want to replicate the same results?
                      Discuss your business challenges with us for free! Ping us now and see how we can help you.</p>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default components
