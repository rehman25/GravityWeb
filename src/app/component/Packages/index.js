// import React, { Component } from 'react'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "../../component/Packages/index.module.css";
// import { LuDot } from "react-icons/lu";


// function component() {
//     return (
//         <>
//             <section className="OurPackages">
//                 <div className="container">
//                     <div className={`${styles.Headerspackages}`}>
//                         <h1>OUR PACKAGES</h1>
//                         <p>Whatever We Do, We Simply Aim To Take It Above Average. Our Portfolio <br /> Displays Some Of Our Successful Projects Over The Years.</p>
//                     </div>
//                     <div className="row">
//                         <div className="col-12">
//                             <Tabs>
//                                 <TabList className={`${styles.CustomTabs}`}>
//                                     <Tab className={styles.Tab}>Logo Design</Tab>
//                                     <Tab className={styles.Tab}>Web Design</Tab>
//                                     <Tab className={styles.Tab}>Video Animation</Tab>
//                                     <Tab className={styles.Tab}>SEO</Tab>
//                                     <Tab className={styles.Tab}>Branding</Tab>
//                                     <Tab className={styles.Tab}>3 in 1 Bundle</Tab>
//                                 </TabList>

//                                 <TabPanel>
//                                     <div className={`${styles.PackagesCardsContainer}`}>
//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Basic Plan</h2>
//                                                 <h3>$ 59.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />2 Logo Concepts</li>
//                                                     <li><LuDot />By 1 Designer</li>
//                                                     <li><LuDot />3 Rounds Of Revisions</li>
//                                                     <li><LuDot />Online Purpose Files (JPG, PNG)</li>
//                                                     <li><LuDot />No Master Ai File of Logo</li>
//                                                     <li><LuDot />No Printing Purpose Files</li>
//                                                     <li><LuDot />100% Ownership</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>

//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Startup Plan</h2>
//                                                 <h3>$119.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />4 Logo Concepts</li>
//                                                     <li><LuDot />By 2 Designer</li>
//                                                     <li><LuDot />6 Rounds Of Revisions</li>
//                                                     <li><LuDot />Online Purpose Files (JPG, PNG)</li>
//                                                     <li><LuDot />Only Small Size Printing File (PDF)</li>
//                                                     <li><LuDot />No Master Ai File of Logo</li>
//                                                     <li><LuDot />100% Ownership</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>

//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Pro Plan</h2>
//                                                 <h3>$179.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />6 Logo Concepts</li>
//                                                     <li><LuDot />By 4 Designer</li>
//                                                     <li><LuDot />Unlimited Revisions</li>
//                                                     <li><LuDot />Online Purpose Files (JPG, PNG)</li>
//                                                     <li><LuDot />Both Large and Small Size</li>
//                                                     <li><LuDot />Printing Files (PDF, EPS)</li>
//                                                     <li><LuDot />No Master Ai File of Logo</li>
//                                                     <li><LuDot />100% Ownership</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </TabPanel>
//                                 <TabPanel>
//                                     <div className={`${styles.PackagesCardsContainer}`}>
//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Static Website</h2>
//                                                 <h3>$ 499.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />5 Custom Pages</li>
//                                                     <li><LuDot />5 Stock Images</li>
//                                                     <li><LuDot />5 Banner Designs</li>
//                                                     <li><LuDot />Multi-page Navigation</li>
//                                                     <li><LuDot />Contact Us Form Integration</li>
//                                                     <li><LuDot />Social Media Integration</li>
//                                                     <li><LuDot />SEO Friendly Sitemap</li>
//                                                     <li><LuDot />Mobile Responsive</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>

//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Dynamic Website</h2>
//                                                 <h3>$999.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />Easily customizable by anyone</li>
//                                                     <li><LuDot />10 Custom Pages</li>
//                                                     <li><LuDot />10 Stock Images</li>
//                                                     <li><LuDot />5 Banner Designs</li>
//                                                     <li><LuDot />Advanced UI Effects</li>
//                                                     <li><LuDot />Multi-page Navigation</li>
//                                                     <li><LuDot />Contact Us Form Integration</li>
//                                                     <li><LuDot />Social Media Integration</li>
//                                                     <li><LuDot />SEO Friendly Sitemap</li>
//                                                     <li><LuDot />Mobile Responsive</li>
//                                                     <li><LuDot />Google Analytics Integration</li>
//                                                     <li><LuDot />On Page Optimisation</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>

