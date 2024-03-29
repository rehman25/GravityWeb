import React from 'react'
import styles from '../styles/blog.module.css'
import Cursor from '../component/cursor/cursor'
import Header from '../component/Header/component'
import Banner from './components/Banner'
import Tabsss from './components/Tabsss'
import Footer from '../component/Footer/component';

const Page = () => {
    return (
        <div className={styles.blog}>
            <Cursor />
            <Header/>
            <Banner />
            <Tabsss />
            <Footer />
        </div>
    )
}

export default Page