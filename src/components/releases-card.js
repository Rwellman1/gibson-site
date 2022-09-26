import React from "react";
import { EffectCards } from "swiper";

export default function ReleasesCard(){


    return(
        <div>
                
            <div className='release-main-card'>
                    <img className="card-image release-card-image" 
                        src="https://i.ytimg.com/vi/BIxObnRema4/maxresdefault.jpg" 
                        alt="Orianthi thumbnail"
                    />
                <div className='release-card-text'>
                    <h3>My First Gibson: Orianthi   
                    </h3>
                    <span class="material-symbols-outlined">play_circle</span>
                </div>
            </div>
        </div>
    )

}