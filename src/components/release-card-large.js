import React from "react";

export default function LargeReleaseCard(props){


    return(
        <div className={window.screen.width < 1024 ? "footer-hide" : "large-release-card-container"}>
            <div className='large-card '>
                <img className="large-card-image" 
                    src={props.image} 
                    alt="main video thumbnail"
                />
                <div className='large-card-text'>
                    <h3>{props.title} </h3>
                    <span class="material-symbols-outlined small-play-button">play_circle</span>
                </div>
            </div>
        </div>
    )
}