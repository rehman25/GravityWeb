'use client'
import React, { useState } from 'react'
import styles from './tabs.module.css'
import { GoArrowRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import Image from 'next/image';
import AllCaseImages from '../../assets/images/casestudytabs/highlight2.webp'
import web2 from '../../assets/images/casestudytabs/web/highlight3.webp'
import web3 from '../../assets/images/casestudytabs/web/highlight4.webp'
import web4 from '../../assets/images/casestudytabs/web/highlight6.webp'
import web5 from '../../assets/images/casestudytabs/web/img-17.webp'





const component = () => {
  const [tab, setTab] = useState(true)
  const [isWeb, setWeb] = useState(false)
  const [activeClass, setActiveClass] = useState(true)
  const [hoverActiveClass, setHoverActiveClass ] = useState(false)
  const [highlight3 , setHighlight3] = useState(false)
  const [MobileApp , setMobileApp] = useState(false)
  const [isSEO , setSEO] = useState(false)
  const [isPPC, setPPC] = useState(false)
  const [isSMM, setSMM] = useState(false)
  const [isPrint, setPrint] = useState(false)
 
  const handleHover = () => {
    setHoverActiveClass(!hoverActiveClass)
  }
  const Handlehighlight3 = () => {
    setHighlight3(!highlight3)
  }


  const handleTabChange = (tab) => {
    setTab(true)
    setWeb(true)
    setMobileApp(true)
    
    setSEO(true)
    setPPC(true)
    setSMM(true)
    setPrint(true)


  }

  const handleWeb = () => {
    setTab(false)
    setMobileApp(false)
    setSEO(false)
    setPPC(false)
    setSMM(false)
    setPrint(false)
    setWeb(true)

  }

  const handleMobileApp = () => {
    setMobileApp(true)
    setTab(false)
    setWeb(false)
    setSEO(false)
    setPPC(false)
    setSMM(false)
    setPrint(false)
  }
  const handleSEO = () => {
    setTab(false)
    setWeb(false)
    setMobileApp(false)
    setSEO(true)
    setPPC(false)
    setSMM(false)
    setPrint(false)
  }
  const handlePPC = () => {
    setTab(false)
    setWeb(false)
    setMobileApp(false)
    setPPC(true)
    setSEO(false)
    setSMM(false)
    setPrint(false)

  }
  const handleSMM = () => {
    setTab(false)
    setWeb(false)
    setMobileApp(false)
    setPPC(false)
    setSMM(true)
    setSEO(false)
    setPrint(false)
  }
  const handlePrint = () => {
    setTab(false)
    setWeb(false)
    setMobileApp(false)
    setPPC(false)
    setSMM(false)
    setPrint(true)
    setSEO(false)

  }

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className={`col-lg-12 ${styles.tabsbtn}`}>
          <button onClick={handleTabChange} className={activeClass ? styles.btnsActive : styles.btns}>All</button>
          <button onClick={handleWeb} className={isWeb ? styles.btnsActive : styles.btns}>WEB</button>
          <button onClick={handleMobileApp} className={MobileApp ? styles.btnsActive : styles.btns}>MOBILE APP</button>
          <button onClick={handleSEO} className={isSEO ? styles.btnsActive : styles.btns}>SEO</button>
          <button onClick={handlePPC} className={isPPC ? styles.btnsActive : styles.btns}>PPC</button>
          <button onClick={handleSMM} className={isSMM ? styles.btnsActive : styles.btns}>SMM</button>
          <button onClick={handlePrint} className={isPrint ? styles.btnsActive : styles.btns}>PRINT</button>
        </div>
      </div>
      {tab ?
        <>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-5 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.casestudyAll} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-5 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.casestudyAll} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-5 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web3} className={styles.casestudyAll} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-5 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web4} className={styles.casestudyAll} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>

          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-5 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web5} className={styles.casestudyAll} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>


          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-12`}>
              <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
        : ""
      }
      {isWeb ?
        <>
        <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={AllCaseImages} className={styles.casestudyAll} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {hoverActiveClass ?
                <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}
            </div>
          </div>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
             <Image src={web2} className={styles.casestudyAll} />
             </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {highlight3 ?
                <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}

            </div>
          </div>
        </div>
        <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={web3} className={styles.casestudyAll} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {hoverActiveClass ?
                <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}
            </div>
          </div>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
             <Image src={web4} className={styles.casestudyAll} />
             </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {highlight3 ?
                <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}

            </div>
          </div>
         
        </div>
        <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={web5} className={styles.casestudyAll} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {hoverActiveClass ?
                <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}
            </div>
          </div>
        

        </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-12`}>
              <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
        : ""}
      {MobileApp ?
        <>
        <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-4 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={AllCaseImages} className={styles.conceptexecute} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {hoverActiveClass ?
                <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}
            </div>
          </div>
          <div className={`col-lg-4 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={web2} className={styles.conceptexecute} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {highlight3 ?
                <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}

            </div>
          </div>
          <div className={`col-lg-4 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={web2} className={styles.conceptexecute} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {highlight3 ?
                <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}

            </div>
          </div>
        </div>
        <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
         :""}
      {isSEO ?
        <>
       <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={AllCaseImages} className={styles.casestudyAll} />
            </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {hoverActiveClass ?
                <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={handleHover}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}
            </div>
          </div>
          <div className={`col-lg-5 p-2`}>
            <div className={styles.imgdiv}>
             <Image src={web2} className={styles.casestudyAll} />
             </div>
            <div className={styles.casedetail}>
              <span className={styles.casename}>
                <p className={styles.caseHeading}>Palm Marina</p>
                <p className={styles.casepara}>Website | Branding</p>
              </span>
              {highlight3 ?
                <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseIConHover}>
                    <GoArrowDownRight className={styles.arrowDownIcon} />
                  </div>
                </span>
                : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                  <p>View Case Study</p>
                  <div className={styles.CaseICon}>
                    <GoArrowRight className={styles.arrowIcons} />
                  </div>
                </span>}

            </div>
          </div>
        </div>
       
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-12`}>
              <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
        : ""}
      {isPPC ?
        <>
        <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-12`}>
            <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
          </div>
        </div>
        <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
        : ""}
      {isSMM ?
        <>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-12`}>
              <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
        : ""}
      {isPrint ?
        <>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-12`}>
              <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
            </div>
          </div>
          <div className={`row ${styles.casesrow}`}>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={AllCaseImages} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {hoverActiveClass ?
                  <span className={styles.caseLinkhover} onMouseLeave={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={handleHover}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}
              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
            <div className={`col-lg-4 p-2`}>
              <div className={styles.imgdiv}>
                <Image src={web2} className={styles.conceptexecute} />
              </div>
              <div className={styles.casedetail}>
                <span className={styles.casename}>
                  <p className={styles.caseHeading}>Palm Marina</p>
                  <p className={styles.casepara}>Website | Branding</p>
                </span>
                {highlight3 ?
                  <span className={styles.caseLinkhover} onMouseLeave={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseIConHover}>
                      <GoArrowDownRight className={styles.arrowDownIcon} />
                    </div>
                  </span>
                  : <span className={styles.caseLink} onMouseEnter={Handlehighlight3}>
                    <p>View Case Study</p>
                    <div className={styles.CaseICon}>
                      <GoArrowRight className={styles.arrowIcons} />
                    </div>
                  </span>}

              </div>
            </div>
          </div>
        </>
        : ""}
    </div>
  )
}

export default component