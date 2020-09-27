import React from "react";
import Footer from './footer';
import { Link } from "gatsby"
import NavHero from './navhero';


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
   return (
    <>
    <NavHero/>  
    <div data-is-root-path={isRootPath}>
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
