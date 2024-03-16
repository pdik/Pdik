import {Link} from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import smartphone from "../../assets/icons/smartphone.svg";

import dashboard from "../../assets/icons/dashboard.svg";
import api from "../../assets/icons/api.svg";
function JouwApplicatie(){
    return (<div>
        <div className="container mx-auto px-5 my-14 md:my-24 features ">
            <div className="grid gap-5 text-white sm:grid-cols-2 lg:grid-cols-3">
                <div className="relative">
                    <Link className="main-card bg-effect-md h-full border-[1px] border-white  bg-darkBlue relative z-0 cursor-pointer"
                    href={route('welcome')}>
                    <div className="card_img flex justify-center items-center">
                        <div className="overflow-hidden block m-auto h-full w-full max-w-[97px]"><img
                            src={dashboard}
                            alt="" loading="lazy" className="w-full h-full object-cover rounded-md"
                            /></div>
                    </div>
                    <h2 className="card_title text-center">Applicatie laten bouwen</h2>
                    <p className="ql-editor card_des text-center mb-5 cursor-pointer select-none">Op maat gemaakte
                        applicaties, (API) koppelingen, en mobiele apps.</p>
                    <Link
                        className="main_btn bg-primary mx-auto mt-1" href="https://brightness-group.com/maatwerk-applicaties">Ga
                        voor kwaliteit! </Link>
                    </Link>
                </div>
                <div>
                    <Link className="main-card bg-effect-md h-full border-[1px] border-white relative z-0 cursor-pointer bg-darkBlue"  href="https://brightness-group.com/website">
                    <div className="card_img flex justify-center items-center">
                        <div className="overflow-hidden block m-auto h-full w-full max-w-[97px]"><img
                            src={api}
                            alt="" loading="lazy" className="w-full h-full object-cover rounded-md"
                            /></div>
                    </div>
                    <h2 className="card_title text-center">Razendsnelle koppelingen</h2>
                    <p className="ql-editor card_des text-center mb-5 cursor-pointer select-none">Eenvoudig te
                        beheren koppelingen doormiddel van je eigen dashboard</p>
                    <Link className="main_btn bg-primary mx-auto mt-1" href={route('welcome')}>Samen vliegen?</Link>
                    </Link>
                </div>
                <div className="" >
                    <Link
                    className="main-card bg-effect-md h-full border-[1px] border-white relative z-0 cursor-pointer bg-darkBlue"
                    href={route('welcome')}>
                    <div className="card_img flex justify-center items-center">
                        <div className="overflow-hidden block m-auto h-full w-full max-w-[97px]">
                            <img
                            src={smartphone}
                            alt="" loading="lazy" className="w-full h-full object-cover rounded-md"
                            /></div>
                    </div>
                    <h2 className="card_title text-center">Mobile oplossingen</h2>
                    <p className="ql-editor card_des text-center mb-5 cursor-pointer select-none">
                        Jouw custom mobile applicatie, in React native, Kotlin of swift gebouwd?
                    </p>
                    <Link className="main_btn bg-primary mx-auto mt-1" href={route('welcome')}>Juiste keus maken?</Link>
                    </Link></div>

            </div>
        </div>
    </div>);
}
// @ts-ignore
JouwApplicatie.layout = page => <Guest children={page} />
export default JouwApplicatie;
