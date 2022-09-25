import React from "react";

export default function AltLargeCard(props){

    return(
        <div className="card-container bottom-card-flex">
        <img className="card-image bottom-card-image" src={props.img} />
        <div className="card-text-container card-text-container-flex bottom-card-text">
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <a ><h4 className="shop-btn">SHOP NOW &gt;</h4></a>
        </div>
    </div> 
    )
}