import * as React from 'react';

import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination , EffectFade } from 'swiper/modules';

import type {Swiper as SwiperClass} from "swiper/types";
import {ReactNode} from "react";
import 'swiper/css';
// @ts-ignore
interface FadeProps<DataItem> {
    content: Array<DataItem>;
    slide: React.FC<{data: DataItem }>;
    title: string|ReactNode;
}
export default function Fade<DataItem>(
    { content, slide,title, }: FadeProps<DataItem>){
    return (
        <section className="pt-[7rem] pb-[2rem] bg-orange-100">
            <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
                <h1 className="text-[3rem] font-bold underline mb-[2rem] text-center text-primary">
                    {title}
                </h1>

                <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    effect={'fade'}
                    loop={true}
                    pagination={{
                        clickable: true,
                        type: 'fraction',
                    }}
                    spaceBetween={30}
                    navigation={true}
                    className="fade"
                >
                    {content.map((p, index) => {
                        return (
                            <SwiperSlide
                                className="grid md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10"
                                key={index}
                            >
                                {slide({data: p})}
                            </SwiperSlide>
                        );
                    })}
                </Swiper>


            </div>
        </section>
    );
}
