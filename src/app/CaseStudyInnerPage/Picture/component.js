import React from 'react'
import styles from './picture.module.css'
import Image from 'next/image'
import ImageLeft from '../../assets/images/casestudyInnerPage/grid-leftimg.jpg'
import ImageRight from '../../assets/images/casestudyInnerPage/grid-rightimg.jpg'
import ImageMid from '../../assets/images/casestudyInnerPage/grid-midimg.jpg'

const component = () => {
  return (
    <div className={`container ${styles.container}`}>
       <div className="row">
              <div className={`col-lg-5 ${styles.left}`}>
                 <Image src={ImageLeft} alt="image" className={styles.ImageLeft} />
              </div>
              <div className={`col-lg-2 ${styles.mid}`}>
                  <Image src={ImageMid} alt="image" className={styles.ImageMid} />

              </div>
              <div className={`col-lg-5 ${styles.right}`}>
                  <Image src={ImageRight} alt="image" className={styles.ImageRight} />

              </div>
       </div>
    </div>
  )
}

export default component