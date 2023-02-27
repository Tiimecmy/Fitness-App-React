import { Link, NavLink } from "react-router-dom"
import { links } from "../data"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import "./navbar.css"
import Logo from "../images/logo.png"
import { useState } from "react"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container navtocontainer">
        <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`navtolinks ${isNavShowing ? 'showtonav' : 'hidetonav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''}onClick={() => setIsNavShowing(prev => !prev)}>
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="navtotogglebttn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar