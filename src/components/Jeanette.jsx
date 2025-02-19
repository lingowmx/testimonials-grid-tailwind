import { Layout } from "./Layout"
import jeanetteImage from "../../images/image-jeanette.jpg"

export const Jeanette = () => {
  return (
    <Layout
      mainName="Jeanette Harmon"
      isGraduate="Verified Graduate"
      image={jeanetteImage}
      testimonialOne="An overall wonderful and rewarding experience"
      testimonialTwo="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
                      while doing something I love. ”"
      className="bg-white text-grey400 "
    >

    </Layout>
  )
}
