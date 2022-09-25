
import React from "react";

export default function FooterMenu(){
    const [isOpen, setIsOpen] = React.useState(null)
    
    const toggle = (i) => {
      if (isOpen === i) {
        return setIsOpen(null)
      }

      setIsOpen(i)
    }

  return(
    <div className={window.screen.width > 1024 ? "footer-hide" : "footer-menu-container"}>
        <div className="accordion">
          {data.map((item, i) => (
            <div className="collapse-menu" onClick= {() => toggle(i)} >
              <div className="collapse-title">
                <h3>{item.title}</h3>
                <span className="open-icon">{isOpen === i ? "-" : "+"}</span>
              </div>
              <div className={isOpen === i ? "list show" : "list"}> 
                <ul className="list-text">  
                  <li>{item.list1}</li>
                  <li>{item.list2}</li>
                  <li>{item.list3}</li>
                  <li>{item.list4}</li>
                  <li>{item.list5}</li>
                  <li>{item.list6}</li>
                  <li>{item.list7}</li>
                  <li>{item.list8}</li>
                  <li>{item.list9}</li>
                  <li>{item.list10}</li>
                  <li>{item.list11}</li>
                  <li>{item.list12}</li>
                  <li>{item.list13}</li>
                  <li className="bottom-list">{item.list14}</li>
                  <li>{item.list15}</li>
                  <li>{item.list16}</li>
                  <li>{item.list17}</li>
                </ul>
              </div>
            </div>
          ))}

        </div>
        
    </div>

  )

    

}

const data = [
  {
    title: 'SHOP',
    list1:  'Les Paul Models',
    list2:  'SG Models',
    list3:  'ES Models',
    list4:  'Basses',
    list5:  'Designer Models',
    list6:  'Gibson Custom Shop',
    list7:  'Super Jumbo Models',
    list8:  'Square Shoulder Models',
    list9:  'Round Shoulder',
    list10: 'Small Body Models',
    list11: 'Songwriter Models',
    list12: 'Accessories',
    list13: 'Hardware',
    list14: 'Merchandise ' ,
    list15: 'The Gibson Garage',
    list16: 'Find a Dealer Near You',
    list17: 'Online Dealers'        
  },
  {
    title: "SUPPORT ",
    list1:  'Customer Service',
    list2:  'Virtual Guitar Tech',
    list3:  'Warranty Registration & Info',
    list4:  'Repair and Restoration',
    list5:  'Report Counterfeits',
    list6:  'Serial Number FAQ',
    list7:  'Online Store Policies & FAQ',
    list8:  'Gibson Garage Store Policies',
    list9:  'Gibson Guitar Specs (2015 - 2019)'
  },
  {
    title: "OUR COMPANY ",
    list1:  'Leadership',
    list2:  'Careers',
    list3:  'Contact Us',
    list4:  'News',
    list5:  'Gibson TV',
    list6:  'Gibson Foundation',
    list7:  'Gibson Generation Group'
  }

]