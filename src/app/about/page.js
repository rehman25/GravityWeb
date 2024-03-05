import React from 'react';
import NoSSR from 'react-no-ssr';

const Page = () => {
  return (
    <NoSSR>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              <h5>Digital Marketing</h5>
              <h4>Agency In Dubai</h4>
              <p>We Activate Businesses & Brands For The Digital Change</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h5>Digital Gravity</h5>
              <p>Digital Gravity is an accomplished digital transformation company in Dubai with a progressive perspective. We offer scalable web and mobile solutions coupled with digital marketing services under one roof — without silos or handoffs.</p>
            </div>
          </div>
        </div>
      </div>
    </NoSSR>
  );
}

export default Page;

