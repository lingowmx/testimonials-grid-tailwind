import { Layout } from "./Layout"
import danielImage from "../../images/image-daniel.jpg"
import quotesImage from "../../images/bg-pattern-quotation.svg"

export const Daniel = () => {
  return (
    <Layout
      mainName="Daniel Clifford"
      isGraduate="Verified Graduate"
      image={danielImage}
      testimonialOne="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                      in the company I joined. I honestly feel I got every penny’s worth."
      testimonialTwo="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                      transition and have heard some people who had an amazing experience here. I signed up 
                      for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                      The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                      the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
      className="bg-purple500 text-white
      xl:col-start-1 xl:col-span-2"
      quotationImage={quotesImage}
    >
    </Layout>
  )
}
