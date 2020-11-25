import React from "react"
import images from '../../constants/images'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ColorPanel from "../../components/colorPanel";

const Acute = () => {
    return (
        <div className="bg-white m-12 mx-10p flex flex-col text-base text-white">
            <div className="bg-acute flex">
                <div className="w-6/12 p-10  break-normal">
                    <p className="text-25p mt-32">Acute Invoice Mobile Application Design</p>
                    <p className="mt-8">AcuteInvoice is an invoice web application that lets you stay organized, keep track of your payment, record your expenses and monitor the performance of your business anytime, anywhere .</p>
                    <p className="text-25p mt-6">Problem Statement</p>
                    <p className="mt-8">AcuteInvoice as a business account and invoice software wants to make it painless for targetted business audience on the go to be able to manage their invoicing and accounting software while on the go.</p>
                    <p className="mt-8 mb-10">These prompt for the need to have a mobile application to manage and create invoice on the go for business owners.</p>
                </div>
                <div className="w-6/12 relative">
                    <img className="absolute" src={images.IMAGE_ACUTE1} style={{ top:"10%", right:"10%"}}></img>
                </div>
            </div>
            <div className="p-10 pt-6 flex flex-col text-black">
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
                        <div className="flex mt-8">
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
                ].map((page) => (
                    <div className="flex flex-col items-center mt-10">
                        <p className="text-3xl">{page.pageName}</p>
                        <img src={page.src}></img>
                    </div>
                ))}
            </div>
            <img className="w-full" src={images.IMAGE_ACUTE5}></img>
        </div>
    );
}

export default Acute;