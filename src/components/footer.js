import React from "react";
import imgMail from "../assets/img/em1.webp";
import "../assets/css/footer.css";
import { logo } from "../pages/mls_constants";
import { Col, Row } from "react-bootstrap";
const FooterComponent = () => {
  return (
    <div className="footer2">
      <div className="footer2-sub">
        <div>
          <div className="footer-img">
            <a href="/">
              <img src={logo} alt="mls logo" />
            </a>
          </div>
          <div className="footer-share">
            <div className="scl">
              <a
                href="https://www.facebook.com/mlsclasses?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-brands fa-facebook-f"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "1em",
                  }}
                ></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.instagram.com/mlsclasses_usa?igsh=djFpaHZhZm1zdHBl&utm_source=qr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.linkedin.com/company/online-tutor-usa/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://www.youtube.com/@mlsclasses8293?si=KBojcjPosvKjfwjH"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="scl">
              <a
                href="https://wa.me/message/XMS5KMWBGQZLG1"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fa-brands fa-whatsapp"
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "1em",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer2-sub-h">
          <div className="footer2-h">Company</div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="shipping">Shipping</a>
          </div>
        </div>
        <div className="footer2-sub-h">
          <div className="footer2-h">Reach us</div>
          <div className="footer-mail">
            {/* <img src={imgMail} alt="email" width="10%" className="MailImg" /> &nbsp; */}
            <a href="mailto:admission@mlsclasses.com">
              admission@mlsclasses.com
            </a>
          </div>
          <div className="footer-mail">
            {/* <img src={imgMail} alt="email" width="10%" className="MailImg" /> &nbsp; */}
            <a href="mailto:support@mlsclasses.com">support@mlsclasses.com</a>
          </div>
          <div style={{ marginTop: "10px", marginLeft: "1px" }}>
            <a href="/contact">Contact us</a>
          </div>
        </div>

        <div className="footer2-sub-h">
          <div className="footer2-h">Other Resources</div>
          <div>
            <a href="#">Blogs</a>
          </div>
          <div>
            <a href="#">Resources Center</a>
          </div>
          <div>
            <a href="#">Affiliates</a>
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

      <div className="footer-bottom">
        <Row>
          <Col xs={12} md={6} sm={12}>
            <ul className="footer-menu">
              <li>
                <a href="/terms">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/cancellation_refund">Cancellation & Refund</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} sm={12}>
            {/* <div className="footer-copyright">Copyright 2023 By MLS Classes . All Rights</div> */}
            <div class="footer-copyright">
              © 2024{" "}
              <a href="https://www.mlsclasses.com/" target="_blank">
                MLS Classes: Live 1:1 Online Classes for Kids (Grade 2-12) | MLS
                Classes
              </a>
              . All Rights Reserved.
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default FooterComponent;
