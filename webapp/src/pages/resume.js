import React from "react"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import Heading from "../components/Heading"
import FollowMe from "../components/followMe"
import { Link } from "gatsby"
import { BrowserView, MobileView, IsMobile } from '../components/deviceDetect';

function IndexPage() {
  return (
    <Layout>
      <BrowserView>
        <div className="relative flex flex-col mx-auto justify-between px-10 lg:px-20 min-h-screen" style={{ maxWidth: "1440px" }}>
          <img className="hidden md:block absolute" style={{ top: "150px", right: "5%" }} src={images.IMAGE_DECORATION}></img>
          <div className="flex justify-between flex-col mb-20" style={{ paddingTop: "89px" }}>
            <div>
              <Heading className="pt-10 pb-5 text-lightBlack">I’ve got good experience.</Heading>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col pl-8 xl:pl-18p">
              <p className="text-black text-50 leading-none">Adam</p>
              <p className="text-black text-100 font-bold leading-none">Mayowa</p>
              <p className="text-lightBlack text-lg mt-10 mb-5">User Interface / User Experience & Graphic Designer</p>
              <Link className="text-lightBlack text-lg items-center mb-10 flex" to="https://mailto:gentleibkay@gmail.com">
                <img src={images.IC_MAIL}></img> &nbsp;
                gentleibkay@gmail.com
            </Link>
              <div>
                <Link to="https://drive.google.com/file/d/1n4d3I9HezrgyzW0AAHC-GLIaq0Bqw15k/view">
                  <button className="primary">
                    <img src={images.IC_DOWNLOAD}></img> &nbsp;
                View Resume
              </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:flex-col pr-8 xl:pr-18p items-center">
              <img src={images.IMAGE_RESUME}></img>
              <FollowMe className="mt-10" />
            </div>
          </div>
          <div className="left-10 text-gray-700 lg:px-12 py-5 mt-20">
            © 2020 Bkay, All rights reserved.
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
              <Heading className="mb-4">I’ve got good experience</Heading>
              <div className="flex flex-col items-center">
                <img className="m-5 px-10p" src={images.IMAGE_RESUME}></img>
                <p className="text-black text-25p leading-none">Adam</p>
                <p className="text-black text-50 font-bold leading-none">Mayowa</p>
                <p className="text-lightBlack text-xs mt-10 mb-5">User Interface / User Experience & Graphic Designer</p>
                <p className="text-lightBlack text-base items-center mb-10 flex">
                  <img src={images.IC_MAIL}></img>
                   &nbsp;
                  gentleibkay@gmail.com
                </p>
                <div>
                  <Link to="https://drive.google.com/file/d/1n4d3I9HezrgyzW0AAHC-GLIaq0Bqw15k/view">
                    <button className="primary">
                      <img src={images.IC_DOWNLOAD}></img> &nbsp;
                      View Resume
                    </button>
                  </Link>
                </div>
                <FollowMe className="text-base my-5" />
              </div>
            </div>
          </div>
        </div>

      </MobileView>
    </Layout >
  )
}

export default IndexPage
