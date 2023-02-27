import "./contact.css"
import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_2.jpg"
import { MdEmail } from "react-icons/md"
import { BsMessenger } from "react-icons/bs"
import { BsLine } from "react-icons/bs"

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia, augue ac laoreet ultricies,
        nulla velit elementum lorem,at aliquam ante leo eu risus. Duis quis magna leo. Suspendisse potenti.
      </Header>
      <section className="contact">
        <div className="container contacttocontainer">
          <div className="contacttowrapper">
            <a href="mailto:support@tiimcmy.com" target="_blank" rel="noreferrer noopener"><MdEmail /></a>
            <a href="http://m.me/ernest_achiever" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
            <a href="http://line.me/ti/p/~timeizstop" target="_blank" rel="noreferrer noopener"><BsLine /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact