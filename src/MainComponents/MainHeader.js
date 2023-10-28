import React from 'react'

export default function MainHeader() {
  return (
    <div className="main-header">
    <div className="custom-container">
       <div id="header-sticky"  className="header-bg-4">
          <div className="row align-items-center">
             <div className="col-xl-3 col-lg-6 col-sm-5 col-6">
                <div className="tplogo__area">
                   <a href="index.php">
                      <img src="assets/img/logo/logo-pink.svg" alt="logo"/>
                   </a>
                </div>
             </div>
             <div className="col-xl-7 col-lg-6  d-none d-xl-block">
                <div className="tpmenu__area main-mega-menu">
                   <nav className="tp-main-menu-content">
                      <ul>
                         <li>
                            <a href="index.php">Home</a>
                            
                         </li>
                         <li><a href="about-us.php">About Us</a></li>
                         <li className="header-services has-dropdown has-mega-menu">
                            <a href="#">Services</a>
                            <div className="tp-mega-menu tp-submenu submenu">
                               <div className="row">
                                  <div className="col-12">
                                     <div className="tp-menu-banner">
                                       
                                        <ul>
                                           <li>
                                              <a href="landing-page.php">
                                                 <span> <img src="assets/img/home/Landing Page.png" alt=""/> </span>
                                                 Landing Page
                                              </a>
                                           </li>
                                           <li>
                                              <a href="static-website.php">
                                                 <span> <img src="assets/img/home/Static Website.png" alt=""/> </span>
                                                 Static Website
                                              </a>
                                           </li>
                                           <li>
                                              <a href="wordpress-website.php">
                                                 <span> <img src="assets/img/home/wordpress.png" alt=""/> </span>
                                                 Wordpress Website
                                              </a>
                                           </li>
                                           <li>
                                              <a href="Ecommerce.php">
                                                 <span> <img src="assets/img/home/ecommerce.png" alt=""/> </span>
                                                 Ecommerce
                                              </a>
                                           </li>
                                           <li>
                                              <a href="email-template-signature.php">
                                                 <span> <img src="assets/img/home/email template.png" alt=""/> </span>
                                                 Email Template/Signature
                                              </a>
                                           </li>
                                           
                                           <li>
                                              <a href="api-integration.php">
                                                 <span> <img src="assets/img/home/api integration.png" alt=""/> </span>
                                                 API Integration
                                              </a>
                                           </li>
                                        </ul>
                                     </div>
                                  </div>
                                
                               </div>
                            </div> 
                         </li>
                         <li>
                            <a href="#">Pricing</a>
                          
                         </li>
                         <li className="has-dropdown">
                            <a href="#">Partner Programs</a>
                            <ul className="tp-submenu submenu">
                               <li><a href="become-an-affiliate.php">Become an Affiliate </a></li>
                               
                            </ul>
                         </li>
                         <li>
                            <a href="#">Blogs</a>
                          
                         </li>
                        
                      </ul>
                   </nav>
                </div>
             </div>
             <div className="col-xl-2 col-lg-6 col-sm-7 col-6">
                <div className="header-btn header-btn-4 text-end">
                   <a className="blue-btn d-none d-xl-block" href="contact-us.php">Contact Us</a>
                   <div className="offcanvas-btn d-xl-none ml-20">
                      <button className="offcanvas-open-btn"><i className="fa-solid fa-bars"></i></button>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
   
  );
}
