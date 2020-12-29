import React from 'react';
import classes from './Social.module.css';

const social = () => {
    return(
        <div>
            <a href="https://www.facebook.com/sh69ne/" className={`${classes.fa} ${classes.facebook} fa fa-facebook`}></a>
            <a href="https://www.instagram.com/_sh69ne_/" className={`${classes.fa} ${classes.instagram} fa fa-instagram`}></a>
            <a href="https://www.youtube.com/channel/UCKPEuxK-J4sij-jdQKOnqxg" className={`${classes.fa} ${classes.youtube} fa fa-youtube`}></a>
        </div>
    );
}

export default social;