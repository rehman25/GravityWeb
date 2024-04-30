import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../component/Packages/index.module.css";
import { LuDot } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

function Packages() {
    return (
        <>
            <section className="OurPackages">
                <div className="container">
                    <div className={`${styles.Headerspackages}`}>
                        <h1>OUR PACKAGES</h1>
                        <p>Whatever We Do, We Simply Aim To Take It Above Average. Our Portfolio <br /> Displays Some Of Our Successful Projects Over The Years.</p>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Tabs>
                                <TabList className={`${styles.CustomTabs}`}>
                                    <Tab className={styles.Tab}>Logo Design</Tab>
                                    <Tab className={styles.Tab}>Web Design</Tab>
                                    <Tab className={styles.Tab}>Video Animation</Tab>
                                    <Tab className={styles.Tab}>SEO</Tab>
                                    <Tab className={styles.Tab}>Branding</Tab>
                                    <Tab className={styles.Tab}>3 in 1 Bundle</Tab>
                                </TabList>

                                <TabPanel>
                                    <LogoDesign />
                                </TabPanel>
                                <TabPanel>
                                    <WebDesign />
                                </TabPanel>
                                <TabPanel>
                                    <VideoAnimation />
                                </TabPanel>
                                <TabPanel>
                                    <SEO />
                                </TabPanel>
                                <TabPanel>
                                    <Branding />
                                </TabPanel>
                                <TabPanel>
                                    <Bundle />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Packages;

class LogoDesign extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Basic Plan</h2>
                            <h3>$ 59.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />2 Logo Concepts</li>
                                <li><LuDot />By 1 Designer</li>
                                <li><LuDot />3 Rounds Of Revisions</li>
                                <li><LuDot />Online Purpose Files (JPG, PNG)</li>
                                <li><LuDot />No Master Ai File of Logo</li>
                                <li><LuDot />No Printing Purpose Files</li>
                                <li><LuDot />100% Ownership</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Startup Plan</h2>
                            <h3>$119.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />4 Logo Concepts</li>
                                <li><LuDot />By 2 Designer</li>
                                <li><LuDot />6 Rounds Of Revisions</li>
                                <li><LuDot />Online Purpose Files (JPG, PNG)</li>
                                <li><LuDot />Only Small Size Printing File (PDF)</li>
                                <li><LuDot />No Master Ai File of Logo</li>
                                <li><LuDot />100% Ownership</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Pro Plan</h2>
                            <h3>$179.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />6 Logo Concepts</li>
                                <li><LuDot />By 4 Designer</li>
                                <li><LuDot />Unlimited Revisions</li>
                                <li><LuDot />Online Purpose Files (JPG, PNG)</li>
                                <li><LuDot />Both Large and Small Size</li>
                                <li><LuDot />Printing Files (PDF, EPS)</li>
                                <li><LuDot />No Master Ai File of Logo</li>
                                <li><LuDot />100% Ownership</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Ultimate Plan</h2>
                            <h3>$249.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Unlimited Logo Concepts</li>
                                <li><LuDot />By Team Of Designers</li>
                                <li><LuDot />Unlimited Revisions</li>
                                <li><LuDot />Online Purpose Files (JPG, PNG)</li>
                                <li><LuDot />Both Large and Small Size</li>
                                <li><LuDot />Printing Files (PDF, EPS)</li>
                                <li><LuDot />Master AI File of Logo included</li>
                                <li><LuDot />100% Ownership</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

class WebDesign extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Static Website</h2>
                            <h3>$ 499.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />5 Custom Pages</li>
                                <li><LuDot />5 Stock Images</li>
                                <li><LuDot />5 Banner Designs</li>
                                <li><LuDot />Multi-page Navigation</li>
                                <li><LuDot />Contact Us Form Integration</li>
                                <li><LuDot />Social Media Integration</li>
                                <li><LuDot />SEO Friendly Sitemap</li>
                                <li><LuDot />Mobile Responsive</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Dynamic Website</h2>
                            <h3>$999.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Easily customizable by anyone</li>
                                <li><LuDot />10 Custom Pages</li>
                                <li><LuDot />10 Stock Images</li>
                                <li><LuDot />5 Banner Designs</li>
                                <li><LuDot />Advanced UI Effects</li>
                                <li><LuDot />Multi-page Navigation</li>
                                <li><LuDot />Contact Us Form Integration</li>
                                <li><LuDot />Social Media Integration</li>
                                <li><LuDot />SEO Friendly Sitemap</li>
                                <li><LuDot />Mobile Responsive</li>
                                <li><LuDot />Google Analytics Integration</li>
                                <li><LuDot />On Page Optimisation</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>E-Com Website</h2>
                            <h3>$1,499.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Unlimited Pages</li>
                                <li><LuDot />Unlimited Products</li>
                                <li><LuDot />Unlimited Categories</li>
                                <li><LuDot />Product Reviews</li>
                                <li><LuDot />Cart Integration</li>
                                <li><LuDot />Payment Merchant Integration</li>
                                <li><LuDot />15 Stock Images</li>
                                <li><LuDot />15 Banner Designs</li>
                                <li><LuDot />Advanced UI Effects</li>
                                <li><LuDot />Multi-page Navigation</li>
                                <li><LuDot />Contact Us Form Integration</li>
                                <li><LuDot />Social Media Integration</li>
                                <li><LuDot />SEO Friendly Sitemap</li>
                                <li><LuDot />Mobile Responsive</li>
                                <li><LuDot />Google Analytics Integration</li>
                                <li><LuDot />On Page Optimization</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Portal Website</h2>
                            <h3>$2,999.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Any One:</li>
                                <li><LuDot />Dating Portal</li>
                                <li><LuDot />Job Portal</li>
                                <li><LuDot />Professional Network</li>
                                <li><LuDot />Social Network</li>
                                <li><LuDot />Media Portal</li>
                                <li><LuDot />Real Estate Portal</li>
                                <li><LuDot />Medical Portal</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

class VideoAnimation extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Basic Video</h2>
                            <h3>$325.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />30 Second Video</li>
                                <li><LuDot />Professional Script</li>
                                <li><LuDot />Custom Design</li>
                                <li><LuDot />Storyboard</li>
                                <li><LuDot />Custom Animation</li>
                                <li><LuDot />Voice Over & Sound Effects</li>
                                <li><LuDot />4 weeks Delivery</li>                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Starter Video</h2>
                            <h3>$825.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />60 Second Video</li>
                                <li><LuDot />Professional Script</li>
                                <li><LuDot />Custom Design</li>
                                <li><LuDot />Storyboard</li>
                                <li><LuDot />Custom Animation</li>
                                <li><LuDot />Voice Over & Sound Effects</li>
                                <li><LuDot />5 weeks Delivery</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Professional Video</h2>
                            <h3>$1325.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />90 Second Video</li>
                                <li><LuDot />Professional Script</li>
                                <li><LuDot />Custom Design</li>
                                <li><LuDot />Storyboard</li>
                                <li><LuDot />Custom Animation</li>
                                <li><LuDot />Voice Over & Sound Effects</li>
                                <li><LuDot />6 weeks Delivery</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>3D Video Basic</h2>
                            <h3>$2225.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />30 Second Video</li>
                                <li><LuDot />Professional Script</li>
                                <li><LuDot />Custom Design</li>
                                <li><LuDot />Storyboard</li>
                                <li><LuDot />Custom Animation</li>
                                <li><LuDot />Voice Over & Sound Effects</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Golden Video Package</h2>
                            <h3>$14852.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />3D Video Elite Included</li>
                                <li><LuDot />High-Quality Work & Years of Experience</li>
                                <li><LuDot />100% Satisfaction Guarantee</li>
                                <li><LuDot />100% Money Back Guarantee</li>
                                <li><LuDot />Fantastic Free Customer Support after Service</li>
                                <li><LuDot />Unlimited FREE Revisions</li>
                                <li><LuDot />Professional Voice Overs � 100% Real Human Voiceovers</li>
                                <li><LuDot />1080P Full HD Video Quality</li>
                                <li><LuDot />Brand Coloring</li>
                                <li><LuDot />Royalty-Free Background Music</li>
                                <li><LuDot />Characters included</li>
                                <li><LuDot />Voice over recording</li>
                                <li><LuDot />Script writing</li>
                                <li><LuDot />Illustrated background included</li>
                                <li><LuDot />Music/sound design included</li>
                                <li><LuDot />Running time (seconds) 3 min</li>
                                <li><LuDot />High Quality Tools used</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Platinium Video Package</h2>
                            <h3>$24702.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Golden Video Included</li>
                                <li><LuDot />High-Quality Work & Years of Experience</li>
                                <li><LuDot />100% Satisfaction Guarantee</li>
                                <li><LuDot />100% Money Back Guarantee</li>
                                <li><LuDot />Fantastic Free Customer Support after Service</li>
                                <li><LuDot />Unlimited FREE Revisions</li>
                                <li><LuDot />Professional Voice Overs � 100% Real Human Voiceovers</li>
                                <li><LuDot />1080P Full HD Video Quality</li>
                                <li><LuDot />Brand Coloring</li>
                                <li><LuDot />Royalty-Free Background Music</li>
                                <li><LuDot />Characters included</li>
                                <li><LuDot />Voice over recording</li>
                                <li><LuDot />Script writing</li>
                                <li><LuDot />Illustrated background included</li>
                                <li><LuDot />Music/sound design included</li>
                                <li><LuDot />Running time (seconds) 3 min</li>
                                <li><LuDot />High Quality Tools used</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

class SEO extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Social Identity</h2>
                            <h3>$149.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Social Business Accounts Creation (any 3 networks)</li>
                                <li><LuDot />Cover Photo Design</li>
                                <li><LuDot />Welcome Page Design</li>
                                <li><LuDot />Profile Picture Design</li>
                                <li><LuDot />2 Cover Photo Design</li>
                                <li><LuDot />3 Custom Posts</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Basic Monthly</h2>
                            <h3>$499.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />2 Postings per week, per network (Facebook, Instagram)</li>
                                <li><LuDot />Content Creation</li>
                                <li><LuDot />Social Page Optimization</li>
                                <li><LuDot />Social Media Strategy</li>
                                <li><LuDot />Monthly Progress Report</li>
                                <li><LuDot />Facebook/Instagram Likes Campaign [+$100]</li>
                                <li><LuDot />Paid Boosting (additional charges as per the budget)</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Professional Video</h2>
                            <h3>$1325.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />5 Postings per week, per network (Facebook, Instagram)</li>
                                <li><LuDot />Social Page Optimization</li>
                                <li><LuDot />Social Media Strategy</li>
                                <li><LuDot />Comment Moderation</li>
                                <li><LuDot />Spam Monitoring</li>
                                <li><LuDot />Reputation Management</li>
                                <li><LuDot />Monthly Progress Report</li>
                                <li><LuDot />Facebook/Instagram Likes Campaign [+$100]</li>
                                <li><LuDot />Paid Boosting (additional charges as per the budget)</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Social Elite</h2>
                            <h3>$3600.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Choose From Facebook, Twitter, Instagram</li>
                                <li><LuDot />30 Posts Per Month</li>
                                <li><LuDot />12 Custom Images</li>
                                <li><LuDot />6 Boosted Posts</li>
                                <li><LuDot />$600 Ad Spend Required</li>
                                <li><LuDot />Social Media Strategy</li>
                                <li><LuDot />Social Media Audit</li>
                                <li><LuDot />Social Recommendations</li>
                                <li><LuDot />Facebook/Instagram Likes ( $200 Campaign )</li>
                                <li><LuDot />Dedicated Project Manager</li>
                                <li><LuDot />Daily Monitoring of Social Assets</li>
                                <li><LuDot />Daily Monitoring of Boosted Posts</li>
                                <li><LuDot />24 Hours Customer Response Time</li>
                                <li><LuDot />Social Media Setup</li>
                                <li><LuDot />Social Media Configuration</li>
                                <li><LuDot />Profile Photos And Banners</li>
                                <li><LuDot />Paid Boosting (additional charges as per the budget)</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Social Enterprise</h2>
                            <h3>$5700.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Choose From Facebook, Twitter, Instagram</li>
                                <li><LuDot />40 Posts Per Month</li>
                                <li><LuDot />16 Custom Images</li>
                                <li><LuDot />8 Boosted Posts</li>
                                <li><LuDot />$800 Ad Spend Required</li>
                                <li><LuDot />Social Media Strategy</li>
                                <li><LuDot />Social Media Audits</li>
                                <li><LuDot />Social Recommendations</li>
                                <li><LuDot />Brand Analysis</li>
                                <li><LuDot />Dedicated Project Manager</li>
                                <li><LuDot />Facebook/Instagram Likes ( $200 Campaign )</li>
                                <li><LuDot />Daily Monitoring of Social Assets</li>
                                <li><LuDot />Daily Monitoring of Boosted Posts</li>
                                <li><LuDot />24 Hours Customer Response Time</li>
                                <li><LuDot />Social Media Setup</li>
                                <li><LuDot />Social Media Configuration</li>
                                <li><LuDot />Profile Photos And Banners</li>
                                <li><LuDot />Paid Boosting (additional charges as per the budget)</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Golden Social Enterprise</h2>
                            <h3>$14852.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Social Enterprise Package Included</li>
                                <li><LuDot />social Account Creartion</li>
                                <li><LuDot />Social Account Audit And manatgement (Facebook ,LinkdIn , Instagarfam , Twitter )</li>
                                <li><LuDot />Number of Posts (Content creation And design management )</li>
                                <li><LuDot />Gif Creation</li>
                                <li><LuDot />Monthly Content Calendar</li>
                                <li><LuDot />SMM Startegy Building</li>
                                <li><LuDot />CLients Approval Per Post</li>
                                <li><LuDot />Posts sharing And Hash Tagging</li>
                                <li><LuDot />Monthly Achievements Reporting</li>
                                <li><LuDot />Fb And Insta Adds Campaign Mangement Charges</li>
                                <li><LuDot />Client advertisment Budget Per day</li>
                                <li><LuDot />Add Spending And Archiement Reports will be shared</li>
                                <li><LuDot />Animated Video (Without voice Over And Script )</li>
                                <li><LuDot />Cover Photo Design</li>
                                <li><LuDot />Profile Picture Design</li>
                                <li><LuDot />6 Cover Photo Design</li>
                                <li><LuDot />3 Custom Posts</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Branding extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Basic Kit</h2>
                            <h3>$ 59.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Business Card Design</li>
                                <li><LuDot />Letterhead Design</li>
                                <li><LuDot />Envelope Design</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Startup Kit</h2>
                            <h3>$119.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Business Card Design</li>
                                <li><LuDot />Letterhead Design</li>
                                <li><LuDot />Envelope Design</li>
                                <li><LuDot />Email Signature Design</li>
                                <li><LuDot />2 Social Media Covers</li>
                                <li><LuDot />2 Website Banners</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Pro Kit</h2>
                            <h3>$179.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Business Card Design</li>
                                <li><LuDot />Letterhead Design</li>
                                <li><LuDot />Envelope Design</li>
                                <li><LuDot />Email Signature Design</li>
                                <li><LuDot />4 Social Media Covers</li>
                                <li><LuDot />4 Website Banners</li>
                                <li><LuDot />T-Shirt Design</li>
                                <li><LuDot />Bag Design</li>
                                <li><LuDot />Car Sticker Design</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Ultimate Kit</h2>
                            <h3>$299.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Business Card Design</li>
                                <li><LuDot />Letterhead Design</li>
                                <li><LuDot />Envelope Design</li>
                                <li><LuDot />Email Signature Design</li>
                                <li><LuDot />4 Social Media Covers</li>
                                <li><LuDot />4 Website Banners</li>
                                <li><LuDot />T-Shirt Design</li>
                                <li><LuDot />Mug Design</li>
                                <li><LuDot />Door Hanger Design</li>
                                <li><LuDot />Mouse pad design</li>
                                <li><LuDot />Bag Design</li>
                                <li><LuDot />Car Sticker Design</li>
                                <li><LuDot />Invoice Design</li>
                                <li><LuDot />Fax Template Design</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

class Bundle extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };


        return (
            <div>
                <Slider {...settings}>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Basic Bundle</h2>
                            <h3>$499.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Startup Logo 199$</li>
                                <li><LuDot />Startup Branding Kit $99</li>
                                <li><LuDot />Basic Website $499</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Startup Plan</h2>
                            <h3>$999.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Ultimate Logo $249</li>
                                <li><LuDot />Pro Branding Kit $149</li>
                                <li><LuDot />Dynamic Website $999</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Pro Plan</h2>
                            <h3>$1,499.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Award Winning Logo Package $399</li>
                                <li><LuDot />Ultimate Branding Kit $299</li>
                                <li><LuDot />E-commerce Website $1499</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`${styles.PackagesCards}`}>
                            <h2>Ultimate Bundle</h2>
                            <h3>$2,999.00</h3>
                            <ul className={styles.myList}>
                                <li><LuDot />Award Winning Logo Package $399</li>
                                <li><LuDot />Ultimate Logo Package $299</li>
                                <li><LuDot />Portal Website $2999</li>
                            </ul>
                            <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
                            <p>+1 (617) 465-5827</p>
                            <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
                            <p>Live Chat</p>
                            <button>Buy now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}


