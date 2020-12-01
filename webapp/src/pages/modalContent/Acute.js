import React from "react"
import images from '../../constants/images'
import { BrowserView, MobileView, IsMobile } from '../../components/deviceDetect';
import ColorPanel from "../../components/colorPanel";

const Acute = () => {
    return (
        <div>
            <BrowserView>
                <div className="bg-white m-12 mx-10p flex flex-col text-base text-white">
                    <div className="bg-acute flex">
                        <div className="p-10 text-white w-full smd:w-6/12 break-normal">
                            <p className="text-25p mt-32">Acute Invoice Mobile Application Design</p>
                            <p className="mt-8">AcuteInvoice is an invoice web application that lets you stay organized, keep track of your payment, record your expenses and monitor the performance of your business anytime, anywhere .</p>
                            <p className="text-25p mt-6">Problem Statement</p>
                            <p className="mt-8">AcuteInvoice as a business account and invoice software wants to make it painless for targetted business audience on the go to be able to manage their invoicing and accounting software while on the go.</p>
                            <p className="mt-8 mb-10">These prompt for the need to have a mobile application to manage and create invoice on the go for business owners.</p>
                        </div>
                        <div className="hidden smd:block w-6/12 relative">
                            <img className="absolute" src={images.IMAGE_ACUTE1} style={{ top: "10%", right: "10%" }}></img>
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
            </BrowserView>
            <MobileView>
                <div className="bg-white flex flex-col text-xs text-white">
                    <div className="bg-acute flex flex-col items-center">
                        <div className="p-3 mt-20">
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
            </MobileView>
        </div>
    );
}

export default Acute;