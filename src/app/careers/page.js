import React from 'react'
import Aboutbanner from '../about/components/Aboutbanner';
import CareersBanners from '../careers/components/CareersBanners';
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component"
import CurrentOpenings from './components/CurrentOpenings';
import Employeessay from './components/Employeessay';
import OurCulture from './components/OurCulture';


const Page = () => {
  return (
    <>
      <Cursor />
      <Header />
      <Aboutbanner />
      <CareersBanners />
      <CurrentOpenings />
      <OurCulture />
      <Employeessay/> 
    </>
  );
};

export default Page;