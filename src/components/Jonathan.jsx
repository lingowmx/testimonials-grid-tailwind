import { Layout } from "./Layout"
import jonathanImage from "../../images/image-jonathan.jpg"

export const Jonathan = () => {
  return (
    <Layout
      mainName="Jonathan Walters"
      isGraduate="Verified Graduate"
      image={jonathanImage}
      testimonialOne="The team was very supportive and kept me motivated"
      testimonialTwo="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
                      for a big company. This was one of the best investments I’ve made in myself. ”"
      className="bg-grey500 text-grey200"                      
    >

    </Layout>
  )
}
