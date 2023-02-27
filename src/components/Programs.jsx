import { FaCrown } from "react-icons/fa"
import SectionHead from "./SectionHead"
import { programs } from "../data"
import { Link } from "react-router-dom"
import { AiFillCaretRight } from "react-icons/ai"
import Card from "../UI/Card"

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programstocontainer">
        <SectionHead icon={<FaCrown />} title="Programs" />
        <div className="programstowrapper">
          {
            programs.map(({ id, icon, title, info, path }) => {
              return (
                <Card className="programstoprogram" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="bttn sm">Learn More <AiFillCaretRight /></Link>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Programs