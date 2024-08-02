import React from 'react';
import "../assets/css/footer.css";
import FooterComponent from '../components/footer';
import Navbar from "../components/topbar";
const ContactPage = () => {
    return(
    <>
    <Navbar/>
     <div class= 'compalinace-page'>
    <div class= 'header-conatiner'>
                <div class= 'merchant-logo'>
        <div class= 'logo-container'><div class= 'logo-text'>M</div></div>
    </div>
                                <p class= 'header-text'>MLS Classes</p>
</div>
    <div class='compalinace-content'>
                    <div class='content-container'>
<p class= 'content-head'>Contact us</p>
<div class= 'content-seprater'></div>
<p class= 'updated-date'>Last updated on Oct 27th 2023</p>
<p class= 'content-text'>You may contact us using the information below:</p>
<p class= 'content-text'>
Merchant Legal entity name: MLS Classes<br />
            Registered Address: first floor, 22, mahendra kirana store, dhakar colony
    Tonk
    RAJASTHAN
    304505<br />
                    Operational Address: 747/67 Arihant Villa Durgapura Jaipur
    Jaipur
    RAJASTHAN
    302018
    <br />
                    Telephone No: 9649549754<br />
                    E-Mail ID: ritik@mlsclasses.com
    </p>
</div>
                                                 </div>
</div>
<FooterComponent/>
</>);
};

export default ContactPage;
