import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import FollowMe from "../components/followMe"
import Heading from "../components/Heading"

function AboutPage() {
  return (
    <Layout>
      <div className="mx-10 lg:mx-20 flex flex-col justify-between" style={{ paddingTop: "89px", minHeight: "100vh" }}>
        <div className="relative">
          <div className="hidden smd:block smd:absolute smd:mt-10 smd:w-8/12">
            <img className="" src={images.IMAGE_ABOUT}></img>
            <div className="text-black text-sm my-5 ml-5 w-5/12">
              <ul style={{ listStyleType: "circle" }}>
                <li>Illustrator, Digital Graphic Designer,</li>
                <li>Graphite & Charcol Pencil Artist,</li>
                <li>Interface Designer & User Experience Designer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative min-h-full flex flex-col-reverse smd:flex-row smd:justify-between" style={{ maxWidth: "1440px" }}>
          <div className="min-h-full flex flex-col-reverse text-customGray lg:pr-6 py-5">
            © 2020 Bkay, All rights reserved.
          </div>
          <div className="relative smd:w-8/12 float-right flex flex-col">
            <div className="h-0 smd:h-32"></div>
            <img className="absolute" style={{ top: "40px", right: "25px" }} src={images.IMAGE_DECORATION}></img>
            <div className="border-t-lg border-l-lg border-white bg-aboutPanel p-5 smd:pt-10 smd:pl-10 text-black text-lg w-full smd:pb-20">
              <Heading className="my-10">About Me</Heading>
              <p>
                My name is Adam Mayowa. I’m a designer, an art enthusiast I focus on mobile and web interface designing, my passion towards arts & interface design made me root myself into the digital design world.
              </p><br />
              <p>
                My objectives are to make a commendable contribution to the field of Computing which is vast in different sections, working together with other professionals in the design sections using my skills to enhance several projects to work in various facets of mobile application interface design, responsive web design, and development, increasing my skills base in preparation for my longer-term goal.
              </p><br />
              <p>
                I’m very proficient in the use of Adobe applications for interface design and development of a clean and straightforward layout. My design skill can’t comprehend; I love to use design as a form of solution to a client case study. I believe simple is beautiful.
              </p><br />
              <p>
                Talk to me if you have a project, or idea you’d like us to create amazing future big things.
            </p>
              <div className="text-customGray lg:flex items-center text-lg mt-10">
                <Link to="/contact" className="items-center lg:mr-5 mb-5 lg:mb-0"><button className="secondery flex items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> &nbsp;
                Let's Talk
                </button></Link>
                <FollowMe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default AboutPage
