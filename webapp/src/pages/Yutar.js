import React from "react"
import images from '../constants/images'
import { BrowserView, MobileView, IsMobile } from '../components/deviceDetect';
import ColorPanel from "../components/colorPanel";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Yutar = () => {
    return (
        <Layout>
            <SEO title="Case-Yutar"></SEO>
            <BrowserView>
                <div className="bg-white flex flex-col text-base text-white">
                    <div className="bg-yutar relative">
                        <div className="p-10 text-gray-900 w-6/12 break-normal z-50">
                            <p className="text-25p mt-10p">Yutars for Lenders Web Application Design</p>
                            <p className="mt-8">A platform used by lenders to check if a borrower is already overleveraged (and whose account is already negative) and recent inquiries by other lenders.</p>
                            <p className="text-xl mt-6">Problem Statement</p>
                            <p className="mt-8">Over 3,000 federal public sector borrowers are indebted to at least five different lenders simultaneously, thereby becoming difficult for borrowers to pay back debts because of insufficient income, leaving lenders to cope with huge losses.</p>
                            <p className="mt-8 mb-10">These prompted the need to have a data collection web application that helps lenders to have access to borrowers infomations to checkmate overleverage borrowers.</p>
                            <div className="flex">
                                <Link to="#" target="_blank">
                                    <div className="text-black border-b-2 p-2 border-black items-center flex">
                                        Launch Project &nbsp;
                                        <img src={images.IC_ARROW}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <img className="absolute right-0 bottom-0 h-full" style={{ maxWidth: "50%" }} src={images.IMAGE_YUTAR1}></img>
                    </div>
                    <div className="p-10 pt-6 flex flex-col text-black">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <p className="text-3xl mt-8">Colors & Typography</p>
                        <div className="mt-6 flex">
                            <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm text-white" color="#0364FF" />
                            <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm" color="#F3F6FA" />
                            <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm" color="#FFFFFF" />
                            <ColorPanel className="boxshadow mr-8 mb-8 w-150 h-150 rounded-2xl text-sm text-white" color="#000000" />
                        </div>
                        <p className="text-3xl mt-8">Typography</p>
                        <div className="flex mt-8 text-616161 flex-wrap justify-around text-base">
                            <div className="flex flex-col px-10">
                                <p className="text-4xl">Heading 1</p>
                                <p className="mt-4">Inter - Bold 36px | Line Height 44px</p>
                                <p className="text-3xl mt-8">Heading 2</p>
                                <p className="mt-4">Inter - Semi-Bold 30px | Line Height 36px</p>
                                <p className="text-2xl mt-8">Heading 3</p>
                                <p className="mt-4">Inter - Semi-Bold 24px | Line Height 32px</p>
                            </div>
                            <div className="border-r"></div>
                            <div className="flex flex-col px-10">
                                <p className="text-4xl">Body</p>
                                <p className="mt-4">Inter - Regular 16px | Line Height 24px</p>
                            </div>
                            <div className="border-r"></div>
                            <div className="flex flex-col px-10">
                                <p className="text-4xl">Icon Pack</p>
                                <div className="flex justify-center">
                                    <p className="p-2">
                                        <img src={images.IC_PACK1}></img>
                                    </p>
                                    <p className="p-2">
                                        <img src={images.IC_PACK2}></img>
                                    </p>
                                    <p className="p-2">
                                        <img src={images.IC_PACK3}></img>
                                    </p>
                                    <p className="p-2">
                                        <img src={images.IC_PACK4}></img>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10">
                            <p className="text-3xl">Design Solution</p>
                            <p className="text-xl text-lightBlack mt-5">High Fidelity Screen Design</p>
                        </div>
                        {[
                            {
                                pageName: "Login",
                                src: images.IMAGE_YUTAR_PAGE1,
                                class: ""
                            },
                            {
                                pageName: "Sign Up",
                                src: images.IMAGE_YUTAR_PAGE2,
                                class: "flex-row-reverse"
                            },
                            {
                                pageName: "Dashboard",
                                src: images.IMAGE_YUTAR_PAGE3,
                                class: "flex-col"
                            },
                            {
                                pageName: "Yutars Landing Page",
                                src: images.IMAGE_YUTAR_PAGE4,
                                class: "flex-col"
                            },
                        ].map((page, index) => (
                            <div className={"flex items-center justify-center mt-10 " + page.class} key={index}>
                                <p className="text-3xl px-20 py-10">{page.pageName}</p>
                                <img className="boxshadow" src={page.src}></img>
                            </div>
                        ))}
                        <div className="h-32"></div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="bg-white flex flex-col text-sm text-white">
                    <div className="bg-yutar flex flex-col">
                        <div className="p-3 mt-20 text-gray-900 break-normal">
                            <p className="text-sm">Yutars for Lenders Web Application Design</p>
                            <p className="mt-2">A platform used by lenders to check if a borrower is already overleveraged (and whose account is already negative) and recent inquiries by other lenders.</p>
                            <p className="text-sm mt-3">Problem Statement</p>
                            <p className="mt-2">Over 3,000 federal public sector borrowers are indebted to at least five different lenders simultaneously, thereby becoming difficult for borrowers to pay back debts because of insufficient income, leaving lenders to cope with huge losses.</p>
                            <p className="mt-2 mb-5">These prompted the need to have a data collection web application that helps lenders to have access to borrowers infomations to checkmate overleverage borrowers.</p>
                            <div className="flex">
                                <Link to="#" target="_blank">
                                    <div className="text-black border-b-2 p-2 border-black items-center text-sm flex">
                                        Launch Project &nbsp;
                                        <img src={images.IC_ARROW}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <img className="px-5" src={images.IMAGE_YUTAR2}></img>
                    </div>
                    <div className="flex flex-col items-center text-center text-black mt-8">
                        <p className="text-gray-600 text-xs">Style Guide</p>
                        <p className="text-xl mt-3">Colors</p>
                        <div className="mt-6 flex justify-center flex-wrap">
                            <ColorPanel className="boxshadow mr-2 mb-2 w-90 h-90 rounded-2xl text-xs text-white" color="#0364FF" />
                            <ColorPanel className="boxshadow mr-2 mb-2 w-90 h-90 rounded-2xl text-xs" color="#F3F6FA" />
                        </div>
                        <div className="mt-6 flex justify-center flex-wrap">
                            <ColorPanel className="boxshadow mr-2 mb-2 w-90 h-90 rounded-2xl text-xs" color="#FFFFFF" />
                            <ColorPanel className="boxshadow mr-2 mb-2 w-90 h-90 rounded-2xl text-xs text-white" color="#000000" />
                        </div>
                        <p className="text-xl mt-5">Typography</p>
                        <div className="text-616161 text-sm text-center">
                            <p className="text-xl mt-8">Heading 1</p>
                            <p className="mt-2">Inter - Bold 36px | <br /> Line Height 44px</p>
                            <p className="text-xl mt-5">Heading 2</p>
                            <p className="mt-2">Inter - Semi-Bold 30px | <br /> Line Height 36px</p>
                            <p className="text-xl mt-5">Heading 3</p>
                            <p className="mt-2">Inter - Semi-Bold 24px | <br /> Line Height 32px</p>
                            <p className="text-xl mt-5">Body</p>
                            <p className="mt-2">Inter - Regular 16px | <br /> Line Height 24px</p>

                            <p className="text-xl mt-8">Icon Pack</p>
                            <div className="flex justify-between">
                                <p className="p-2">
                                    <img src={images.IC_PACK1}></img>
                                </p>
                                <p className="p-2">
                                    <img src={images.IC_PACK2}></img>
                                </p>
                                <p className="p-2">
                                    <img src={images.IC_PACK3}></img>
                                </p>
                                <p className="p-2">
                                    <img src={images.IC_PACK4}></img>
                                </p>
                            </div>
                        </div>
                        <p className="text-xl mt-8">Design Solution</p>
                        <p className="text-lightBlack mt-5">High Fidelity Screen Design</p>
                        {[
                            {
                                pageName: "Login",
                                src: images.IMAGE_YUTAR_PAGE1,
                            },
                            {
                                pageName: "Sign Up",
                                src: images.IMAGE_YUTAR_PAGE2,
                            },
                            {
                                pageName: "Dashboard",
                                src: images.IMAGE_YUTAR_PAGE3,
                            },
                            {
                                pageName: "Yutars Landing Page",
                                src: images.IMAGE_YUTAR_PAGE4,
                            },
                        ].map((page, index) => (
                            <div className="my-2" key={index}>
                                <p className="text-base font-bold px-5 py-2">{page.pageName}</p>
                                <img className="boxshadow w-full" src={page.src}></img>
                            </div>
                        ))}
                        <div className="h-10"></div>
                    </div>
                </div>
            </MobileView>
        </Layout>
    );
}

export default Yutar;