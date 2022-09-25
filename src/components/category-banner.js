import React from "react"
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import lesPaul from "./images/les-paul-small.png"
import SG from "./images/sg-small.png"
import ES from "./images/es-small.png"
import acoustic from "./images/acoustic-small.png"
import designer from "./images/designer-small.png"
import basses from "./images/basses-small.png"

export default function Category(){

    return(
        <div className='guitar-collection'>
            <h3>SHOP BY CATEGORY</h3>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3.7}
                navigation
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={{
                    // when window width is >= 750px
                    750: {
                        
                      slidesPerView: 6,
                    },
                    1024: {
                        slidesPerView : 6,
                    }
                    
                  }}
            >
                
                <SwiperSlide><img className="guitar-image" href="#" src={lesPaul}/><p>Les Paul <strong>&gt;</strong></p></SwiperSlide>
                <SwiperSlide><img className="guitar-image" src={SG}/><p>SG <strong>&gt;</strong></p></SwiperSlide>
                <SwiperSlide><img className="guitar-image" src={ES}/><p>ES <strong>&gt;</strong></p></SwiperSlide>
                <SwiperSlide><img className="guitar-image" src={acoustic}/><p>Acoustic <strong>&gt;</strong></p></SwiperSlide>
                <SwiperSlide><img className="guitar-image" src={designer}/><p>Desginer <strong>&gt;</strong></p></SwiperSlide>
                <SwiperSlide><img className="guitar-image" src={basses}/><p>Basses <strong>&gt;</strong></p></SwiperSlide>
                <div></div>
            </Swiper>
        </div>
        )


    
}