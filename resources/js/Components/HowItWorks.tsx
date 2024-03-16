
import clipbord from "../../assets/icons/clipboard.svg";

import coding from "../../assets/icons/coding.svg"

import mail from "../../assets/icons/mail.svg";
export default function HowItWorks() {
    return (<div className="overflow-y-hidden bg-gray-100">
        <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
            <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider text-primary">Hoe wij werken</h1>
            <div className="md:mt-24 f-f-p">
                <div className="hidden md:flex justify-center w-full">
                    <div
                        className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                        <div aria-label="transactions" role="img">
                            <div
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-lightGrey text-white">
                                <span className="text-xl">2</span>
                            </div>
                        </div>
                        <div aria-label="thinking up" role="img">
                            <img className="focus:outline-none mt-10 w-24"
                                 src={clipbord}
                                 alt="how it work"/>
                        </div>

                        <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                            <h1 className="focus:outline-none text-xl font-bold leading-5">Wij gaan aan de slag</h1>
                            <h2 className="focus:outline-none text-gray-500 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Wij
                                denken na over jou project, hier zitten nog geen kosten aan verbonden. Daarna plannen
                                wij een gesprek in over jou project en nu wordt het leuk! Hierin gaan we brainstormen en
                                leggen we het kosten plaatje voor</h2>
                        </div>


                    </div>
                    <div
                        className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                            <span className="text-xl">1</span>
                        </div>
                        <div>
                            <img className="focus:outline-none mt-10 w-24"
                                 src={mail}
                            />
                        </div>
                        <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                            <h1 className="focus:outline-none text-xl font-bold leading-5">Kom in contact met ons</h1>
                            <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Stuur
                                je idee/vraag geef hierbij wat context zodat wij ons kunnen inleven</h2>
                        </div>

                        <div>
                            <div role="img" className="mt-32">
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-lightGrey text-white">
                                    <span className="text-xl">3</span>
                                </div>
                            </div>
                            <div aria-label="wallet" role="img">
                                <img className="focus:outline-none mt-10 w-24"
                                     src={coding}
                                />
                            </div>
                            <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                                <h1 className="focus:outline-none text-xl font-bold leading-5">Begin ontwikkeling</h1>
                                <h2 className="focus:outline-none text-gray-500 mt-3 text-base leading-6 tracking-wide">Wanneer
                                    het project besproken is, gaan we beginnen. Dit doen we niet op de standaard manier
                                    van
                                    werken.
                                    Doordat we uit ervaring weten een project groeit en of past zich aan. Tijdens dat
                                    het
                                    ontwikkelen begonnen is, zullen we dus korte overleggen plaatsvinden met de
                                    voortgang en
                                    steeds een klein deel laten zien. Zie dit als prototypes, vaak zorgen we er voor dat
                                    je
                                    hierin al kan doorklikken zodat je echt het gevoel kan krijgen van jou idee! </h2>
                            </div>
                        </div>

                    </div>
                </div>
                {/*// Mobile view*/}
                <div className="md:hidden flex flex-col items-center w-full">
                    <img className="focus:outline-none my-10"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg1.svg"
                         alt="how it work"/>
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                        <span className="text-xl">1</span>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-xl text-center tracking-wide leading-5 font-bold">SignUp for an Account</h1>
                        <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Sign up on our
                            website and opt for a program that suits you the best .</h2>
                    </div>
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-lightGrey text-white">
                        <span className="text-xl">2</span>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-xl tracking-wide text-center leading-5 font-bold">Create a Wallet</h1>
                        <h2 className="text-gray-500 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Create a
                            wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more</h2>
                    </div>
                    <img className="focus:outline-none my-10"
                         src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3_step_center_aligned_how_it_worksSvg3.svg"
                    />
                    <div
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-lightGrey text-white">
                        <span className="text-xl">3</span>
                    </div>
                    <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                        <h1 className="text-xl text-center tracking-wide leading-5 font-bold">Start your
                            Transactions</h1>
                        <h2 className="text-gray-500 mt-3 text-center text-base leading-6 tracking-wide">Start
                            transactions right away. No more complicated process for anything else.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}






