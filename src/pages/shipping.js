import React from 'react';
import "../assets/css/footer.css";
import FooterComponent from '../components/footer';
import NavbarPage from '../navbarComponent';

const Shipping = () => {
    return(
    <>
    <NavbarPage/>
    <div class= 'compalinace-page'>
            <div class= 'header-conatiner'>
                        <div class= 'merchant-logo'>
                <div class= 'logo-container'><div class= 'logo-text'>M</div></div>
            </div>
                                        <p class= 'header-text'>MLS Classes</p>
        </div>
            <div class='compalinace-content'>
                                                                <div class='content-container'>
    <p class='content-head'>Shipping &amp; Delivery Policy</p>
    <div class='content-seprater'></div>
    <p class='updated-date'>Last updated on Oct 27th 2023</p>

    
            <p class='content-text'>Shipping is not applicable for business.</p>
    </div>
                     </div>
</div>
<FooterComponent/>
</>);
};

export default Shipping;
