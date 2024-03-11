import React from "react";
import Aboutbanner from "./components/Aboutbanner";
import Bannerdown from "./components/Bannerdown";
import AboutCarts from "./components/AboutCarts";
import About_subheading from "../about/components/about_subheading";
import Expertise from "../about/components/Expertise";
import Cursor from "../component/cursor/cursor";

const Page = () => {
  return (
    <>
    <Cursor />
      <Aboutbanner />
      <Bannerdown />
      <AboutCarts />
      <About_subheading />
      <Expertise />
    </>
  );
};

export default Page;
