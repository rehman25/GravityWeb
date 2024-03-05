import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from './about.module.css'; // Import CSS module

const Page = () => {
  return (

    <div className={`container-fluid ${Style.aboutupper}`}>
      <div className="row mt-5">
        <div className="col-md-6 mb-4 px-5 mt-4">
          <h6> Digital Marketing Agency In Dubai </h6>
          <h1 className="mt-4">We Activate <br /> Businesses & Brands <br /> For The <span className={Style.upperdigitalChange}> Digital Change</span> </h1>
        </div>
        <div className="col-md-6 mb-4 px-5 mt-5">
          <div>
            <p>Digital Gravity is an accomplished digital transformation company in Dubai with a progressive perspective. We offer scalable web and mobile solutions coupled with digital marketing services under one roof — without silos or handoffs.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Page;













