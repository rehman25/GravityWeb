'use client'
import React, { useState } from 'react'
// import NoSSR from 'react-no-ssr';
import styles from './caseStudies.module.css'
import Cursor from '../component/cursor/cursor'
import Header from '../component/Header/component'
import Footer from '../component/Footer/component'
import Tabs from '../component/Tabs/component'


const page = () => {

    return (
        <>
            <Cursor />
            <Header />
            <section>
                <div className={`${styles.heroSection} container-fluid`}>
                    <div className={`"row mt-5" ${styles.header}`}>
                        <div className={`col-lg-6 ${styles.left}`}>
                            <div className={`${styles.heroLeftSide}`}>
                                <p>__   Digital Marketing Agency In Dubai</p>
                                <h2> We <span>Inspire & Innovate Brands</span>For The Digital Future</h2>
                            </div>
                        </div>
                        <div className={`col-lg-6 ${styles.right}`}>
                            <div className={`${styles.heroRightSide}`}>
                                <p>Digital Gravity takes pride in highly successful projects for amazing clients. We are fully-integrated agency to bag case studies covering digital marketing, advertising, design& development, packaging, PR and much more; all from a single dedicated team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Tabs  />

            <Footer />
        </>
    )
}

export default page