import React, { Component } from 'react';
import logo from '../assets/img/mlslogo.png';
import '../assets/css/footer.css'

const FooterComponent = () => {
    return (
        <footer className="footer p-lg-4">
            <div data-global-resource-path="cms-project/cms-theme/templates/partials/footer.html">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 px-xl-5 py-4 mb-md-4 mb-lg-1">
                            <span
                                id="hs_cos_wrapper_site_logo_hs_logo_widget"
                                className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo"
                                data-hs-cos-general-type="widget"
                                data-hs-cos-type="logo">
                                <a href="https://www.98thpercentile.com/"
                                    id="hs-link-site_logo_hs_logo_widget">
                                    <img src={logo} className="hs-image-widget " />
                                </a>
                            </span>
                            <div className="footer-social-tray">
                                <a href="https://www.facebook.com/98thpercentile2" className="footer-social-link">
                                    <img src="https://www.98thpercentile.com/hubfs/raw_assets/public/cms-project/cms-theme/images/logo-facebook.png" alt="facebook" className="footer-social-icon" />
                                </a>
                                <a href="https://www.instagram.com/98thpercentile/" className="footer-social-link">
                                    <img src="https://www.98thpercentile.com/hubfs/raw_assets/public/cms-project/cms-theme/images/logo-instagram.png" alt="instagram" className="footer-social-icon" />
                                </a>
                                <a href="https://www.linkedin.com/company/98thpercentile/" className="footer-social-link">
                                    <img src="https://www.98thpercentile.com/hubfs/raw_assets/public/cms-project/cms-theme/images/logo-linkedin.png" alt="linkedin" className="footer-social-icon" />
                                </a>
                                <a href="https://twitter.com/98thpercentile2" className="footer-social-link">
                                    <img src="https://www.98thpercentile.com/hubfs/raw_assets/public/cms-project/cms-theme/images/logo-twitter.png" alt="twitter" className="footer-social-icon" />
                                </a>
                                <a href="https://www.youtube.com/channel/UCEF_d2KaOHCZC85_87t52Qw" className="footer-social-link">
                                    <img src="https://www.98thpercentile.com/hubfs/raw_assets/public/cms-project/cms-theme/images/logo-youtube.png" alt="youtube" className="footer-social-icon" />
                                </a>
                                <a href="https://in.pinterest.com/98thpercentile/" className="footer-social-link">
                                    <img src="https://www.98thpercentile.com/hubfs/raw_assets/public/cms-project/cms-theme/images/logo-pinterest.png" alt="pinterest" className="footer-social-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="row col-lg-8">
                            <div className="col-md-3">
                                <p className="footer-menu-title">Company</p>
                                <ul className="footer-menu-list">
                                    <p className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/about-us/">About</a>
                                    </p>
                                    <p className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/terms-conditions/">Terms &amp; Conditions</a>
                                    </p>
                                    <p className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/privacy-policy/">Privacy Policy</a>
                                    </p>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="footer-menu-title">Reach Us</p>
                                <ul className="footer-menu-list">
                                    <p className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/learning-resource-center/#worksheets">admission@mlsclasses.com</a>
                                    </p>
                                    <p className="footer-menu-item">
                                        <a href="https://www.youtube.com/c/98thpercentile">support@mlsclasses.com</a>
                                    </p>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="footer-menu-title">Parent Resources</p>
                                <ul className="footer-menu-list">
                                    <p className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/microsoft-teams-setup-tutorial/">Initial Setup</a>
                                    </p>
                                    <p className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/placement-test-instructions">FAQs</a>
                                    </p>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="footer-menu-title">Exams</p>
                                <ul className="footer-menu-list">
                                    <li className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/blog/act-get-ready-for-american-college-test/">Blogs</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/blog/cogat-test/">Resource Center</a>
                                    </li>
                                    <li className="footer-menu-item">
                                        <a href="https://www.98thpercentile.com/blog/cogat-test/">Affiliates</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
}
export default FooterComponent;