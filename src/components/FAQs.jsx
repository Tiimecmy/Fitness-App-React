import SectionHead from "./SectionHead"
import { FaQuestion } from "react-icons/fa"
import { faqs } from "../data"
import FAQ from "./FAQ"

const FAQs = () => {
  return (
      <section className="faqs">
        <div className="container faqstocontainer">
          <SectionHead icon={<FaQuestion />} title="FAQs" />
          <div className="faqstowrapper">
            {
              faqs.map(({id, question, answer}) => {
                return <FAQ key={id} question={question} answer={answer} />
              })
            }
          </div>
        </div>
      </section>
  )
}

export default FAQs
