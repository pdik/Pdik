import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import logo from "../../assets/logo.png";
import {Link} from "@inertiajs/react";
function IndexPage() {

    function generateCopyrightText() {
        const currentYear = new Date().getFullYear();
        return `© ${currentYear} Pdik systems. All rights reserved.`;
    }

    return (
        <>
            <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
                    <div>
                        <img className="w-24" src={logo} alt="logo"/>
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Pdik systems</h1>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Kom in contact!</h2>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Over ons</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Projecten</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Prijzen</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Api koppelingen</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Hulp</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p>{generateCopyrightText()}</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full"/>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
