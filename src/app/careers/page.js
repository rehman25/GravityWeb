import React from 'react'
import Aboutbanner from '../about/components/Aboutbanner';
import CareersBanners from '../careers/components/Careersbanners';
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component"

const Page = () => {
  return (
    <>
      <Cursor />
      <Header/>
      <Aboutbanner />
      <CareersBanners />
    </>
  );
};

export default Page;