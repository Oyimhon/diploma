import React from 'react';
import Scheme from '../components/Scheme/Scheme';
import Support from '../components/Support/Support';

const PlanPage = () => {
  return (
    <>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-2"
        id="sec-3537"
        style={{ padding: '0 40px' }}
      >
        <h1> Схема здания</h1>
        <Scheme />
        <br />
        <br />
      </section>
      <Support />
    </>
  );
};

export default PlanPage;
