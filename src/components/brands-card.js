import React from "react";

export default function Brandcard(props){

    return(
        <div className="card-container alt-card brand-card card-flex">
            <img className="card-image brand-image card-image-flex" src={props.image} />
            <div className="brand-text-container card-text-container card-text-container-flex">
                <img className="brand-logo" src={props.brand} alt="branding image"/>
                <h3>{props.subtitle}</h3>
                <p>{props.info}</p>
                <a><h4 className="shop-btn alt-btn">SHOP NOW &gt;</h4></a>
            </div>
        </div>
    )
}