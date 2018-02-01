import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.css';
import './navbar.css';
import './flexbox.css';
import '../fonts/Bazar.ttf';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Cookie Mama" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
