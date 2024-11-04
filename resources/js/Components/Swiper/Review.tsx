import ReviewData = App.Data.ReviewData;

export default function Review(review: ReviewData) {
    return (
        <div className="swiper-slide swiper-slide-visible swiper-slide-active h-slider bg-effect-md" data-swiper-slide-index="5">
            <div className="flex text-white flex-col lg:flex-row">
                <div className="lg:w-2/5 bg-[#00000070] p-5 overflow-hidden relative flex flex-col">
                    <svg className="absolute top-1/2 transform -translate-y-1/2" width="302" height="238" viewBox="0 0 302 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M301.5 168C301.5 260.54 231.401 335.5 145 335.5C58.5988 335.5 -11.5 260.54 -11.5 168C-11.5 75.4599 58.5988 0.5 145 0.5C231.401 0.5 301.5 75.4599 301.5 168Z" stroke="url(#paint0_linear_103_4826)" stroke-opacity="0.26"></path><defs>
                        <linearGradient id="paint0_linear_103_4826" x1="265.5" y1="-33.707" x2="160.897" y2="111.133" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"></stop>
                            <stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient></defs></svg>
                    <div className="h-10 max-w-[101px]">
                        <div className="overflow-hidden w-full h-auto">
                            <img src="https://brightness-group.com/file/1692015135h4GTUzOpGew4L3nT/thema-media/reviews/pearl_card-white-01.svg" alt="" loading="lazy" className="w-full h-full object-cover rounded-md"/>
                            </div></div>
                    <div className="mt-auto">
                        <div className="flex gap-5"><div>
                            <div className="overflow-hidden w-16 h-16 rounded-full min-w-[67px] min-h-[67px] object-cover">
                                <img src={review.user.avatar} alt="" loading="lazy" className="w-full h-full object-cover rounded-md"/></div></div>
                            <div>
                                <h3 className="text-2xl font-bold">{review.project.tags.name}</h3>
                                <p className="text-base">{review.user.name}</p></div></div>
                        </div>
                    </div>
                    <div className="lg:w-3/5 md:p-10 py-5"><div>
                        <p className="ql-editor text-base">{review.description}</p>
                    </div>
                        <div className="md:mt-5 flex md:block items-center">
                            <a href={review.project.link} target="_self" rel="" className="main_btn mx-auto mt-5">Bekijk deze parel!</a>
                        </div>
                    </div>
                </div>
            </div>

    )
}
