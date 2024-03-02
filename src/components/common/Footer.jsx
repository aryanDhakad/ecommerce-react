import * as Route from '@/constants/routes';
import logo from '@/images/logo.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
     
      <div className="footer-box">
        <h4>AakritiFurnish</h4>
        <h5>|</h5>
        <h5>All Rights are Reserved</h5>
        <h5>|</h5>
        <h5>
        Copyright
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
    
    </footer>
  );
};

export default Footer;
