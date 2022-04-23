import React from 'react';
import Support from '../components/Support/Support';
import StressTest from '../components/StressTest/StressTest.tsx';

const AnalyticsPage = () => {
  return (
    <>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-2"
        id="sec-3537"
      >
        <h1>Страница Аналитики</h1>
        <StressTest />
        <br />
        <br />
      </section>
      <Support />
    </>
  );
};

export default AnalyticsPage;
