import React from 'react'
import styles from './component.module.css'
import Image from 'next/image'
import pic from '../../assets/images/casestudyInnerPage/challange.png'

const components = () => {
    return (
        <div className={`container-fluid p-0 m-0 ${styles.container}`}>
            <div className="row">
                <div className={`col-lg-12 ${styles.column1}`}>
                    <div className={`col-3 ${styles.heading}`}>
                        <h2>Challenges</h2>
                    </div>
                </div>
                <div className={`col-lg-12 ${styles.column2}`}>
                    <div className={`col-3 ${styles.heading}`}>
                        <h4>One of the main challenges of this project was the creation of a user journey based on which a complete website was to be developed from scratch.</h4>
                    </div>
                </div>
                <div className={`col-lg-12 ${styles.column3}`}>
                        <Image src={pic} alt='' className={styles.omage} />
                </div>
            </div>
        </div>
    )
}

export default components
