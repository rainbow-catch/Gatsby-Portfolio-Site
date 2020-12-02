import React, { useState, useEffect } from "react"
import images from '../../constants/images'
import { IsMobile } from '../../components/deviceDetect';
import ColorPanel from "../../components/colorPanel";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import FollowMe from "../../components/followMe";

const Xputer = () => {
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
    
    return (
        <Layout>
            <SEO title="Case-Xputer"></SEO>
            <BrowserView>
                <div className="bg-whitet-base ">
                    <div className="bg-xputer flex flex-col text-black">
                        <Link to="/projects" className="mt-32 ml-5p">
                            <button className="customButton bg-xputerLight border-xputerDark text-base">
                                <img src={images.IC_ARROW_LEFT}></img> View All
                            </button>
                        </Link>
                        <div className="pl-8p flex">
                            <div className="smd:w-6/12 py-10  break-normal">
                                <p className="text-25p mt-20">Xputer Web Page Redesign</p>
                                <p className="mt-8">Xputer is a software solution cooperate company with Innovation. Excellence. Impact. Empowering businesses and organizations with cutting-edge, world-class solutions.</p>
                                <p className="text-xl mt-6">Problem Statement</p>
                                <p className="mt-8 mb-10">Redesign the current Xputer Website to a new modern and vibrant cooperate website.</p>
                                <div className="flex">
                                    <Link to="#" target="_blank">
                                        <div className="text-black border-b-2 p-2 border-black items-center flex">
                                            Launch Project &nbsp;
                                    <img src={images.IC_ARROW}></img>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden smd:block w-6/12 relative">
                                <img className="absolute right-0 bottom-0 h-full object-right-bottom object-scale-down" src={images.IMAGE_XPUTER1}></img>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 px-5p pt-6 flex flex-col text-black">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <div className="flex flex-wrap justify-around">
                            <div className="flex flex-col pr-10">
                                <p className="text-3xl mt-8">Colors</p>
                                <div className="mt-10 flex">
                                    <ColorPanel className="mr-6 w-150 h-150 rounded-2xl boxshadow text-xl text-white" color="#04AADC" />
                                    <ColorPanel className="mr-6 w-150 h-150 rounded-2xl boxshadow text-xl text-white" color="#3E4097" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-3xl mt-8">Typography</p>
                                <p className="text-6xl font-poppins mt-8 text-616161">Heading 1</p>
                                <p className="mt-2">Poppins - Semi-Bold 64px | Line Height 44px</p>
                                <div className="flex flex-wrap justify-start min-w-full text-616161">
                                    <div className="flex flex-col justify-end pr-5">
                                        <p className="text-3xl mt-5 font-poppins">Heading 2</p>
                                        <p className="mt-3">Poppins - Medium 30px | Line Height 44px</p>
                                    </div>
                                    <div className="flex flex-col justify-end pr-5">
                                        <p className="text-base mt-3 font-poppins">Body</p>
                                        <p className="mt-1">Poppins - Regular 16px | Line Height: Auto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-20">
                            <p className="text-3xl">Design Solution</p>
                            <p className="text-xl text-lightBlack">High Fidelity Screen Design</p>
                        </div>
                        {[
                            {
                                pageName: "Landing Page",
                                src: images.IMAGE_XPUTER_PAGE1
                            },
                            {
                                pageName: "Contact Page",
                                src: images.IMAGE_XPUTER_PAGE2
                            },
                        ].map((page, index) => (
                            <div className="flex flex-col mt-10" key={index}>
                                <p className="text-3xl mb-5">{page.pageName}</p>
                                <img className="w-full boxshadow" src={page.src}></img>
                            </div>
                        ))}
                        <div className="h-32"></div>
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
                <div className="bg-white flex flex-col text-xs">
                    <div className="bg-xputer flex flex-col text-black">
                        <Link to="/projects" className="mt-24 ml-5p">
                            <button className="customButton bg-xputerLight border-xputerDark text-sm">
                                <img src={images.IC_ARROW_LEFT}></img> View All
                            </button>
                        </Link>
                        <div className="px-5p mt-10  break-normal">
                            <p className="text-sm">Xputer Web Page Redesign</p>
                            <p className="mt-3">Xputer is a software solution cooperate company with Innovation. Excellence. Impact. Empowering businesses and organizations with cutting-edge, world-class solutions.</p>
                            <p className="text-xl mt-2">Problem Statement</p>
                            <p className="mt-3 mb-5">Redesign the current Xputer Website to a new modern and vibrant cooperate website.</p>
                            <div className="flex mb-10">
                                <Link to="#" target="_blank">
                                    <div className="text-black text-sm border-b-2 p-2 border-black items-center flex">
                                        Launch Project &nbsp;
                                    <img src={images.IC_ARROW}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="px-5p">
                            <img className="w-full object-scale-down" src={images.IMAGE_XPUTER2}></img>
                        </div>
                    </div>
                    <div className="pt-6 px-5p flex flex-col text-black items-center">
                        <p className="text-gray-600">Style Guide</p>
                        <p className="text-xl mt-5">Colors</p>
                        <div className="mt-5 flex justify-center">
                            <ColorPanel className="mr-6 w-90 h-90 rounded-2xl boxshadow text-xs text-white" color="#04AADC" />
                            <ColorPanel className="w-90 h-90 rounded-2xl boxshadow text-xs text-white" color="#3E4097" />
                        </div>
                        <p className="text-xl mt-8">Typography</p>
                        <div className="mt-8 text-616161 text-center text-sm">
                            <p className="text-xl font-poppins">Heading 1</p>
                            <p className="mt-2">Poppins - Semi-Bold 64px | <br />Line Height 44px</p>

                            <p className="text-xl mt-3 font-poppins">Heading 2</p>
                            <p className="mt-2">Poppins - Medium 30px | <br /> Line Height 44px</p>

                            <p className="text-xl mt-3 font-poppins">Body</p>
                            <p className="mt-2">Poppins - Regular 16px | <br /> Line Height: Auto</p>
                        </div>

                        <p className="text-xl mt-8">Design Solution</p>
                        <p className="text-lightBlack mt-2">High Fidelity Screen Design</p>
                        {[
                            {
                                pageName: "Landing Page",
                                src: images.IMAGE_XPUTER_PAGE1
                            },
                            {
                                pageName: "Contact Page",
                                src: images.IMAGE_XPUTER_PAGE2
                            },
                        ].map((page, index) => (
                            <div className="flex flex-col mt-5" key={index}>
                                <p className="text-xl mb-3 px-4">{page.pageName}</p>
                                <img className="w-full boxshadow" src={page.src}></img>
                            </div>
                        ))}
                        <div className="h-10"></div>
                    </div>
                </div >
                <div className="bg-blacker text-white flex flex-col items-center px-5p">
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
            </MobileView >
        </Layout >
    );
}

export default Xputer;