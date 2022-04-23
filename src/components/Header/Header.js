import React from 'react';
import { Link } from 'react-router-dom';
import headerPic from '../../img/logo-depo.png';
import './Header.css';

const Header = () => {
  return (
    <header
      className="u-align-center-xs u-border-1 u-border-grey-25 u-clearfix u-header u-header"
      id="sec-c076"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <Link to="/" className="depoLogo">
          <img src={headerPic} className="u-logo-image u-logo-image-1" alt="" />
        </Link>
        {/* <form
          action="#"
          method="get"
          className="u-border-1 u-border-grey-15 u-search u-search-right u-search-1"
        >
          <button className="u-search-button" type="submit">
            <span className="u-search-icon u-spacing-10 u-text-grey-40">
              <svg
                className="u-svg-link"
                preserveAspectRatio="xMidYMin slice"
                viewBox="0 0 56.966 56.966"
              >
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="#svg-b04b"
                ></use>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="svg-b04b"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                className="u-svg-content"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </span>
          </button>
          <input
            className="u-search-input"
            type="search"
            name="search"
            value=""
            placeholder="Search"
            onChange={() => {}}
          />
        </form> */}
      </div>
    </header>
  );
};

export default Header;
