import React, { Component } from 'react';
import logo from'../assets/img/mlslogo.png';


const FooterComponent=()=>{
    return (

        <div class="footer2">
        <div class="footer2-sub">

            <div>
                <div class="footer-img">
                <img src={logo} alt="mls logo" />
                    </div>
                <div class="footer-share">
                    <div><a href="#"><i class="fa-brands fa-facebook-f"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-instagram"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-twitter"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-youtube"></i></a></div>
                    <div><a href="#"><i class="fa-brands fa-whatsapp"></i></a></div>
                </div>
            </div>

            <div class="footer2-sub-h">
                <div class="footer2-h">Company</div>
                <div><a href="#">About</a></div>
                <div><a href="#">Terms &amp; Conditions</a></div>
                <div><a href="#">Privacy Policy</a></div>
            </div>


            <div class="footer2-sub-h">
                <div class="footer2-h">Parent Resources</div>
                <div><a href="#">Initial Setup</a></div>
                <div><a href="#">FAQs</a></div>

            </div>


            <div class="footer2-sub-h">
                <div class="footer2-h">Other Resources</div>
                <div><a href="#">Blogs</a></div>
                <div><a href="#">Resources Center</a></div>
                <div><a href="#">Affiliates</a></div>
            </div>

        </div>


        <div class="footer-copyright">
            <div>Copyright 2023 By MLS Classes . All Rights</div>
        </div>
    </div>
    );
}
export default FooterComponent;