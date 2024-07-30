import React from "react";
import imgMail from '../assets/img/em1.webp'
import '../assets/css/footer.css'
import { logo } from "../pages/mls_constants";
const FooterComponent = () => {
  return (
    <div className="footer2">
      <div className="footer2-sub">
        <div>
          <div className="footer-img">
            <a href='/' ><img src={logo} alt="mls logo" /></a>
          </div>
          <div className="footer-share">
            <div className="scl">
              <a
                href="https://www.facebook.com/mlsclasses?mibextid=ZbWKwL"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f" style={{ alignItems: "center", justifyContent: "center", minWidth: "1em" }}></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.instagram.com/mlsclasses_usa?igsh=djFpaHZhZm1zdHBl&utm_source=qr"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.linkedin.com/company/online-tutor-usa/"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://twitter.com/sat_act_ap?t=jv42tLOy1RdXU4hNZ5zOZA&s=08"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.youtube.com/@mlsclasses8293?si=KBojcjPosvKjfwjH"
                target="_blank" rel="noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="scl">
              <a href="https://wa.me/message/XMS5KMWBGQZLG1" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp" style={{ alignItems: "center", justifyContent: "center", minWidth: "1em" }}></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer2-sub-h">
          <div className="footer2-h">Company</div>
          <div >
            <a href="#">About</a>
          </div>
          <div >
            <a href="shipping">Shipping</a>
          </div>
          <div >
            <a href="/terms">Terms &amp; Conditions</a>
          </div>
          <div >
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div >
            <a href="/cancellation_refund">Cancellation & Refund</a>
          </div>
        </div>
        <div className="footer2-sub-h">
          <div className="footer2-h">Reach us</div>
          <div className="footer-mail">
            {/* <img src={imgMail} alt="email" width="10%" className="MailImg" /> &nbsp; */}
            <a href="mailto:admission@mlsclasses.com">admission@mlsclasses.com</a>

          </div>
          <div className="footer-mail" >
            {/* <img src={imgMail} alt="email" width="10%" className="MailImg" /> &nbsp; */}
            <a href="mailto:support@mlsclasses.com" >support@mlsclasses.com</a>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "1px" }}>
            <a href="/contact">Contact us</a>
          </div>

        </div>


        {/* <div className="footer2-sub-h">
          <div className="footer2-h">Parent Resources</div>
          <div >
            <a href="#">Initial Setup</a>
          </div>
          <div >
            <a href="#accord-home">FAQs</a>
          </div>
        </div>

        <div className="footer2-sub-h">
          <div className="footer2-h">Other Resources</div>
          <div >
            <a href="#">Blogs</a>
          </div>
          <div >
            <a href="#">Resources Center</a>
          </div>
          <div >
            <a href="#">Affiliates</a>
          </div>
        </div> */}
      </div>

      <div className="footer-copyright">
        <div>Copyright 2023 By MLS Classes . All Rights</div>
      </div>
    </div>
  );
};
export default FooterComponent;
