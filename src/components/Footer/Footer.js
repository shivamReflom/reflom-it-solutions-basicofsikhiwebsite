import React from 'react';
import "./Footer.css";
import LogoFooter from '../assets/logo_footer.png';

const Footer = () => {
  return (
    <div className='footer d-flex justify-content-between'>
        <div className='organization'>
          <h4 className='text-white font-weight-bold'>Organization</h4>
          <hr />
          <ul>
            <li>About</li>
            <li>Events</li>
            <li>Projects</li>
            <li>Downloads</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className='lear'>
          <h4 className='text-white font-weight-bold'>Learn</h4>
          <hr />
          <ul>
            <li>New To Sikhi</li>
            <li>Q&As</li>
            <li>Blog</li>
            <li>Videos</li>
            <li>Podcast</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className='callToAction'>
        <h4 className='text-white font-weight-bold'>Call To Action</h4>
        <hr />
        <ul>
            <li>Requesr a Speaker</li>
            <li>Volunteer with Us</li>
            <li>Donate</li>
            <li>Ask a Question</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='companyLogo'>
          <img className='footerLogo' src={ LogoFooter } alt="footer logo" />
          <p className='text-center text-white font-weight-bold'>Everythings13</p>
        </div>
    </div>
  )
}

export default Footer