import React from 'react';
import profile from '../../../assets/profile.jpg'
import classes from './ProfilePicture.module.css'

const profilePicture = () => {
    return(
        <div className={classes.Profile}>
            <img src={profile} alt="Profile" />
        </div>
    );
}

export default profilePicture;