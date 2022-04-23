import React from 'react';
import Support from '../components/Support/Support';
import plan from '../img/new-plan-depomall.jpg';
import '../assets/internet.css';

const InternetPage = () => {
  return (
    <>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-2"
        id="sec-3537"
      >
        <h1>Зона покрытия</h1>
        <div className="internetWrap">
          <div className="index-1 index">
            <div className="circle" />
          </div>
          <div className="index-2 index">
            <div className="circle" />
          </div>
          <div className="index-3 index">
            <div className="circle" />
          </div>
          <div className="index-4 index">
            <div className="circle" />
          </div>
          <div className="index-5 index">
            <div className="circle" />
          </div>
          <div className="index-6 index">
            <div className="circle" />
          </div>
          <div className="index-7 index">
            <div className="circle" />
          </div>
          <img src={plan} alt="" />
        </div>
        <br />
        <br />
      </section>
      <Support />
    </>
  );
};

export default InternetPage;
