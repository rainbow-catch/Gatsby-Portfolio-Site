import React from "react"
import images from '../../constants/images'
import { BrowserView, MobileView, IsMobile } from '../../components/deviceDetect';
import ColorPanel from "../../components/colorPanel";
import { Link } from "gatsby";

const Estate = () => {
    return (
        <div>
            <BrowserView>
                <div className="bg-white m-12 mx-10p flex flex-col text-base text-black">
                    <div className="bg-estate flex z-10">
                        <div className="p-10 text-white smd:w-6/12 break-normal">
                            <p className="text-25p mt-10p">Smart Manager Estate Management Portal Design</p>
                            <p className="mt-8">Smart manager is an estate management web portal for managing Estate Properties, Raising Maintenance Requests, Making Payments of Property Dues, Maintaining Accounts History to Managing Tenants' Data, and Home Owner Apartment Management.</p>
                            <p className="text-xl mt-6">Problem Statement</p>
                            <p className="mt-8">Managing estate properties maintain all Property and Tenancy related Documents, Apartment maintenance request and track of record for all dues by tenants can be a task for Home Owners.</p>
                            <p className="mt-8 mb-10">These prompted for the need to design a Smart Estate manager that incoporate payment gate, manage multi Home Owner properties and Tenant related documents and maintenance request raised. Which has User Module and Admin Module.</p>
                            <div className="flex">
                                <Link to="#" target="_blank">
                                    <div className="text-white border-b-2 p-2 border-white items-center flex">
                                        Launch Project &nbsp;
                                    <img src={images.IC_ARROW_WHITE}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden smd:block relative w-6/12">
                            <img className="absolute right-0 bottom-0 h-full object-right-bottom object-scale-down" src={images.IMAGE_ESTATE1}></img>
                        </div>
                    </div>
                    <div className="p-10 flex justify-between items-center text-black">
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-600 text-sm">Process</p>
                            <p className="text-3xl">Work process</p>
                            <p className="text-gray-600 text-base mt-3 w-8/12">The work process include understanding clients requirments, UI wireframe, Visual Design and testing.</p>
                        </div>
                        <img src={images.IMAGE_ESTATE_PALETTE}></img>
                    </div>
                    <div className="px-15p flex flex-col text-black">
                        <p className="text-gray-600 text-sm">Style Guide</p>
                        <p className="text-3xl">Colors & Typography</p>
                        <p className="text-gray-600 text-base mt-3 w-8/12">Brand color is simply Yellow and Mid-deep Gray, introducing secondary color Deep Blue to compliment the application to pop.</p>
                        <div className="flex flex-wrap justify-between mt-10">
                            <div className="flex">
                                <div className="flex flex-col">
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl text-white" color="#EFA243" />
                                    <ColorPanel className="boxshadow mr-6 mb-6 w-150 h-150 rounded-2xl text-xl text-white" color="#173768" />
                                </div>
                                <div className="flex flex-col">
                                    <ColorPanel className="boxshadow mr-6 mb-6 mt-8 w-150 h-150 rounded-2xl text-xl " color="#A0A1A5" />
                                </div>
                            </div>
                            <div className="flex flex-col text-base text-616161 font-proxima">
                                <p className="text-4xl">Aa</p>
                                <p className="text-3xl mt-3">Proxima Nova</p>
                                <p className="mt-1">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                                <p className="mt-1">abcdefghijklmnopqrstuvwxyz</p>
                                <p className="mt-1">0123456789</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-10">
                            <p className="text-3xl">Design Solution</p>
                            <p className="text-xl text-lightBlack">High Fidelity Screen Design</p>
                        </div>
                    </div>
                    <div className="m-10 text-sm">
                        <div className="flex">
                            <div className="flex flex-col mt-10 px-5" style={{ maxWidth: "400px" }}>
                                <p className="text-2xl">Dashboard</p>
                                <p>When Logged In, users access to basic informations and apartment information.</p>
                            </div>
                            <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE1}></img>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col w-1/2 pr-5">
                                <div className="flex flex-col mt-10 p-10 bg-gray-200" style={{ maxWidth: "400px" }}>
                                    <p className="text-2xl">Payment History</p>
                                    <p>keeping track of payment history, upcoming payments and unpaid dues in the estate.</p>
                                </div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE2}></img>
                            </div>
                            <div className="flex flex-col w-1/2 mt-32">
                                <div className="flex flex-col mt-10 p-10 bg-gray-200" style={{ maxWidth: "400px" }}>
                                    <p className="text-2xl">Utilities</p>
                                    <p>Access to purchase/Top up Electricity on user module</p>
                                </div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE3}></img>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center w-1/2 pr-5">
                                <div className="my-10 p-2 bg-pink-200 rounded-lg">Top Electricity</div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE4}></img>
                            </div>
                            <div className="flex flex-col items-center w-1/2 mt-32">
                                <div className="my-10 p-2 bg-pink-200 rounded-lg">Top Up using Wallet or Input Card Details</div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE5}></img>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center w-1/2 pr-5">
                                <div className="my-10 p-2 bg-pink-200 rounded-lg">Successful Payment Confirmation</div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE6}></img>
                            </div>
                            <div className="flex flex-col w-1/2 mt-32">
                                <div className="flex flex-col mt-10 p-10 bg-gray-200" style={{ maxWidth: "400px" }}>
                                    <p className="text-2xl">Visitors Gate Pass</p>
                                    <p>Access to generate visitors gate pass before visit and keeping track of visitation</p>
                                </div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE7}></img>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col items-center w-1/2 pr-5">
                                <div className="my-10 p-2 bg-pink-200 rounded-lg">Generate Visitors Gate pass</div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE8}></img>
                            </div>
                            <div className="flex flex-col items-center w-1/2 mt-32">
                                <div className="my-10 p-2 bg-pink-200 rounded-lg">Gate pass success confirmation</div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE9}></img>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col w-1/2 pr-5 items-end">
                                <div className="flex flex-col mt-10 p-10 bg-gray-200" style={{ maxWidth: "400px" }}>
                                    <p className="text-2xl">Help/Complain Board</p>
                                    <p>Access to to create a complain ticket and keep track of service request by the estate management.</p>
                                </div>
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE10}></img>
                            </div>
                            <div className="flex flex-col w-1/2 mt-64">
                                <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE11}></img>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col my-10 px-5" style={{ maxWidth: "400px" }}>
                                <p className="text-2xl">Admin Module</p>
                                <p>Tasks and administrative roles were fully designed</p>
                            </div>
                            <img className="w-full" src={images.IMAGE_ESTATE_PAGE12}></img>
                        </div>

                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="bg-white flex flex-col text-sm text-black">
                    <div className="bg-estate flex flex-col">
                        <div className="p-3 text-white text-xs break-normal mt-20">
                            <p className="text-sm">Smart Manager Estate Management Portal Design</p>
                            <p className="mt-3">Smart manager is an estate management web portal for managing Estate Properties, Raising Maintenance Requests, Making Payments of Property Dues, Maintaining Accounts History to Managing Tenants' Data, and Home Owner Apartment Management.</p>
                            <p className="text-sm mt-2">Problem Statement</p>
                            <p className="mt-3">Managing estate properties maintain all Property and Tenancy related Documents, Apartment maintenance request and track of record for all dues by tenants can be a task for Home Owners.</p>
                            <p className="mt-3 mb-4">These prompted for the need to design a Smart Estate manager that incoporate payment gate, manage multi Home Owner properties and Tenant related documents and maintenance request raised. Which has User Module and Admin Module.</p>
                            <div className="flex">
                                <Link target="_blank" to="/about" >
                                    <div className="text-white text-sm border-b-2 p-2 border-white items-center flex">
                                        Launch Project &nbsp;
                                    <img src={images.IC_ARROW_WHITE}></img>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="px-5">
                            <img className="object-scale-down" src={images.IMAGE_ESTATE_PAGE11}></img>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center text-black text-center">
                        <p className="text-gray-600 text-xs">Process</p>
                        <p className="text-xl">Work process</p>
                        <p className="text-gray-600 text-sm mt-3">The work process include understanding clients requirments, UI wireframe, Visual Design and testing.</p>
                        <img src={images.IMAGE_ESTATE_PALETTE}></img>

                        <p className="text-gray-600 text-xs">Style Guide</p>
                        <p className="text-xl">Colors</p>
                        <p className="text-gray-600 text-sm mt-3">Brand color is simply Yellow and Mid-deep Gray, introducing secondary color Deep Blue to compliment the application to pop.</p>
                        <div className="flex">
                            <div className="flex flex-col">
                                <ColorPanel className="boxshadow mr-6 mb-6 w-90 h-90 rounded-2xl text-sm text-white" color="#EFA243" />
                                <ColorPanel className="boxshadow mr-6 mb-6 w-90 h-90 rounded-2xl text-sm text-white" color="#173768" />
                            </div>
                            <div className="flex flex-col">
                                <ColorPanel className="boxshadow mr-6 mb-6 mt-3 w-90 h-90 rounded-2xl text-sm " color="#A0A1A5" />
                            </div>
                        </div>
                        <p className="text-xl">Typography</p>
                        <div className="flex flex-col text-sm text-616161 font-proxima">
                            <p className="text-3xl">Aa</p>
                            <p className="text-xl mt-3">Proxima Nova</p>
                            <p className="mt-1">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                            <p className="mt-1">abcdefghijklmnopqrstuvwxyz</p>
                            <p className="mt-1">0123456789</p>
                        </div>
                        <div className="flex flex-col items-center mt-4">
                            <p className="text-xl">Design Solution</p>
                            <p className="text-sm text-lightBlack">High Fidelity Screen Design</p>
                        </div>

                        <div className="my-5 p-2">
                            <p className="text-2xl">Dashboard</p>
                            <p>When Logged In, users access to basic informations and apartment information.</p>
                        </div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE1}></img>

                        <div className="my-5 p-2">
                            <p className="text-2xl">Payment History</p>
                            <p>keeping track of payment history, upcoming payments and unpaid dues in the estate.</p>
                        </div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE2}></img>

                        <div className="my-5 p-2">
                            <p className="text-2xl">Utilities</p>
                            <p>Access to purchase/Top up Electricity on user module</p>
                        </div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE3}></img>

                        <div className="my-5 p-2 bg-pink-200 rounded-lg">Top Electricity</div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE4}></img>

                        <div className="my-5 p-2 bg-pink-200 rounded-lg">Top Up using Wallet or Input Card Details</div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE5}></img>

                        <div className="my-5 p-2 bg-pink-200 rounded-lg">Successful Payment Confirmation</div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE6}></img>

                        <div className="my-5 p-2">
                            <p className="text-2xl">Visitors Gate Pass</p>
                            <p>Access to generate visitors gate pass before visit and keeping track of visitation</p>
                        </div>

                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE7}></img>


                        <div className="my-5 p-2 bg-pink-200 rounded-lg">Generate Visitors Gate pass</div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE8}></img>

                        <div className="my-5 p-2 bg-pink-200 rounded-lg">Gate pass success confirmation</div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE9}></img>

                        <div className="my-5 p-2">
                            <p className="text-2xl">Help/Complain Board</p>
                            <p>Access to to create a complain ticket and keep track of service request by the estate management.</p>
                        </div>
                        <img className="boxshadow w-full" src={images.IMAGE_ESTATE_PAGE11}></img>

                        <div className="my-5 p-2">
                            <p className="text-2xl">Admin Module</p>
                            <p>Tasks and administrative roles were fully designed</p>
                        </div>
                        <img className="w-full" src={images.IMAGE_ESTATE_PAGE12}></img>
                    </div>
                </div>
            </MobileView>
        </div >
    );
}

export default Estate;