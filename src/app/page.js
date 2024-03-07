import React from 'react'
// import NoSSR from 'react-no-ssr';
import style from './styles/home.module.css'
import Image from 'next/image';
import Button from './components/buttons/index';



const page = () => {

  return (
    <>
      <section>
        <div className={`${style.heroSection} container-fluid`}>
          <div className="row mt-5" style={{ width: "100%" }}>
            <div className='col-lg-12'>
              <div className={`${style.heroRightSide}`}>
                <span className={`${style.heroHeadOne}`}>CONNECTING BRANDS</span>
                <span className={`${style.heroHeadTwo}`}>WITH GLOBAL</span>
                <span className={`${style.heroHeadTwo}`}>AUDIENCES</span>
              </div>
            </div>
            <div className='col-lg-12 mt-5'>
              <div className="col-lg-6">
                <div className={`${style.heroLeftSide}`}>
                  <p>
                    You have an idea, we have the talent and resources to turn it into a reality.
                    Digital Gravity is a globally recognized digital agency elevating brands through
                    ground-breaking user experience and disruptive digital products.
                  </p>
                  <Button text="Let's Talk"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page