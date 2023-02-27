import { useState } from "react"
import SectionHead from "./SectionHead"
import { ImQuotesLeft } from "react-icons/im"
import Card from "../UI/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { testimonials } from "../data"

const Testimonails = () => {
  const [index, setIndex] = useState(0);
  const {name, quote, job, avatar} = testimonials[index];

  const prevTestimomailsHandler = () => {
    setIndex(prev => prev - 1);

    if(index <= 0) {
      setIndex(testimonials.length - 1);
    }
  }

  const nextTestimomailsHandler = () => {
    setIndex(prev => prev + 1);

    if(index >= testimonials.length - 1) {
      setIndex(0);
    }
  }

  return (
    <section className="testimonails">
      <div className="container testimonialstocontainer">
        <SectionHead icon={<ImQuotesLeft />} title="Testimonails" className="testimonailstohead" />
        <Card className="testimonail">
          <div className="testimonailstoavatar">
            <img src={avatar} alt="" />
          </div>
          <p className="testimonailstoquote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonailstotitle">{job}</small>
        </Card>
        <div className="testimonailstobttn-container">
          <button className="testimonailstobttn" onClick={prevTestimomailsHandler}><IoIosArrowDropleftCircle /></button>
          <button className="testimonailstobttn" onClick={nextTestimomailsHandler}><IoIosArrowDroprightCircle /></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonails
