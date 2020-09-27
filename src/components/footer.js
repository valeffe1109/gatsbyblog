import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from 'gatsby-image';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query FooterQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 90, height: 90, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
     
    }
  `)
  const logo = data?.logo?.childImageSharp?.fixed

  return (
    <footer className="footer">
      <div className="content ">
        <div className="columns is-desktop">
          <div className="column logo-col">
          {logo && (
        <Image
          fixed={logo}
          alt={logo?.name || ``}
          className="bio-avatar"
        
        />
        )}

          </div>
          <div className="column is-two-fifths"></div>
          <div className="column">
            <div className="inner_footer">
              <h4 style={{ color: "#FF2255", fontWeight: "bold" }}>
                Social
              </h4>
              <a>Instagram @devlifeit</a>
              <a href="https://www.linkedin.com/in/valerio-fusco-091078187/">LinkedIn</a>
            </div>
          </div>
          <div className="column ">
            <div className="inner_footer">
              <h4 style={{ color: "#FF2255", fontWeight: "bold" }}>DevLife</h4>
              <a href="/">Home</a>
            </div>
          </div>
         
        </div>
      </div>
      <hr className="footer-hr"></hr>
      <small style={{ color: "#ffff" }}>
        DevLife - All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
