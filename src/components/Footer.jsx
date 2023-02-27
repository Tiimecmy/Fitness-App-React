import { Link } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaLinkedin, FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div className="container footertocontainer">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
          </p>
          <div className="footertosocials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a> 
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insight</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footertocopyright">
        <small>2023 TIIMCMY COP &copy; All Right Reserverd</small>
      </div>
    </footer>
  )
}

export default Footer
