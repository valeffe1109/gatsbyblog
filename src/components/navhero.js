import React,{useState} from "react"
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

const NavHero = () => {
    const data = useStaticQuery(graphql`
      query LogoQuery {
        logo: file(absolutePath: { regex: "/logo.png/" }) {
          childImageSharp {
            fixed(width: 90, height: 90, quality: 95) {
              ...GatsbyImageSharpFixed
            }
          }
        }
       
      }
    `)
    const [isOpen,setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(!isOpen)
    }
    const logo = data?.logo?.childImageSharp?.fixed
  return (
    <section className="hero is-medium is-dark is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a className="mt-3">
                {logo && (
                  <Image
                    fixed={logo}
                    alt={logo?.name || ``}
                    className="bio-avatar"
                  />
                )}
              </a>
              <span
                class="navbar-burger burger"
                data-target="navbarMenuHeroB"
                onClick={handleClick}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div
              id="navbarMenuHeroB"
              class={`navbar-menu ${isOpen ? "is-active" : ""}`}
            >
              <div class="navbar-end">
                <a class="navbar-item" href="/">
                  Home
                </a>
                <a class="navbar-item" href="/contattami">
                  Contattami
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">Benvenuto nel blog di DevLife</p>
          <p class="subtitle">
            Condivido con voi la passione per l'informatica e la tecnologia
          </p>
        </div>
      </div>
    </section>
  )
}

export default NavHero
