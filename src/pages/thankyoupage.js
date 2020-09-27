import React from 'react';
import {Helmet } from 'react-helmet'

const ThankYou = () => {
    return(
        <>
          <Helmet>
        <meta charSet="utf-8" />
        <title>Grazie!</title>
        <link rel="canonical" href="/" />
      </Helmet>
        <div className="white-section">
        <h1 className="title has-text-centered  mb-3">
          Grazie per averci contattato!
        </h1>
        <div className="columns is-desktop is-centered is-vcentered has-text-centered mt-3">
          <div className="column is-narrow">
            <p className="paragraph">
             A breve riceverai una risposta tramite la mail indicata nel form ! 
           
            </p>
            <a href="/">HOME</a>
          </div>
        </div>
      </div>
    
        </>
    )
}

export default ThankYou