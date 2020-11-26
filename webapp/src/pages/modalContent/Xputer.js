import React from "react"
import images from '../../constants/images'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ColorPanel from "../../components/colorPanel";

const Xputer = () => {
    return (
        <div className="bg-white m-12 mx-10p flex flex-col text-base ">
            <div className="bg-xputer flex text-black">
                <div className="w-6/12 p-10  break-normal">
                    <p className="text-25p mt-32">Xputer Web Page Redesign</p>
                    <p className="mt-8">Xputer is a software solution cooperate company with Innovation. Excellence. Impact. Empowering businesses and organizations with cutting-edge, world-class solutions.</p>
                    <p className="text-xl mt-6">Problem Statement</p>
                    <p className="mt-8 mb-10">Redesign the current Xputer Website to a new modern and vibrant cooperate website.</p>
                    <div className="flex">
                        <div className="text-black border-b-2 p-2 border-black items-center flex">
                            Lunch Project &nbsp;
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.7101 12.7099L11.7101 7.70994C11.8011 7.61484 11.8725 7.50269 11.9201 7.37994C12.0201 7.13648 12.0201 6.8634 11.9201 6.61994C11.8725 6.49719 11.8011 6.38505 11.7101 6.28994L6.7101 1.28994C6.61687 1.1967 6.50618 1.12274 6.38435 1.07228C6.26253 1.02182 6.13196 0.995849 6.0001 0.995849C5.7338 0.995849 5.47841 1.10164 5.2901 1.28994C5.1018 1.47824 4.99601 1.73364 4.99601 1.99994C4.99601 2.26624 5.1018 2.52164 5.2901 2.70994L8.5901 5.99994L1.0001 5.99994C0.734887 5.99994 0.480532 6.1053 0.292996 6.29283C0.10546 6.48037 0.0001037 6.73472 0.000103688 6.99994C0.000103676 7.26516 0.10546 7.51951 0.292996 7.70705C0.480532 7.89458 0.734887 7.99994 1.0001 7.99994L8.5901 7.99994L5.2901 11.2899C5.19637 11.3829 5.12198 11.4935 5.07121 11.6154C5.02044 11.7372 4.9943 11.8679 4.9943 11.9999C4.9943 12.132 5.02044 12.2627 5.07121 12.3845C5.12198 12.5064 5.19637 12.617 5.2901 12.7099C5.38307 12.8037 5.49367 12.8781 5.61553 12.9288C5.73739 12.9796 5.86809 13.0057 6.0001 13.0057C6.13211 13.0057 6.26282 12.9796 6.38468 12.9288C6.50654 12.8781 6.61714 12.8037 6.7101 12.7099Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-6/12 relative">
                    <img className="absolute right-0 bottom-0 h-full object-right-bottom object-scale-down" src={images.IMAGE_XPUTER1}></img>
                </div>
            </div>
            <div className="p-20 pt-6 flex flex-col text-black">
                <p className="text-gray-600 text-sm">Style Guide</p>
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col pr-10">
                        <p className="text-3xl mt-8">Colors</p>
                        <div className="mt-10 flex">
                            <ColorPanel className="mr-6 w-150 h-150 rounded-2xl boxshadow text-xl text-white" color="#04AADC" />
                            <ColorPanel className="mr-6 w-150 h-150 rounded-2xl boxshadow text-xl text-white" color="#3E4097" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-3xl mt-8">Typography</p>
                        <div className="flex mt-8 text-616161">
                            <div className="flex flex-col">
                                <p className="text-6xl font-poppins">Heading 1</p>
                                <p className="mt-2">Poppins - Semi-Bold 64px | Line Height 44px</p>
                                <p className="text-3xl mt-5 font-poppins">Heading 2</p>
                                <p className="mt-3">Poppins - Medium 30px | Line Height 44px</p>
                            </div>
                            <div className="flex flex-col justify-end min-h-full">
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
                ].map((page) => (
                    <div className="flex flex-col mt-10">
                        <p className="text-3xl mb-5">{page.pageName}</p>
                        <img className="w-full boxshadow" src={page.src}></img>
                    </div>
                ))}
                <div className="h-32"></div>
            </div>
        </div>
    );
}

export default Xputer;