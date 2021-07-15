import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Drawer, Dropdown, Icon, Nav, Navbar, Sidenav } from 'rsuite';
// import { useViewport } from '../../../context/ViewportContext';
// import logo from '../../../resources/Logo-dark.svg';
// import logo_testnet from '../../../resources/logo-testnet.svg';
import './header.css';
// import { useSetRecoilState } from 'recoil';
// import walletState from '../../../atom/wallet.atom';
// import { isLoggedIn, logoutWallet } from '../../../service';


export const Header = () => {
    const [sticky, setSticky] = useState(false);
    // const { isMobile } = useViewport()

    // if (isMobile) {
    // }
    return (
        <header className="site-header site-header__header-one ">
            <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container clearfix">
                    <div className="logo-box clearfix">
                        
                        <Link className="navbar-brand" to="/">
                            <img src="/images/icons/favicon.png" className="main-logo" width="128"alt="Awesome Image" />
                        </Link>
                        
                        <div className="header__social">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                        <button className="menu-toggler">
                            <span className="kipso-icon-menu"></span>
                        </button>
                    </div>
                    <div className="main-navigation">
                        <ul className=" navigation-box">
                            <li className="current">
                                <Link href="/"><a>Home</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/"><a>Home 01</a></Link></li>
                                    <li><Link href="/index-2"><a>Home 02</a></Link></li>
                                    <li><Link href="/index-3"><a>Home 03</a></Link></li>
                                    <li><a href="#">Header Versions</a>
                                        <ul className="sub-menu">
                                            <li><Link href="/"><a>Header 01</a></Link></li>
                                            <li><Link href="/index-2"><a>Header 02</a></Link></li>
                                            <li><Link href="/index-3"><a>Header 03</a></Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><Link href="/about"><a>About Page</a></Link></li>
                                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                    <li><Link href="/pricing"><a>Pricing Plans</a></Link></li>
                                    <li><Link href="/faq"><a>FAQ'S</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/courses">Courses</a>
                                <ul className="sub-menu">
                                    <li><Link href="/courses"><a>Courses</a></Link></li>
                                    <li><Link href="/course-details"><a>Courses Details</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/teachers"><a>Teachers</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/teachers"><a>Teachers</a></Link></li>
                                    <li><Link href="/teacher-details"><a>Teachers Details</a></Link></li>
                                    <li><Link href="/become-teacher"><a>Become Teacher</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/news"><a>News</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/news"><a>News Page</a></Link></li>
                                    <li><Link href="/news-details"><a>News Details</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/contact"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side-box">
                        <a className="header__search-btn search-popup__toggler search-toggle" href="#"><i
                            className="kipso-icon-magnifying-glass"></i>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="site-header__decor">
                <div className="site-header__decor-row">
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-1"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-2"></div>
                    </div>
                    <div className="site-header__decor-single">
                        <div className="site-header__decor-inner-3"></div>
                    </div>
                </div>
            </div>
        </header>

    );
}

export * from './HomeHeader';


