import React, { Suspense } from 'react';
import About from '../components/About/About';
import Support from '../components/Support/Support';
import Services from '../components/Services/Services';
import Loader from '../components/Loader/Loader';

const HomePage = () => {
  return (
    <>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-2"
        id="sec-3537"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <Suspense fallback={<Loader />}>
            <About />
            <Services />
          </Suspense>
        </div>
      </section>
      <Support />
    </>
  );
};

export default HomePage;
