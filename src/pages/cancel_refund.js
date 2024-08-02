import React from 'react';
import "../assets/css/footer.css";
import FooterComponent from '../components/footer';
import NavbarPage from '../navbarComponent';
const CancellationPage = () => {
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
    <p class='content-head'>Cancellation &amp; Refund Policy</p>
    <div class='content-seprater'></div>
    <p class='updated-date'>Last updated on Oct 27th 2023</p>
            <p class='content-text'>No cancellations &amp; Refunds are entertained</p>
    </div>
                                 </div>
</div>
<FooterComponent/>
</>);
};

export default CancellationPage;