//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>E-Com Website</h2>
//                                                 <h3>$1,499.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />Unlimited Pages</li>
//                                                     <li><LuDot />Unlimited Products</li>
//                                                     <li><LuDot />Unlimited Categories</li>
//                                                     <li><LuDot />Product Reviews</li>
//                                                     <li><LuDot />Cart Integration</li>
//                                                     <li><LuDot />Payment Merchant Integration</li>
//                                                     <li><LuDot />15 Stock Images</li>
//                                                     <li><LuDot />15 Banner Designs</li>
//                                                     <li><LuDot />Advanced UI Effects</li>
//                                                     <li><LuDot />Multi-page Navigation</li>
//                                                     <li><LuDot />Contact Us Form Integration</li>
//                                                     <li><LuDot />Social Media Integration</li>
//                                                     <li><LuDot />SEO Friendly Sitemap</li>
//                                                     <li><LuDot />Mobile Responsive</li>
//                                                     <li><LuDot />Google Analytics Integration</li>
//                                                     <li><LuDot />On Page Optimization</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </TabPanel>
//                                 <TabPanel>
//                                     <div className={`${styles.PackagesCardsContainer}`}>
//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Static Website</h2>
//                                                 <h3>$ 499.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />5 Custom Pages</li>
//                                                     <li><LuDot />5 Stock Images</li>
//                                                     <li><LuDot />5 Banner Designs</li>
//                                                     <li><LuDot />Multi-page Navigation</li>
//                                                     <li><LuDot />Contact Us Form Integration</li>
//                                                     <li><LuDot />Social Media Integration</li>
//                                                     <li><LuDot />SEO Friendly Sitemap</li>
//                                                     <li><LuDot />Mobile Responsive</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>

//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>Dynamic Website</h2>
//                                                 <h3>$999.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />Easily customizable by anyone</li>
//                                                     <li><LuDot />10 Custom Pages</li>
//                                                     <li><LuDot />10 Stock Images</li>
//                                                     <li><LuDot />5 Banner Designs</li>
//                                                     <li><LuDot />Advanced UI Effects</li>
//                                                     <li><LuDot />Multi-page Navigation</li>
//                                                     <li><LuDot />Contact Us Form Integration</li>
//                                                     <li><LuDot />Social Media Integration</li>
//                                                     <li><LuDot />SEO Friendly Sitemap</li>
//                                                     <li><LuDot />Mobile Responsive</li>
//                                                     <li><LuDot />Google Analytics Integration</li>
//                                                     <li><LuDot />On Page Optimisation</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>

//                                         <div className="col-4">
//                                             <div className={`${styles.PackagesCards}`}>
//                                                 <h2>E-Com Website</h2>
//                                                 <h3>$1,499.00</h3>
//                                                 <ul className={styles.myList}>
//                                                     <li><LuDot />Unlimited Pages</li>
//                                                     <li><LuDot />Unlimited Products</li>
//                                                     <li><LuDot />Unlimited Categories</li>
//                                                     <li><LuDot />Product Reviews</li>
//                                                     <li><LuDot />Cart Integration</li>
//                                                     <li><LuDot />Payment Merchant Integration</li>
//                                                     <li><LuDot />15 Stock Images</li>
//                                                     <li><LuDot />15 Banner Designs</li>
//                                                     <li><LuDot />Advanced UI Effects</li>
//                                                     <li><LuDot />Multi-page Navigation</li>
//                                                     <li><LuDot />Contact Us Form Integration</li>
//                                                     <li><LuDot />Social Media Integration</li>
//                                                     <li><LuDot />SEO Friendly Sitemap</li>
//                                                     <li><LuDot />Mobile Responsive</li>
//                                                     <li><LuDot />Google Analytics Integration</li>
//                                                     <li><LuDot />On Page Optimization</li>
//                                                 </ul>
//                                                 <span className={`${styles.PackagesCardsContact}`}>Speak with us</span>
//                                                 <p>+1 (617) 465-5827</p>
//                                                 <span className={`${styles.PackagesCardSupport}`}>Want to discuss?</span>
//                                                 <p>Live Chat</p>
//                                                 <button>Buy now</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </TabPanel>
//                             </Tabs>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default component


// class Test extends Component {
//     render() {
//         const settings = {
//             dots: false,
//             infinite: true,
//             autoplay: true,
//             autoplaySpeed: 3000,
//             focusOnSelect: true,
//             pauseOnHover: true,
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             lazyLoad: true,
//             arrows: false,
//             adaptiveHeight: true,
//             className: `testimonials`,
//             responsive: [
//                 {
//                     breakpoint: 1024,
//                     settings: {
//                         slidesToShow: 3,
//                     }
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 2,
//                     }
//                 },
//                 {
//                     breakpoint: 480,
//                     settings: {
//                         slidesToShow: 1,
//                     }
//                 },
//             ]

//         };
//         return (
// <div>
//     <Slider {...settings}>


//     </Slider>
// </div>
//         );
//     }
// }


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
                                    <LogoDesign />
                                </TabPanel>
                                <TabPanel>
                                    <LogoDesign />
                                </TabPanel>
                                <TabPanel>
                                    <LogoDesign />
                                </TabPanel>
                                <TabPanel>
                                    <LogoDesign />
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
                                <h2>aaaa</h2>
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


