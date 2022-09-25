import React from "react";

export default function Smallcard(props) {

    return(
        <div className="card-container alt-card alt-card-container-flex">
            <img className="card-image alt-card-image" src={props.image} />
            <div className="card-text-container card-text-container-alt">
                <h3>{props.subtitle}</h3>
                <p className="card-text-p">{props.info}</p>
                <a ><h4 className="shop-btn alt-btn">SHOP NOW &gt;</h4></a>
            </div>
        </div>
    )
}