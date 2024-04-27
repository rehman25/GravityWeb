import React from 'react'
import style from './portfolio.module.css'
import Portfolio from './AllPort/index'
import { photos as LogoDesignImages  } from './ImageFiles/LogoDesignImages'
import { photos as BrandingImages  } from './ImageFiles/BrandingImages'
import { photos as WebImages  } from './ImageFiles/WebImages'
import { photos as FlyerImages  } from './ImageFiles/FlyerImages'
import { photos as LogoAnimation  } from './ImageFiles/LogoAnimation'
import { photos as IllustrationImages  } from './ImageFiles/IllustrationImages'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const index = () => {
    return (
        <>
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
                                        <Portfolio photos={LogoDesignImages} />
                                    </TabPanel>
                                    <TabPanel>
                                        <Portfolio photos={BrandingImages} />
                                    </TabPanel>
                                    <TabPanel>
                                        <Portfolio photos={WebImages} />
                                    </TabPanel>
                                    <TabPanel>
                                        <Portfolio photos={FlyerImages} />
                                    </TabPanel>
                                    <TabPanel>
                                        <Portfolio photos={LogoAnimation} />
                                    </TabPanel>
                                    <TabPanel>
                                        <Portfolio photos={IllustrationImages} />
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default index