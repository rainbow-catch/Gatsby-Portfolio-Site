import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import Heading from "../components/Heading"

function IndexPage() {
  return (
    <Layout>
      <div className="relative px-10 lg:px-20 min-h-screen" style={{ maxWidth: "1440px" }}>
      <img className="absolute" style={{ top: "150px", right: "5%" }} src={images.IMAGE_DECORATION}></img>
      <div className="flex justify-between min-h-screen flex-col" style={{ paddingTop: "89px" }}>
          <div>
            <Heading className="pt-10 pb-5 text-lightBlack">What I have DONE.</Heading>
            <div className="flex">
              <button className="tabButtonActive mr-3">UI/UX</button>
              <button className="tabButtonNormal mr-3">Graphics Design</button>
              <button className="tabButtonNormal mr-3">Pencil Art</button>              
            </div>
            <div className="flex justify-between my-10">
              <div className="flex flex-col justify-between w-6/12 pr-5">
                <img className="w-full pb-10" src={images.IMAGE_PRO2}></img>
                <img className="w-full pb-10" src={images.IMAGE_PRO2}></img>
                <img className="w-full pb-20" src={images.IMAGE_PRO3}></img>
              </div>
              <div className="flex flex-col justify-between w-6/12 pl-5">
                <img className="w-full pt-20" src={images.IMAGE_PRO5}></img>
                <img className="w-full pt-10" src={images.IMAGE_PRO5}></img>
                <img className="w-full pt-10" src={images.IMAGE_PRO6}></img>
              </div>
            </div>
          </div>
          <div className="left-10 text-gray-700 lg:px-12 py-5">
            © 2020 Bkay, All rights reserved.
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
