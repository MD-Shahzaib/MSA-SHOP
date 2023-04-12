import React from 'react'
// ICONS.
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCrown } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaPrint } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { HiPhone } from 'react-icons/hi';

const Footer = () => {
    // Get Year.
    const date = new Date();
    const year = date.getFullYear()

    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: "#d3d8db" }}>
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="https://www.facebook.com" className="me-4 link-secondary">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" className="me-4 link-secondary">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com" className="me-4 link-secondary">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" className="me-4 link-secondary">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" className="me-4 link-secondary">
                            <FaGithub />
                        </a>

                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section>
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <FaCrown /> Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Angular</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">React</a>
                                </p>
                                <p>
                                    <a href="/!" className="text-reset text-decoration-none">Vue</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Laravel</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Pricing</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Settings</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Orders</a>
                                </p>
                                <p>
                                    <a href="/" className="text-reset text-decoration-none">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><FaHome /> New York, NY 10012, US</p>
                                <p><HiMail /> info@example.com</p>
                                <p><HiPhone /> + 01 234 567 88</p>
                                <p><FaPrint /> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4 border-top">
                    © {year} Muhammad Shahzaib, Inc. All rights reserved.
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer;