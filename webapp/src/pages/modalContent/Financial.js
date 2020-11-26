import React from "react"
import images from '../../constants/images'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ColorPanel from "../../components/colorPanel";

const Financial = () => {
    return (
        <div className="bg-white m-12 mx-10p flex flex-col text-base text-white">
            <div className="bg-financial flex z-10">
                <div className="p-10 text-white w-6/12 break-normal">
                    <p className="text-25p mt-10p">Aides FInancial Advisor Web Application Design</p>
                    <p className="mt-8">Aides is a fintech web application that helps users to plan and manage their financies, daily income, daily spending and create budget for their daily financial transactions.</p>
                    <p className="text-xl mt-6">Problem Statement</p>
                    <p className="mt-8">By statistical data from survey shows that about 6 of 10 people don’t create budgets to track their spending transactions. 58% of those who create budgets do so manually using pen and paper, Others who create budgets do so with spreadsheet packages and budgeting apps. Using these current means to track expenses have proven to be quite stressful and difficult to manage.
                    </p>
                    <p className="mt-8 mb-10">These prompted for the need to create a web application so user can Plan and manage their finances in a very intuitive and simple way.</p>
                    <div className="flex">
                        <div className="text-black border-b-2 p-2 border-black items-center flex">
                            Lunch Project &nbsp;
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.7101 12.7099L11.7101 7.70994C11.8011 7.61484 11.8725 7.50269 11.9201 7.37994C12.0201 7.13648 12.0201 6.8634 11.9201 6.61994C11.8725 6.49719 11.8011 6.38505 11.7101 6.28994L6.7101 1.28994C6.61687 1.1967 6.50618 1.12274 6.38435 1.07228C6.26253 1.02182 6.13196 0.995849 6.0001 0.995849C5.7338 0.995849 5.47841 1.10164 5.2901 1.28994C5.1018 1.47824 4.99601 1.73364 4.99601 1.99994C4.99601 2.26624 5.1018 2.52164 5.2901 2.70994L8.5901 5.99994L1.0001 5.99994C0.734887 5.99994 0.480532 6.1053 0.292996 6.29283C0.10546 6.48037 0.0001037 6.73472 0.000103688 6.99994C0.000103676 7.26516 0.10546 7.51951 0.292996 7.70705C0.480532 7.89458 0.734887 7.99994 1.0001 7.99994L8.5901 7.99994L5.2901 11.2899C5.19637 11.3829 5.12198 11.4935 5.07121 11.6154C5.02044 11.7372 4.9943 11.8679 4.9943 11.9999C4.9943 12.132 5.02044 12.2627 5.07121 12.3845C5.12198 12.5064 5.19637 12.617 5.2901 12.7099C5.38307 12.8037 5.49367 12.8781 5.61553 12.9288C5.73739 12.9796 5.86809 13.0057 6.0001 13.0057C6.13211 13.0057 6.26282 12.9796 6.38468 12.9288C6.50654 12.8781 6.61714 12.8037 6.7101 12.7099Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="relative w-6/12">
                    <img className="absolute right-0 bottom-0 h-full object-right-bottom object-scale-down" src={images.IMAGE_FINANCIAL1}></img>
                </div>
            </div>
            <div className="p-10 flex justify-between items-center text-black">
                <div className="flex flex-col justify-center">
                    <p className="text-gray-600 text-sm">Process</p>
                    <p className="text-3xl">Work process</p>
                    <p className="text-gray-600 text-base mt-3 w-8/12">The work process include collection of data from the survay conducted, problem identification, UI wireframe, Visual Design and userbility testing.</p>
                </div>
                <img src={ images.IMAGE_FINANCIAL_PALETTE}></img>
            </div>
            <div className="px-15p flex flex-col text-black">
                <p className="text-gray-600 text-sm">Style Guide</p>
                <p className="text-3xl">Colors & Typography</p>
                <p className="text-gray-600 text-base mt-3 w-8/12">Using Purple as the primary color from the brand with medium gray and white to keep the application simple and clean, this gives the applicatioin sooting looks and feel. </p>
                <div className="flex mt-10">
                    <div className="flex smd:w-6/12">
                        <div className="flex flex-col">
                            <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl text-white" color="#8A55C5" />
                            <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl " color="#FFFFFF" />
                        </div>
                        <div className="flex flex-col">
                            <ColorPanel className="boxshadow mr-6 mb-6 mt-8 w-150 h-150 rounded-2xl text-xl " color="#F6F6F6" />
                            <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl " color="#7B7B7B" />
                        </div>
                    </div>
                    <div className="flex flex-col pl-20 smd:w-6/12 text-base text-gray-700">
                        <p className="text-6xl font-poppins">Heading 1</p>
                        <p className="mt-1">Poppins - Medium 60px | Line Height: 130%</p>
                        <p className="text-3xl mt-3 font-poppins">Heading 2</p>
                        <p className="mt-1">Poppins - Regular 30px | Line Height: 36px</p>
                        <p className="text-2xl mt-3 font-poppins">Body</p>
                        <p className="mt-1">Poppins - Regular 16px | Line Height: Auto</p>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    <p className="text-3xl">Design Solution</p>
                    <p className="text-xl text-lightBlack">High Fidelity Screen Design</p>
                </div>
                <img className="w-full boxshadow my-10" src={ images.IMAGE_FINANCIAL_SOLUTION1}></img>
                <p className="text-3xl mb-6">Login Page</p>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION2}></img>
                <p className="text-3xl mb-6">Sign up</p>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION3}></img>
                <p className="text-3xl mb-6 flex justify-center">Dashboard</p>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION4}></img>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION5}></img>
                <p className="text-3xl mb-6 flex justify-center">User Profile</p>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION6}></img>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION7}></img>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION8}></img>
                <img className="w-full boxshadow mb-10" src={ images.IMAGE_FINANCIAL_SOLUTION9}></img>
            </div>
        </div>
    );
}

export default Financial;