import React from "react";


export default function NavbarExtras(props){
    const [isShown, setIsShown] = React.useState(false)
    const [triangleShow, setTriangleShow] = React.useState(false)
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
                className={isShown === true ? "dropdown-show" : "dropdown-hide"}
            >
               <div className="dropdown-flex"> 
                  <div className="dropdown-text-container">  
                    <h2>{props.dropdownTitle1}</h2>
                    <ul className="dropdown-list dropdown-list-position">
                        <div className="dropdown-list-items">
                            <li>{props.item1}</li>
                            <li>{props.item2}</li>
                            <li>{props.item3}</li>
                            <li>{props.item4}</li>
                            <li>{props.item5}</li>
                            <li>{props.item6}</li>
                        </div>    
                        <div className="dropdown-list-items">
                            <li>{props.item7}</li>
                            <li>{props.item8}</li>
                            <li>{props.item9}</li>
                            <li>{props.item10}</li>
                            <li>{props.item11}</li>
                            <h3 className="dropdown-subtitle"><u>{props.dropdownSubtitle}</u></h3>
                        </div>
                    </ul>
                    
                  </div>
                  <div>
                    <h2>{props.dropdownTitle2}</h2>
                    <ul className="dropdown-list dropdown-list-position">
                        <div className="dropdown-list-items">
                        <li>{props.itemB1}</li>
                        <li>{props.itemB2}</li>
                        <li>{props.itemB3}</li>
                        <li>{props.itemB4}</li>
                        </div>
                        <div className="dropdown-list-items">
                        <li>{props.itemB5}</li>
                        <li>{props.itemB6}</li>
                        <li>{props.itemB7}</li>
                        <h3 className="dropdown-subtitle"><u>{props.dropdownSubtitle2}</u></h3>
                        </div>
                    </ul>
                   
                  </div>
                  <div>
                    <h2>{props.dropdownTitle3}</h2>
                    <ul className="dropdown-list dropdown-list-position">
                        <div className="dropdown-list-items">
                        <li>{props.itemC1}</li>
                        <li>{props.itemC2}</li>
                        <li>{props.itemC3}</li>
                        <li>{props.itemC4}</li>
                        <li>{props.itemC5}</li>
                        <h3 className="dropdown-subtitle"><u>{props.dropdownSubtitle3}</u></h3>
                        </div>
                    </ul>
                    
                  </div>
                </div>
            </div>
        </div>
    )
}