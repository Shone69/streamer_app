import React from 'react';
import classes from './About.module.css';

const about = () => {
    return(
        <div className={classes.About}>
            <p>Pozdrav drustvo! :)</p>
            <p>Ja sam Nebojsa. Imam 28 godina i fitnes trener sam.
Ovde sam da se dobro zezamo i da vas naucim nesto o gejmingu i sportu.
Slobodno se javite, pitajte... I ako vidite da fali igrac, upadajte :D </p>

<p> Strimovi : <br></br>
Ponedeljak 19h<br></br>
Sreda 19h<br></br>
Petak 19h<br></br>
Nedelja 19h</p>

<p>Donacije su uvek dobrodosle ali nisu obavezne : https://streamlabs.com/sh69ne </p>

<p>Follow na instagramu je ogromna podrska za moj tim i mene :) </p>

<p>LogitechG : https://www.instagram.com/logitechg <br></br>
Fun&Fit : https://www.instagram.com/funandfits </p>

<p>Hvala sto ste sa nama!</p>
        </div>
    );
}

export default about;