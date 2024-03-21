import React from 'react';
import TermsConditionBanner from '../terms&condition/components/TermsConditionBanner'; 
import TermsConditionContent from '../terms&condition/components/TermsConditionContent'; 
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component";
import Footer from '../component/Footer/component';

const Page = () => {
  return (
    <>
      <Cursor />
      <Header />
      <TermsConditionBanner /> 
      <TermsConditionContent/>
      <Footer />
    </>
  );
};

export default Page;
