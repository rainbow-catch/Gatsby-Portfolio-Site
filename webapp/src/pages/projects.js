import React, { useState } from "react"
import { Link } from "gatsby"
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import Heading from "../components/heading"
import FollowMe from "../components/followMe";
import PureModal from "react-pure-modal";
import 'react-pure-modal/dist/react-pure-modal.min.css';

// import AcuteModal from "./modal/acute";

const IndexPage = (props) => {

  const [modal, setModal] = useState(-1);

  const allProject = [
    {
      image: images.IMAGE_ACUTE,
      title: "Acute Invoice Design"
    },
    {
      image: images.IMAGE_MOBILE,
      title: "Mobile Deposit"
    },
    {
      image: images.IMAGE_FINANCIAL,
      title: "Financial Advisor"
    },
    {
      image: images.IMAGE_XPUTER,
      title: "Xputer Redesign"
    },
    {
      image: images.IMAGE_YUTAR,
      title: "Yutar Web Design"
    },
    {
      image: images.IMAGE_ESTATE,
      title: "Estate Manager"
    },
  ];

  const ModalTemplate = ({ children }) => {
    return (
      <PureModal
        className="min-w-full min-h-full bg-blacker"
        isOpen={modal != -1}
        closeButton={
          <span style={{ position: 'absolute', top: '5px', right: '5px' }}>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="30" height="30.0931" rx="4" fill="#83523B" />
              <path d="M16.1707 15.0275L21.7815 9.38041C21.9253 9.22511 22.0036 9.01971 21.9999 8.80748C21.9962 8.59525 21.9107 8.39276 21.7616 8.24267C21.6125 8.09258 21.4113 8.0066 21.2004 8.00286C20.9895 7.99911 20.7855 8.07789 20.6312 8.2226L15.0203 13.8696L9.40945 8.21987C9.25515 8.07516 9.05107 7.99638 8.8402 8.00013C8.62933 8.00387 8.42814 8.08985 8.27901 8.23994C8.12988 8.39003 8.04445 8.59252 8.04073 8.80475C8.03701 9.01698 8.11529 9.22238 8.25906 9.37767L13.8699 15.0275L8.25906 20.6745C8.17909 20.7495 8.11495 20.8399 8.07046 20.9404C8.02598 21.0409 8.00205 21.1494 8.00013 21.2594C7.9982 21.3694 8.0183 21.4787 8.05924 21.5807C8.10018 21.6827 8.16111 21.7753 8.2384 21.8531C8.31569 21.9309 8.40776 21.9922 8.50911 22.0334C8.61046 22.0746 8.71902 22.0949 8.82831 22.0929C8.9376 22.091 9.04538 22.0669 9.14523 22.0221C9.24507 21.9774 9.33493 21.9128 9.40945 21.8323L15.0203 16.1853L20.6312 21.8323C20.7855 21.977 20.9895 22.0558 21.2004 22.0521C21.4113 22.0483 21.6125 21.9623 21.7616 21.8122C21.9107 21.6622 21.9962 21.4597 21.9999 21.2474C22.0036 21.0352 21.9253 20.8298 21.7815 20.6745L16.1707 15.0275Z" fill="#D0D0D0" />
            </svg>
          </span>
        }
        closeButtonPosition='header'
        onClose={() => {
          setModal(-1)
          return true;
        }}
      >
        <div className="flex flex-col min-h-screen items-center justify-center" style={{ margin: '-15px' }}>
          {/* {children} */}
          { ModalContents[modal] }
        </div>
      </PureModal>)
  }

  const ModalContents = [
    (<div>Acute</div>),
    "Mobile",
    "Financial",
    "Xputer",
    "Yutar",
    "Estate",
  ];
  const PanelOverlay = ({ children, index }) => {
    return (
      <div>
        <BrowserView>
          <div className="absolute opacity-0 hover:opacity-100 top-0 min-h-full min-w-full bg-semiTransparentBlack flex flex-col justify-center items-center">
            <p className="text-white font-bold text-4xl mb-10">{children}</p>
            <button className="seconderyFontWhite" onClick={() => setModal(index)}>View Case</button>
          </div>
        </BrowserView>
        <MobileView>
          <div className="absolute top-0 min-h-full min-w-full flex flex-col justify-end items-center">
            <div className="rounded-t-3xl w-full py-5 bg-white opacity-0.8 text-lg flex justify-center text-black"
              onClick={() => setModal(index)}>
              <p className="">
                {children}
              </p>
            </div>
          </div>
        </MobileView>
      </div>
    );
  }

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
                  {allProject.map((project, index) =>
                    index % 2 === 0 ? (
                      <div className="relative mb-10" key={project.title}>
                        <img className="w-full" src={project.image}></img>
                        <PanelOverlay index={index}>{project.title}</PanelOverlay>
                      </div>
                    ) : '')}
                  <div className="h-10"></div>
                </div>
                <div className="flex flex-col justify-between w-6/12 pl-5">
                  <div className="h-10"></div>
                  {allProject.map((project, index) =>
                    index % 2 === 1 ? (
                      <div className="relative mt-20" key={project.title}>
                        <img className="w-full" src={project.image}></img>
                        <PanelOverlay index={index}>{project.title}</PanelOverlay>
                      </div>
                    ) : '')}
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
                {allProject.map((project, index) => (
                  <div className="relative mt-5" key={project.title}>
                    <img className="w-full" src={project.image}></img>
                    <PanelOverlay index={index}>{project.title}</PanelOverlay>
                  </div>
                ))}
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
      <ModalTemplate  />

    </Layout >
  )
}

export default IndexPage
