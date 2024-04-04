'use client'
import React, { Component, useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { CiCirclePlus } from "react-icons/ci";
import Text from '../text'
import style from './faq.module.css'



const component = () => {
    const [hoverDirectionOne, setHoverDirectionOne] = useState(null);
    const [hoverDirectionTwo, setHoverDirectionTwo] = useState(null);
    const [hoverDirectionThree, setHoverDirectionThree] = useState(null);
    const [hoverDirectionFour, setHoverDirectionFour] = useState(null);
    const handleMouseEnterOne = (event) => {
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
        setHoverDirectionOne(direction);
    };
    const handleMouseLeaveOne = () => {
        setHoverDirectionOne(null);
    };
    const handleMouseEnterTwo = (event) => {
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
        setHoverDirectionTwo(direction);
    };
    const handleMouseLeaveTwo = () => {
        setHoverDirectionTwo(null);
    };
    const handleMouseEnterThree = (event) => {
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
        setHoverDirectionThree(direction);
    };
    const handleMouseLeaveThree = () => {
        setHoverDirectionThree(null);
    };
    const handleMouseEnterFour = (event) => {
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
        setHoverDirectionFour(direction);
    };
    const handleMouseLeaveFour = () => {
        setHoverDirectionFour(null);
    };

    return (
        <>
            <section className={`${style.bgColor}`}>
                <div className="container-fliud">
                    <div className="row justify-content-between">
                        <Text text="FAQ" animation="fade-right" />
                        {/* 
                        
                        <div className="col-2 p-0 mt-2">
                            <div className={`${style.box}`}>
                                <h5>5</h5>
                                <span>
                                    What are the average charges that a website design
                                    agency in Dubai asks for responsive web design services?
                                </span>
                                <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                                <div className={`${style.hoverContent}`}
                                    id={
                                        hoverDirection == "lefttop" ? style.leftTop :
                                            hoverDirection == "righttop" ? style.rightTop :
                                                hoverDirection == "rightbottom" ? style.rightbottom : ""
                                    }
                                >
                                    <h6>5</h6>
                                    <p>
                                        When designing your website, most expert web designers
                                        in Dubai will make sure that your site is mobile-friendly anyway.
                                        Responsive web design may cost between 7346 AED to 73,460 AED,
                                        based on the designer’s experience and your project.
                                    </p>
                                </div>
                            </div>
                        </div> */}
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
            hoverDirectionOne: null,
            hoverDirectionTwo: null,
            hoverDirectionThree: null,
            hoverDirectionFour: null,
            hoverDirectionFive: null
        };
    }
    handleMouseEnterOne = (event) => {
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
        this.setState({ hoverDirectionOne: direction });
    };
    handleMouseLeaveOne = () => {
        this.setState({ hoverDirectionOne: null });
    };
    handleMouseEnterTwo = (event) => {
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
        this.setState({ hoverDirectionTwo: direction });
    };
    handleMouseLeaveTwo = () => {
        this.setState({ hoverDirectionTwo: null });
    };
    handleMouseEnterThree = (event) => {
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
        this.setState({ hoverDirectionThree: direction });
    };
    handleMouseLeaveThree = () => {
        this.setState({ hoverDirectionThree: null });
    };
    handleMouseEnterFour = (event) => {
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
        this.setState({ hoverDirectionFour: direction });
    };
    handleMouseLeaveFour = () => {
        this.setState({ hoverDirectionFour: null });
    };
    handleMouseEnterFive = (event) => {
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
        this.setState({ hoverDirectionFive: direction });
    };
    handleMouseLeaveFive = () => {
        this.setState({ hoverDirectionFive: null });
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
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };
        const { hoverDirectionOne, hoverDirectionTwo, hoverDirectionThree, hoverDirectionFour, hoverDirectionFive } = this.state;
        return (
            <div>
                <Slider {...settings}>
                    <div className="col-2 p-0 mt-2">
                        <div className={`${style.box}`}
                            onMouseEnter={(event) => this.handleMouseEnterOne(event)}
                            onMouseLeave={() => this.handleMouseLeaveOne()}
                        >
                            <h5>1</h5>
                            <span>I need web design services for my enterprise website. Can you help? </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirectionOne == "lefttop" ? style.leftTop :
                                    hoverDirectionOne == "righttop" ? style.rightTop :
                                    hoverDirectionOne == "rightbottom" ? style.rightbottom :
                                    hoverDirectionOne == "leftbottom" ? style.rightbottom : ""
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
                         onMouseEnter={(event) => this.handleMouseEnterTwo(event)}
                         onMouseLeave={() => this.handleMouseLeaveTwo()}>
                            <h5>2</h5>
                            <span>How much does it cost to hire web designer in Dubai? </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                             id={
                                hoverDirectionTwo == "lefttop" ? style.leftTop :
                                hoverDirectionTwo == "righttop" ? style.rightTop :
                                hoverDirectionTwo == "rightbottom" ? style.rightbottom :
                                hoverDirectionTwo == "leftbottom" ? style.rightbottom : ""
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
                        onMouseEnter={(event) => this.handleMouseEnterThree(event)}
                        onMouseLeave={() => this.handleMouseLeaveThree()}>
                            <h5>3</h5>
                            <span>How can I choose a great web design agency in Dubai?</span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                            id={
                                hoverDirectionThree == "lefttop" ? style.leftTop :
                                hoverDirectionThree == "righttop" ? style.rightTop :
                                hoverDirectionThree == "rightbottom" ? style.rightbottom : 
                                hoverDirectionThree == "leftbottom" ? style.rightbottom : ""
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
                         onMouseEnter={(event) => this.handleMouseEnterFour(event)}
                         onMouseLeave={() => this.handleMouseLeaveFour()}>
                            <h5>4</h5>
                            <span>Is responsive web design important? </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                                id={
                                    hoverDirectionFour == "lefttop" ? style.leftTop :
                                    hoverDirectionFour == "righttop" ? style.rightTop :
                                    hoverDirectionFour == "rightbottom" ? style.rightbottom :
                                    hoverDirectionFour == "leftbottom" ? style.rightbottom : ""
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
                         onMouseEnter={(event) => this.handleMouseEnterFive(event)}
                         onMouseLeave={() => this.handleMouseLeaveFive()}
                        >
                            <h5>5</h5>
                            <span>
                                What are the average charges that a website design
                                agency in Dubai asks for responsive web design services?
                            </span>
                            <div className={`${style.iconsBox}`}><CiCirclePlus /></div>
                            <div className={`${style.hoverContent}`}
                            id={
                                hoverDirectionFive == "lefttop" ? style.leftTop :
                                hoverDirectionFive == "righttop" ? style.rightTop :
                                hoverDirectionFive == "rightbottom" ? style.rightbottom :
                                hoverDirectionFive == "leftbottom" ? style.rightbottom : ""
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