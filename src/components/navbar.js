import React,{useState} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 55, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const [isOpen,setIsOpen] = useState(false);
  const logo = data?.logo?.childImageSharp?.fixed

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen)
    console.log(isOpen)
  }



  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
     <a href="/">
    {logo && (
          <Image fixed={logo} alt={logo?.name || ``} className="nav-logo mt-3 mb-3"/>
        )}
    </a>
        <a
          role="button"
          class="navbar-burger burger"
          onClick={handleClick}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class={`navbar-menu ${isOpen ? 'is-active':''}`}>
        <div class="navbar-end">
          <a class="navbar-item" href="/">
            Home
          </a>

          <a class="navbar-item" href="/contattami">Contattami</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
          
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
