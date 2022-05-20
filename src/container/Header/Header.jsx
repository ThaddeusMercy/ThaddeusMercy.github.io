import React from 'react';
import { SubHeading } from '../../components';

import {images}  from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={ {margin: '2rem 0' } }>A pariatur labore dolorum provident iste eveniet culpa obcaecati quis doloremque? Nihil laudantium quaerat dolor aperiam! Perferendis fuga tenetur </p>
        <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
