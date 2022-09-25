import React from "react";

export default function FooterLarge(props){


    return(
        <div className="footer-large">
            <h3 className="footer-large-title">{props.title}</h3>
            <ul className="list-text"> 
                  <li>{props.list1}</li>
                  <li>{props.list2}</li>
                  <li>{props.list3}</li>
                  <li>{props.list4}</li>
                  <li>{props.list5}</li>
                  <li>{props.list6}</li>
                  <li>{props.list7}</li>
                  <li>{props.list8}</li>
                  <li>{props.list9}</li>
                  <li>{props.list10}</li>
                  <li>{props.list11}</li>
                  <li>{props.list12}</li>
                  <li>{props.list13}</li>
                  <li className="bottom-list">{props.list14}</li>
                  <li>{props.list15}</li>
                  <li>{props.list16}</li>
                  <li>{props.list17}</li>
            </ul>

        </div>
    )
}