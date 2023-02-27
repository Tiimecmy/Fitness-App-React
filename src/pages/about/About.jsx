import "./about.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
      </Header>
      <section className="abouttostory">
        <div className="container abouttostory-container">
          <div className="abouttosection-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="abouttosection-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
          </div>
        </div>
      </section>
      <section className="abouttovision">
        <div className="container abouttovision-container">
          <div className="abouttosection-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
          </div>
          <div className="abouttosection-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="abouttomission">
        <div className="container abouttomission-container">
          <div className="abouttosection-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="abouttosection-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sit amet justo donec enim diam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About