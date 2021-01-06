import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import About from './About/About';
import Social from '../Social/Social';
import Modal from '../UI/Modal/Modal';
import newYear from '../../assets/newyear.jpg';
import classes from '../Bio/Bio.module.css';
import sound from '../../assets/audio.mp3';

class Bio extends Component {
    audio = new Audio(sound);
    state = {
        show: false,
        play: false
    }

    closeModalHandler = () => {
        this.setState({ show: false, play: false });
        this.play();
    }

    play = () => {
        this.setState({ show: false, play: true });
        this.audio.play();
    }
    
    pause = () => {
        this.setState({ show: false, play: false });
        this.audio.pause();
    }

    render() {
        return (
            <div className={classes.Bio}>
                <Modal show={this.state.show} modalClosed={this.closeModalHandler}>
                    <img className={classes.newyear} src={newYear} alt="New Year" />
                </Modal >
                <Logo></Logo>
                <ProfilePicture></ProfilePicture>
                <About></About>
                <Social></Social>
            </div>
        );
    }
}

export default Bio;