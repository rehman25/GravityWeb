"use client";
import React, { useState } from "react";
import styles from "../../styles/about.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "../../component/text/index";
import Image from "next/image";
import one from "../../assets/images/expertise/icon-1.svg";
import two from "../../assets/images/expertise/icon-2.svg";
import three from "../../assets/images/expertise/icon-3.svg";
import four from "../../assets/images/expertise/icon-4.svg";
import five from "../../assets/images/expertise/icon-5.svg";
import six from "../../assets/images/expertise/icon-6.svg";
import seven from "../../assets/images/expertise/icon-7.svg";
import eight from "../../assets/images/expertise/icon-8.svg";
import nine from "../../assets/images/expertise/icon-9.svg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Expertise() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className={`${styles.Expertise___bg}  Expertise___bg`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div>
                <Text text="Expertise" animation={"fade-right"} />
                <Tabs className={`${styles.Expertise___tabs__box} mt-5`}>
                  <TabList id={`${styles.Expertise___tabs__list}`}>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={one} // Path to your image file in the public directory
                        alt="Example Image"
                   
                      />
                      <span>
                        Data & Analytics <br /> Solutions
                      </span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={two} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Digital Marketing</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={three} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Creative Designing</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={four} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Web Design & Development</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={five} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Digital Commerce</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={six} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Cyber Security Services</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={seven} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Application Development</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={eight} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Quality Engineering & Testing</span>
                    </Tab>
                    <Tab className={"col-lg-4"}>
                      <Image
                        src={nine} // Path to your image file in the public directory
                        alt="Example Image"
                      />
                      <span>Resource Outsourcing</span>
                    </Tab>
                  </TabList>
                  <>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={one} // Path to your image file in the public directory
                          alt="Example Image"
                          
                        />
                        <p>
                          A steady stream of insights assists you in making
                          informed business decisions. Whether you are an
                          e-commerce business or a corporate firm, a data-savvy
                          tech firm or a blockchain start-up, Digital Gravity’s
                          analytics services and solutions will help your
                          organization grow and stay ahead of the competition.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={two} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          We enjoy scaling businesses with on-point messaging,
                          memorable campaigns, beautiful UI designs, and
                          professional branding. Digital Gravity is Dubai’s
                          leading digital marketing agency, helping local and
                          international businesses achieve record-breaking
                          results with SEO, PPC & social media. We propel
                          start-ups to grow fast, and big brands to grow even
                          bigger!
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={three} // Path to your image file in the public directory
                          alt="Example Image"
                          
                        />
                        <p>
                          Creativity is our bread and butter. From logo design
                          to photo editing, custom design work, interface
                          design, packaging design, and basically everything in
                          the creative design space, we perform all the work in
                          a meticulous manner. Digital Gravity has a rich pool
                          of resources in the design space, helping our clients
                          make an impressive impression on their target
                          audience.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={four} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          Fascinate your prospects with jaw-dropping designs and
                          provide them with a memorable experience by adding
                          state-of-the-art functionalities to your site. Digital
                          Gravity is Dubai’s leading web design and development
                          agency, dealing in WordPress, Wix, Drupal, and
                          Sitecore, as well as custom web development.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={five} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          Capitalize on the unprecedented opportunities being
                          offered to create your online business and sell from
                          the comfort of your home. Digital Gravity offers
                          end-to-end Digital Commerce services including
                          e-commerce store development and marketing of your
                          store. We have hands-on experience building successful
                          e-commerce stores using Shopify, WordPress
                          WooCommerce, and Joomla.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={six} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          We house a team of expert developers and cyber
                          security experts who will assist you in protecting
                          your online business from cyber threats, ransomware,
                          and viruses. We will shield your enterprise against
                          threats and strengthen your cyber defences by
                          deploying the most cutting-edge technologies as we
                          have done for dozens of our local and international
                          clients.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={seven} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          As one of the leading mobile app development companies
                          in Dubai, Digital Gravity has a team of expert iOS,
                          Android, and cross-platform app developers. We create
                          stunning mobile interfaces with a wide range of
                          functionalities for all clients coming from various
                          industries. Our services have helped hundreds of
                          businesses expand and attain their goals in the
                          competitive digital landscape internationally.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={eight} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          Be it web or mobile, we are passionate about the
                          latest testing technologies. Our Q/A engineering
                          experts dig deep while testing mobile and web
                          applications to spot unidentified bugs or flaws in the
                          interface or performance, ensuring a memorable
                          experience for the end user of your product.
                        </p>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className={`${styles.Expertise__TabPanel}`}>
                        <Image
                          src={nine} // Path to your image file in the public directory
                          alt="Example Image"
                        />
                        <p>
                          Digital Gravity is proud of its IT talent. In an era
                          in which trustworthy and talented IT resources are
                          hard to find, we connect you with qualified resources
                          in the design, development, and digital marketing
                          domain. From resource hunting to management till the
                          end of the project, our Resource Outsourcing
                          department takes care of all the major and trivial
                          details.
                        </p>
                      </div>
                    </TabPanel>
                  </> 
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expertise;
