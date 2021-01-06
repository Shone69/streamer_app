import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.module.css';

const navigation = () => (
    <ul className={classes.Navigation}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">#ZaShonetovBubreg</NavigationItem>
    </ul>
);

export default navigation;