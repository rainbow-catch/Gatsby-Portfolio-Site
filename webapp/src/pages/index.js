import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"

function IndexPage() {
  return (
    <Layout>
      <div className="pt-20 px-20">
        <img className="pl-48 pt-20" src={images.IMAGE_DECORATION}></img>
        <p className="text-5xl text-black leading-none">Everything is</p>
        <p className="text-huge font-bold text-lightBrown uppercase leading-none">design</p>
        <p className="text-2xl text-black leading-loose">...Simple I belive is beautiful</p>
        <Link to="/projects" className="">
          <button className="text-lg text-white rounded-lg bg-primary mb-48 px-4 py-2 mt-2">View Projects</button>
        </Link>
        {/* <img className="w-hero h-hero z-10 float-right object-right-bottom" src={images.IMAGE_HOME_HERO}></img> */}
      </div>
      
    </Layout >
  )
}

export default IndexPage
