import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import HowItWorks from "@/Components/HowItWorks";
import WorkedWith from "@/Components/WorkedWith";
import Guest from "@/Layouts/GuestLayout";

 function Welcome({ auth}: PageProps<{

}>) {

    return (
        <>
            <Head title="Welcome" />
            <div>
                <Hero/>
                <div className="flex bg-gray-100 w-full">

                     <div className="">
                         <HowItWorks/>
                     </div>
                    <div className="">
                        <WorkedWith/>
                    </div>
                </div>

            </div>
        </>
    );
}

// @ts-ignore
Welcome.layout = page => <Guest children={page} />
export default Welcome;


