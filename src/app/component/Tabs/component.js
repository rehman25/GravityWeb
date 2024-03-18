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
import web6 from '../../assets/images/casestudytabs/web/img-10.webp'
import web7 from '../../assets/images/casestudytabs/web/img-11.webp'
import web8 from '../../assets/images/casestudytabs/web/img-2.webp'
import web9 from '../../assets/images/casestudytabs/web/img-4.webp'
import web10 from '../../assets/images/casestudytabs/web/img-61.webp'
import web11 from '../../assets/images/casestudytabs/web/img-62.webp'
import web12 from '../../assets/images/casestudytabs/web/img-63.webp'
import web13 from '../../assets/images/casestudytabs/web/img-64.webp'
import web14 from '../../assets/images/casestudytabs/web/img-65.webp'
import web15 from '../../assets/images/casestudytabs/web/img-66.webp'
import web16 from '../../assets/images/casestudytabs/web/img-67.webp'
import web17 from '../../assets/images/casestudytabs/web/img-68.webp'
import web18 from '../../assets/images/casestudytabs/web/img-69.webp'
import web19 from '../../assets/images/casestudytabs/web/img-72.webp'
import web21 from '../../assets/images/casestudytabs/web/img-73.webp'
import web22 from '../../assets/images/casestudytabs/web/img-74.webp'
import web23 from '../../assets/images/casestudytabs/web/img-75.webp'
import web24 from '../../assets/images/casestudytabs/web/img-76.webp'
import web25 from '../../assets/images/casestudytabs/web/img-77.webp'
import web26 from '../../assets/images/casestudytabs/web/img-78.webp'
import web27 from '../../assets/images/casestudytabs/web/img-79.webp'
import web28 from '../../assets/images/casestudytabs/web/img-80.webp'
import web29 from '../../assets/images/casestudytabs/web/img-81.webp'
import web30 from '../../assets/images/casestudytabs/web/img-82.webp'
import web31 from '../../assets/images/casestudytabs/web/img-83.webp'
import web32 from '../../assets/images/casestudytabs/web/img-84.webp'
import web33 from '../../assets/images/casestudytabs/web/img-85.webp'
import web34 from '../../assets/images/casestudytabs/web/img-86.webp'
import web35 from '../../assets/images/casestudytabs/web/img-87.webp'
import web36 from '../../assets/images/casestudytabs/web/img-88.webp'
import web37 from '../../assets/images/casestudytabs/web/img-89.webp' 
import web38 from '../../assets/images/casestudytabs/web/img-90.webp'
import web39 from '../../assets/images/casestudytabs/web/img-91.webp'
import web40 from '../../assets/images/casestudytabs/web/img-92.webp'
import web41 from '../../assets/images/casestudytabs/web/img-93.webp'
import web42 from '../../assets/images/casestudytabs/web/img-94.webp'
import mobile1 from '../../assets/images/casestudytabs/mobile/highlight3 (1).webp'
import mobile2 from '../../assets/images/casestudytabs/mobile/img-46.webp'
import mobile3 from '../../assets/images/casestudytabs/mobile/img-52.webp'
import mobile4 from '../../assets/images/casestudytabs/mobile/img-53.webp'
import mobile5 from '../../assets/images/casestudytabs/mobile/img-55.webp'
import mobile6 from '../../assets/images/casestudytabs/mobile/img-56.webp'
import mobile7 from '../../assets/images/casestudytabs/mobile/img-57.webp'
import mobile8 from '../../assets/images/casestudytabs/mobile/img-58.webp'
import mobile9 from '../../assets/images/casestudytabs/mobile/img-59.webp'
import mobile10 from '../../assets/images/casestudytabs/mobile/img-60.webp'
import seo1 from '../../assets/images/casestudytabs/seo/img-12.webp'
import seo2 from '../../assets/images/casestudytabs/seo/img-18.webp'
import seo3 from '../../assets/images/casestudytabs/seo/img-19.webp'
import seo4 from '../../assets/images/casestudytabs/seo/img-20.webp'
import seo5 from '../../assets/images/casestudytabs/seo/img-21.webp'
import seo6 from '../../assets/images/casestudytabs/seo/img-22.webp'
import seo7 from '../../assets/images/casestudytabs/seo/img-23.webp'
import seo8 from '../../assets/images/casestudytabs/seo/img-24.webp'
import seo9 from '../../assets/images/casestudytabs/seo/img-33.webp'
import seo10 from '../../assets/images/casestudytabs/seo/img-34.webp'
import seo11 from '../../assets/images/casestudytabs/seo/img-35.webp'













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
    setWeb(false)
    setMobileApp(false)
    setSEO(false)
    setPPC(false)
    setSMM(false)
    setPrint(false)  
    // isWeb && isPPC && MobileApp && isSMM && isSEO && isPrint == true ? setActiveClass(true) : setActiveClass(false)


  }

  const handleWeb = () => {
    setTab(false)
    setMobileApp(false)
    setSEO(false)
    setPPC(false)
    setSMM(false)
    setPrint(false)
    setActiveClass(false)
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
                <Image src={web6} className={styles.conceptexecute} />
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
                <Image src={web7} className={styles.conceptexecute} />
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
                <Image src={web8} className={styles.conceptexecute} />
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
                <Image src={web9} className={styles.conceptexecute} />
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
                <Image src={web10} className={styles.conceptexecute} />
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
                <Image src={web11} className={styles.conceptexecute} />
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
                <Image src={web12} className={styles.conceptexecute} />
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
                <Image src={web13} className={styles.conceptexecute} />
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
                <Image src={web14} className={styles.conceptexecute} />
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
                <Image src={web15} className={styles.conceptexecute} />
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
                <Image src={web16} className={styles.conceptexecute} />
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
                <Image src={web17} className={styles.conceptexecute} />
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
                <Image src={web6} className={styles.conceptexecute} />
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
                <Image src={web7} className={styles.conceptexecute} />
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
                <Image src={web8} className={styles.conceptexecute} />
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
                <Image src={web9} className={styles.conceptexecute} />
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
                <Image src={web10} className={styles.conceptexecute} />
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
                <Image src={web11} className={styles.conceptexecute} />
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
                <Image src={web12} className={styles.conceptexecute} />
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
                <Image src={web13} className={styles.conceptexecute} />
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
                <Image src={web14} className={styles.conceptexecute} />
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
                <Image src={web15} className={styles.conceptexecute} />
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
                <Image src={web16} className={styles.conceptexecute} />
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
                <Image src={web17} className={styles.conceptexecute} />
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
                <Image src={web18} className={styles.conceptexecute} />
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
                <Image src={web19} className={styles.conceptexecute} />
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
                <Image src={web21} className={styles.conceptexecute} />
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
                <Image src={web22} className={styles.conceptexecute} />
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
                <Image src={web23} className={styles.conceptexecute} />
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
                <Image src={web24} className={styles.conceptexecute} />
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
                <Image src={web25} className={styles.conceptexecute} />
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
                <Image src={web26} className={styles.conceptexecute} />
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
                <Image src={web27} className={styles.conceptexecute} />
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
                <Image src={web28} className={styles.conceptexecute} />
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
                <Image src={web29} className={styles.conceptexecute} />
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
                <Image src={web30} className={styles.conceptexecute} />
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
                <Image src={web31} className={styles.conceptexecute} />
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
                <Image src={web32} className={styles.conceptexecute} />
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
                <Image src={web33} className={styles.conceptexecute} />
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
                <Image src={web34} className={styles.conceptexecute} />
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
                <Image src={web35} className={styles.conceptexecute} />
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
                <Image src={web36} className={styles.conceptexecute} />
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
                <Image src={web37} className={styles.conceptexecute} />
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
                <Image src={web38} className={styles.conceptexecute} />
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
                <Image src={web39} className={styles.conceptexecute} />
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
                <Image src={web40} className={styles.conceptexecute} />
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
                <Image src={web41} className={styles.conceptexecute} />
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
                <Image src={web42} className={styles.conceptexecute} />
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
            <div className={`col-lg-12`}>
              <span className={styles.concepthead}>Concept. Strategy. Execute.</span>
            </div>
          </div>
        <div className={`row ${styles.casesrow}`}>
          <div className={`col-lg-4 p-2`}>
            <div className={styles.imgdiv}>
              <Image src={mobile1} className={styles.conceptexecute} />
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
              <Image src={mobile2} className={styles.conceptexecute} />
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
              <Image src={mobile3} className={styles.conceptexecute} />
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
                <Image src={mobile4} className={styles.conceptexecute} />
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
                <Image src={mobile5} className={styles.conceptexecute} />
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
                <Image src={mobile6} className={styles.conceptexecute} />
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
                <Image src={mobile7} className={styles.conceptexecute} />
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
                <Image src={mobile8} className={styles.conceptexecute} />
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
                <Image src={mobile9} className={styles.conceptexecute} />
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
                <Image src={seo1} className={styles.casestudyAll} />
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
                <Image src={seo2} className={styles.casestudyAll} />
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
                <Image src={seo3} className={styles.conceptexecute} />
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
                <Image src={seo4} className={styles.conceptexecute} />
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
                <Image src={seo5} className={styles.conceptexecute} />
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
                <Image src={seo6} className={styles.conceptexecute} />
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
                <Image src={seo7} className={styles.conceptexecute} />
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
                <Image src={seo8} className={styles.conceptexecute} />
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
                <Image src={seo9} className={styles.conceptexecute} />
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
                <Image src={seo10} className={styles.conceptexecute} />
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
                <Image src={seo11} className={styles.conceptexecute} />
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