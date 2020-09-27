import React from "react";
import axios from 'axios';
import Footer from '../components/footer';
import NavHero from '../components/navhero';
import {Helmet } from 'react-helmet'

const ContattiBody = () => {
    const handleSubmit = (event) => {
      event.preventDefault()
      const {name,email,questions} = event.target.elements;
      const obj ={
          name:name.value,
          email:email.value,
          questions:questions.value
      }
      console.log(obj)
      axios.post('https://emailserver-test.herokuapp.com/email',
    obj).
    then(res=>{
        console.log(res.data)
        if(res.data === 'Success'){
            window.location.replace('/thankyoupage')
        }
    })
    }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contattaci</title>
        <link rel="canonical" href="/" />
      </Helmet>
       <NavHero/>
      <div className="lightgrey-section">
       <h1 className="has-text-centered">Contattami</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="columns is-centered is-desktop is-vcentered">
            <div className="column is-6">
              <div className="field">
                <label className="label" placeholder="Nome">Nome & Cognome</label>
                <div className="control">
                  <input className="input" type="text" name="name" />
                </div>
              </div>
              <div className="field">
                <label className="label"  >Email</label>
                <div className="control">
                  <input className="input" type="text" name="email" />
                </div>
              </div>
              <div className="field">
                <label className="label" name="questions" >Eventuali Domande / Richieste </label>
                <div className="control">
                <textarea className="textarea" name="questions" ></textarea>
                </div>
              </div>     
            </div>
          </div>
          <div className="columns is-centered is-vcentered is-mobile is-desktop mt-3">
            <div className="column is-6-desktop is-12-mobile">
              <button
                className="button send-button"
              >
                invia
              </button>
            </div>
           
          </div>
        </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default ContattiBody;
