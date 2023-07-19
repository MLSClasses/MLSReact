import React, { Component } from 'react';
import first_img from '../assets/img/temp4.png';
import FooterComponent from '../components/footer';
import NavBarComponent from '../components/navbar';
const ContactUs = (props) => {
    return (
        <div className="flex-wrapper">
            <NavBarComponent />
            <div class="f-template-contact">
                <img src={first_img} alt="first Template" />
            </div>
            <div class="contact">
                <div class="contact-sub">
                    <div class="contact-h">We're here to help you!</div>
                    <div class="contact-sub-h">Please share the required details below related to your inquiry.</div>
                    <div class="contact-input">
                        <div class="contact-sub-input">
                            <label for="">First Name<span class="star-cl-red">*</span></label>
                            <input type="text" name="" id="" placeholder="First Name" />
                        </div>
                        <div class="contact-sub-input">
                            <label for="">Last Name<span class="star-cl-red">*</span></label>
                            <input type="text" name="" id="" placeholder="Last Name" />
                        </div>
                        <div class="contact-sub-input">
                            <label for="">E-mail<span class="star-cl-red">*</span></label>
                            <input type="text" name="" id="" placeholder="Last Name" />
                        </div>
                        <div class="contact-sub-input">
                            <label for="">Phone Number<span class="star-cl-red">*</span></label>
                            <input type="text" name="" id="" placeholder="Last Name" />
                        </div>
                        <div class="contact-sub-input">
                            <label for="">Program</label>
                            <input type="text" name="" id="" placeholder="Last Name" />
                        </div>
                        <div class="contact-sub-input">
                            <label for="">TimeZone</label>
                            <select name="" id="">
                                <option value="" selected>Select TimeZone</option>
                                <option value="1">Asia/Kolkata</option>
                            </select>
                        </div>
                        <div class="contact-sub-input">
                            <label for="">Message</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter Message"></textarea>
                        </div>
                    </div>
                    <div class="contact-btn"><button>Submit</button></div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}
export default ContactUs;