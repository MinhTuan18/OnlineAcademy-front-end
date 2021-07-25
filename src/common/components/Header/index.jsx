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
    
    // const componentDidMount = () => {
    //     window.addEventListener('scroll', handleScroll);

    //     //Mobile Menu
    //     mobileMenu();
    // }

    // const componentWillUnmount = () => {
    //     window.removeEventListener('scroll', handleScroll);
    // }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        mobileMenu();
    });

    const handleScroll = () => {

        if (window.scrollY > 70) {
            setSticky(true);
        } else if (window.scrollY < 70) {
            setSticky(false);
        }

    }

    const mobileMenu = () => {
        //Mobile Menu Toggle
        const mainNavToggler = document.querySelector(".menu-toggler");
        const mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", () => {
            mainNav.style.display = ( (mainNav.style.display !== "block" ? "block" : "none" ) );
        });
    }
    return (
        <header className="site-header site-header__header-one ">
            <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${sticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container clearfix">
                    <div className="logo-box clearfix">
                        
                        <Link className="navbar-brand" to="/">
                            <img src="/images/icons/favicon.png" className="main-logo" width="128" alt="Awesome Logo" />
                        </Link>
                        
                        <div className="header__social">
                            <Link><i className="fab fa-twitter"></i></Link>
                            <Link><i className="fab fa-facebook-square"></i></Link>
                            <Link><i className="fab fa-pinterest-p"></i></Link>
                            <Link><i className="fab fa-instagram"></i></Link>
                        </div>
                        <button className="menu-toggler">
                            <span className="kipso-icon-menu"></span>
                        </button>
                    </div>
                    <div className="main-navigation">
                        <ul className="navigation-box">
                            <li className="current">
                                <Link to="/">Home</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/">Home 01</Link></li>
                                    <li><Link>Home 02</Link></li>
                                    <li><Link>Home 03</Link></li>
                                    <li><Link>Header Versions</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/">Header 01</Link></li>
                                            <li><Link>Header 02</Link></li>
                                            <li><Link>Header 03</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link>Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link>About Page</Link></li>
                                    <li><Link>Gallery</Link></li>
                                    <li><Link>Pricing Plans</Link></li>
                                    <li><Link>FAQ'S</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/courses">Courses</Link>
                                <ul className="sub-menu">
                                    <li><Link to="/courses">Courses</Link></li>
                                    <li><Link>Courses Details</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>Teachers</Link>
                                <ul className="sub-menu">
                                    <li><Link>Teachers</Link></li>
                                    <li><Link>Teachers Details</Link></li>
                                    <li><Link>Become Teacher</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>News</Link>
                                <ul className="sub-menu">
                                    <li><Link>News Page</Link></li>
                                    <li><Link>News Details</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-side-box">
                        <Link className="header__search-btn search-popup__toggler search-toggle"><i
                            className="kipso-icon-magnifying-glass"></i>
                        </Link>
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


