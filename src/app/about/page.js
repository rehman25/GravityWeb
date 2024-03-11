import React from 'react'
import Aboutbanner from './components/Aboutbanner';
import Bannerdown from './components/Bannerdown';
import AboutCarts from './components/AboutCarts';
import About_subheading from '../about/components/about_subheading'


const Page = () => {
  return (
    <>
      <Aboutbanner />
      <Bannerdown />
      <AboutCarts />
      <About_subheading />
    </>
  );
}

export default Page;