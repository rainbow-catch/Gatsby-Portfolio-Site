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
import Acute from "./modalContent/Acute";
import Mobile from "./modalContent/Mobile";
import Yutar from "./modalContent/Yutar";
import Xputer from "./modalContent/Xputer";
import Financial from "./modalContent/Financial";

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
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="28" height="28" rx="5.6" fill="#F8F8F8" />
              <path d="M9.20599 10.394C8.87795 10.0659 8.87795 9.53406 9.20599 9.20602C9.53404 8.87798 10.0659 8.87798 10.3939 9.20602L14 12.8121L17.606 9.20602C17.934 8.87798 18.4659 8.87798 18.794 9.20602C19.122 9.53406 19.122 10.0659 18.794 10.394L15.1879 14L18.794 17.606C19.122 17.934 19.122 18.4659 18.794 18.794C18.4659 19.122 17.934 19.122 17.606 18.794L14 15.1879L10.3939 18.794C10.0659 19.122 9.53404 19.122 9.20599 18.794C8.87795 18.4659 8.87795 17.934 9.20599 17.606L12.812 14L9.20599 10.394Z" fill="black" />
            </svg>
          </span>
        }
        closeButtonPosition='header'
        onClose={() => {
          setModal(-1)
          return true;
        }}
      >
        <div className="flex flex-col min-h-screen justify-between" style={{ margin: '-15px' }}>
          {ModalContents[modal]}
          <div className="bg-blacker text-white flex flex-col items-center">
            <p className="text-50 mt-8">Have a project Idea?</p>
            <p className="text-50">Talk to me about it.</p>
            <Link to="/contact" className="my-5 mb-24">
              <button className="w-full py-5 text-xl text-white bg-primary rounded-lg  px-20 flex items-center justify-center">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.5 11.5C21.5034 12.8199 21.1951 14.1219 20.6 15.3C19.8944 16.7118 18.8098 17.8992 17.4674 18.7293C16.1251 19.5594 14.5782 19.9994 13 20C11.6801 20.0035 10.3781 19.6951 9.2 19.1L3.5 21L5.4 15.3C4.80493 14.1219 4.49656 12.8199 4.5 11.5C4.50061 9.92179 4.94061 8.37488 5.77072 7.03258C6.60083 5.69028 7.78825 4.6056 9.2 3.90003C10.3781 3.30496 11.6801 2.99659 13 3.00003H13.5C15.5843 3.11502 17.553 3.99479 19.0291 5.47089C20.5052 6.94699 21.385 8.91568 21.5 11V11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                &nbsp;
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </PureModal>)
  }

  const ModalContents = [
    (<Acute />),
    (<Mobile />),
    (<Financial />),
    (<Xputer />),
    (<Yutar />),
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
        <div className="relative px-10 lg:px-20 min-h-screen mx-auto" style={{ maxWidth: "1440px" }}>
          <img className="absolute" style={{ top: "150px", right: "5%" }} src={images.IMAGE_DECORATION}></img>
          <div className="flex justify-between min-h-screen flex-col" style={{ paddingTop: "89px" }}>
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
                        <img className="w-full boxshadow" src={project.image}></img>
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
                        <img className="w-full boxshadow" src={project.image}></img>
                        <PanelOverlay index={index}>{project.title}</PanelOverlay>
                      </div>
                    ) : '')}
                </div>
              </div>
          </div>
        </div>
        <div className="bg-blacker text-white flex flex-col items-center pt-10">
              <p className="text-50 mt-8">Have a project Idea?</p>
              <p className="text-50">Talk to me about it.</p>
              <Link to="/contact" className="my-5">
                <button className="w-full py-5 text-xl text-white bg-primary rounded-lg  px-20 flex items-center justify-center">
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 11.5C21.5034 12.8199 21.1951 14.1219 20.6 15.3C19.8944 16.7118 18.8098 17.8992 17.4674 18.7293C16.1251 19.5594 14.5782 19.9994 13 20C11.6801 20.0035 10.3781 19.6951 9.2 19.1L3.5 21L5.4 15.3C4.80493 14.1219 4.49656 12.8199 4.5 11.5C4.50061 9.92179 4.94061 8.37488 5.77072 7.03258C6.60083 5.69028 7.78825 4.6056 9.2 3.90003C10.3781 3.30496 11.6801 2.99659 13 3.00003H13.5C15.5843 3.11502 17.553 3.99479 19.0291 5.47089C20.5052 6.94699 21.385 8.91568 21.5 11V11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                &nbsp;
                Let's Talk
              </button>
              </Link>
              <div className="mt-20 mb-10 text-gray-500 lg:px-12 py-5">
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
              <div className="flex">
                <button className="tabButtonMobileActive mr-3">UI/UX</button>
                <button className="tabButtonMobileNormal mr-3">Graphics Design</button>
                <button className="tabButtonMobileNormal mr-3">Pencil Art</button>
              </div>
              <div className="flex flex-col justify-between">
                {allProject.map((project, index) => (
                  <div className="relative mt-5" key={project.title}>
                    <img className="w-full boxshadow" src={project.image}></img>
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
      <ModalTemplate />

    </Layout >
  )
}

export default IndexPage
