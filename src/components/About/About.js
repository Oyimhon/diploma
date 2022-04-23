import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
      <div className="u-layout">
        <div className="u-layout-row">
          <div
            className="u-align-center-lg u-align-center-sm u-align-center-xl u-align-center-xs u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-1"
            data-image-width="620"
            data-image-height="414"
          >
            <div className="u-container-layout"></div>
          </div>
          <div className="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
            <div className="u-container-layout u-container-layout-2">
              <h1
                className="u-custom-font u-font-roboto-condensed u-text u-text-1"
                spellCheck="false"
              >
                Депо Mall
              </h1>
              <p className="u-text u-text-2" spellCheck="true">
                {' '}
                Депо Mall Торгово-Развлекательных Комплексов крупнейший в
                Узбекистане по занимаемой площади
              </p>
              <Link
                to="/about"
                className="u-active-black u-border-none u-btn u-button-style u-custom-font u-font-roboto-condensed u-hover-black u-palette-1-base u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-btn-1"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
