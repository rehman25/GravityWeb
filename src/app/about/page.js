import React from 'react'
import Aboutbanner from './components/Aboutbanner';
import Bannerdown from './components/Bannerdown';
import AboutCarts from './components/AboutCarts';
import About_subheading from '../about/components/about_subheading'
import AboutSlider from './components/AboutSlider';
import Expertise from "../about/components/Expertise";
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component";
const Page = () => {
  return (
    <>
      <Cursor />
      <Header />
      <Aboutbanner />
      <Bannerdown />
      <AboutCarts />
      <About_subheading />
      <AboutSlider/>
      <Expertise />
    </>
  );
};

export default Page;
