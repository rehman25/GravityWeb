import React from 'react'
import styles from '../styles/blog.module.css'
import Cursor from '../component/cursor/cursor'
import Header from '../component/Header/component'
import Banner from './components/Banner'
import Tabsss from './components/Tabsss'

const page = () => {
    return (
        <>
            <Cursor />
            <Header/>
            <Banner />
            <Tabsss />
        </>
    )
}

export default page