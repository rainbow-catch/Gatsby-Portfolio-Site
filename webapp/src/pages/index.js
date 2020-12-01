import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import { BrowserView, MobileView, IsMobile } from '../components/deviceDetect';
import SEO from "../components/seo"

function IndexPage() {
  console.log("IsMobile: " + IsMobile());
  return (
    <Layout>
      <SEO
        title="Home"
      />
      <BrowserView>
        <div className="mx-auto pl-10 lg:pl-20 flex justify-between min-h-screen" style={{ paddingTop: "89px", maxWidth: "1440px" }}>
          <div className="flex justify-between flex-col">
            <div className="">
            </div>
            <div>
              <img className="smd:pl-48 pl-24 smd:pt-10" src={images.IMAGE_DECORATION}></img>
              <p className="smd:text-5xl text-4xl text-lightBlack">Everything is</p>
              <p className="smd:text-huge text-smdHuge font-bold text-lightBrown uppercase">design</p>
              <p className="smd:text-2xl text-xl text-lightBlack">...Simple I belive is beautiful</p>
              <Link to="/projects" className="">
                <button className="primary mt-10">View Projects</button>
              </Link>
            </div>
            <div className="text-customGray lg:pr-12 py-5">
              © 2020 Bkay, All rights reserved.
          </div>
          </div>
          <img className="float-right object-right object-contain p-5" src={images.IMAGE_HOME_HERO}></img>
        </div>
      </BrowserView>
      <MobileView>
        <div className="flex flex-col justify-between min-h-screen" style={{ paddingTop: "60px" }}>
          <div className="pl-6 flex justify-between flex-col">
            <div>
              <img className="float-right w-decorationmobile h-decorationmobile pr-5p pt-3 pb-10" src={images.IMAGE_DECORATION}></img>
            </div>
            <p className="text-25p text-lightBlack">Everything is</p>
            <p className="text-70p font-bold text-lightBrown uppercase">design</p>
            <p className="text-20p text-lightBlack">...Simple I belive is beautiful</p>
            <div>
              <Link to="/projects" className="mt-5">
                <button className="primarymobile">View Projects</button>
              </Link>
            </div>
          </div>
          <img className="float-right w-full object-fill" src={images.IMAGE_HOME_INDEX_MOBILE}></img>
        </div>
      </MobileView>
    </Layout >
  )
}

export default IndexPage
