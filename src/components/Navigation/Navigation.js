import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.module.css';

const navigation = () => (
    <ul className={classes.Navigation}>
        <NavigationItem link="/" active>Opste</NavigationItem>
        <NavigationItem link="/">Biografija</NavigationItem>
        <NavigationItem link="/">Igrice</NavigationItem>
        <NavigationItem link="/">Moja ideja</NavigationItem>
        <NavigationItem link="/">#ZaShonetovBubreg</NavigationItem>
    </ul>
);

export default navigation;