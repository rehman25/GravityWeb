
import React from 'react'
import styles from './page.module.css'
import Header from '../component/Header/component'
import Footer from '../component/Footer/component'
import Cursor from '../component/cursor/cursor'
import Challenge from './Challenges/components'
import Pc from './Pc/component'
import Brand from './brands/components'
import Picture from './Picture/component'

const page = () => {
    return (
        <>
            <Cursor />
            <Header />
            <section className={styles.section}>
                <div className="container">
                    <div className={`row ${styles.row}`}>
                        <div className={`col-lg-8 ${styles.left}`}>
                            <p><span>___</span> &nbsp; Case Study</p>
                            <h1>PALM MARINA</h1>
                         </div>
                        <div className={`col-lg-4 ${styles.right}`}>
                          <h6>App | Website</h6>
                            <p>A man-made island harbored with deluxe marinas, Palm Jumeirah Marinas offers stellar yacht services and top-grade maritime facilities. One of the world’s largest islands that provides a serene residential experience, this island is filled with extensive tourism to renowned places in the City of Gold, Dubai.</p>
                        </div>
                    </div>
                </div>
             <Challenge />
             <Pc />
             <Brand />
             <Picture />
            </section>
            <Footer />
        </>
    )
}

export default page