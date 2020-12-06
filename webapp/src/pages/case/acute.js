import React, { useState, useEffect } from "react"
import images from '../../constants/images'
import "../../utils/globals.css"

import Layout from "../../components/layout"
import { IsMobile } from '../../components/deviceDetect';
import ColorPanel from "../../components/colorPanel";
import SEO from "../../components/seo";
import FollowMe from "../../components/followMe";
import { Link } from "gatsby";

const Acute = () => {
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
    
    console.log("test");
    return (
        <Layout>
            <SEO title="Case-Acute" />
            <BrowserView>
                <div className="bg-white flex flex-col text-base text-white">
                    <div className="bg-acute flex flex-col items-start">
                        <Link to="/projects" className="mt-32 ml-5p">
                            <button className="customButton text-white bg-acuteDark border-acuteLight text-base">
                                <img src={images.IC_VIEW_ALL_WHITE}></img> &nbsp; View All
                            </button>
                        </Link>
                        <div className="px-8p flex">
                            <div className="py-10  text-white w-full smd:w-6/12 break-normal">
                                <p className="text-25p mt-10">Acute Invoice Mobile Application Design</p>
                                <p className="mt-8">AcuteInvoice is an invoice web application that lets you stay organized, keep track of your payment, record your expenses and monitor the performance of your business anytime, anywhere .</p>
                                <p className="text-25p mt-6">Problem Statement</p>
                                <p className="mt-8">AcuteInvoice as a business account and invoice software wants to make it painless for targetted business audience on the go to be able to manage their invoicing and accounting software while on the go.</p>
                                <p className="mt-8 mb-10">These prompt for the need to have a mobile application to manage and create invoice on the go for business owners.</p>
                            </div>
                            <div className="hidden smd:block w-6/12 relative">
                                <img className="absolute top-0 right-0" src={images.IMAGE_ACUTE1}></img>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 px-8p  pt-6 flex flex-col text-black">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <div className="flex flex-wrap">
                            <div className="flex flex-col pr-10">
                                <p className="text-3xl mt-8">Colors</p>
                                <div className="mt-10 flex">
                                    <ColorPanel className="mr-5 w-90 h-90 rounded-lg text-sm text-white" color="#645C8F" />
                                    <ColorPanel className="mr-5 w-90 h-90 rounded-lg text-sm text-white" color="#000000" />
                                    <ColorPanel className="mr-5 w-90 h-90 rounded-lg text-sm text-white" color="#6D6C6C" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-3xl mt-8">Typography</p>
                                <p className="text-2xl text-lightBlack mt-8">Acute invoice use Poppins Google Font</p>
                                <div className="flex flex-wrap mt-8">
                                    <div className="flex flex-col mr-10">
                                        <div className="flex items-baseline">
                                            <p className="text-4xl">Aa</p> &nbsp;
                                            <p className="text-2xl text-lightBlack">Poppins - Medium</p>
                                        </div>
                                        <div className="flex items-baseline">
                                            <p className="font-poppins text-2xl text-lightBlack">18.00px/Heading</p> &nbsp;
                                            <p className="font-poppins text-3xl">A Visual Type Scale</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline">
                                            <p className="text-4xl">Aa</p> &nbsp;
                            <p className="text-2xl text-lightBlack">Poppins - Regular</p>
                                        </div>
                                        <div className="flex items-baseline">
                                            <p className="font-poppins text-xl text-lightBlack">16.00px/Heading</p> &nbsp;
                            <p className="font-poppins text-2xl">A Visual Type Scale</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mt-10">
                            <p className="text-3xl">Design Solution</p>
                            <p className="text-xl text-lightBlack">High Fidelity Screen Design</p>
                        </div>
                        <div className="h-20"></div>
                        {[
                            {
                                pageName: "Onboarding",
                                src: images.IMAGE_ACUTE2
                            },
                            {
                                pageName: "Login / Sign Up",
                                src: images.IMAGE_ACUTE3
                            },
                            {
                                pageName: "Dashboard",
                                src: images.IMAGE_ACUTE4
                            },
                        ].map((page, index) => (
                            <div className="flex flex-col items-center" key={index}>
                                <p className="text-3xl mb-5">{page.pageName}</p>
                                <img className="" src={page.src}></img>
                            </div>
                        ))}
                    </div>
                    <img className="w-full" src={images.IMAGE_ACUTE5}></img>
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
                <div className="bg-white flex flex-col text-xs text-white">
                    <div className="bg-acute flex flex-col items-start">
                        <Link to="/projects" className="mt-24 ml-5p">
                            <button className="customButton text-white bg-acuteDark border-acuteLight text-sm">
                                <img src={images.IC_VIEW_ALL_WHITE}></img> &nbsp; View All
                            </button>
                        </Link>
                        <div className="p-3 mt-10">
                            <p className="text-sm">Acute Invoice Mobile Application Design</p>
                            <p className="mt-3">AcuteInvoice is an invoice web application that lets you stay organized, keep track of your payment, record your expenses and monitor the performance of your business anytime, anywhere .</p>
                            <p className="text-sm mt-2">Problem Statement</p>
                            <p className="mt-3">AcuteInvoice as a business account and invoice software wants to make it painless for targetted business audience on the go to be able to manage their invoicing and accounting software while on the go.</p>
                            <p className="mt-3">These prompt for the need to have a mobile application to manage and create invoice on the go for business owners.</p>
                        </div>
                        <div className="px-5">
                            <img className="object-scale-down" src={images.IMAGE_ACUTE1} style={{ top: "10%", right: "10%" }}></img>
                        </div>
                    </div>
                    <div className="p-3 pt-4 flex flex-col text-black text-center">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <div className="flex flex-col">
                            <p className="text-xl mt-3">Colors</p>
                            <div className="mt-5 flex flex-wrap justify-between">
                                <ColorPanel className="w-90 h-90 rounded-lg text-xs text-white" color="#645C8F" />
                                <ColorPanel className="w-90 h-90 rounded-lg text-xs text-white" color="#000000" />
                                <ColorPanel className="w-90 h-90 rounded-lg text-xs text-white" color="#6D6C6C" />
                            </div>

                            <p className="text-xl my-5">Typography</p>
                            <p className="text-base text-lightBlack mb-5">Acute invoice use Poppins Google Font</p>

                            <div className="flex justify-center items-baseline mb-2">
                                <p className="text-2xl">Aa</p> &nbsp;
                                <p className="text-base text-lightBlack">Poppins - Medium</p>
                            </div>

                            <div className="flex justify-center items-baseline mb-8">
                                <p className="font-poppins text-base text-lightBlack">18.00px/Heading</p> &nbsp;
                                <p className="font-poppins text-lg">A Visual Type Scale</p>
                            </div>

                            <div className="flex justify-center items-baseline mb-2">
                                <p className="text-2xl">Aa</p> &nbsp;
                                <p className="text-base text-lightBlack">Poppins - Regular</p>
                            </div>

                            <div className="flex justify-center items-baseline mb-8">
                                <p className="font-poppins text-xs text-lightBlack">16.00px/Heading</p> &nbsp;
                                <p className="font-poppins text-base">A Visual Type Scale</p>
                            </div>

                            <p className="text-xl">Design Solution</p>
                            <p className="text-xs text-lightBlack">High Fidelity Screen Design</p>

                            <div className="h-10"></div>
                            {[
                                {
                                    pageName: "Onboarding",
                                    src: images.IMAGE_ACUTE2
                                },
                                {
                                    pageName: "Login / Sign Up",
                                    src: images.IMAGE_ACUTE3
                                },
                                {
                                    pageName: "Dashboard",
                                    src: images.IMAGE_ACUTE4
                                },
                            ].map((page, index) => (
                                <div className="flex flex-col items-center" key={index}>
                                    <p className="text-xl mb-3">{page.pageName}</p>
                                    <img className="w-full" src={page.src}></img>
                                </div>
                            ))}
                        </div>
                        <img className="w-full" src={images.IMAGE_ACUTE5}></img>
                    </div>
                </div>
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
            </MobileView>
        </Layout>
    );
}

export default Acute;