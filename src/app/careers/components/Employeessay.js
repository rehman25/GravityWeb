"use client"
import React, { Component } from 'react'
import styles from '../../styles/careers.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';
import EmployeeProgress from '../../assets/images/employeessay/emprogress (1).jpg'
import Employeeone from '../../assets/images/employeessay/emp1.jpg'
import Employeetwo from '../../assets/images/employeessay/emp2.jpg'
import Employeethree from '../../assets/images/employeessay/emp3.jpg'
import EmployeeFour from '../../assets/images/employeessay/emp4.jpg'
import Button from '../../component/buttons/index';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons


function Employeessay() {
    return (
        <>
            <section className={`${styles.Employeessaysection}`}>
                <div className="container-fluid">
                    <div className="row mt-5 p-5">
                        <div className="col-8">
                            <div className={`${styles.Employeessaysectionleft}`}>
                                <h4>What Our Happy <span> Employees Say</span></h4>
                                <Image src={EmployeeProgress} alt="Employee" className={`${styles.EmployeesProgressImage}`} />
                            </div>
                        </div>
                        <div className="col-4 mt-5">
                            <Emp />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Employeessay

class Emp extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            className: "Employees__slider",
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={`${styles.Employeeone}`}>
                        <Image src={Employeeone} alt="Employee" />
                        <h6>Azhar Ali</h6>
                        <span>Mobile App Lead</span>
                        "
                        <p>The Best Place to grow and learn with fun-working environment, i must say this is my dream place to work</p>
                    </div>
                    <div className={`${styles.Employeeone}`}>
                        <Image src={Employeetwo} alt="Employee" />
                        <h6>Ali Abbas</h6>
                        <span>UI/UX Designer</span>
                        "
                        <p>The Best Place to grow and learn with fun-working environment, i must say this is my dream place to work</p>
                    </div>
                    <div className={`${styles.Employeeone}`}>
                        <Image src={Employeethree} alt="Employee" />
                        <h6>Syed Saad Fareed</h6>
                        <span>UI/UX Designer</span>
                        "
                        <p>The Best Place to grow and learn with fun-working environment, i must say this is my dream place to work</p>
                    </div>
                    <div className={`${styles.Employeeone}`}>
                        <Image src={EmployeeFour} alt="Employee" />
                        <h6>Abdullah</h6>
                        <span>Graphics Designer</span>
                        "
                        <p>The Best Place to grow and learn with fun-working environment, i must say this is my dream place to work</p>
                    </div>
                </Slider>
            </div>
        );
    }
}

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        
        <div className="slick-arrow slick-prev" onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="slick-arrow slick-next" onClick={onClick}>
            <FaArrowRight />
        </div>
    );
};