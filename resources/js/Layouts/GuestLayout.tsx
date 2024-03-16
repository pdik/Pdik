import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';
import Hero from "@/Components/Hero";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/Footer";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="bg-gray-100 pb-12 overflow-y-hidden" style={{minHeight: 700}}>
            <Navigation/>
            {children}
            <Footer />
        </div>
    );
}
