import React from "react"
import { Link } from "gatsby"

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import FollowMe from "../components/followMe"

function IndexPage() {
  return (
    <Layout>
      <div className="pl-10 lg:pl-20 flex flex-col justify-between min-h-screen" style={{ paddingTop: "89px" }}>
        <div className="mt-10 w-7/12 smd:w-8/12">
          <div className="bg-lightBrown flex p-4">
            <img className="w-9/12" style={{ borderTopLeftRadius: "20%" }} src={images.IMAGE_ABOUT}></img>
            <div className="bg-white w-3/12 min-h-full"></div>
          </div>
          <div className="text-black text-lg mt-5 w-8/12">
            Illustrator, Digital Graphic Designer, Graphite & Charcol Pencil Artist,
            Interface Designer & User Experience Designer
          </div>
          <div className="text-customGray flex items-center text-lg mt-5 w-8/12">
            <Link to="/contact" className="items-center mr-10"><button className="secondery flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="#777777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg> &nbsp;
              Let's Talk
            </button></Link>
            <FollowMe/>
          </div>
        </div>

        <div className="left-10 text-gray-700 lg:px-12 py-5">
          © 2020 Bkay, All rights reserved.
          </div>
      </div>
    </Layout >
  )
}

export default IndexPage
