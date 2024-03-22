import React from 'react';
import Cursor from "../component/cursor/cursor";
import Header from "../component/Header/component";
import Footer from '../component/Footer/component';
import PrivacyPolicyBanner from './components/PrivacyPolicyBanner';
import PrivacyPolicyContent from './components/PrivacyPolicyContent';

const Page = () => {
    return (
        <>
            <Cursor />
            <Header />
            <PrivacyPolicyBanner />
            <PrivacyPolicyContent/>
            <Footer />
        </>
    );
};

export default Page;