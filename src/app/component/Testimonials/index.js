"use client"
import React, { Component } from 'react'
import styles from '../Testimonials/testimonials.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';


const Testimonials = () => {
    return (
        <>
                <div className={`container-fluid mt-5 pb-5`}>
                    <div className="row">
                        <div className={`${styles.testimonialheader}`}>
                            <h1>Testimonials</h1>
                            <p>What Our <span className={`${styles.testimonialheadersub}`}> Clients </span> are saying about us</p>
                        </div>
                        <div className='col-12 mt-5'>
                            <Test />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Testimonials


class Test extends Component {
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
            adaptiveHeight: true,
            className: `testimonials`,
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
                    <div className={`${styles.TestimonialCards}`}>
                        <div className={`${styles.Content}`}>
                            <h4>Elevating the Terra Nexus Website Experience</h4>
                            <span>I just wanted to thank you for the time and effort spent on the Terra Nexus website. The website received so much positive feedback from everyone who used it, from the design to its functionality. I wanted to personally highlight {"Shaor's"} efforts and unwavering support during some of the difficult times we faced during the implementation stage. Shaor was always available, reassuring and ready to help, despite the many challenges we faced.  From a project management perspective and client interface, Shaor made a positive impact on the whole experience so just wanted to highlight this to you. <br /><br /> Thank you once again.</span>

                        </div>
                        <div className={`${styles.ratings}`}>
                            <h6>Nivine Issa - Terra Nexus</h6>
                            <p>Founding and Manager Director</p>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                    </div>
                    <div className={`${styles.TestimonialCards}`}>
                        <div className={`${styles.Content}`}>
                            <h4>Powering the Success of {"EMDAD's"} Website Launch</h4>
                            <span>I am writing to express our appreciation to Digital Mobix and its team for their efforts that contributed to the success of the EMDAD website at its launch. A special thanks to Aashir for showing leadership and resilience each step of the way, attending to our requirements, providing us with the website within the desired time frame, and for his continued support. We look forward to a continuous collaboration with Digital Mobix in the future.</span>

                        </div>
                        <div className={`${styles.ratings}`}>
                            <h6>Bater Janjatah - Emdad</h6>
                            <p>IT Manager</p>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                    </div>
                    <div className={`${styles.TestimonialCards}`}>
                        <div className={`${styles.Content}`}>
                            <h4>Sleek and Smooth: A Website That Wowed!</h4>
                            <span>Everything went so smooth, we loved the website and everyone was completely amazed by it. The few hiccups that happened due to miscommunication were also managed brilliantly by the project manager who was assigned to our project. Overall everything was great so thank you to the entire team that was closely working with us.</span>

                        </div>
                        <div className={`${styles.ratings}`}>
                            <h6>Berta Farah - Sephora</h6>
                            <p>PR Specialist</p>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                    </div>
                    <div className={`${styles.TestimonialCards}`}>
                        <div className={`${styles.Content}`}>
                            <h4>Smooth Sailing</h4>
                            <span>A big thanks to wasi, the project manager at deep water {"marine's"} website. The website is developed very nicely and as per my expectations.</span>

                        </div>
                        <div className={`${styles.ratings}`}>
                            <h6>Pinar Eruelkeroglu - Deep Water Marine Logistics</h6>
                            <p>General Manager</p>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
