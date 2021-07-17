import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <h2 className="footer-widget__title">Courses</h2>
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2><a href="course-details.html">Introduction Web Design</a></h2>
                                            <p>Mike Hardson</p>
                                        </li>
                                        <li>
                                            <h2><a href="course-details.html"> Learning MBA Management </a></h2>
                                            <p>Jessica Brown</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__link">
                                    <h2 className="footer-widget__title">Explore</h2>
                                    <div className="footer-widget__link-wrap">
                                        <ul className="list-unstyled footer-widget__link-list">
                                            <li><Link>About</Link></li>
                                            <li><Link>Overview</Link></li>
                                            <li><Link>Teachers</Link></li>
                                            <li><Link>Join Us</Link></li>
                                            <li><Link>Our News</Link></li>
                                        </ul>
                                        <ul className="list-unstyled footer-widget__link-list">
                                            <li><Link>Help </Link></li>
                                            <li><Link>Contact</Link></li>
                                            <li><Link>Register Now</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__gallery">
                                    <h2 className="footer-widget__title">Gallery</h2>
                                    <ul className="list-unstyled footer-widget__gallery-list">
                                        <li><Link><img src="/images/footer-1-1.png" alt="" /></Link></li>
                                        <li><Link><img src="/images/footer-1-2.png" alt="" /></Link></li>
                                        <li><Link><img src="/images/footer-1-3.png" alt="" /></Link></li>
                                        <li><Link><img src="/images/footer-1-4.png" alt="" /></Link></li>
                                        <li><Link><img src="/images/footer-1-5.png" alt="" /></Link></li>
                                        <li><Link><img src="/images/footer-1-6.png" alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__about">
                                    <h2 className="footer-widget__title">About</h2>
                                    <p className="footer-widget__text">Lorem ipsum dolor sit ametcon, sectetur
                                        adipiscing elit.
                                        Phasellus vehic sagittis euismod.</p>
                                    <div className="footer-widget__btn-block">
                                        <Link className="thm-btn">Contact</Link>
                                        <Link className="thm-btn">Purchase</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">&copy; Copyright 2020 by <Link>Layerdrops.com</Link></p>
                        <div className="site-footer__social">

                            <div onClick={scrollTop} className="scroll-to-target site-footer__scroll-top"><i
                                className="kipso-icon-top-arrow"></i></div>


                            <Link><i className="fab fa-twitter"></i></Link>
                            <Link><i className="fab fa-facebook-square"></i></Link>
                            <Link><i className="fab fa-pinterest-p"></i></Link>
                            <Link><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-popup">
                <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                <div className="search-popup__inner">
                    <form action="#" className="search-popup__form">
                        <input type="text" name="search" placeholder="Type here to Search...." />
                        <button type="submit"><i className="kipso-icon-magnifying-glass"></i></button>
                        <div className="cancel"><i className="fas fa-times-circle"></i></div>
                    </form>
                </div>
            </div>

        </div>
    );
}
export default Footer;