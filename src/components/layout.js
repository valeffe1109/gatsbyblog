import React from "react"
import Footer from './footer'
import Navbar from './navbar';
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <section className="hero is-medium  is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            Benvenuto nel blog di DevLife
          </h1>
          <h2 className="subtitle has-text-centered">
           Condivido con il mio pubblico la passione per l'informatica e la tecnologia 
          </h2>
        </div>
      </div>
    </section>
    )
  } else {
   
  }


  return (
    <>
    <Navbar/>
    <div data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <div className="global-wrapper">
      <div className="columns is-centered is-desktop">
        <div className="column is-12">
      <main>{children}</main>
      </div>
      <div className="column is-6">
      </div>
      </div>
      
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Layout
