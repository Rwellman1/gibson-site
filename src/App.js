import homeImage from './components/images/home-image.jpg'
import './App.css';
import Category from './components/category-banner';
import Smallcard from './components/small-card';
import SmallcardAlt from './components/small-card-alt';
import Brandcard from './components/brands-card';
import Carousel from './components/releases-car';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FooterMenu from './components/Footer';
import ReleasesCard from './components/releases-card';
import 'swiper/css';

import 'swiper/css/pagination';
import LargeReleaseCard from './components/release-card-large';
import FooterLarge from './components/Footer-large';
import AltLargeCard from './components/alt-large-card';

function App() {
  return (
  <div className='page-container'>
    <nav>
      <Navbar />
    </nav>
    <div className='home-banner'>
      <div className='max-width home-container'>
        <img className='home-image-mobile' src='https://images.ctfassets.net/m8onsx4mm13s/6Olempoowp2Eb3V8QxN0yj/5d7888d965602260db00de36794570e2/Homepage_Mobile-Masthead_HBD-LesPaul.jpg'/>
        <img className='home-image-desktop' src='https://images.ctfassets.net/m8onsx4mm13s/YTdmR30k7nC9GKoaVUtGT/9e90986bded9019adfd884e54efb08c8/Homepage_Masthead_HBD-LesPaul.jpg'/>
        <div className='home-banner-text'>
          <h1>LES PAUL COLLECTION</h1>
          <h4>Celebrating 70 Years of This Iconic Guitar</h4>
          <a ><h4 className='shop-btn'>SHOP NOW &gt;</h4></a>
        </div>
      </div>
    </div>
    <div className='body-container'>
      <div className='max-width'>
        <Category />
        </div>
    </div>    
      <div className='body-container'>
        <div className='max-width'>
          <div className='large-flex'>
            <Smallcard 
              image = "https://images.ctfassets.net/m8onsx4mm13s/4R6bJSGDWjYB8wAN3SPqVd/689000defc68b3dce1a9090fea9e5052/Olive-Drab_Homepage_33Module.jpg"
              subtitle = "Gibson Exclusives Collection"
              info = "Uncommon colors. Distinctive builds. Limited availability. You won’t find these anywhere but here." 
            />
            <Smallcard 
              image = "https://images.ctfassets.net/m8onsx4mm13s/74ngSZJYUqWCDvLLidBuxu/cab9d11d0961976676af9b573f8fffaa/modCollection_home_promo.jpg"
              subtitle = "Gibson Mod™ Collection"
              info = "Rarities. Exclusives. Demos. Customized one-off guitar mods." 
            />
            <Smallcard 
              image = "https://images.ctfassets.net/m8onsx4mm13s/7a9CcueWV0we4lxgWWeg0L/61d67f8acdb91c192879a84d93d982b3/t4hoYDqA.jpeg"
              subtitle = "Hear More Of You"
              info = "Introducing the Generation Collection Acoustics featuring the exclusive Gibson Player Port™." 
            />
          </div>
          <div className='alt-card-flex'>
            <AltLargeCard 
              img = "https://images.ctfassets.net/m8onsx4mm13s/2uLsbv4WNM2ZDwQgRfOK8V/0feece3c9034abeb407d40d085817332/L_A-Core-Refresh-Nashville_Homepage_50Module.jpg"
              title = "New Arrivals"
              info = "Shop the newest Gibson apparel."
            />

            <AltLargeCard 
              img = "https://images.ctfassets.net/m8onsx4mm13s/685Nzai5nyof3akot031Ej/f13e68e6baab135a48bd57b3d2aa9ccb/BillyReid_Homepage_50Module.jpg"
              title = "Billy Reid x Gibson Hummingbird Collection"
              info = "Straight From Muscle Shoals to Music Row, and Now, to You."
            />
          </div>
          <div className='alt-card-flex'>
            <SmallcardAlt 
              image = "https://images.ctfassets.net/m8onsx4mm13s/2l7aP29KgEs7NFyrEovNV7/d6bc4b899521d5c2c4bf59c843334d1a/I_W_Hats-02.jpg"
              subtitle = "imogene + willie"
              info = "New vintage inspired, hand-drawn Gibson designs brought to you by imogene + willie in Nashville, Tennessee"
            />
            <SmallcardAlt 
              image = "https://images.ctfassets.net/m8onsx4mm13s/2tWrKe4hKzkJL2WowzqhSR/335c8ca1c04571be695130d7f5f4f1e0/47_Brand_Image.png"
              subtitle = "'47 Brand"
              info = "Celebrate Team Gibson with a stylish ’47 Brand hat."
            />
          </div>
        </div>
      </div>
      
    
    <div className='dark-body-container body-container '>
      <div className='max-width'>
        <h2>GIBSON BRANDS FAMILY</h2>
        <div className='large-flex'>
          <Brandcard 
            brand = "https://images.ctfassets.net/m8onsx4mm13s/11cGDSvJmeIhaDsILk8MaJ/3fa7ad7f647100591c4d6fb904691cd8/Epiphone_2x.png"
            image = "https://images.ctfassets.net/m8onsx4mm13s/1taJNWPD6h8dy9pEEq9c8e/ff78732df020dcde7c8f88bb4a83a0f9/Artboard_Copy.jpg"
            subtitle = "For Every Stage"
            info = "From your first guitar to your treasured road warrior, Epiphone crafts high-quality instruments musicians can rely on."
          />
          <Brandcard 
            brand = "https://images.ctfassets.net/m8onsx4mm13s/3kfjIgO6CFk6RYb3iOLgFA/4a28a51943a535d084066a898e592c64/mesa_2x.png"
            image = "https://images.ctfassets.net/m8onsx4mm13s/7ceh4kt0V4wun8KFT4JDEO/9ffcff07f47ada81eacfcaf9d60f2c87/Homepage_33Module_Maestro-Mesa.jpg"
            subtitle = "The Home of Tone"
            info = "MESA/Boogie has the tone tools you need. Legendary amps, cabinets, effects, and more await at The Home of Tone!"
          />
          <Brandcard 
            brand = "https://images.ctfassets.net/m8onsx4mm13s/6DKofWzVBDseE3kqi9b34T/f7a1966154eaff87ffcf16ee9a4800f3/Maestro_2x.png"
            image = "https://images.ctfassets.net/m8onsx4mm13s/3W6kiUaUWzJWvb9Rb5qSwV/9edd095688dbef626043091c39583b83/demo3_2x.jpeg"
            subtitle = "Shape Your Sound"
            info = "Calling all sonic sculptors—your tools have arrived! Come meet the all-new lineup of Maestro effects."
          />
        </div>
      </div>  
    </div>
    <div className='body-container'>
      <div className='max-width'>
        <div className='alt-card-flex'>
          <SmallcardAlt 
            image = "https://images.ctfassets.net/m8onsx4mm13s/2dFAb8SlkE7XnEkkpOkTqr/80b35f971cdb89c74e71b7ceb87f0c20/Strings.png"
            subtitle = "Accessories"
            info = "Clean up your sound with a fresh set of genuine Gibson Factory Spec Strings — electric, acoustic, or bass."
          />
          <SmallcardAlt 
            image = "https://images.ctfassets.net/m8onsx4mm13s/76ur9vS6Zm3AzutVJCmoZY/24b6ddc66e37fb9314cd12cdc726666d/Apparel.png"
            subtitle = "Apparel"
            info = "We’ve got awesome tees, tanks, hoodies — even onesies for the little rockers and hummingbirds in your life."
          />
        </div>
      </div>  
    </div>
    
    <div className='releases-container body-container'>
      <div className='background-text'><h2>Guitars Music Culture</h2></div> 
      <div className='max-width '>
        <div className='flex-title'>
            <img className='gib-brand-logo' src="https://static.gibson.com/gibson-web/branding/GibsonTV_Logo_White_SM.png" />
            <h2 className='releases-title'>LATEST RELEASES</h2>
        </div> 
      <div className='releases-flex'>
        <ReleasesCard />
        <div className='show-carousel'>
          <Carousel />
        </div>
        <div className='show-large-card'>
          <LargeReleaseCard 
            image="https://i.ytimg.com/vi/WK2R-cMvXFs/mqdefault.jpg"
            title="Rex Brown Signature Thunderbird"
          />
          <LargeReleaseCard 
            image="https://i.ytimg.com/vi/ATebZPucb3g/mqdefault.jpg"
            title="Through the lens"
          />
          <LargeReleaseCard 
            image="https://i.ytimg.com/vi/R7iIvaUcdrU/mqdefault.jpg"
            title="Cat Stevens"
          />
        </div>
      </div>
      </div>
    </div>
    <div className='body-container'>
      <div className='max-width'>
        <div className='alt-card-flex'>
          <AltLargeCard 
            img = "https://images.ctfassets.net/m8onsx4mm13s/1QHyg5cuL2K1GriSEqppcn/733d76f6793ddb9985f7d4563accb979/R_R.png"
            title = "Repair & Restoration"
            info = "Whether your instrument needs a tune-up or an overhaul, our team of world-class luthiers can repair or restore any brand of guitar, bass, banjo, or mandolin."
          />  
          <div className="card-container bottom-card-flex">
                <img className="card-image bottom-card-image" src="https://images.ctfassets.net/m8onsx4mm13s/5KQrGUa0B52nRQJcx6LuK3/b4de8c53be3f2b06758098b2714ccbe4/app.png" />
                <div className="card-text-container card-text-container-flex bottom-card-text">
                    <h3>Gibson App - Learn, Watch, Shop</h3>
                    <p>Grab your phone, grab your guitar, and use our app to tune up, take lessons, watch Gibson TV, and browse our online store.</p>
                    <div className='flex-icon' >
                      <a className='app-card-icon' href="https://play.google.com/store/apps/details?id=com.zoundio.amped&hl=en_US&gl=US">
                        <img src="https://images.ctfassets.net/m8onsx4mm13s/rzFBLlavGQ6iEqUHUmttt/105b64a7a655391d2290173e92556e1b/google-play-badge.png"/></a>
                      <a className='app-card-icon' href="https://apps.apple.com/us/app/gibson/id1116032929"><img src="https://images.ctfassets.net/m8onsx4mm13s/5Y2Vb1Nap9gfEK6Aae0Frd/6c24a3511178fb49aec9412bae845d64/app-store-badge.png"/></a>
                    </div>
                </div>
            </div>
          </div>
      </div>    
    </div>
    <div className='dark-body-container body-container gibson-contianer'>
      <div className='max-width gibson-container-flex'>
        <div className='gibson-group-container'>
          <img className='gibson-group-logo' src="https://images.ctfassets.net/m8onsx4mm13s/7jH9QBmlsGWDaqcgGZdwYO/e77ddf8392fd78ca2a6792d5ff79e9d2/g3-logo.png"  />
          <div className='gibson-group-text'>
            <p>Our commitment to nurturing young talent drove the creation of our 
              two-year mentoring program.
            </p>
            <a><h4>LEARN MORE &gt;</h4></a>
          </div>
        </div>
        <div>   
          <img src="https://images.ctfassets.net/m8onsx4mm13s/5FxbjOoDWunslyGHYVHj8p/d0b5edde48b9445668387d32838c0285/g3-img.png" className='photo-collection'/>
        </div>
      </div>  
    </div>  
    <div className='body-container'>
      <div className='max-width'>
        <div className="card-container alt-card alt-card-container-flex career-card ">
              <img className="card-image alt-card-image career-image" src="https://images.ctfassets.net/m8onsx4mm13s/6DpbC63T9bUZX0rJ8RvqvZ/a2a7bac9e418707ea63908b8a6741dde/careers.png" />
              <div className="card-text-container bottom-card-text">
                  <h3>Gibson Careers</h3>
                  <p>Come join the band. We hire buffers and sanders, managers and messengers, technicians and cashiers. No matter the role, we celebrate innovation, teamwork, and diversity.</p>
                  <a><h4 className="shop-btn alt-btn">LEARN MORE &gt;</h4></a>
              </div>
          </div>
      </div>
    </div>
    <div className='body-container email-socail-container'>
      <div className='bottom-max-width bottom-flex'>
        <div className='email-container'>
          <h2>SIGN UP FOR NEWS & OFFERS</h2>
          <div className='email-flex'>
            <input className='email-input' type="email" placeholder='EMAIL ADDRESS' />
            <a><h4 className="shop-btn alt-btn">SUBSCRIBE &gt;</h4></a>
          </div>
          <p>By submitting this form, you agree to our <a href="https://www.gibson.com/en-US/Policy/Terms">Terms & Conditions </a>
          and <a href="https://www.gibson.com/en-US/Policy/Privacy">Privacy Policy.</a>
          </p>
        </div>
        
        <div className='socials-container'>
          <h3>Follow us:</h3>
          <ul className='social-flex'>
            <li><img src="https://images.ctfassets.net/m8onsx4mm13s/7z1pAOQBLHEuVOVM6LRPcx/d7b79a82fae48d1111611943ec2c73a4/icon-instagram.svg"/></li>
            <li><img src="https://images.ctfassets.net/m8onsx4mm13s/35Oaae1J6dqWxeuNAvrNwa/c6ef50ec9c6c5648e81a7cf90593494a/icon-twitter.svg"/></li>
            <li><img src="https://images.ctfassets.net/m8onsx4mm13s/StLA124Qs8nCQs8QAfEhs/2bdf4554099145c206fd35545dd68721/icon-youtube.svg"/></li>
            <li><img src="https://images.ctfassets.net/m8onsx4mm13s/4LXqNqHU1A4TwofkuQiyTG/bee6f9b17e0c1286dbe96912fb3e56fa/icon-facebook.svg"/></li>
            <li><img src="https://images.ctfassets.net/m8onsx4mm13s/4wAHtxp4Tw35DxLOA1jgcM/fcee8e7e0401e7dda1e7f0ad6b390249/icon-msg.svg"/></li>
          </ul>
        </div>
      </div>
    </div>
    
    <footer >
      <div className='footer-container'>
        <div className='bottom-max-width'>
          <div className='footer-flex'>
            
            <FooterMenu />
            
            <FooterLarge 
              title = 'SHOP'
              list1 =  'Les Paul Models'
              list2 =  'SG Models'
              list3 =  'ES Models'
              list4 =  'Basses'
              list5 =  'Designer Models'
              list6 =  'Gibson Custom Shop'
              list7 =  'Super Jumbo Models'
              list8 =  'Square Shoulder Models'
              list9 =  'Round Shoulder'
              list10 = 'Small Body Models'
              list11 = 'Songwriter Models'
              list12 = 'Accessories'
              list13 = 'Hardware'
              list14 = 'Merchandise ' 
              list15 = 'The Gibson Garage'
              list16 = 'Find a Dealer Near You'
              list17 = 'Online Dealers'  
            />
            <FooterLarge 
              title = 'SUPPORT' 
              list1 = 'Customer Service'
              list2 = 'Virtual Guitar Tech'
              list3 = 'Warranty Registration & Info'
              list4 = 'Repair and Restoration'
              list5 = 'Report Counterfeits'
              list6 = 'Serial Number FAQ'
              list7 = 'Online Store Policies & FAQ'
              list8 = 'Gibson Garage Store Policies'
              list9 = 'Gibson Guitar Specs (2015 - 2019)'
            />
            <FooterLarge 
              title = "OUR COMPANY "
              list1 =  'Leadership'
              list2 =  'Careers'
              list3 =  'Contact Us'
              list4 =  'News'
              list5 =  'Gibson TV'
              list6 =  'Gibson Foundation'
              list7 =  'Gibson Generation Group'
            />
            
            <div className='learn-container'>
              <h3 className="collapse-title footer-large-title">LEARN</h3>
              <a href="https://play.google.com/store/apps/details?id=com.zoundio.amped&hl=en_US&gl=US">
              <img className='app-icon' src="https://images.ctfassets.net/m8onsx4mm13s/rzFBLlavGQ6iEqUHUmttt/105b64a7a655391d2290173e92556e1b/google-play-badge.png"/>
              </a>
              <a href="https://apps.apple.com/us/app/gibson/id1116032929"><img className='app-icon' src="https://images.ctfassets.net/m8onsx4mm13s/5Y2Vb1Nap9gfEK6Aae0Frd/6c24a3511178fb49aec9412bae845d64/app-store-badge.png"/>
              </a>
            </div> 
          </div>
          <p className='support-small-text'>Customer Support (US & Canada): <a className='support-number'><u>1-800-4GIBSON</u></a></p>
        </div>
      </div>
      <div className='visit-brans-container footer-container'>
        <div className='bottom-max-width'>
          <div className='logo-flex'>
            <h3 className='visit-brands-title'>VISIT THE GIBSON BRANDS FAMILY</h3>
            <div className='logo-grid'>
              <img className='brand-family-logo gib' src="https://images.ctfassets.net/m8onsx4mm13s/7LvvcLDhK4OSfSTXHRAPis/44e373cd2ac320a2548c59ecbde9698f/logo-gibson-white.svg" />
              <img className='brand-family-logo epi'src="https://images.ctfassets.net/m8onsx4mm13s/2vuAzO488GYR7lW1ZPv2zN/955538c2817fee4d69087c37476785e1/logo-epiphone-white.svg" />
              <img className='brand-family-logo kra'src="https://images.ctfassets.net/m8onsx4mm13s/3wJBD5R9NsUGp9bUizkcqC/2192ddd81cec9f347768ec468333e3a0/logo-kramer-white.svg" />
              <img className='brand-family-logo ste'src="https://images.ctfassets.net/m8onsx4mm13s/52ZxsgyuuWjWD76SMpethr/7275ab9d0d5eeb4b0de3949d0d5c69e7/logo-steinberger-white.svg" />
              <img className='brand-family-logo krk'src="https://images.ctfassets.net/m8onsx4mm13s/i6ci5z3HECPtIJelzXlLF/2d2d28b5ba9d5d492bfd6a6363fe8a08/logo-krk-white.svg" />
              <img className='brand-family-logo mes'src="https://images.ctfassets.net/m8onsx4mm13s/2ARgLVx3fMLpkrpN2u3TJO/ebbc58f2d41d9775c939dd27b111dfac/logo-mesa-boogie-white.png" />
              <img className='brand-family-logo mae'src="https://images.ctfassets.net/m8onsx4mm13s/39WC3pEwPVyKBzoXJOMtX4/df902ad3e948b8fb93923190f5c67579/_Maestro_cursive_white__1_.png" />
            </div> 
            <div className='footer-text-flex'>   
            <p className='copyright-text'>Copyright 2021 Gibson Brands, Inc. All rights reserved.</p>
              <div className='footer-text-flex-sub'>
                <p className='footer-link-text'>Privacy Policy <span className='show-splitter'>|</span></p>
                <p className='footer-link-text'>Terms & Conditions <span className='show-splitter'>|</span></p>
                <p className='footer-link-text'>TradeMarks of Gibson Brands, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;
