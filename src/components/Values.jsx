import Image from "../images/values.jpg"
import SectionHead from "./SectionHead"
import { GiCutDiamond } from "react-icons/gi"
import { values } from "../data"
import Card from "../UI/Card"

const Values = () => {
  return (
    <section className="values">
      <div className="container valuestocontainer">
        <div className="valuestoleft">
          <div className="valuestoimage">
            <img src={Image} alt="Values Image" />
          </div>
        </div>
        <div className="valuestoright">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Sit amet justo donec enim diam. Enim nulla aliquet porttitor lacus.
          </p>
          <div className="valuestowrapper">
            {
              values.map(({id, icon, title, desc}) => {
                return <Card key={id} className="valuestovalue">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
