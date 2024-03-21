import React from 'react';
import TermsConditionBanner from './components/TermsConditionBanner'
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component";
import Footer from '../component/Footer/component';
import TermsConditionContent from './components/TermsConditionContent';

const Page = () => {
  return (
    <>
      <Cursor />
      <Header />
      <TermsConditionBanner />
      <TermsConditionContent />
      <Footer />
    </> 
  );
};

export default Page;
