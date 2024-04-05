'use client'
import React, { Component, useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CiCirclePlus } from "react-icons/ci";
import Text from '../text'
import style from './faq.module.css'



const component = () => {
    return (
        <>
            <section className={`${style.bgColor}`}>
                <div className="container-fliud">
                    <div className="row justify-content-between">
                        <Text text="FAQ" animation="fade-right" />
                        <div className=''>
                            <Work />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default component

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverDirections: {
                box1: null,
                box2: null,
                box3: null,
                box4: null,
                box5: null,
                // Add more boxes as needed
            }
        };
    }
    handleMouseEnter = (boxName, event) => {
        const boxRect = event.target.getBoundingClientRect();
        const { clientX, clientY } = event;
        const isComingFromLeft = clientX < boxRect.left + boxRect.width / 2;
        const isComingFromTop = clientY < boxRect.top + boxRect.height / 2;
        let direction = '';
        if (isComingFromLeft) {
            direction += 'left';
        } else {
            direction += 'right';
        }
        if (isComingFromTop) {
            direction += 'top';
        } else {
            direction += 'bottom';
        }
        this.setState(prevState => ({
            hoverDirections: {
                ...prevState.hoverDirections,
                [boxName]: direction
            }
        }));
    };
    handleMouseLeave = (boxName) => {
        this.setState(prevState => ({
            hoverDirections: {
                ...prevState.hoverDirections,
                [boxName]: null
            }
        }));
    };

    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            lazyLoad: true,
            arrows: false,
            className: "faqs_slider",
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                    },
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };
        const { hoverDirections } = this.state;
        return (
            <div>
                <Slider {...settings}>
                    <div className="col-2 p-0 mt-2">
                        <div className={`${style.box}`}
                             onMouseEnter={(event) => this.handleMouseEnter('box1', event)}
                             onMouseLeave={() => this.handleMouseLeave('box1')}
                        >
                            <h5>1</h5>
                            <span>I need web design services for my enterprise website. Can you help? </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirections.box1 == "lefttop" ? style.leftTop :
                                    hoverDirections.box1 == "righttop" ? style.rightTop :
                                    hoverDirections.box1 == "rightbottom" ? style.rightbottom :
                                    hoverDirections.box1 == "leftbottom" ? style.rightbottom : ""
                                }
                            >
                                <h6>1</h6>
                                <p>
                                    Whether you are an enterprise or a start-up,
                                    we would love to contribute to your growth with
                                    our web design and development services in Dubai.
                                    We have designed several enterprise websites before.
                                    Head over to our portfolio section to see our capabilities
                                    in enterprise web development.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-0 mt-2">
                        <div className={`${style.box}`}
                             onMouseEnter={(event) => this.handleMouseEnter('box2', event)}
                             onMouseLeave={() => this.handleMouseLeave('box2')}>
                            <h5>2</h5>
                            <span>How much does it cost to hire web designer in Dubai? </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirections.box2 == "lefttop" ? style.leftTop :
                                    hoverDirections.box2 == "righttop" ? style.rightTop :
                                    hoverDirections.box2 == "rightbottom" ? style.rightbottom :
                                    hoverDirections.box2 == "leftbottom" ? style.rightbottom : ""
                                }
                            >
                                <h6>2</h6>
                                <p>
                                    If you are looking to hire web designer in Dubai,
                                    you must consider factors such as; website nature,
                                    the development platform, and hosting service provider.
                                    A stunning and highly functional website, costs somewhere
                                    around 5,000-12, 000 AED.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-0 mt-2">
                        <div className={`${style.box}`}
                            onMouseEnter={(event) => this.handleMouseEnter('box3', event)}
                            onMouseLeave={() => this.handleMouseLeave('box3')}>
                            <h5>3</h5>
                            <span>How can I choose a great web design agency in Dubai?</span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirections.box3 == "lefttop" ? style.leftTop :
                                    hoverDirections.box3 == "righttop" ? style.rightTop :
                                    hoverDirections.box3 == "rightbottom" ? style.rightbottom :
                                    hoverDirections.box3 == "leftbottom" ? style.rightbottom : ""
                                }
                            >
                                <h6>3</h6>
                                <p>
                                    If you are looking for the best website design
                                    company for your business, you should first
                                    identify what kind of site you require, and
                                    what you aim to accomplish with your new website.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-0 mt-2">
                        <div className={`${style.box}`}
                           onMouseEnter={(event) => this.handleMouseEnter('bo4', event)}
                           onMouseLeave={() => this.handleMouseLeave('box4')}>
                            <h5>4</h5>
                            <span>Is responsive web design important? </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirections.box4 == "lefttop" ? style.leftTop :
                                    hoverDirections.box4 == "righttop" ? style.rightTop :
                                    hoverDirections.box4 == "rightbottom" ? style.rightbottom :
                                    hoverDirections.box4 == "leftbottom" ? style.rightbottom : ""
                                }
                            >
                                <h6>4</h6>
                                <p>
                                    Almost 60% of web traffic comes from mobile devices.
                                    So if your website is not mobile-friendly or responsive,
                                    you will lose more than half of your prospects.
                                    Responsive website design is also important for SEO.
                                    If your website isn’t responsive,
                                    you will get little to no organic traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 p-0 mt-2">
                        <div className={`${style.box}`}
                           onMouseEnter={(event) => this.handleMouseEnter('box5', event)}
                           onMouseLeave={() => this.handleMouseLeave('box5')}>
                            <h5>5</h5>
                            <span>
                                What are the average charges that a website design
                                agency in Dubai asks for responsive web design services?
                            </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirections.box5 == "lefttop" ? style.leftTop :
                                    hoverDirections.box5 == "righttop" ? style.rightTop :
                                    hoverDirections.box5 == "rightbottom" ? style.rightbottom :
                                    hoverDirections.box5 == "leftbottom" ? style.rightbottom : ""
                                }>
                                <h6>5</h6>
                                <p>
                                    When designing your website, most expert web designers
                                    in Dubai will make sure that your site is mobile-friendly anyway.
                                    Responsive web design may cost between 7346 AED to 73,460 AED,
                                    based on the designer’s experience and your project.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}