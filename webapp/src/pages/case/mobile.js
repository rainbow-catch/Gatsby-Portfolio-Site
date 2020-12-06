import React, { useState, useEffect } from "react"
import images from '../../constants/images'
import { IsMobile } from '../../components/deviceDetect';
import ColorPanel from "../../components/colorPanel";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Link } from "gatsby";
import FollowMe from "../../components/followMe";

const Mobile = () => {
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
            <SEO title="Case-Mobile"></SEO>
            <BrowserView>
                <div className="bg-whitet-base text-white">
                    <div className="bg-mobile flex flex-col">
                        <Link to="/projects" className="mt-32 ml-5p">
                            <button className="customButton text-white bg-mobile border-mobileDark text-base">
                                <img src={images.IC_VIEW_ALL_WHITE}></img> &nbsp; View All
                            </button>
                        </Link>
                        <div className="px-8p flex justify-between">
                            <div className="smd:w-6/12 py-10 break-normal">
                                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="63" height="63" rx="11.25" fill="#2D3F62" />
                                    <path d="M42.2077 19.6875H20.2594C18.7036 19.6875 17.4375 20.9533 17.4375 22.5094V31.2887C17.4375 32.8449 18.7036 34.1106 20.2594 34.1106H23.0813V38.1868V40.068V41.9493C23.0813 42.8138 23.7846 43.517 24.6491 43.517H37.818C38.6825 43.517 39.3858 42.8138 39.3858 41.9493V40.068V38.1868V34.1106H42.2077C43.7635 34.1106 45.0296 32.8449 45.0296 31.2887V22.5094C45.0296 20.9533 43.7635 19.6875 42.2077 19.6875ZM39.3858 25.9584H40.0129V27.8397H39.3858V25.9584ZM38.1316 38.1868C38.1316 38.3567 37.988 38.5003 37.818 38.5003H24.6491C24.4791 38.5003 24.3355 38.3567 24.3355 38.1868V25.9584H38.1316V38.1868ZM24.3355 39.7228C24.4368 39.7435 24.5418 39.7545 24.6491 39.7545H37.818C37.9253 39.7545 38.0303 39.7435 38.1316 39.7228V40.068C38.1316 40.238 37.988 40.3816 37.818 40.3816H24.6491C24.4791 40.3816 24.3355 40.238 24.3355 40.068V39.7228ZM23.0813 27.8397H22.4542V25.9584H23.0813V27.8397ZM37.818 42.2629H24.6491C24.4791 42.2629 24.3355 42.1193 24.3355 41.9493V41.6041C24.4368 41.6248 24.5418 41.6358 24.6491 41.6358H37.818C37.9253 41.6358 38.0303 41.6248 38.1316 41.6041V41.9493C38.1316 42.1193 37.988 42.2629 37.818 42.2629ZM43.7754 31.2887C43.7754 32.1532 43.0721 32.8565 42.2077 32.8565H39.3858V29.0939H41.267V24.7042H21.2001V29.0939H23.0813V32.8565H20.2594C19.395 32.8565 18.6917 32.1532 18.6917 31.2887V22.5094C18.6917 21.645 19.395 20.9417 20.2594 20.9417H42.2077C43.0721 20.9417 43.7754 21.645 43.7754 22.5094V31.2887ZM27.9143 32.0456L27.0276 31.1589L31.2336 26.953L35.4395 31.1589L34.5528 32.0456L31.8606 29.3535V37.2461H30.6065V29.3535L27.9143 32.0456Z" fill="#7ECCFC" />
                                </svg>
                                <p className="text-25p mt-10">Mobile Deposit Application Design</p>
                                <p className="mt-4">Mobile Deposit is a fintech application innovation idea similar to the function as Deposit Machine at some banks today.</p>
                                <p className="mt-4">Mobile Deposit helps user to deposit money into their bank account at their own comfort without visiting the bank.</p>
                                <p className="mt-4">Mobile Application helps to manage and pay bills on the go.</p>
                                <p className="text-25p mt-6">Problem Statement</p>
                                <p className="mt-4">Over 80 million Nigerians still flooded the bank daily to carry out one transaction or the other, statistically 50 millions Nigeria perform deposit transaction daily, there by banking hall get flooded with longer queue.</p>
                                <p className="mt-4 mb-10">This application is still a work in progress, much of the research and details can not be put on public, until project is finish and shipped.</p>
                            </div>
                            <div className="hidden smd:block w-4/12 relative">
                                <img className="absolute right-0 top-0" src={images.IMAGE_MOBILE1} style={{ top: "10%", right: "10%" }}></img>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 px-5p flex flex-col text-black">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <p className="text-3xl mt-8">Colors & Typography</p>
                        <div className="flex flex-wrap justify-around mt-10">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-sm text-white" color="#222F49" />
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-sm " color="#F0F0F0" />
                                </div>
                                <div className="flex flex-col">
                                    <ColorPanel className="boxshadow mr-6 mb-6 mt-8 w-150 h-150 rounded-2xl text-sm " color="#7ECCFC" />
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-sm " color="#FFFFFF" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-40">Aa</p>
                                <p className="text-40 text-mobile">Inter</p>
                                <p className="text-20p">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                <p className="text-20p">abcdefghijklmnopqrstuvwxyz</p>
                                <p className="text-20p text-mobile">0123456789</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10">
                            <p className="text-3xl text-mobile">Everyday Mobile Deposit Application</p>
                            <p className="text-base text-gray-700 mt-5">Designed to bring conveniency into user and banking system together.</p>
                            <p className="text-base text-gray-700">Allowing it’s users to make deposit into bank account at the comfort of their</p>
                            <p className="text-base text-gray-700">own without getting to the bank. Pay bills at the comfort of their home.</p>
                        </div>
                    </div>
                    <img className="w-full" src={images.IMAGE_MOBILE2}></img>
                    <div className="px-8p">
                        <p className="text-mobile text-3xl mt-5">Design Solution</p>
                        <p className="text-base text-gray-700 mt-5">High Fidelity Screen Design</p>
                    </div>
                    <div className="px-5p mb-20 flex flex-wrap">
                        <div className="w-3/12">
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE1}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE5}></img>
                        </div>
                        <div className="mt-160 w-3/12">
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE2}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE6}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE9}></img>
                        </div>
                        <div className="mt-320 w-3/12">
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE3}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE7}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE10}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE12}></img>
                        </div>
                        <div className="mt-160 w-3/12">
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE4}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE8}></img>
                            <img className="w-full p-4" src={images.IMAGE_MOBILE_PAGE11}></img>
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
                <div className="bg-white flex flex-col text-base text-white">
                    <div className="bg-mobile flex flex-col">
                        <Link to="/projects" className="mt-24 ml-5p">
                            <button className="customButton text-white bg-mobile border-mobileDark text-sm">
                                <img src={images.IC_VIEW_ALL_WHITE}></img> &nbsp; View All
                            </button>
                        </Link>
                        <div className="px-5p mt-5 text-xs">
                            <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="63" height="63" rx="11.25" fill="#2D3F62" />
                                <path d="M42.2077 19.6875H20.2594C18.7036 19.6875 17.4375 20.9533 17.4375 22.5094V31.2887C17.4375 32.8449 18.7036 34.1106 20.2594 34.1106H23.0813V38.1868V40.068V41.9493C23.0813 42.8138 23.7846 43.517 24.6491 43.517H37.818C38.6825 43.517 39.3858 42.8138 39.3858 41.9493V40.068V38.1868V34.1106H42.2077C43.7635 34.1106 45.0296 32.8449 45.0296 31.2887V22.5094C45.0296 20.9533 43.7635 19.6875 42.2077 19.6875ZM39.3858 25.9584H40.0129V27.8397H39.3858V25.9584ZM38.1316 38.1868C38.1316 38.3567 37.988 38.5003 37.818 38.5003H24.6491C24.4791 38.5003 24.3355 38.3567 24.3355 38.1868V25.9584H38.1316V38.1868ZM24.3355 39.7228C24.4368 39.7435 24.5418 39.7545 24.6491 39.7545H37.818C37.9253 39.7545 38.0303 39.7435 38.1316 39.7228V40.068C38.1316 40.238 37.988 40.3816 37.818 40.3816H24.6491C24.4791 40.3816 24.3355 40.238 24.3355 40.068V39.7228ZM23.0813 27.8397H22.4542V25.9584H23.0813V27.8397ZM37.818 42.2629H24.6491C24.4791 42.2629 24.3355 42.1193 24.3355 41.9493V41.6041C24.4368 41.6248 24.5418 41.6358 24.6491 41.6358H37.818C37.9253 41.6358 38.0303 41.6248 38.1316 41.6041V41.9493C38.1316 42.1193 37.988 42.2629 37.818 42.2629ZM43.7754 31.2887C43.7754 32.1532 43.0721 32.8565 42.2077 32.8565H39.3858V29.0939H41.267V24.7042H21.2001V29.0939H23.0813V32.8565H20.2594C19.395 32.8565 18.6917 32.1532 18.6917 31.2887V22.5094C18.6917 21.645 19.395 20.9417 20.2594 20.9417H42.2077C43.0721 20.9417 43.7754 21.645 43.7754 22.5094V31.2887ZM27.9143 32.0456L27.0276 31.1589L31.2336 26.953L35.4395 31.1589L34.5528 32.0456L31.8606 29.3535V37.2461H30.6065V29.3535L27.9143 32.0456Z" fill="#7ECCFC" />
                            </svg>
                            <p className="text-sm mt-5">Mobile Deposit Application Design</p>
                            <p className="mt-2">Mobile Deposit is a fintech application innovation idea similar to the function as Deposit Machine at some banks today.</p>
                            <p className="mt-2">Mobile Deposit helps user to deposit money into their bank account at their own comfort without visiting the bank.</p>
                            <p className="mt-2">Mobile Application helps to manage and pay bills on the go.</p>
                            <p className="text-sm mt-5">Problem Statement</p>
                            <p className="mt-2">Over 80 million Nigerians still flooded the bank daily to carry out one transaction or the other, statistically 50 millions Nigeria perform deposit transaction daily, there by banking hall get flooded with longer queue.</p>
                            <p className="mt-2 mb-5">This application is still a work in progress, much of the research and details can not be put on public, until project is finish and shipped.</p>
                        </div>
                        <div className="px-5">
                            <img className="object-scale-down" src={images.IMAGE_MOBILE1}></img>
                        </div>
                    </div>
                    <div className="pt-6 px-5p flex flex-col items-center text-black text-center">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <p className="text-2xl mt-5">Colors</p>
                        <div className="flex justify-between mt-3">
                            <div className="flex flex-col">
                                <ColorPanel className="boxshadow mr-2 mb-6 w-90 h-90 rounded-2xl text-xs text-white" color="#222F49" />
                                <ColorPanel className="boxshadow mr-2 mb-6 w-90 h-90 rounded-2xl text-xs " color="#F0F0F0" />
                            </div>
                            <div className="flex flex-col">
                                <ColorPanel className="boxshadow mr-2 mb-6 mt-8 w-90 h-90 rounded-2xl text-xs " color="#7ECCFC" />
                                <ColorPanel className="boxshadow mr-2 mb-6 w-90 h-90 rounded-2xl text-xs " color="#FFFFFF" />
                            </div>
                        </div>
                        <p className="text-2xl my-5">Typograhpy</p>
                        <p className="text-3xl">Aa</p>
                        <p className="text-3xl text-mobile">Inter</p>
                        <p className="text-sm">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p className="text-sm">abcdefghijklmnopqrstuvwxyz</p>
                        <p className="text-sm text-mobile">0123456789</p>

                        <div className="px-4">
                            <p className="text-xl text-mobile mt-8 mb-3">Everyday Mobile Deposit Application</p>
                            <p className="text-base text-gray-700">Designed to bring conveniency into user and banking system together.
Allowing it’s users to make deposit into bank account at the comfort of their own without getting to the bank. Pay bills at the comfort of their home.</p>
                        </div>
                    </div>
                    <img className="w-full" src={images.IMAGE_MOBILE2}></img>
                    <div className="pt-6 px-5p flex flex-col items-center text-black text-center">

                        <p className="text-mobile text-xl mt-5">Design Solution</p>
                        <p className="text-sm text-gray-700 mt-2">High Fidelity Screen Design</p>
                        <div className="px-2 mb-10 flex flex-wrap">
                            <div className="w-3/12">
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE1}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE5}></img>
                            </div>
                            <div className="mt-10 w-3/12">
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE2}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE6}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE9}></img>
                            </div>
                            <div className="mt-20 w-3/12">
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE3}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE7}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE10}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE12}></img>
                            </div>
                            <div className="mt-10 w-3/12">
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE4}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE8}></img>
                                <img className="w-full p-1" src={images.IMAGE_MOBILE_PAGE11}></img>
                            </div>
                        </div>
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

export default Mobile;