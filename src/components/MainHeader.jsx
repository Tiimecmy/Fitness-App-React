import { Link } from "react-router-dom"
import Image from "../images/main_header.png"

const MainHeader = () => {
  return (
    <header className="maintoheader">
      <div className="container maintoheader-container">
        <div className="maintoheader-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
          </p>
          <Link to="/plans" className="bttn lg">Get Started</Link>
        </div>
        <div className="maintoheader-right">
          <div className="maintoheader-circle"></div>
          <div className="maintoheader-image">
            <img src={Image} alt="Header Main Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader