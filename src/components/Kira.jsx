import { Layout } from "./Layout"
import kiraImage from "../../images/image-kira.jpg"

export const Kira = () => {
  return (
    <Layout
      mainName="Kira Whittle"
      isGraduate="Verified Graduate"
      image={kiraImage}
      testimonialOne="Such a life-changing experience. Highly recommended!
                      "
      testimonialTwo="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
                      professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
                      student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
                      did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
                      project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
                      could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
                      experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
                      100% recommend! ”
                      "
      className="bg-white text-grey500 xl:row-start-1 xl:row-span-2 xl:col-start-4"
    >

    </Layout>
  )
}
