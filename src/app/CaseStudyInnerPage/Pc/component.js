import React from 'react'
import Image from 'next/image'
import styles from './components.module.css'
import Imageleft from '../../assets/images/casestudyInnerPage/popular-brand.jpg'
import pc from '../../assets/images/casestudyInnerPage/brands-pc.png'

const component = () => {
  return (
    <div className={`container-fluid p-0 ${styles.container}`}>
          <div className="row p-0">
              <div className={`col-lg-6 p-0 ${styles.left}`}>
                 <Image src={Imageleft} alt='' className={styles.papulor} />
              </div>
              <div className={`col-lg-6 ${styles.right}`}>
                  <Image src={pc} alt='' className={styles.brandpc} />

              </div>
       </div>
    </div>
  )
}

export default component