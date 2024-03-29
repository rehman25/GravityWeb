'use client'
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../component/ServiceTechDevelopment/ServiceTechDevelopment.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from "next/image";
import one from "../../assets/images/ServicTechDevelopment/technology-icon-1.svg";
import two from "../../assets/images/ServicTechDevelopment/technology-icon-2.svg";
import three from "../../assets/images/ServicTechDevelopment/technology-icon-3.svg";
import four from "../../assets/images/ServicTechDevelopment/technology-icon-4.svg";
import five from "../../assets/images/ServicTechDevelopment/technology-icon-5.svg";
import six from "../../assets/images/ServicTechDevelopment/technology-icon-6.svg";
import seven from "../../assets/images/ServicTechDevelopment/technology-icon-7.svg";
import eight from "../../assets/images/ServicTechDevelopment/technology-icon-8.svg";
import nine from "../../assets/images/ServicTechDevelopment/technology-icon-9.svg";
import ten from "../../assets/images/ServicTechDevelopment/technology-icon-10.svg";
import eleven from "../../assets/images/ServicTechDevelopment/technology-icon-11.svg";
import twelve from "../../assets/images/ServicTechDevelopment/technology-icon-12.svg";
import thirteen from "../../assets/images/ServicTechDevelopment/technology-icon-13.svg";
import fourteen from "../../assets/images/ServicTechDevelopment/technology-icon-14.svg";
import fifteen from "../../assets/images/ServicTechDevelopment/technology-icon-15.svg";
import sixteen from "../../assets/images/ServicTechDevelopment/technology-icon-16.svg";
import seventeen from "../../assets/images/ServicTechDevelopment/technology-icon-17.svg";
import eighteen from "../../assets/images/ServicTechDevelopment/technology-icon-18.svg";
import ninteen from "../../assets/images/ServicTechDevelopment/technology-icon-19.svg";
import twenty from "../../assets/images/ServicTechDevelopment/technology-icon-20.svg";
import twentyone from "../../assets/images/ServicTechDevelopment/technology-icon-21.svg";
import twentytwo from "../../assets/images/ServicTechDevelopment/technology-icon-22.svg";
import twentythree from "../../assets/images/ServicTechDevelopment/technology-icon-23.svg";
import Resturant from "../../assets/images/ServicTechDevelopment/service-development8.webp"
import RealEstate from "../../assets/images/ServicTechDevelopment/service-development7.webp"
import Technology from "../../assets/images/ServicTechDevelopment/service-development6.webp"
import BusinessConsulting from "../../assets/images/ServicTechDevelopment/service-development5.webp"
import Education from "../../assets/images/ServicTechDevelopment/service-development4.webp"
import Manufacturing from "../../assets/images/ServicTechDevelopment/service-development3.webp"
import HealthCare from "../../assets/images/ServicTechDevelopment/service-development2.webp"
import Automotive from "../../assets/images/ServicTechDevelopment/service-development1.webp"


const Components = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    var settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <FaArrowLeft />,
        nextArrow: <FaArrowRight />,
        className: "devTech",
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    const slides = [
        { image: Resturant, text: "Restaurant" },
        { image: RealEstate, text: "Real Estate" },
        { image: Technology, text: "Technology" },
        { image: BusinessConsulting, text: "Business Consulting" },
        { image: Education, text: "Education" },
        { image: Manufacturing, text: "Manufacturing" },
        { image: HealthCare, text: "Health Care" },
        { image: Automotive, text: "Automotive" }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };
    return (
        <>
            <section style={{ overflowX: "clip", marginTop: "50px" }}>
                <div className={`${styles.ServiceTechDevelopmentsection}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className={`${styles.ServiceTechDevelopmentupper}`}>
                                    <h1>
                                        Web development technology stack
                                    </h1>
                                    <p>
                                        We are experts with highly innovative and cutting-edge digital technology, built exclusively around your business vision.
                                    </p>
                                </div>
                                <div className={`${styles.marquee_container}`}>
                                    <div
                                        className={`${styles.marquee_content}`}
                                        class="marquee-content"
                                    >
                                        <div>
                                            <Image
                                                src={one}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={two}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={three}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={four}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={five}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={six}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={seven}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={eight}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={nine}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={ten}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={eleven}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={twelve}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={thirteen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={fourteen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={fifteen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={sixteen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={seventeen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={eighteen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={ninteen}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={twenty}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={twentyone}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={twentytwo}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                src={twentythree}
                                                alt="Example Image"
                                                width={50} // Adjust width as needed
                                                height={50} // Adjust height as needed
                                                className={`${styles.imgAnimated}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className={`${styles.ServiceTechDevelopmentdown}`}>
                                <h2>We help a diverse clientele build result-driven Web Development </h2>
                            </div>
                            <div className="col-lg-7 mb-5">
                                <div className={styles.SliderContainer}>
                                    <Slider {...settings}>
                                        {slides.map((slide, index) => (
                                            <div key={index} className={`${styles.Imageslider2}`}>
                                                <div className={styles.SliderImg} >
                                                    <Image src={slide.image} alt={slide.text} className={styles.SlideImage} />
                                                </div>
                                                <span>{slide.text}</span>
                                                <div className={styles.border}></div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>

                            <div className="col-lg-5 mb-5 mt-2">
                                <div className={`${styles.ImagesliderContent}`}>
                                    <div className="SliderContent">
                                        <h4>{slides[currentSlide].text}</h4>

                                        {slides[currentSlide].text === "Restaurant" && (
                                            <p>Food businesses and restaurant owners know Digital Gravity for its branding services. We design their websites, establish a powerful social media presence, and bring them new customers consistently.</p>
                                        )}
                                        {slides[currentSlide].text === "Real Estate" && (
                                            <p>From website development to content marketing, Digital Gravity is the go-to company of famed Real Estate companies in the UAE. We take care of the techie details while they focus on the bottom line.</p>
                                        )}
                                        {slides[currentSlide].text === "Technology" && (
                                            <p>As a full-service digital agency, we love working with IT start-ups. Numerous IT service providers have hired us to top off the exciting web and mobile projects, while some of them use our creative services to enhance digital visibility. </p>
                                        )}
                                        {slides[currentSlide].text === "Business Consulting" && (
                                            <p>We evaluate our level of success based on your satisfaction. With our creative services, we have helped several Business Consulting services in Dubai reach new heights and grow their client base.</p>
                                        )}
                                        {slides[currentSlide].text === "Education" && (
                                            <p>Our expert web developers have designed beautiful education websites, mobile apps, and eLearning portals for our clients. Our clients’ substantial growth through these channels reflects the quality of our work. </p>
                                        )}
                                        {slides[currentSlide].text === "Manufactuing" && (
                                            <p> Many of our clients come from the manufacturing industry. Besides web support, all of them require assistance in the marketing of their products and services.   </p>
                                        )}
                                        {slides[currentSlide].text === "Health Care" && (
                                            <p>Our team is responsible for website maintenance, support, and search engine optimization of some of the leading healthcare providers in Dubai including Capital Health Screening Service. </p>
                                        )}
                                        {slides[currentSlide].text === "Automotive" && (
                                            <p>Our team is responsible for website maintenance, support, and search engine optimization of some of the leading healthcare providers in Dubai including Capital Health Screening Service. </p>
                                        )}
                                        <div className={styles.ArrowIcons}>
                                            <span onClick={prevSlide}>
                                                <FaArrowLeft className={styles.LeftArrow} />
                                            </span>
                                            <span onClick={nextSlide}>
                                                <FaArrowRight className={styles.RightArrow} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Components;


