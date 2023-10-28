import React from 'react'

export default function TopBar() {
  return (
    <div className="header-top d-none d-sm-block">
    <div className="container">
       <div className="row align-items-center">
          <div className="col-lg-6 col-sm-8">
          <div className="top-header-deatils">
             <div className="header-offer d-flex align-items-center">
                <img src="assets/img/shape/mail.png" alt=""/>
               <p><a href="mailto:support@kdinfosystems.com">support@kdinfosystems.com</a></p>
              </div>
              <div className="header-offer d-flex align-items-center">
                <img src="assets/img/shape/phone-call.png" alt=""/>
               <p><a href="tel:+918169014375">+918169014375</a></p>
              </div>
          </div>
          </div>
          <div className="col-lg-6 col-sm-4">
             <div className="header-social d-flex align-items-center">
                <div className="header-social-item">
                   <a href="#"><i className="fa-brands fa-facebook"></i></a>
                   <a href="#"><i className="fa-brands fa-twitter"></i></a>
                   <a href="#"><i className="fa-brands fa-instagram"></i></a>
                   <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              
             </div>
          </div>
       </div>
    </div>
 </div>
   
  );
}
