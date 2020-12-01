import React, { useState } from "react"
import { Link } from "gatsby"
import { BrowserView, MobileView, IsMobile } from '../components/deviceDetect';

import "../utils/globals.css"
import Layout from "../components/layout"
import images from "../constants/images"
import Heading from "../components/Heading"
import FollowMe from "../components/followMe";
import PureModal from "react-pure-modal";
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Acute from "./modalContent/Acute";
import Mobile from "./modalContent/Mobile";
import Yutar from "./modalContent/Yutar";
import Xputer from "./modalContent/Xputer";
import Financial from "./modalContent/Financial";
import Estate from "./modalContent/Estate";
import SEO from "../components/seo";

// import AcuteModal from "./modal/acute";

const IndexPage = (props) => {

  const [modal, setModal] = useState(-1);
  const [tab, setTab] = useState("uis");

  const uis = [
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
  const graphics = [
    {
      image: images.IMAGE_GRAPHICS1,
      title: "Game Over Graphics Design",
      url: "https://www.instagram.com/p/BVhPX20ldil"
    },
    {
      image: images.IMAGE_GRAPHICS2,
      title: "Beauty and the Beast Graphics Design",
      url: "https://www.instagram.com/p/Bt0YrCHlMIL"
    },
    {
      image: images.IMAGE_GRAPHICS3,
      title: "Thorin Graphics Design",
      url: "https://www.instagram.com/p/BtfjNr1FIzq"
    },
    {
      image: images.IMAGE_GRAPHICS4,
      title: "Take my Heart Graphics Design",
      url: "https://www.instagram.com/p/BtSsqJUl9rK"
    },
    {
      image: images.IMAGE_GRAPHICS5,
      title: "Slay Queen Graphics Design",
      url: "https://www.instagram.com/p/BtVeAEDFpS"
    },
    {
      image: images.IMAGE_GRAPHICS6,
      title: "Social Butterfly Graphics Design",
      url: "https://www.instagram.com/p/BtQ15_HF6qB"
    },
  ];
  const pencils = [
    {
      image: images.IMAGE_PENCILS1,
      title: "Graphite Pencil Art - Beauty in the eyes",
      url: "https://www.instagram.com/p/BheeBGvnqfF"
    },
    {
      image: images.IMAGE_PENCILS2,
      title: "Graphite on Paper - Our Daily Bread",
      url: "https://www.instagram.com/p/BlkdcK_Ht0D"
    },
    {
      image: images.IMAGE_PENCILS3,
      title: "Graphite on Paper - Happiness is Free",
      url: "https://www.instagram.com/p/BkPbAfPnsmN"
    },
    {
      image: images.IMAGE_PENCILS4,
      title: "Graphite on Paper",
      url: "https://www.instagram.com/p/BfbRJQaFDNM"
    },
    {
      image: images.IMAGE_PENCILS5,
      title: "Graphite Pencil Drawing",
      url: "https://www.instagram.com/p/BjUFn2KH_DH"
    },
    {
      image: images.IMAGE_PENCILS6,
      title: "Graphite Pencil Drawing",
      url: "https://www.instagram.com/p/Bfv1m5sl6DQ"
    },
  ];

  const allProject = {
    uis: uis,
    graphics: graphics,
    pencils: pencils
  };

  const ModalTemplate = ({ children }) => {
    return (
      <PureModal
        className="min-w-full min-h-full bg-blacker z-100"
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
          <div className="bg-blacker text-white flex flex-col items-center text-center">
            <BrowserView>
              <p className="text-50 mt-8">Have a project Idea?</p>
              <p className="text-50">Talk to me about it.</p>
              <Link to="/contact" className="my-5 mb-24">
                <button className="w-full py-5 text-xl text-white bg-primary rounded-lg  px-20 flex items-center justify-center">
                  <img src={images.IC_TALK_WHITE}></img>
                &nbsp;
                Let's Talk
              </button>
              </Link>
            </BrowserView>
            <MobileView>
              <p className="text-xl mt-4">Have a project Idea?</p>
              <p className="text-xl">Talk to me about it.</p>
              <Link to="/contact" className="my-5 mb-10">
                <button className="w-full py-3 text-base text-white bg-primary rounded-lg  px-10 flex items-center justify-center">
                  <img src={images.IC_TALK_WHITE}></img>
                &nbsp;
                Let's Talk
              </button>
              </Link>
              <FollowMe className="mb-20" />
            </MobileView>
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
    (<Estate />),
  ];
  const PanelOverlay = ({ children, index, url }) => {
    return (
      <div>
        <BrowserView>
          <div className="absolute opacity-0 hover:opacity-100 top-0 min-h-full min-w-full bg-semiTransparentBlack flex flex-col justify-center items-center">
            <p className="text-white font-bold text-4xl mb-5 text-center p-10">{children}</p>
            {tab === "uis" && (
              <button className="seconderyFontWhite font-thin" onClick={() => setModal(index)}>View Case</button>
            )}
            {tab !== "uis" && (
              <Link to={url}>
                <button className="seconderyFontWhite font-thin">View Case</button>
              </Link>
            )}
          </div>
        </BrowserView>
        <MobileView>
          <div className="absolute top-0 min-h-full min-w-full flex flex-col justify-end items-center">
            {tab === "uis" && (
              <div className="rounded-t-xl w-full py-3 bg-white opacity-0.9 text-lg flex justify-center text-black"
                onClick={() => { setModal(index) }}>
                <p className="text-sm">
                  {children}
                </p>
              </div>
            )}

            {tab !== "uis" && (
              <div className="rounded-t-xl w-full py-3 bg-white opacity-0.9 text-lg flex justify-center text-black">
                <Link to={url}>
                  <p className="text-sm">
                    {children}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </MobileView>
      </div>
    );
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <BrowserView>
        <div className="relative px-10 lg:px-20 min-h-screen mx-auto" style={{ maxWidth: "1440px" }}>
          <img className="absolute" style={{ top: "150px", right: "5%" }} src={images.IMAGE_DECORATION}></img>
          <div className="flex justify-between min-h-screen flex-col" style={{ paddingTop: "89px" }}>
            <Heading className="pt-10 pb-5 text-lightBlack">What I have DONE.</Heading>
            <div className="flex">
              <button className={tab == "uis" ? "tabButtonActive" : "tabButtonNormal" + " mr-3"} onClick={() => setTab("uis")}>UI/UX</button>
              <button className={tab == "graphics" ? "tabButtonActive" : "tabButtonNormal" + " mr-3"} onClick={() => setTab("graphics")}>Graphics Design</button>
              <button className={tab == "pencils" ? "tabButtonActive" : "tabButtonNormal" + " mr-3"} onClick={() => setTab("pencils")}>Pencil Art</button>
            </div>
            <div className="flex justify-between my-10">
              <div className="flex flex-col justify-between w-6/12 pr-5">
                {allProject[tab].map((project, index) =>
                  index % 2 === 0 ? (
                    <div className="relative mb-10" key={index}>
                      <img className="w-full boxshadow" src={project.image}></img>
                      <PanelOverlay index={index} url={project.url}>{project.title}</PanelOverlay>
                    </div>
                  ) : '')}
                <div className="h-10"></div>
              </div>
              <div className="flex flex-col justify-between w-6/12 pl-5">
                <div className="h-10"></div>
                {allProject[tab].map((project, index) =>
                  index % 2 === 1 ? (
                    <div className="relative mt-20" key={project.title}>
                      <img className="w-full boxshadow" src={project.image}></img>
                      <PanelOverlay index={index} url={project.url}>{project.title}</PanelOverlay>
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
              <img src={images.IC_TALK_WHITE}></img>
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
                <button className={tab == "uis" ? "tabButtonMobileActive" : "tabButtonMobileNormal" + " mr-3"} onClick={() => setTab("uis")}>UI/UX</button>
                <button className={tab == "graphics" ? "tabButtonMobileActive" : "tabButtonMobileNormal" + " mr-3"} onClick={() => setTab("graphics")}>Graphics Design</button>
                <button className={tab == "pencils" ? "tabButtonMobileActive" : "tabButtonMobileNormal" + " mr-3"} onClick={() => setTab("pencils")}>Pencil Art</button>
              </div>
              <div className="flex flex-col justify-between">
                {allProject[tab].map((project, index) => (
                  <div className="relative mt-5" key={index}>
                    <img className="w-full boxshadow" src={project.image}></img>
                    <PanelOverlay index={index} url={project.url}>{project.title}</PanelOverlay>
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
                <img src={images.IC_TALK_WHITE}></img>
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
