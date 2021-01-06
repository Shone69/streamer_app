import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './Layout.module.css';

const layout = (props) => (
    <React.Fragment className={classes.Layout}>
        <header>
            <nav>
                <Navigation></Navigation>
            </nav>
        </header>
        <main>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;