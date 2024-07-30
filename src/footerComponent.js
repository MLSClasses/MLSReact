import React from 'react';
// import './assets/css/footerStyles.css'
const FooterComponentPage=()=>{
return(
    <footer class="footer">
    <div class="container">
        <div class="column">
            <img></img>
            <h3> WE ARE REVOLUTIONARY<br/></h3>
                <span class="footer-heading-span">Black Box</span>
            <p>AI Shaping Tomorrow
                Today For Brighter Future</p>
        </div>
        <div class="column">
            <h3>Best AI</h3>
            <ul>
                <li><a href="#">ChatGPT</a></li>
                <li><a href="#">Mid Journey</a></li>
                <li><a href="#">Beautiful AI</a></li>
                <li><a href="#">Invideo AI</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Useful Link</h3>
            <ul>
                <li><a href="#">Deep Fake</a></li>
                <li><a href="#">Claude AI</a></li>
                <li><a href="#">AllinoneAI</a></li>
                <li><a href="#">Notion</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Study Abroad</h3>
            <ul>
                <li><a href="#">USA</a></li>
                <li><a href="#">UK</a></li>
                <li><a href="#">Canada</a></li>
                <li><a href="#">Australia</a></li>
            </ul>
        </div>
        <div class="column">
            <h3>Contact Us</h3>
            <p><i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Arabia Terra, Mars</p>
            <p><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;+12345678988</p>
            <p><i class="fas fa-envelope"></i>&nbsp;&nbsp;abc123@gmail.com</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-whatsapp-square"></i></a>
            </div>
        </div>
    </div>

    <hr/>

    <div class="copyright">
        <p>&copy; 2024 Your Company. All rights reserved || Developed by <span>&#10084;</span> CodeWithLoremHacker</p>
    </div>
</footer>
)
}
export default FooterComponentPage;