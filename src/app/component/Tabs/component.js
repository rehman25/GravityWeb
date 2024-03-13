'use client'
import React, { useState } from 'react'
import styles from './tabs.module.css'
import { GoArrowRight } from "react-icons/go";




const component = () => {
  const [tab, setTab] = useState(true)
  const [isWeb, setWeb] = useState(false)

  const handleTabChange = (tab) => {
    setTab(true)
    setWeb(false)

  }

  const handleWeb = () => {
    setTab(false)
    setWeb(true)
  }

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className={`col-lg-12 ${styles.tabsbtn}`}>
          <button onClick={handleTabChange} className={styles.btns}>All</button>
          <button onClick={handleWeb}>WEB</button>
          <button onClick={handleWeb}>MOBILE APP</button>
          <button onClick={handleWeb}>SEO</button>
          <button onClick={handleWeb}>PPC</button>
          <button onClick={handleWeb}>SMM</button>
          <button onClick={handleWeb}>PRINT</button>
        </div>
      </div>
      {tab ?
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.casestudyAll}>

            </div>
            <div className={styles.casedetail}>
              <span>
                <p>Palm Marina</p>
                <p>Website | Branding</p>
              </span>
              <span>
                <p>View Case Study</p>
                <div><GoArrowRight /></div>
              </span>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
        : ""
      }
      {isWeb ?
        <div className="row">checasdk</div>
        : ""
      }
    </div>
  )
}

export default component