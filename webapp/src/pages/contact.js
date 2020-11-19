import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import FollowMe from "../components/followMe"
import Heading from "../components/heading"

function ContactPage() {
  return (
    <Layout>
      <div className="mx-10 lg:mx-20 flex flex-col justify-between" style={{ paddingTop: "89px", minHeight: "100vh" }}>
        <div className="relative">
          <div className="hidden smd:block smd:absolute pointer-events-none smd:mt-10 w-7/12 smd:w-8/12">
            <div className="bg-lightGray flex p-6 pl-0">
              <img className="object-cover w-full" style={{ borderTopLeftRadius: "20%" }} src={images.IMAGE_CONTACT}></img>
            </div>
            {/* <div className="text-lightBlack text-lg my-5 w-7/12">
              <FollowMe/>
            </div> */}
          </div>
        </div>
        <div className="relative min-h-full flex flex-col-reverse smd:flex-row smd:justify-between" style={{ maxWidth: "1440px" }}>
          <div className="min-h-full flex flex-col-reverse text-customGray lg:pr-6 py-5">
            © 2020 Bkay, All rights reserved.
            <FollowMe className="mb-10"/>
          </div>
          <div className="relative smd:w-7/12 float-right flex flex-col">
            <div className="h-logo smd:h-logosmd"></div>
            <img className="absolute" style={{ top: "50px", right: "25px" }} src={images.IMAGE_DECORATION}></img>
            <div className="bg-white border-t-lg border-l-lg border-lightBrown p-5 text-lightBlack text-lg w-full pb-20">
              <Heading className="my-10">Talk to Me.</Heading>
              <p>
                Have a cool Idea for new project? Need a reliable partner to improve your product. Guess What!. I’m here to listen and present solution to all case study.
              </p><br />
              <p className="uppercase">
                LEAVE A MESSAGE.
              </p><br />
              <div className="px-6">
                <p className="pb-4">Your Full Name</p>
                <input type="text" placeholder="Enter your full name" name="fullname" className="bkayInput mb-4 w-full"></input>
                <p className="pb-4">Your Email Address</p>
                <input type="email" placeholder="Enter your email" name="email" className="bkayInput mb-4 w-full"></input>
                <p className="pb-4">Tell me something</p>
                <textarea placeholder="Enter your message" name="fullname" className="bkayInput mb-4 w-full"></textarea>
                <button className="primary float-right">
                  Send Message &nbsp;
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 1L14 21L10 12L1 8L21 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default ContactPage
