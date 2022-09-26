import React from "react";
import NavbarGuitars from "./NavbarGuitars";
import NavbarExtras from "./NavbarExtras";

export default function Navbar(){

    const [isOpen, setIsOpen] = React.useState(false)
    


    function openMenu(){
        setIsOpen(!isOpen)
    }

    return(
        <div>
             {isOpen && 
             <div className="side-menu-flex">
                    <div className="side-menu">
                        <div className="menu-top">
                            <h3 className="side-menu-close" onClick={openMenu}>
                                <span class="material-symbols-outlined">
                                close
                                </span>
                                CLOSE
                            </h3>
                        </div>
                        <div className="menu-list-container">
                            <ul className="menu-list">
                                <li>ELECTRIC &gt;</li>
                                <li>ACOUSTIC &gt;</li>
                                <li>MERCHANDISE &gt;</li>
                                <li>ACCESSORIES &gt;</li>
                                <li>SERVICING &gt;</li>
                                <li>GIBSON TV &gt;</li>
                                <li>GIBSON GARAGE &gt;</li>
                            </ul>
                        </div>
                    </div>
                    <div className="side-menu-overlay"></div>
               </div>}
            <div className="navbar">
                <div className='max-width nav-flex'>
                    <div className="nav-flex-container-left">
                        <span onClick={() => setIsOpen(!isOpen)} class="material-symbols-outlined nav-menu">menu</span>
                        <img  className="nav-image nav-image-desktop" alt="gibson logo" src="https://images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg" />
                        <ul className="nav-large-list">
                            <NavbarGuitars 
                                title = 'ELECTRIC'
                                dropdownTitle = 'ELECTRIC GUITARS'
                                item1 = 'New Arrivals'
                                item2 = 'By Body Style'
                                item3 = 'By Collection'
                                item4 = 'Custom Shop'
                                item5 = 'Exclusives'
                                dropdownSubtitle = 'SHOP ALL ELECTRIC'
                                altItem1 = 'Electric Amps'
                                altItem2 = 'Effects Pedals'
                            />
                            <NavbarGuitars 
                                title = 'ACOUSTIC'
                                dropdownTitle = 'ACOUSTIC GUITARS'
                                item1 = 'New Arrivals'
                                item2 = 'By Body Style'
                                item3 = 'By Collection'
                                item4 = 'Custom Shop'
                                item5 = 'Exclusives'
                                dropdownSubtitle = 'SHOP ALL ACOUSTIC'
                                altItem1 = 'Acoustic Amps'
                                altItem2 = 'Acoustic Pedals'
                            />
                            <NavbarGuitars 
                                title = 'BASS'
                                dropdownTitle = 'BASS GUITARS'
                                item1 = 'By Body Style'
                                item2 = 'By Collection'
                                dropdownSubtitle = 'SHOP ALL BASS'
                                altItem1 = 'Bass Amps'
                                altItem2 = 'Bass Pedals'
                            />
                            <NavbarExtras 
                                title = 'GUITAR ACCESSORIES'
                                dropdownTitle1 = 'ACOUSTIC GUITARS'
                                item1 = 'Bridges'
                                item2 = 'Covers'
                                item3 = 'Knobs'
                                item4 = 'Mounting'
                                item5 = 'Pickguards'
                                item6 = 'Pickups'
                                item7 = 'Potentiometers'
                                item8 = 'Strap Buttons'
                                item9 = 'Switches'
                                item10 = 'Tailpieces'
                                item11 = 'Tuning Machines'
                                dropdownSubtitle = 'ALL PARTS'
                                dropdownTitle2 = 'ACCESSORIES'
                                itemB1 = 'Cables'
                                itemB2 = 'Capos'
                                itemB3 = 'Cases'
                                itemB4 = 'Cleaning & Care'
                                itemB5 = 'Picks'
                                itemB6 = 'Stands'
                                itemB7 = 'Straps'
                                dropdownSubtitle2 = 'ALL ACCESSORIES'
                                dropdownTitle3 = 'STRINGS'
                                itemC1 = 'Electric'
                                itemC2 = 'Acoustic'
                                itemC3 = 'Bass'
                                dropdownSubtitle3 = 'ALL STRINGS'
                            />
                            <NavbarExtras 
                                title = 'LIFESTYLE'
                                dropdownTitle1 = 'APPAREL'
                                item1 = 'Shirts & Tops'
                                item2 = 'Sweatshirts'
                                item3 = 'Artist Collection'
                                item4 = 'Collaborations'
                                item5 = 'Hats & Headwear'
                                dropdownSubtitle = 'ALL APPAREL'
                                dropdownTitle2 = 'LIFESTYLE ACCESSORIES'
                                itemB1 = 'Keychains'
                                itemB2 = 'Phone Cases'
                                itemB3 = 'Pins, Patches & Stickers'
                                dropdownSubtitle2 = 'ALL LIFESTYLE ACCESSORIES'
                                dropdownTitle3 = 'HOME & OFFICE'
                                itemC1 = 'Mini Guitars'
                                itemC2 = 'Collectibles'
                                itemC3 = 'Posters & Signage'
                                itemC4 = 'Seating & Stools'
                                dropdownSubtitle3 = 'ALL HOME & OFFICE'
                            />
                            <NavbarExtras 
                                title = 'SERVICE'
                                dropdownTitle1 = 'SERVICING TOOLS'
                                item1 = 'Warranty Registration'
                                item2 = 'Virtual Guitar Tech'
                                item3 = 'Frequently Asked Questions'
                                dropdownTitle2 = 'SHOPPING TOOLS'
                                itemB1 = 'Find a Dealer Near You'
                                itemB2 = 'Online Retailers'
                                itemB3 = 'Shipping Returns'
                                itemB4 = 'Return Policies'
                                dropdownTitle3 = 'SUPPORT TOOLS'
                                itemC1 = 'Serial Number Info'
                                itemC2 = 'Report Counterfeits'
                                itemC3 = 'Legacy Product Archive'
                                itemC4 = 'Contact Us'
                                itemC5 = 'About Us'
                                
                            />
                            <NavbarExtras 
                                title = 'GIBSON TV'
                            />
                        </ul>
                    </div>
                    <img  className="nav-image nav-image-mobile" src="https://images.ctfassets.net/m8onsx4mm13s/72p8qgeqA4UK7FD2MwyA19/cbc4a71ff92b788b791a53fa683dc6f4/gibson__1_.svg" />
                    <div><span class="material-symbols-outlined shopping-cart">shopping_cart</span></div> 
                </div>
            </div>
        
           
        </div>
    )
}
const data = [

    {title1:'ELECTRIC',
     subtitle1:'ELECTRIC GUITARS', 
     options1:['New Arrivals',
                'By Body Style', 
                'By Collection',
                'Custom Shop', 
                'Exclusives']
     
    }
]