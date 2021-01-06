import React from 'react';
import logoImage from '../../assets/shone.png'
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={logoImage} alt="Shone" />
    </div>
);

export default logo;