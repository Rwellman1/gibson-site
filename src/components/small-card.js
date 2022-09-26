import React from "react";

export default function Smallcard(props) {

    return(
        <div className="card-container card-flex ">
            <img className="card-image card-image-flex" 
                src={props.image} 
                alt="merch "
            />
            <div className="card-text-container card-text-container-flex small-card-text">
                <h3>{props.subtitle}</h3>
                <p className="card-text-p">{props.info}</p>
                <a ><h4 className="shop-btn">SHOP NOW &gt;</h4></a>
            </div>
        </div>
    )
}