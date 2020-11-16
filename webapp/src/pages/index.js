import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"

function IndexPage() {
  return (
    <Layout>
      <div className="pl-10 lg:pl-20 flex justify-between min-h-screen" style={{ paddingTop: "89px" }}>
        <div className="flex justify-between flex-col">
          <div>
            <img className="smd:pl-48 pl-24 smd:pt-10" src={images.IMAGE_DECORATION}></img>
            <p className="smd:text-5xl text-4xl text-black">Everything is</p>
            <p className="smd:text-huge text-smdHuge font-bold text-lightBrown uppercase">design</p>
            <p className="smd:text-2xl text-xl text-black">...Simple I belive is beautiful</p>
            <Link to="/projects" className="">
              <button className="text-lg text-white rounded-lg bg-primary px-4 py-2 mt-10">View Projects</button>
            </Link>
          </div>
          <div className="left-10 text-gray-700 lg:px-12 py-5">
            © 2020 Bkay, All rights reserved.
          </div>
        </div>
        <img className="float-right object-right-bottom object-scale-down" src={images.IMAGE_HOME_HERO}></img>
      </div>
    </Layout >
  )
}

export default IndexPage
