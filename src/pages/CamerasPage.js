import React from 'react';
import Support from '../components/Support/Support';
import '../assets/cameras.css';

const CamerasPage = () => {
  return (
    <>
      <section
        className="u-align-center u-clearfix u-grey-5 u-section-2"
        id="sec-3537"
        style={{ padding: '0 40px' }}
      >
        <h1>Камеры</h1>
        <div className="cameras">
          <div className="cameras__col">
            <div className="cameras__item">
              <iframe
                title="1"
                allowFullScreen=""
                className="mfp-iframe"
                frameBorder="0"
                height="720"
                src="https://rtsp.me/embed/yzrBBBRi/"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="cameras__col">
            <div className="cameras__item">
              <iframe
                title="1"
                allowFullScreen=""
                className="mfp-iframe"
                frameBorder="0"
                height="720"
                src="https://rtsp.me/embed/Th6ytG2N/"
                width="100%"
              ></iframe>
            </div>
          </div>
          <div className="cameras__col">
            <div className="cameras__item">
              <iframe
                title="1"
                allowFullScreen=""
                className="mfp-iframe"
                frameBorder="0"
                height="720"
                src="https://rtsp.me/embed/RsTAZkQB/"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <Support />
    </>
  );
};

export default CamerasPage;
