import React from "react"
import { Link } from "gatsby"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import Heading from "../components/heading"
import PanelOverlay from "../components/panelOverlay"
import FollowMe from "../components/followMe";

function IndexPage() {
  return (
    <Layout>
      <BrowserView>
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
                  <div className="relative mb-10">
                    <img className="w-full" src={images.IMAGE_PRO2}></img>
                    <PanelOverlay>Acute Invoice Design</PanelOverlay>
                  </div>
                  <div className="relative mb-10">
                    <img className="w-full" src={images.IMAGE_PRO2}></img>
                    <PanelOverlay>Financial Advisor</PanelOverlay>
                  </div>
                  <div className="relative mb-20">
                    <img className="w-full" src={images.IMAGE_PRO3}></img>
                    <PanelOverlay>Yutar Web Design</PanelOverlay>
                  </div>
                </div>
                <div className="flex flex-col justify-between w-6/12 pl-5">
                  <div className="relative mt-20">
                    <img className="w-full" src={images.IMAGE_PRO5}></img>
                    <PanelOverlay>Mobile Deposit</PanelOverlay>
                  </div>
                  <div className="relative mt-10">
                    <img className="w-full" src={images.IMAGE_PRO5}></img>
                    <PanelOverlay>Xputer Redesign</PanelOverlay>
                  </div>
                  <div className="relative mt-10">
                    <img className="w-full" src={images.IMAGE_PRO6}></img>
                    <PanelOverlay>Estate Manager</PanelOverlay>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-10 text-gray-700 lg:px-12 py-5">
              © 2020 Bkay, All rights reserved.
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
              <Heading className="mb-4">I’ve got good experience</Heading>
              <div className="flex">
                <button className="tabButtonMobileActive mr-3">UI/UX</button>
                <button className="tabButtonMobileNormal mr-3">Graphics Design</button>
                <button className="tabButtonMobileNormal mr-3">Pencil Art</button>
              </div>
              <div className="flex flex-col justify-between">
                <div className="relative mt-5">
                  <img className="w-full" src={images.IMAGE_PRO2}></img>
                  <PanelOverlay>Acute Invoice Design</PanelOverlay>
                </div>
                <div className="relative mt-5">
                  <img className="w-full" src={images.IMAGE_PRO2}></img>
                  <PanelOverlay>Financial Advisor</PanelOverlay>
                </div>
                <div className="relative mt-5">
                  <img className="w-full" src={images.IMAGE_PRO3}></img>
                  <PanelOverlay>Yutar Web Design</PanelOverlay>
                </div>
                <div className="relative mt-5">
                  <img className="w-full" src={images.IMAGE_PRO5}></img>
                  <PanelOverlay>Mobile Deposit</PanelOverlay>
                </div>
                <div className="relative mt-5">
                  <img className="w-full" src={images.IMAGE_PRO5}></img>
                  <PanelOverlay>Xputer Redesign</PanelOverlay>
                </div>
                <div className="relative mt-5">
                  <img className="w-full" src={images.IMAGE_PRO6}></img>
                  <PanelOverlay>Estate Manager</PanelOverlay>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blacker text-white flex flex-col items-center">
            <p className="text-25p mt-8">Have a project Idea?</p>
            <p className="text-25p">Talk to me about it.</p>
            <Link to="/contact" className="my-5 w-9/12">
              <button className="w-full py-5 text-base text-white bg-primary rounded-lg  px-4 flex items-center justify-center">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 11.5C21.5034 12.8199 21.1951 14.1219 20.6 15.3C19.8944 16.7118 18.8098 17.8992 17.4674 18.7293C16.1251 19.5594 14.5782 19.9994 13 20C11.6801 20.0035 10.3781 19.6951 9.2 19.1L3.5 21L5.4 15.3C4.80493 14.1219 4.49656 12.8199 4.5 11.5C4.50061 9.92179 4.94061 8.37488 5.77072 7.03258C6.60083 5.69028 7.78825 4.6056 9.2 3.90003C10.3781 3.30496 11.6801 2.99659 13 3.00003H13.5C15.5843 3.11502 17.553 3.99479 19.0291 5.47089C20.5052 6.94699 21.385 8.91568 21.5 11V11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                &nbsp;
                Let's Talk
              </button>
            </Link>
            <FollowMe className="text-base mb-24 mt-8" />
          </div>
        </div>
      </MobileView>
    </Layout >
  )
}

export default IndexPage
