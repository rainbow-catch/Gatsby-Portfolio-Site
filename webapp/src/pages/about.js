import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import FollowMe from "../components/followMe"
import Heading from "../components/Heading"
import { BrowserView, MobileView, IsMobile } from '../components/deviceDetect';
import SEO from "../components/seo"

function AboutPage() {
  return (
    <Layout>
      <SEO title="About me" />
      <BrowserView>
        <div className="mx-auto px-10 lg:px-20 flex flex-col justify-between" style={{ paddingTop: "89px", minHeight: "100vh", maxWidth: "1440px" }}>
          <div className="relative">
            <div className="hidden smd:block smd:absolute smd:mt-10 smd:w-8/12">
              <img className="" src={images.IMAGE_ABOUT}></img>
              <div className="text-lightBlack text-sm my-5 ml-5 w-5/12">
                <ul>
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
              <div className="border-t-lg border-l-lg border-white bg-aboutPanel p-5 smd:pt-10 smd:pl-10 text-lightBlack text-lg w-full smd:pb-20">
                <Heading className="my-10">About Me</Heading>
                <p>
                Hi there, I’m Adam Mayowa a.ka Bkay, a designer, an art enthusiast I focus on mobile, web interface design and graphic design, my passion towards arts & interface design made me root myself into the digital design world.
              </p><br />
                <p>
                My objectives are to make a commendable contribution to the field of Computing which is vast in different sections, working together with other professionals in the design sections using my skills to enhance several projects to work in various facets of mobile application interface design, responsive web design, and development, increasing my skills base in preparation for my longer-term goal. 
              </p><br />
                <p>
                I’m very proficient in the use of Adobe applications for interface design and development of a clean and straightforward layout. My design skill can’t comprehend; I love to use design as a form of solution to a client case study. I believe simple is beautiful.
              </p><br />
                <p>
                Let’s talk if you have a project, or idea you’d like us to create amazing future big things.
            </p>
                <div className="text-customGray lg:flex items-center text-lg mt-10">
                  <Link to="/contact" className="items-center lg:mr-5 mb-5 lg:mb-0"><button className="secondery">
                    <img src={images.IC_TALK}></img> &nbsp;
                Let's Talk
                </button></Link>
                  <FollowMe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="flex flex-col justify-between min-h-screen" style={{ paddingTop: "60px" }}>
          <div className="p-4 flex justify-between flex-col">
            <div>
              <img className="absolute top-0 right-0 w-decorationmobile h-decorationmobile pr-5p pt-16" src={images.IMAGE_DECORATION}></img>
            </div>
            <div className="bg-aboutPanel pt-16 text-lightBlack text-base w-full smd:pb-20">
              <Heading className="mb-4">About Me</Heading>
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
              <img className="my-5 w-full" src={images.IMAGE_ABOUT}></img>
              <p className="text-customGray">Illustrator, Digital Graphic Designer, Graphite & Charcol Pencil Artist,  Interface Designer &
User Experience Designer</p>
              <Link to="/contact" className="my-5 w-full">
                <button className="w-full py-5 text-base text-lightBlack border border-lightBrown rounded-lg  px-4 flex items-center justify-center">
                  <img src={images.IC_TALK}></img> &nbsp;
                  Let's Talk
                </button>
              </Link>
              <div className="flex justify-center mb-10">
                <FollowMe className="text-base" />
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </Layout >
  )
}

export default AboutPage
