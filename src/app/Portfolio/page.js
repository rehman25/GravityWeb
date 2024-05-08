'use client'
import React from 'react'
import style from './portfolio.module.css'
import Portfolio from './AllPort/Add'
import { photos as LogoDesignImages  } from './ImageFiles/LogoDesignImages'
import { photos as BrandingImages  } from './ImageFiles/BrandingImages'
import { photos as WebImages  } from './ImageFiles/WebImages'
import { photos as FlyerImages  } from './ImageFiles/FlyerImages'
import { photos as LogoAnimation  } from './ImageFiles/LogoAnimation'
import { photos as IllustrationImages  } from './ImageFiles/IllustrationImages'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { photos as LogoDesignImagesone  } from './SomeImageFiles/LogoDesignImages'
import { photos as BrandingImagesone  } from './SomeImageFiles/BrandingImages'
import { photos as WebImagesone  } from './SomeImageFiles/WebImages'
import { photos as FlyerImagesone  } from './SomeImageFiles/FlyerImages'
import { photos as LogoAnimationone  } from './SomeImageFiles/LogoAnimation'
import { photos as IllustrationImagesone  } from './SomeImageFiles/IllustrationImages'
import Cursor from '../component/cursor/cursor'
import Header from '../component/Header/component'
import Footer from '../component/Footer/component'
import Aboutbanner from '../about/components/Aboutbanner'




const page = ({page}) => {
    return (
        <>
            
        {
            page == "home" ? null : <><Cursor /> <Header /></>            
        }
        <Aboutbanner/>
            <section className={`${style.port__section}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`${style.port__box} port__box`}>
                                <h5>DESIGN PORTFOLIO</h5>
                                <h4>PROSPECT OF OUR RECENT WORK</h4>
                                <p>Tap on the images to see the detailed sight of our versatile designs. Get yours too!</p>
                                <Tabs>
                                    <TabList>
                                        <Tab>Logo Design</Tab>
                                        <Tab>Branding Design</Tab>
                                        <Tab>Web Design</Tab>
                                        <Tab>Flyer Desgin</Tab>
                                        <Tab>Logo Animation</Tab>
                                        <Tab>Illustrations</Tab>
                                    </TabList>

                                    <TabPanel>
                                        {
                                            page == "home" ?
                                            <Portfolio photos={LogoDesignImagesone} showMore={true}/> :
                                            <Portfolio photos={LogoDesignImages} showMore={false}/>
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        {
                                            page == "home" ?
                                            <Portfolio photos={BrandingImagesone} showMore={true}/> :
                                            <Portfolio photos={BrandingImages} showMore={false}/> 
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        {
                                            page == "home" ?
                                            <Portfolio photos={WebImagesone} showMore={true}/> :
                                            <Portfolio photos={WebImages} showMore={false}/>
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        {
                                            page == "home" ?
                                            <Portfolio photos={FlyerImagesone} showMore={true}/> :
                                            <Portfolio photos={FlyerImages} showMore={false}/>
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        {
                                            page == "home" ?
                                            <Portfolio photos={LogoAnimationone} showMore={true}/> :
                                            <Portfolio photos={LogoAnimation} showMore={false}/> 
                                        }
                                    </TabPanel>
                                    <TabPanel>
                                        {
                                            page == "home" ?
                                            <Portfolio photos={IllustrationImagesone} showMore={true}/> :
                                            <Portfolio photos={IllustrationImages} showMore={false}/>
                                        }
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                page == "home" ? null : <><Footer /></>            
            }
        </>
    )
}

export default page