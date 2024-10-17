import React, {useState, ReactNode, Children} from 'react';
import 'swiper/css';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import { useSwiper } from 'swiper/react';
import SliderButtons from "@/Components/Slider/SliderButtons";
interface SliderProps {
    children: ReactNode;
    title?: string;
}


const Slider: React.FC<SliderProps> = ({children, title}) => {

    const [swiperRef, setSwiperRef] = useState<SwiperRef|null>(null);

    return (
        <>
            <div className="lg:flex flex-wrap items-center">

                    <div className="lg:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                        <div className="w-full">
                            <h1 className="text-2xl lg:text-4xl font-bold text-darkBlue tracking-wider lg:w-11/12 leading-relaxed">{title}</h1>
                            <div className="py-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width={60} height={2} viewBox="0 0 60 2"
                                     fill="none">
                                    <rect width={60} height={2} fill="#F59E0B"/>
                                </svg>
                            </div>

                            <SliderButtons swiperRef={swiperRef}/>
                        </div>
                    </div>

                    <div className="lg:w-2/3 w-full md:mt-10 lg:mt-0">
                        <Swiper
                            // @ts-ignore
                            onSwiper={setSwiperRef}
                            centeredSlides={true}
                            slidesPerView={3}
                            spaceBetween={40}
                            navigation={true}
                            pagination={{
                                type: 'fraction',
                            }}>
                        {React.Children.map(children, child => (
                            <SwiperSlide>
                                {  // @ts-ignore
                                    React.cloneElement(child)
                                }
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>

            </div>
        </>

    );
};

export default Slider;
