import React from 'react'
import Aboutbanner from './components/Aboutbanner';
import Bannerdown from './components/Bannerdown';
import AboutCarts from './components/AboutCarts';
import About_subheading from '../about/components/about_subheading'
import AboutSlider from './components/AboutSlider';
import Expertise from "../about/components/Expertise";
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component"
import Worth__Read from '../component/Work-Read/index'
import Social from '../component/SocialJoin/component'
import Footer from '../component/Footer/component'

const Page = () => {
  return (
    <>
      <Cursor />
      <Header/>
      <Aboutbanner />
      <Bannerdown />
      <AboutCarts />
      <About_subheading />
      <AboutSlider/>
      <Expertise />
      <Worth__Read />
      <Social />
      <Footer />
    </>
  );
};

export default Page;
