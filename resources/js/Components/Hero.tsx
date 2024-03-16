import React, { useState } from "react";
import logo from "../../assets/logo.png"
import {Link} from "@inertiajs/react";
import Navigation from "@/Components/Navigation";
function Hero() {

    return (
            <div>
            {/* Code block starts */}
            <>

                <div className="bg-gray-100">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
                                Maatwerk software
                                <span className="text-primary"> jou bedrijfssoftware </span>
                                geheel op maat
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">Standaardsoftware is gemaakt voor standaardgebruikers. Heb je specifieke wensen, dan schiet een standaardpakket vaak tekort. Of is de applicatie niet zo effectief als hij zou kunnen zijn. Wij houden niet van standaard en zullen ons altijd willen verdiepen in jou bedrijf</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-primary transition duration-150 ease-in-out hover:bg-dark lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-darkBlue py-2 sm:py-4 text-sm">Meer weten?</button>
                            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-dark lg:text-xl lg:font-bold  hover:text-darkBlue rounded border border-darkBlue text-primary px-4 sm:px-10 py-2 sm:py-4 text-sm">Contact</button>
                        </div>
                    </div>
                </div>
            </>
            {/* Code block ends */}
        </div>

    );
}

export default Hero;
