import React from "react";


export default function NavbarGuitars(props){
    const [isShown, setIsShown] = React.useState(false)
    
    return(
        <div className="dropdown-menu">
            <div className="dropdown-title-container">
                <h1 onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    {props.title}
                </h1>
                <span onMouseEnter={() => setIsShown(true)}
                      onMouseLeave={() => setIsShown(false)} 
                      class={isShown === true ? "material-symbols-outlined triangle" : "triangle-hidden"}>
                        {isShown === true ? "change_history" : ""}
                </span>
            </div>    
            <div 
                className={isShown === true ? "dropdown-show "+ props.title : "dropdown-hide"}
            >
                <h2>{props.dropdownTitle}</h2>
                
                <ul className="dropdown-list">
                    <li >{props.item1}</li>
                    <li >{props.item2}</li>
                    <li >{props.item3}</li>
                    <li >{props.item4}</li>
                    <li >{props.item5}</li>
                </ul>
                <h3 className="dropdown-subtitle"><u>{props.dropdownSubtitle}</u></h3>
                <ul className="dropdown-alt-list">
                    <li>{props.altItem1}</li>
                    <li>{props.altItem2}</li>
                </ul>
            </div>
        </div>
    )
}