import React from "react";
import {useSwiper} from "swiper/react";

export default function SliderButtons({swiperRef}:{swiperRef: any}) {

    return (
        <div className="flex w-full pt-8">
            <button
                onClick={() => {
                    swiperRef.slidePrev()
                }}
                className="bg-primary text-white py-5 px-6 mr-2" id="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={26}
                     viewBox="0 0 14 26" fill="none">
                    <path d="M12.5 2L1.5 13L12.5 24" stroke="white" strokeWidth="2.75"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button onClick={() => {
                swiperRef.slideNext()
            }}
                    className="bg-primary text-white py-5 px-6" id="next">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={26}
                     viewBox="0 0 14 26" fill="none">
                    <path d="M1.5 24L12.5 13L1.5 2" stroke="white" strokeWidth="2.75"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    );
}
