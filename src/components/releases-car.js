import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

export default function Carousel(){
    
    return(
        <div className="release-carousel">
            <Swiper
                // install Swiper modules
                
                
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1.5}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')
                
            }
                    
            >
                
                <SwiperSlide>
                    <div className='carousel-card first-card'>
                        <img className="release-card-image" 
                            src="https://i.ytimg.com/vi/WK2R-cMvXFs/mqdefault.jpg" 
                            alt="tumbnail for Rex Brown"
                        />
                        <div className='carousel-card-text'>
                            <h3>Rex Brown Signature Thunderbird </h3>
                            <span class="material-symbols-outlined small-play-button">play_circle</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-card second-card'>
                        <img className="release-card-image" 
                            src="https://i.ytimg.com/vi/ATebZPucb3g/mqdefault.jpg"
                            alt="thumbnail for through the lens" 
                        />
                        <div className='carousel-card-text'>
                            <h3>Through the lens </h3>
                            <span class="material-symbols-outlined small-play-button">play_circle</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-card third-card'>
                        <img className="release-card-image" 
                            src="https://i.ytimg.com/vi/R7iIvaUcdrU/mqdefault.jpg"
                            alt="thumbnail for Cat Stevens" 
                        />
                        <div className='carousel-card-text'>
                            <h3>Cat Stevens </h3>
                            <span class="material-symbols-outlined small-play-button">play_circle</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}



