
'use client'
import Image from 'next/image';
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import style from '../../styles/blog.module.css';
import img from '../../assets/images/tabs/Leveraging.jpg'

const Tabsss = () => {
  return (
    <>
      <section>
        <div className="container mt-5 p-0 blogTabs">
          <div className="row p-0">
            <div className="col-lg-12 p-0">
              <div>
                <Tabs style={{ }}>
                  <TabList id={`${style.TabList}`}>
                  <Tab style={{ backgroundColor: '#E3204A', color: '#f2f2f2' }}>All</Tab>
                    <Tab>Branding</Tab>
                    <Tab>UI/UX</Tab>
                    <Tab>Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Creative Production</Tab>
                  </TabList>
                  <>
                    <TabPanel className={`${style.TabPanel}`}>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={`${style.TabPanel}`}>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={`${style.TabPanel}`}>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={`${style.TabPanel}`}>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={`${style.TabPanel}`}>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                    </TabPanel>
                    <TabPanel className={`${style.TabPanel}`}>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
                        </div>
                        <div className={`col-3 ${style.blogTabBox}`}>
                          <Image
                            src={img}
                            alt="Example Image"
                          />
                          <div>
                            <div className={`${style.blogTabsDesBox}`}>
                              <h6>PPC</h6>
                              <span>March 15, 2024</span>
                            </div>
                            <div className={`${style.overFlow}`}>The Power Of Remarketing In PPC Advertising</div>
                            <p>
                              It is a cut-throat industry where engaging your audience and
                              pursuing them to convert is more challenging than ever.
                              However, there is a strategy that can give you the desired
                              returns of your efforts and that is remarketing.
                            </p>
                          </div>
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
  )
}

export default Tabsss