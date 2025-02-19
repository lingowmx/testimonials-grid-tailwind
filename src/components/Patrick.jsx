import { Layout } from "./Layout"
import patrickImage from "../../images/image-patrick.jpg"

export const Patrick = () => {
  return (
    <Layout
      mainName="Patrick Abrams"
      isGraduate="Verified Graduate"
      image={patrickImage}
      testimonialOne="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
                      learning from their experiences was easy."
      testimonialTwo="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
                      gave me the confidence necessary to be able to go out in the world and present myself as a capable 
                      junior developer. The standard is above the rest. You will get the personal attention you need from 
                      an incredible community of smart and amazing people. ”"
      className="bg-darkBlue text-grey200"
    >

    </Layout>
  )
}
