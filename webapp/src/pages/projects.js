import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { IsMobile } from '../components/deviceDetect';
import PureModal from "react-pure-modal";
import 'react-pure-modal/dist/react-pure-modal.min.css';

import "../utils/globals.css"

import Layout from "../components/layout"
import SEO from "../components/seo";
import images from "../constants/images"
import Heading from "../components/Heading"
import FollowMe from "../components/followMe";

// import AcuteModal from "./modal/acute";

const IndexPage = (props) => {

  const [modal, setModal] = useState(-1);
  const [tab, setTab] = useState("uis");
  const [scale, setScale] = useState(1);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  });
  const BrowserView = ({ children }) => {
    return !IsMobile() && loaded && children;
  };

  const MobileView = ({ children }) => {
    return IsMobile() && loaded && children;
  };

  const uis = [
    {
      image: images.IMAGE_ACUTE,
      title: "Acute Invoice Design",
      url: "/case/acute"
    },
    {
      image: images.IMAGE_MOBILE,
      title: "Mobile Deposit",
      url: "/case/mobile"
    },
    {
      image: images.IMAGE_FINANCIAL,
      title: "Financial Advisor",
      url: "/case/financial"
    },
    {
      image: images.IMAGE_XPUTER,
      title: "Xputer Redesign",
      url: "/case/xputer"
    },
    {
      image: images.IMAGE_YUTAR,
      title: "Yutar Web Design",
      url: "/case/yutar"
    },
    {
      image: images.IMAGE_ESTATE,
      title: "Estate Manager",
      url: "/case/estate"
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

  const PanelOverlay = ({ children, index, url }) => {
    return (
      <div>
        <BrowserView>
          <div className="absolute opacity-0 hover:opacity-100 top-0 min-h-full min-w-full bg-semiTransparentBlack flex flex-col justify-center items-center">
            <p className="text-white font-bold text-4xl mb-5 text-center p-10">{children}</p>
            <Link target="_blank" to={url}>
              <button className="seconderyFontWhite font-thin">View Case</button>
            </Link>
          </div>
        </BrowserView>
        <MobileView>
          <div className="absolute top-0 min-h-full min-w-full flex flex-col justify-end items-center">
            <div className="rounded-t-xl w-full py-3 bg-white opacity-0.9 text-lg flex justify-center text-black">
              <Link target="_blank" to={url}>
                <p className="text-sm">
                  {children}
                </p>
              </Link>
            </div>
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
                    <div className="relative mb-10" style={{ scale: scale, transition: "scale .5s ease-in" }} key={index}>
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
    </Layout >
  )
}

export default IndexPage
