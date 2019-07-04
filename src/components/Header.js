import React from 'react'
import PropTypes from 'prop-types'

import monogram from '../images/monogram.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        src={monogram}
        alt="MA monogram"
        style={{ width: '90%', marginTop: 5 }}
      />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Matheus Almeida</h1>
        <p>programmer and creative</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          {/* eslint-disable-next-line */}
          <a
            // eslint-disable-next-line
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a
            // eslint-disable-next-line
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          {/* eslint-disable-next-line */}
          <a
            // eslint-disable-next-line
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Social
          </a>
        </li>
        {/* <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
