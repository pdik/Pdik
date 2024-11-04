import logo from "../../assets/logo.png";
import {Link, usePage} from "@inertiajs/react";
import React, {useState} from "react";
import DynamicHeroIcon from "@/Components/DynamicHeroIcon";

export default function Navigation() {
    const [show, setShow] = useState(false);
    const {menus} = usePage().props as any; // adjust type if needed
    console.log(menus);
    const menuItems = menus?.find((menu: any) => menu.location === "header")?.items || [];

    console.log(menuItems);
    return (
        <nav className="w-full border-b">
            <div className="py-5 md:py-0 container mx-auto px-6 flex items-center justify-between">
                <div aria-label="Home. logo" role="img">
                    <Link href={route('welcome')}>
                        <img className="w-1/6 md:w-1/4" src={logo} alt="logo"/>
                    </Link>
                </div>
                <div>
                    <button onClick={() => setShow(!show)}
                            className={`${show ? 'hidden' : ''} sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}>
                        <svg aria-haspopup="true" aria-label="open Main Menu" xmlns="http://www.w3.org/2000/svg"
                             className="md:hidden icon icon-tabler icon-tabler-menu" width={24} height={24}
                             viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1={4} y1={8} x2={20} y2={8}/>
                            <line x1={4} y1={16} x2={20} y2={16}/>
                        </svg>
                    </button>
                    <div id="menu" className={` ${show ? '' : 'hidden'} md:block lg:block `}>
                        <button onClick={() => setShow(!show)}
                                className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}>
                            <svg aria-label="close main menu" xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"/>
                                <line x1={18} y1={6} x2={6} y2={18}/>
                                <line x1={6} y1={6} x2={18} y2={18}/>
                            </svg>
                        </button>
                        <ul className="flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20">
                            {menuItems.map((item: any) => (
                                <li key={item.id} className="md:mx-4 my-2 md:my-0">
                                    <Link
                                        href={item.is_route ? route(item.route) : item.url}
                                        target={item.new_tab ? "_blank" : "_self"}
                                        className="text-gray-700 hover:text-primary transition duration-150"
                                    >
                                        {item.title.en} {/* Adjust for locale as needed */}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*<Link href={route('login')}*/}
                {/*      className="focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hidden md:block bg-transparent transition duration-150 ease-in-out hover:bg-dark rounded border border-lightGrey text-primary px-4 sm:px-8 py-1 sm:py-3 text-sm">Login</Link>*/}
            </div>
        </nav>
    );
};
